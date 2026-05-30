import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    number: "01",
    title: "AI Web Production",
    jp: "AI Webサイト制作",
    text: "ChatGPT・Claudeを活用し、企業サイト、店舗サイト、LP、ブランドサイトを高速で制作します。",
  },
  {
    number: "02",
    title: "AI Brand Design",
    jp: "AIブランド設計",
    text: "事業の世界観、言葉、見せ方、構成を整理し、ブランドとして伝わる形にします。",
  },
  {
    number: "03",
    title: "AI Visual Creation",
    jp: "AI画像生成",
    text: "ロゴ、アイコン、キービジュアル、Web用画像など、ブランドに合うビジュアルを制作します。",
  },
  {
    number: "04",
    title: "AI Movie Creation",
    jp: "AI動画制作・動画編集",
    text: "映像表現、広告映像、コンセプトムービー、SNS動画まで、AIを活用して制作します。",
  },
];

const strengths = [
  "低価格で始められる",
  "制作スピードが速い",
  "Webと映像を一体化できる",
  "世界観まで設計できる",
  "Next.jsで現代的に制作",
  "Vercel公開まで対応",
];

const flow = [
  "相談・ヒアリング",
  "AIで構成と文章を作成",
  "ブランド方向を設計",
  "Webサイト・画像・動画を制作",
  "確認・修正",
  "公開・納品",
];

export default function TechnologyLandAIPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlowOne} />
        <div className={styles.heroGlowTwo} />

        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            TechnologyLand<span>&AI</span>
          </Link>

          <div className={styles.navLinks}>
            <a href="#services">Service</a>
            <a href="#vision">Vision</a>
            <a href="#flow">Flow</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className={styles.heroInner}>
          <p className={styles.badge}>AI CREATIVE COMPANY</p>

          <h1 className={styles.title}>
            アイデアを、
            <br />
            神速で形にする。
          </h1>

          <p className={styles.lead}>
            TechnologyLand&AIは、AIを活用してWebサイト・ブランド・画像・文章・動画まで
            一貫して制作する、次世代のAIクリエイティブ会社です。
          </p>

          <div className={styles.heroButtons}>
            <a href="#services" className={styles.primaryButton}>
              サービスを見る
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              相談する
            </a>
          </div>

          <div className={styles.heroPanel}>
            <div>
              <span>WEB</span>
              <p>Next.js / LP / Brand Site</p>
            </div>
            <div>
              <span>AI</span>
              <p>ChatGPT / Claude / Image</p>
            </div>
            <div>
              <span>MOVIE</span>
              <p>AI Video / Editing / Concept Movie</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.concept} id="vision">
        <p className={styles.sectionLabel}>NEW VISION</p>
        <h2>
          Web制作会社から、
          <br />
          AIクリエイティブブランドへ。
        </h2>
        <p>
          TechnologyLand&AIは、ただWebサイトを作る会社ではありません。
          事業のアイデアを、Webサイト・文章・画像・動画・ブランド世界観として形にする会社です。
          これまで別に存在していた映像制作の力も、すべてTechnologyLand&AIの能力として統合されました。
        </p>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>SERVICES</p>
          <h2>TechnologyLand&AIができること</h2>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number}>
              <span className={styles.serviceNumber}>{service.number}</span>
              <h3>{service.title}</h3>
              <h4>{service.jp}</h4>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.powerSection}>
        <div className={styles.powerText}>
          <p className={styles.sectionLabel}>INTEGRATED POWER</p>
          <h2>
            Web、画像、文章、動画。
            <br />
            すべてをAIでつなげる。
          </h2>
          <p>
            ひとつの事業には、Webサイトだけでなく、伝える言葉、見せる画像、印象に残る映像が必要です。
            TechnologyLand&AIは、それらを別々ではなく、ひとつの世界観として設計します。
          </p>
        </div>

        <div className={styles.orbit}>
          <div className={styles.centerCore}>AI</div>
          <span className={styles.orbitItemOne}>WEB</span>
          <span className={styles.orbitItemTwo}>BRAND</span>
          <span className={styles.orbitItemThree}>IMAGE</span>
          <span className={styles.orbitItemFour}>MOVIE</span>
        </div>
      </section>

      <section className={styles.strengths}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>STRENGTH</p>
          <h2>選ばれる理由</h2>
        </div>

        <div className={styles.strengthGrid}>
          {strengths.map((item) => (
            <div className={styles.strengthCard} key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.flowSection} id="flow">
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>FLOW</p>
          <h2>制作の流れ</h2>
        </div>

        <div className={styles.flowList}>
          {flow.map((item, index) => (
            <div className={styles.flowItem} key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <p className={styles.sectionLabel}>START YOUR WORLD</p>
        <h2>あなたのアイデアを、AIで形にする。</h2>
        <p>
          Webサイト、ブランド、画像、動画。まだ言葉になっていないアイデアも、
          TechnologyLand&AIが最短で形にします。
        </p>

        <Link href="/" className={styles.ctaButton}>
          トップページへ戻る
        </Link>
      </section>
    </main>
  );
}