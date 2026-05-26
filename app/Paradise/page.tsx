import styles from "./page.module.css";

const stats = [
  {
    value: "5,000ha",
    label: "東京ドーム約1,000個分として描かれる広大な敷地",
  },
  {
    value: "12",
    label: "エリアごとに違う体験を持つ多層的な構成",
  },
  {
    value: "30,000+",
    label: "ホテル客室数として示される圧倒的なリゾート規模",
  },
  {
    value: "24h",
    label: "昼も夜も物語が続くようなエンターテインメント性",
  },
];

const features = [
  {
    title: "Central Mountain",
    description:
      "島の中心にそびえる象徴的な山岳エリア。花火や光の演出が、画面全体の視線を引き寄せます。",
  },
  {
    title: "Sky Palace Hotel",
    description:
      "山頂付近に建つ高層ホテル群。ファンタジーとラグジュアリーが混ざったランドマークです。",
  },
  {
    title: "Ocean Kingdom",
    description:
      "海側に広がる水族館・ショーエリア。青い光が、リゾートのスケール感を強調しています。",
  },
  {
    title: "Paradise Beach",
    description:
      "白い砂浜とマリンアクティビティのエリア。都市的なにぎわいと自然の開放感をつなぎます。",
  },
  {
    title: "Entertainment City",
    description:
      "テーマパーク、映画館、ライブ会場が集まる夜の中心地。光の密度が祝祭感を生んでいます。",
  },
  {
    title: "Wellness Island",
    description:
      "スパ、温泉、医療リトリートを想起させる落ち着いた島。豪華さだけでない滞在価値を添えています。",
  },
];

export default function ParadisePage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Concept Resort Vision</p>
          <h1 className={styles.title}>PARADISE EARTH</h1>
          <p className={styles.lead}>
            海、山、都市、エンターテインメントがひとつの島に重なる、未来型リゾート構想。
            旅の高揚感と物語性を、一枚のビジュアルから立ち上げる紹介ページです。
          </p>
          <div className={styles.heroActions} aria-label="ページ内リンク">
            <a className={`${styles.button} ${styles.primary}`} href="#visual">
              ビジュアルを見る
            </a>
            <a className={styles.button} href="#highlights">
              見どころ
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={`${styles.sectionInner} ${styles.intro}`}>
            <div className={styles.introCopy}>
              <h2>地球上最大の楽園を描いた、壮大なリゾートマップ。</h2>
              <p>
                PARADISE EARTHは、中央の巨大な山岳エリア、海上ホテル、ウォーターパーク、
                ショッピング街、マリーナ、ナイトショーまでを一体化した架空の複合リゾートです。
                夜景の光量と細密な注釈が、ひとつの都市が丸ごと祝祭になったような印象を生み出しています。
              </p>
            </div>

            <div className={styles.stats} aria-label="リゾートのスケール">
              {stats.map((stat) => (
                <div className={styles.stat} key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.imageStage}
          id="visual"
          aria-label="PARADISE EARTHの全体画像"
        >
          <div className={styles.imageFrame}>
            <img
              src="/assets/paradise-earth.jpg"
              alt="PARADISE EARTHの巨大リゾート構想マップ"
            />
          </div>
          <p className={styles.caption}>
            画像内には、Central Mountain、Sky Palace Hotel、Ocean Kingdom、Water
            World、 Jungle Villageなど、リゾートを構成する各エリアが注釈付きで描かれています。
          </p>
        </section>

        <section className={`${styles.section} ${styles.features}`} id="highlights">
          <div className={styles.sectionInner}>
            <div className={styles.featuresHeader}>
              <h2>見どころ</h2>
              <p>画像の魅力が伝わりやすいように、主要エリアを短く整理しました。</p>
            </div>

            <div className={styles.featureGrid}>
              {features.map((feature) => (
                <article className={styles.feature} key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>

            <div className={styles.closing}>
              <p>
                このページは、構想画像の迫力をそのまま伝えつつ、初めて見る人にも世界観が伝わるように構成しています。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>PARADISE EARTH visual introduction page</footer>
    </div>
  );
}