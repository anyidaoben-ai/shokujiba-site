import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const empireStats = [
  { value: "Food", label: "食欲を満たす" },
  { value: "Goods", label: "所有欲を満たす" },
  { value: "Paradise", label: "欲望を解放する" },
  { value: "Master", label: "世界観を統治する" },
];

const businesses = [
  {
    href: "/Dispense",
    title: "Shokuzai",
    label: "Food Holdings",
    text: "果物、野菜、肉、魚、飲料を束ね、食欲を経済に変える中核市場。",
    image: "/images/cosmic-produce.png",
  },
  {
    href: "/Goods",
    title: "Goods",
    label: "Asset Commerce",
    text: "身につける、持ち歩く、所有する。購買欲をブランド資産へ変える。",
    image: "/images/goods/paradise-jewelry.jpg",
  },
  {
    href: "/Paradise",
    title: "Paradise",
    label: "Sovereign Resort",
    text: "北海道全域を舞台に、移動、ホテル、都市、娯楽を統合する楽園構想。",
    image: "/assets/paradise-earth.jpg",
  },
  {
    href: "/TechnologyLand-AI",
    title: "Company",
    label: "Shokujiba Inc.",
    text: "株式会社食事場の会社概要、事業領域、Masterの思想を記録する中枢。",
    image: "/images/shokujiba-paradise-concept.png",
  },
];

const doctrines = [
  "食欲は市場になる。",
  "購買欲はブランドになる。",
  "楽園欲は都市になる。",
  "Masterの思想は憲章になる。",
];

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <Image
            src="/images/shokujiba-paradise-concept.png"
            alt="Shokujiba Paradise"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Shokujiba Sovereign Portal</p>
            <h1>欲望経済を、ひとつの楽園へ。</h1>
            <p className={styles.lead}>
              Shokujibaは、食材、Goods、Trip、Paradise、そして株式会社食事場を
              ひとつに束ねる欲望経済の入口です。
            </p>
            <div className={styles.heroActions}>
              <Link href="/Paradise" className={styles.primaryLink}>
                Paradiseへ
              </Link>
              <Link href="/TechnologyLand-AI" className={styles.secondaryLink}>
                会社概要を見る
              </Link>
            </div>
          </div>

          <div className={styles.heroStats} aria-label="Shokujiba domains">
            {empireStats.map((item) => (
              <div className={styles.stat} key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.manifesto}>
          <p className={styles.sectionLabel}>Grand Design</p>
          <h2>Shokujibaは、欲望を売るのではなく、欲望が満たされる秩序をつくる。</h2>
          <p>
            食べたい、買いたい、泊まりたい、移動したい、遊びたい、叶えたい。
            それぞれの欲望をバラバラに扱わず、ひとつの経済圏として設計する。
            それが現在のShokujiba Paradiseです。
          </p>
        </section>

        <section className={styles.businessSection} aria-label="Shokujiba businesses">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Empire Gates</p>
            <h2>四つの入口</h2>
          </div>

          <div className={styles.gates}>
            {businesses.map((business) => (
              <Link href={business.href} className={styles.gate} key={business.href}>
                <Image
                  src={business.image}
                  alt={business.title}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className={styles.gateImage}
                />
                <div className={styles.gateOverlay} />
                <div className={styles.gateBody}>
                  <span>{business.label}</span>
                  <h3>{business.title}</h3>
                  <p>{business.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.doctrine}>
          <div className={styles.doctrineIntro}>
            <p className={styles.sectionLabel}>Shokujiba Charter</p>
            <h2>食事場憲章</h2>
          </div>
          <div className={styles.doctrineList}>
            {doctrines.map((item, index) => (
              <article className={styles.doctrineItem} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.final}>
          <p className={styles.sectionLabel}>Next Destination</p>
          <h2>北海道全域を、Paradiseへ。</h2>
          <p>
            Shokujiba Paradiseは、食、Goods、ホテル、移動、都市、娯楽を統合し、
            現実の北海道を体験可能な楽園へ拡張していきます。
          </p>
          <Link href="/trip" className={styles.primaryLink}>
            Tripを見る
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
