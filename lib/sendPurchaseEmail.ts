import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendPurchaseEmailParams = {
  email: string;
  productName: string;
  quantity: number;
  amountTotal: number;
};

export async function sendPurchaseEmail({
  email,
  productName,
  quantity,
  amountTotal,
}: SendPurchaseEmailParams) {
  await resend.emails.send({
    from: "Shokujiba <onboarding@resend.dev>",
    to: email,
    subject: "ご購入ありがとうございます",
    html: `
      <div style="font-family: sans-serif; line-height: 1.8;">
        <h1>ご購入ありがとうございます</h1>
        <p>Shokujibaの商品をご購入いただき、ありがとうございます。</p>

        <h2>ご注文内容</h2>
        <p>商品名：${productName}</p>
        <p>数量：${quantity}</p>
        <p>合計金額：¥${amountTotal.toLocaleString()}</p>

        <p>商品発送・ご案内までしばらくお待ちください。</p>
      </div>
    `,
  });
}