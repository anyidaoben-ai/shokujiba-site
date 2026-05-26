import styles from "./page.module.css";
import Image from "next/image";

export default function ParadisePage() {
  return (
    <main className={styles.page}>
      <div className={styles.bgGlow}></div>

      <nav className={styles.nav}>
        <div className={styles.logo}>SHOKUJIBA PARADISE</div>

        <div className={styles.navlinks}>
          <a href="#vision">構想</a>
          <a href="#zones">エリア</a>
          <a href="#hotel">ホテル</a>
          <a href="#vip">VIP</a>
          <a href="#roadmap">計画</a>
          <a href="#contact">問い合わせ</a>
        </div>
      </nav>

      <header className={styles.hero}>
        <div>
          <div className={styles.eyebrow}>
            THE ULTIMATE MEGA RESORT PROJECT
          </div>

          <h1 className={styles.title}>
            SHOKUJIBA
            <br />
            PARADISE
          </h1>

          <p className={styles.heroText}>
            世界最大級を目指す、超巨大パラダイスリゾート計画。
            ホテル、海、プール、ジャングル、未来都市、ショー、VIPヴィラ、
            ウェルネスを全部入れ込んだ“楽園都市”。
          </p>

          <div className={styles.cta}>
            <a className={`${styles.btn} ${styles.primary}`} href="#vision">
              全計画を見る
            </a>

            <a className={`${styles.btn} ${styles.ghost}`} href="#contact">
              参加・出資相談
            </a>
          </div>
        </div>
      </header>

      <section id="vision" className={styles.section}>
        <h2 className={styles.heading}>世界観</h2>

        <p className={styles.lead}>
          Shokujiba Paradiseは、ただのホテルでも、ただのテーマパークでもありません。
          “泊まる・遊ぶ・癒される・稼ぐ・発信する・夢を見る”を全部まとめた、
          巨大リゾートブランドです。
        </p>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.stat}`}>
            <strong>500,000ha</strong>
            最大級スケール構想
          </div>

          <div className={`${styles.card} ${styles.stat}`}>
            <strong>300,000室</strong>
            ホテル客室イメージ
          </div>

          <div className={`${styles.card} ${styles.stat}`}>
            <strong>1,000+</strong>
            大型施設
          </div>

          <div className={`${styles.card} ${styles.stat}`}>
            <strong>50,000,000人</strong>
            年間来場者目標
          </div>
        </div>
      </section>

      <section id="zones" className={`${styles.section} ${styles.dark}`}>
        <h2 className={styles.heading}>Resort Zones</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Paradise Beach</h3>
            <p>白砂ビーチ、透明な海、サンセットバー。</p>
          </div>

          <div className={styles.card}>
            <h3>Sky Palace Hotel</h3>
            <p>超高層ラグジュアリーホテル。</p>
          </div>

          <div className={styles.card}>
            <h3>Ocean Kingdom</h3>
            <p>巨大水族館、水中ホテル、海底レストラン。</p>
          </div>

          <div className={styles.card}>
            <h3>Water World</h3>
            <p>巨大ウォーターパーク。</p>
          </div>
        </div>
      </section>

      <section id="hotel" className={styles.section}>
        <div className={styles.split}>
          <div>
            <h2 className={styles.heading}>Hotel & Stay</h2>

            <p className={styles.lead}>
              客室はすべて“世界観別”。
            </p>

            <div>
              <span className={styles.tag}>海上ヴィラ</span>
              <span className={styles.tag}>水中スイート</span>
              <span className={styles.tag}>天空スイート</span>
              <span className={styles.tag}>ジャングルヴィラ</span>
            </div>
          </div>

          <div className={styles.imagePanel}></div>
        </div>
      </section>

      <section id="vip" className={`${styles.section} ${styles.dark}`}>
        <h2 className={styles.heading}>VIP Membership</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Gold Member</h3>
            <div className={styles.price}>¥50,000〜</div>
          </div>

          <div className={styles.card}>
            <h3>Paradise VIP</h3>
            <div className={styles.price}>¥300,000〜</div>
          </div>

          <div className={styles.card}>
            <h3>Royal Owner</h3>
            <div className={styles.price}>相談制</div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <strong>SHOKUJIBA PARADISE</strong>
        <br />
        The Ultimate Mega Resort Project
      </footer>
    </main>
  );
}