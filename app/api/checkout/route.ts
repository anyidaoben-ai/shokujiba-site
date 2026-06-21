import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductById } from "@/lib/products";

export async function POST(request: Request) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: "STRIPE_SECRET_KEY is not set" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecretKey);

    const body = await request.json();

    const cartItems = body.cartItems as {
      id: string;
      size?: string;
      quantity: number;
    }[];

    const returnPath = body.returnPath || "/Goods";

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { error: "カートが空です" },
        { status: 400 }
      );
    }

    const maxUnitAmount = 50000000;

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      cartItems.flatMap((item) => {
        const product = getProductById(item.id);

        if (!product) {
          throw new Error(`商品が見つかりません: ${item.id}`);
        }

        if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
          throw new Error(`数量が正しくありません: ${item.id}`);
        }

        const productName = item.size ? `${product.name} / Size ${item.size}` : product.name;

        if (product.price <= maxUnitAmount) {
          return [
            {
              price_data: {
                currency: "jpy",
                product_data: {
                  name: productName,
                },
                unit_amount: product.price,
              },
              quantity: item.quantity,
            },
          ];
        }

        const chunks: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

        for (let quantityIndex = 0; quantityIndex < item.quantity; quantityIndex += 1) {
          let remainingAmount = product.price;
          let part = 1;

          while (remainingAmount > 0) {
            const unitAmount = Math.min(remainingAmount, maxUnitAmount);
            const needsPartName = product.price > maxUnitAmount;

            chunks.push({
              price_data: {
                currency: "jpy",
                product_data: {
                  name: needsPartName ? `${productName} ${part}` : productName,
                },
                unit_amount: unitAmount,
              },
              quantity: 1,
            });

            remainingAmount -= unitAmount;
            part += 1;
          }
        }

        return chunks;
      });

    const orderSummary = cartItems
      .map((item) => {
        const product = getProductById(item.id);
        const size = item.size ? ` / Size ${item.size}` : "";

        return product ? `${product.name}${size} x ${item.quantity}` : "";
      })
      .filter(Boolean)
      .join(", ");

    const totalQuantity = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      metadata: {
        productName: orderSummary || "商品",
        quantity: String(totalQuantity),
      },
      success_url: `${siteUrl}${returnPath}?success=true`,
      cancel_url: `${siteUrl}${returnPath}?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);

    return NextResponse.json(
      { error: "決済ページを作成できませんでした" },
      { status: 500 }
    );
  }
}
