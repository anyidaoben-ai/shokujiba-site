import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const holdings = [
  {
    title: "Hokkaido Paradise Territory",
    label: "北海道全域開発",
    description:
      "Shokujiba Paradiseは、北海道全域をParadise全域として扱う巨大構想です。都市、自然、海、雪山、温泉、食、宿泊をひとつの経済圏として束ねます。",
  },
  {
    title: "Mega Transportation",
    label: "広域交通統治",
    description:
      "北海道内を移動するための巨大交通網。空路、鉄道、道路、港湾、専用シャトルを統合し、Paradise全域をひとつの施設のように移動します。",
  },
  {
    title: "Resort Capital",
    label: "楽園資本",
    description:
      "ホテル、テーマパーク、ショッピング、飲食、ウェルネスを投資対象として管理し、欲望を体験価値と収益へ変換します。",
  },
];

const divisions = [
  "Sky Palace Hotel",
  "Ocean Kingdom",
  "Water World",
  "Paradise Beach",
  "Entertainment City",
  "Shopping Avenue",
  "Wellness Island",
  "Food Holdings",
];

export default function ParadisePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/assets/paradise-earth.jpg"
          alt="Shokujiba Paradise財閥の北海道全域構想"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Shokujiba Paradise Zaibatsu</p>
          <h1>北海道全域を、楽園資本へ。</h1>
          <p className={styles.lead}>
            Shokujiba Paradiseは北海道全域をParadise全域として統治する構想です。
            Mega Transportationによって道内の移動を束ね、観光、食、宿泊、娯楽、
            商業、ウェルネスをひとつの巨大な財閥経済圏にします。
          </p>
          <div className={styles.actions}>
            <a href="#territory" className={styles.primary}>
              構想を見る
            </a>
            <Link href="/" className={styles.secondary}>
              財閥本部へ
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.statement} id="territory">
        <p className={styles.sectionLabel}>Territory</p>
        <h2>Paradiseは島ではなく、北海道全域に広がる。</h2>
        <p>
          画像のPARADISE EARTHは、Shokujiba Paradise財閥が目指す全域構想の象徴です。
          中央都市、山岳、海洋、温泉、食材、ホテル、ショー、商業を北海道という広大な土地に配置し、
          来訪者の欲望を地域全体で受け止めます。
        </p>
      </section>

      <section className={styles.holdings} aria-label="Shokujiba Paradise holdings">
        {holdings.map((item) => (
          <article className={styles.holding} key={item.title}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className={styles.visualBlock} aria-label="Paradise Earth visual">
        <div className={styles.mapFrame}>
          <Image
            src="/assets/paradise-earth.jpg"
            alt="Paradise Earth構想図"
            fill
            sizes="(max-width: 900px) 100vw, 70vw"
            className={styles.mapImage}
          />
        </div>
        <div className={styles.visualCopy}>
          <p className={styles.sectionLabel}>Master Plan</p>
          <h2>Mega Transportationが、北海道を一つの楽園に接続する。</h2>
          <p>
            来訪者は北海道内を点で移動するのではなく、Shokujiba Paradiseの中を移動します。
            空港、駅、港、ホテル、食材拠点、娯楽都市を財閥が統合し、移動そのものを体験に変えます。
          </p>
        </div>
      </section>

      <section className={styles.divisions}>
        <p className={styles.sectionLabel}>Divisions</p>
        <h2>主要事業領域</h2>
        <div className={styles.divisionGrid}>
          {divisions.map((division) => (
            <span key={division}>{division}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
