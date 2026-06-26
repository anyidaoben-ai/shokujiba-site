import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    label: "Food Experience",
    title: "食の体験設計",
    description:
      "食材、飲食、物販、地域体験をひとつの導線で設計し、訪れる理由と買う理由を同時につくります。",
    href: "/Dispense",
  },
  {
    label: "Place Branding",
    title: "場のブランド開発",
    description:
      "Paradise、Jungle Village、Tripなどの世界観を使い、施設・地域・商品に記憶される物語を持たせます。",
    href: "/Paradise",
  },
  {
    label: "Commerce",
    title: "会員・物販導線",
    description:
      "Mastercard、Goods、限定商品を通じて、体験後も関係が続く収益導線を構築します。",
    href: "/Goods",
  },
];

const strengths = [
  "企画、世界観、販売導線を一気通貫で設計",
  "食・観光・物販を横断したブランド体験を構築",
  "小さく始めて、施設・商品・会員制度へ拡張可能",
  "写真、コピー、ページ構成までデジタル実装に落とし込み",
];

const numbers = [
  { value: "3", label: "主要事業領域" },
  { value: "6+", label: "展開可能な体験カテゴリ" },
  { value: "24h", label: "Webでの受付導線" },
];

const cases = [
  {
    category: "Food",
    title: "食材体験を入口にした購買導線",
    text: "果物、野菜、魚、肉、飲料をただ並べるのではなく、選ぶ楽しさと到着後の体験まで設計します。",
    image: "/images/shokujiba-receive-energy.jpg",
    href: "/Dispense",
  },
  {
    category: "Resort",
    title: "滞在価値を高める楽園コンセプト",
    text: "温泉、ホテル、レストラン、遊び場を一つの世界として束ね、訪問前から期待値を育てます。",
    image: "/images/current-paradise.JPG",
    href: "/Paradise",
  },
  {
    category: "Retail",
    title: "持ち帰れるブランド資産",
    text: "アパレル、財布、装飾品、会員カードを通じて、体験を日常に持ち帰れる商品へ変えます。",
    image: "/images/goods/paradise-wallet.jpg",
    href: "/Goods",
  },
];

const flow = [
  {
    step: "01",
    title: "構想を整理",
    text: "事業の目的、ターゲット、既存資産、収益化ポイントをヒアリングします。",
  },
  {
    step: "02",
    title: "体験を設計",
    text: "食、場所、商品、会員導線をひとつのブランド体験として組み立てます。",
  },
  {
    step: "03",
    title: "公開して育てる",
    text: "Webサイト、商品ページ、問い合わせ導線を整え、反応を見ながら改善します。",
  },
];

const company = [
  { term: "会社名", value: "株式会社食事場" },
  { term: "ブランド", value: "Shokujiba" },
  { term: "事業内容", value: "食体験企画、観光・施設ブランディング、物販・会員導線設計" },
  { term: "お問い合わせ", value: "shokujibamaster@gmail.com" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="page-title">
          <Image
            src="/images/dining.png"
            alt="Shokujibaが提案する食体験のイメージ"
            fill
            sizes="100vw"
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <p className={styles.kicker}>Corporate Site</p>
            <h1 id="page-title">食から、場の価値をつくる。</h1>
            <p className={styles.heroLead}>
              Shokujibaは、食材・飲食・観光・物販をひとつの体験に編み上げるブランド開発会社です。
              地域、施設、商品が持つ魅力を、訪れたくなる導線と買いたくなる仕組みに変えます。
            </p>
            <div className={styles.heroActions} aria-label="主要導線">
              <a href="mailto:shokujibamaster@gmail.com" className={styles.primaryAction}>
                事業相談をする
              </a>
              <Link href="#services" className={styles.secondaryAction}>
                事業を見る
              </Link>
            </div>
          </div>
          <div className={styles.heroMetrics} aria-label="Shokujibaの特徴">
            {numbers.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.statementSection} aria-labelledby="statement-title">
          <p className={styles.kickerDark}>Mission</p>
          <h2 id="statement-title">
            良い食事は、良い場所の記憶になる。
            <br />
            私たちはその記憶を、事業として育てます。
          </h2>
          <p>
            食べる、歩く、泊まる、買う。ばらばらに見える行動を、ひとつの物語として設計することで、
            施設や地域の価値はもっと伝わりやすくなります。Shokujibaは企画とWeb実装の両側から、
            その体験づくりを支えます。
          </p>
        </section>

        <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
          <div className={styles.sectionHead}>
            <p>Services</p>
            <h2 id="services-title">事業領域</h2>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <Link href={service.href} className={styles.serviceCard} key={service.title}>
                <span>{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.valueSection} aria-labelledby="value-title">
          <div className={styles.valueVisual}>
            <Image
              src="/images/restoran.PNG"
              alt="食事場のレストラン体験"
              width={780}
              height={620}
              className={styles.valueImage}
            />
          </div>
          <div className={styles.valueText}>
            <p className={styles.kickerDark}>What We Do</p>
            <h2 id="value-title">コンセプトで終わらせず、売れる導線までつくる。</h2>
            <p>
              ブランドの世界観は、見た目だけでは事業になりません。Shokujibaは体験前の期待、
              現地での回遊、体験後の購入や再訪までを設計し、会社サイトとして信頼される情報に落とし込みます。
            </p>
            <ul className={styles.strengthList}>
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.caseSection} aria-labelledby="case-title">
          <div className={styles.sectionHead}>
            <p>Projects</p>
            <h2 id="case-title">展開中のブランド体験</h2>
          </div>
          <div className={styles.caseGrid}>
            {cases.map((item) => (
              <Link href={item.href} className={styles.caseCard} key={item.title}>
                <Image
                  src={item.image}
                  alt={`${item.title}のイメージ`}
                  width={720}
                  height={520}
                  className={styles.caseImage}
                />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.flowSection} aria-labelledby="flow-title">
          <div className={styles.sectionHead}>
            <p>Process</p>
            <h2 id="flow-title">相談から公開まで</h2>
          </div>
          <div className={styles.flowGrid}>
            {flow.map((item) => (
              <article className={styles.flowCard} key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.companySection} aria-labelledby="company-title">
          <div>
            <p className={styles.kickerDark}>Company</p>
            <h2 id="company-title">会社概要</h2>
          </div>
          <dl className={styles.companyList}>
            {company.map((item) => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.contactSection} aria-labelledby="contact-title">
          <div>
            <p>Contact</p>
            <h2 id="contact-title">食・観光・物販の企画を、会社の事業に変えたい方へ。</h2>
          </div>
          <a href="mailto:shokujibamaster@gmail.com">お問い合わせ</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
