import styles from "./page.module.css";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.label}>Terms of Service</p>
        <h1 className={styles.title}>利用規約</h1>
        <p className={styles.description}>
          本利用規約は、当サイトおよび当サービスをご利用いただく際の条件を定めるものです。
          ご利用前に内容をご確認ください。
        </p>
      </section>

      <section className={styles.card}>
        <div className={styles.section}>
          <h2>第1条　本規約について</h2>
          <p>
            本規約は、当サイトが提供するサービスの利用条件を定めるものです。
            ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。
          </p>
        </div>

        <div className={styles.section}>
          <h2>第2条　サービス内容</h2>
          <p>
            当サイトは、Webサイト制作、コンテンツ制作、情報提供、その他関連するサービスを提供します。
            サービス内容は、必要に応じて変更・追加・停止される場合があります。
          </p>
        </div>

        <div className={styles.section}>
          <h2>第3条　禁止事項</h2>
          <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>

          <ul>
            <li>法令または公序良俗に反する行為</li>
            <li>他者の権利、利益、名誉、信用を侵害する行為</li>
            <li>虚偽の情報を送信または登録する行為</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>不正アクセス、またはそれに類する行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>第4条　著作権・知的財産権</h2>
          <p>
            当サイトに掲載されている文章、画像、デザイン、ロゴ、プログラム、その他のコンテンツに関する
            著作権および知的財産権は、当サイトまたは正当な権利者に帰属します。
            無断での転載、複製、改変、配布を禁止します。
          </p>
        </div>

        <div className={styles.section}>
          <h2>第5条　料金・支払い</h2>
          <p>
            有料サービスを利用する場合、ユーザーは当サイトが定める料金を指定された方法で支払うものとします。
            支払い後のキャンセル、返金については、個別の契約内容または案内に従うものとします。
          </p>
        </div>

        <div className={styles.section}>
          <h2>第6条　免責事項</h2>
          <p>
            当サイトは、本サービスの内容、正確性、安全性、有用性について、完全性を保証するものではありません。
            本サービスの利用により発生した損害について、当サイトに故意または重大な過失がある場合を除き、
            一切の責任を負いません。
          </p>
        </div>

        <div className={styles.section}>
          <h2>第7条　サービスの変更・停止</h2>
          <p>
            当サイトは、必要と判断した場合、事前の通知なくサービス内容を変更、停止、または終了することがあります。
            これによりユーザーに損害が生じた場合でも、当サイトは責任を負わないものとします。
          </p>
        </div>

        <div className={styles.section}>
          <h2>第8条　個人情報の取り扱い</h2>
          <p>
            当サイトは、ユーザーの個人情報を適切に管理し、プライバシーポリシーに基づいて取り扱います。
          </p>
        </div>

        <div className={styles.section}>
          <h2>第9条　規約の変更</h2>
          <p>
            当サイトは、必要に応じて本規約を変更できるものとします。
            変更後の規約は、当サイト上に掲載された時点で効力を生じるものとします。
          </p>
        </div>

        <div className={styles.section}>
          <h2>第10条　準拠法・管轄</h2>
          <p>
            本規約は日本法に準拠するものとします。
            本サービスに関して紛争が生じた場合、当サイト運営者の所在地を管轄する裁判所を
            第一審の専属的合意管轄裁判所とします。
          </p>
        </div>

        <div className={styles.footer}>
          <p>制定日：2026年5月30日</p>
          <p>運営者：TechnologyLand & AI</p>
        </div>
      </section>
    </main>
  );
}