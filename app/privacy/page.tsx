import styles from "./page.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.label}>Privacy Policy</p>
        <h1 className={styles.title}>プライバシーポリシー</h1>
        <p className={styles.description}>
          当サイトは、お客様の個人情報を適切に取り扱い、保護することを重要な責任と考えています。
        </p>
      </section>

      <section className={styles.card}>
        <div className={styles.section}>
          <h2>個人情報の取得について</h2>
          <p>
            当サイトでは、お問い合わせやサービスのご利用に際して、氏名、メールアドレス、
            その他必要な情報を取得する場合があります。
          </p>
        </div>

        <div className={styles.section}>
          <h2>個人情報の利用目的</h2>
          <p>
            取得した個人情報は、お問い合わせへの対応、サービス提供、連絡、品質向上のために利用します。
          </p>
        </div>

        <div className={styles.section}>
          <h2>個人情報の第三者提供について</h2>
          <p>
            法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
          </p>
        </div>

        <div className={styles.section}>
          <h2>個人情報の管理について</h2>
          <p>
            当サイトは、個人情報の漏えい、紛失、改ざん、不正アクセスを防止するため、
            適切な安全管理措置を講じます。
          </p>
        </div>

        <div className={styles.section}>
          <h2>プライバシーポリシーの変更</h2>
          <p>
            本ポリシーの内容は、必要に応じて変更されることがあります。
            変更後の内容は、当サイトに掲載された時点で有効となります。
          </p>
        </div>

        <div className={styles.footer}>
          <p>制定日：2026年5月30日</p>
          <p>運営者：株式会社食事場</p>
        </div>
      </section>
    </main>
  );
}