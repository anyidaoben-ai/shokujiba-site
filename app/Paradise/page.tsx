import styles from "./page.module.css";
import Image from "next/image";

export default function ParadisePage() {
  return (
    <main className={styles.main}>
      
      {/* HERO */}
      <section className={styles.hero}>

        <Image
          src="/paradise-earth.jpg"
          alt="Paradise Earth"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <p className={styles.subTitle}>
            FUTURE RESORT EXPERIENCE
          </p>

          <h1 className={styles.title}>
            PARADISE <br />
            EARTH
          </h1>

          <p className={styles.description}>
            地球上最大級の未来型リゾート。<br />
            海・自然・都市・エンターテインメントが融合した、
            新しい文明のような楽園。
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              Explore
            </button>

            <button className={styles.secondaryButton}>
              Watch Movie
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.aboutSection}>

        <div className={styles.aboutContainer}>

          <div>
            <p className={styles.sectionSub}>
              ABOUT
            </p>

            <h2 className={styles.sectionTitle}>
              未来と自然が融合した
              <br />
              究極のリゾート
            </h2>

            <p className={styles.sectionText}>
              Paradise Earthは、巨大都市・高級ホテル・
              ビーチ・水上施設・エンターテインメントを統合した
              次世代型メガリゾートです。
              <br /><br />
              AI、自然、建築、光、文化、体験。
              そのすべてが流れるようにつながり、
              一つの生命体のような都市を形成しています。
            </p>
          </div>

          <div className={styles.aboutImageWrapper}>
            <Image
              src="/paradise-earth.jpg"
              alt="Paradise Earth"
              fill
              className={styles.aboutImage}
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection}>

        <div className={styles.center}>
          <p className={styles.sectionSub}>
            MAIN AREAS
          </p>

          <h2 className={styles.sectionTitle}>
            Paradise Zones
          </h2>
        </div>

        <div className={styles.cardGrid}>

          {[
            {
              title: "Ocean Kingdom",
              desc: "巨大水族館と海上エリア",
            },
            {
              title: "Entertainment City",
              desc: "テーマパークとナイトライフ",
            },
            {
              title: "Sky Palace Hotel",
              desc: "超高層ラグジュアリーホテル",
            },
            {
              title: "Wellness Island",
              desc: "温泉・瞑想・ヒーリング",
            },
            {
              title: "Jungle Village",
              desc: "自然と共存するヴィレッジ",
            },
            {
              title: "Marina Bay",
              desc: "ヨットと海上レストラン",
            },
          ].map((item, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>
                {item.title}
              </h3>

              <p className={styles.cardText}>
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallerySection}>

        <div className={styles.center}>
          <p className={styles.sectionSub}>
            GALLERY
          </p>

          <h2 className={styles.sectionTitle}>
            Cinematic Vision
          </h2>
        </div>

        <div className={styles.galleryImageWrapper}>
          <Image
            src="/paradise-earth.jpg"
            alt="Paradise Earth"
            fill
            className={styles.galleryImage}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <h2 className={styles.footerTitle}>
          Welcome to Paradise Earth
        </h2>

        <p className={styles.footerText}>
          The World's Largest Resort Experience
        </p>
      </footer>

    </main>
  );
}