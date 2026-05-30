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
      quantity: number;
    }[];

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json(
        { error: "カートが空です" },
        { status: 400 }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      cartItems.map((item) => {
        const product = getProductById(item.id);

        if (!product) {
          throw new Error(`商品が見つかりません: ${item.id}`);
        }

        return {
          price_data: {
            currency: "jpy",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: item.quantity,
        };
      });

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/Dispense`,
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