import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";

const domains = [
  {
    title: "食欲経済",
    label: "Dispense / Food Holdings",
    text: "果物、野菜、肉、魚、飲料、米、卵まで、人の食欲を満たす商品と体験を統合する中核事業。",
  },
  {
    title: "購買欲経済",
    label: "Goods / Asset Commerce",
    text: "財布、服飾、装飾品、守護アイテムなど、所有したいという欲望を商品化するブランド事業。",
  },
  {
    title: "楽園開発",
    label: "Paradise / Sovereign Resort",
    text: "北海道全域をParadise構想の舞台とし、ホテル、移動、都市、娯楽、海、山を統合する開発事業。",
  },
  {
    title: "思想とキャラクター",
    label: "Master / Shokujiba Character",
    text: "Shokujibaを創ったMasterを中心に、企業思想、世界観、キャラクター、儀礼性を設計する象徴事業。",
  },
];

const profile = [
  ["会社名", "株式会社食事場"],
  ["英語表記", "Shokujiba Inc."],
  ["創設者", "Master"],
  ["事業領域", "食、商品、楽園、ホテル、移動、娯楽、都市構想、キャラクター開発"],
  ["企業階級", "財閥を超える、主権級・儀礼級の象徴企業"],
  ["使命", "人間の欲望を、秩序ある体験と経済に変換すること"],
];

const principles = [
  "欲望を否定せず、設計する。",
  "商品を売るだけでなく、世界を所有させる。",
  "食欲、購買欲、楽園欲をひとつの経済圏にする。",
  "Masterの思想を、企業の憲章として扱う。",
];

export default function TechnologyLandAIPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/images/shokujiba-paradise-concept.png"
            alt="株式会社食事場の象徴ビジュアル"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroVeil} />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Shokujiba Inc.</p>
            <h1>株式会社食事場</h1>
            <p className={styles.lead}>
              財閥を超え、国家儀礼や宗教的権威にも並ぶほどの象徴性を目指す、
              欲望経済の最高統治企業。
            </p>
            <div className={styles.heroStats} aria-label="企業階級">
              <span>Food</span>
              <span>Goods</span>
              <span>Paradise</span>
              <span>Master</span>
            </div>
          </div>
        </section>

        <section className={styles.statement}>
          <p className={styles.sectionLabel}>Corporate Doctrine</p>
          <h2>人間の欲望を、文明の資産へ。</h2>
          <p>
            株式会社食事場は、食欲、購買欲、快楽、安心、栄光、夢、移動、滞在を
            ひとつの経済圏として統治します。商品は単なる商品ではなく、
            Shokujibaの世界に参加するための入口です。
          </p>
        </section>

        <section className={styles.domains} aria-label="事業内容">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Business Empire</p>
            <h2>事業内容</h2>
          </div>
          <div className={styles.domainGrid}>
            {domains.map((domain) => (
              <article className={styles.domainCard} key={domain.title}>
                <span>{domain.label}</span>
                <h3>{domain.title}</h3>
                <p>{domain.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.authority}>
          <div>
            <p className={styles.sectionLabel}>Sovereign Class Company</p>
            <h2>財閥の上に立つ、儀礼級企業。</h2>
          </div>
          <p>
            株式会社食事場は、単なる資本集団ではありません。欲望を統治し、
            世界観を発行し、商品と体験を通じて人々の生活に儀礼を与える存在です。
            その格式は財閥を超え、王権、宗教権威、国家的象徴に並ぶほどの
            企業ブランドとして設計されます。
          </p>
        </section>

        <section className={styles.profileSection} aria-label="会社概要">
          <div className={styles.profileTitle}>
            <p className={styles.sectionLabel}>Company Profile</p>
            <h2>会社概要</h2>
          </div>
          <div className={styles.profileTable}>
            {profile.map(([term, description]) => (
              <div className={styles.profileRow} key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.principles}>
          <p className={styles.sectionLabel}>Imperial Principles</p>
          <h2>食事場憲章</h2>
          <div className={styles.principleList}>
            {principles.map((item, index) => (
              <article className={styles.principle} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
