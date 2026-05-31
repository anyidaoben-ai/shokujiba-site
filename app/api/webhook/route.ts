import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sendPurchaseEmail } from "@/lib/sendPurchaseEmail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "stripe-signature がありません" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Webhook署名エラー:", error);

    return NextResponse.json(
      { error: "Webhook署名の確認に失敗しました" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email;
    const amountTotal = session.amount_total ?? 0;

    const productName = session.metadata?.productName ?? "商品";
    const quantity = Number(session.metadata?.quantity ?? 1);

    if (!customerEmail) {
      return NextResponse.json(
        { error: "購入者のメールアドレスがありません" },
        { status: 400 }
      );
    }

    await sendPurchaseEmail({
      email: customerEmail,
      productName,
      quantity,
      amountTotal,
    });

    console.log("購入完了メールを送信しました:", customerEmail);
  }

  return NextResponse.json({ received: true });
}