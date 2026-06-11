import styles from "./page.module.css";

const stats = [
  {
    value: "5,0000ha",
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
    title: "Hokkaido Paradise / Mega Transportation",
    description:
      "Shokujiba Paradiseでは北海道全域をParadise全域として扱い、Mega Transportationで北海道内を移動する構想です。",
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

                <section className={styles.shokujibaHero}>
          <div>
            <p className={styles.shokujibaEyebrow}>
              THE ULTIMATE MEGA RESORT PROJECT
            </p>
            <h2 className={styles.shokujibaTitle}>
              SHOKUJIBA
              <br />
              PARADISE
            </h2>
            <p className={styles.shokujibaLead}>
              世界最大級を目指す、超巨大パラダイスリゾート計画。
              ホテル、海、プール、ジャングル、未来都市、ショー、VIPヴィラ、
              ウェルネスを全部入れ込んだ“楽園都市”。
            </p>

            <div className={styles.shokujibaActions}>
              <a className={`${styles.shokujibaButton} ${styles.shokujibaPrimary}`} href="#shokujiba-vision">
                全計画を見る
              </a>
              <a className={`${styles.shokujibaButton} ${styles.shokujibaGhost}`} href="#shokujiba-contact">
                参加・出資相談
              </a>
            </div>
          </div>
        </section>

        <section className={styles.shokujibaSection} id="shokujiba-vision">
          <h2>世界観</h2>
          <p className={styles.shokujibaText}>
            Shokujiba Paradiseは、ただのホテルでも、ただのテーマパークでもありません。
            “泊まる・遊ぶ・癒される・稼ぐ・発信する・夢を見る”を全部まとめた、
            巨大リゾートブランドです。炎、水、ネオン、南国植物、海、ジャングル、
            未来建築を融合し、訪れた瞬間に別世界へ入る体験を作ります。
          </p>

          <div className={styles.shokujibaGrid}>
            <div className={styles.shokujibaCard}>
              <strong>500,000ha</strong>
              <span>最大級スケール構想</span>
            </div>
            <div className={styles.shokujibaCard}>
              <strong>300,000室</strong>
              <span>ホテル客室イメージ</span>
            </div>
            <div className={styles.shokujibaCard}>
              <strong>1,000+</strong>
              <span>大型施設</span>
            </div>
            <div className={styles.shokujibaCard}>
              <strong>50,000,000人</strong>
              <span>年間来場者目標</span>
            </div>
          </div>
        </section>

        <section className={`${styles.shokujibaSection} ${styles.shokujibaDark}`} id="shokujiba-zones">
          <h2>Resort Zones</h2>
          <p className={styles.shokujibaText}>
            1つの敷地に、世界レベルのリゾートエリアを複数展開。
          </p>

          <div className={styles.shokujibaGrid}>
            <article className={styles.shokujibaCard}>
              <h3>Paradise Beach</h3>
              <p>白砂ビーチ、透明な海、サンセットバー、海上花火、プライベートカバナ。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Sky Palace Hotel</h3>
              <p>超高層ラグジュアリーホテル。天空プール、ヘリポート、VIPラウンジ。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Ocean Kingdom</h3>
              <p>巨大水族館、イルカショー、海底レストラン、水中ホテル、海中トンネル。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Water World</h3>
              <p>最大級ウォーターパーク。波のプール、流れるプール、ナイトプール、巨大スライダー。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Jungle Village</h3>
              <p>熱帯雨林、滝、吊り橋、ジャングルヴィラ、ナイトサファリ。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Entertainment City</h3>
              <p>テーマパーク、ライブ会場、クラブ、映画館、アリーナ、花火ショー。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Shopping Kingdom</h3>
              <p>高級ブランド、屋外モール、ナイトマーケット、免税エリア。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Wellness Island</h3>
              <p>温泉、スパ、ヨガ、瞑想、医療リトリート、長期滞在施設。</p>
            </article>
          </div>
        </section>

        <section className={styles.shokujibaSection}>
          <div className={styles.shokujibaSplit}>
            <div>
              <h2>Hotel & Stay</h2>
              <p className={styles.shokujibaText}>
                客室はすべて“世界観別”。宿泊自体がアトラクションになる設計。
              </p>

              <div className={styles.shokujibaTags}>
                <span>海上ヴィラ</span>
                <span>水中スイート</span>
                <span>天空スイート</span>
                <span>ジャングルヴィラ</span>
                <span>ファイヤーテラス</span>
                <span>プライベートプール</span>
                <span>ロイヤルスイート</span>
                <span>長期滞在レジデンス</span>
              </div>
            </div>

            <div className={styles.shokujibaImagePanel}></div>
          </div>
        </section>

        <section className={`${styles.shokujibaSection} ${styles.shokujibaDark}`}>
          <h2>体験コンテンツ</h2>

          <div className={styles.shokujibaGrid}>
            <article className={styles.shokujibaCard}>
              <h3>Day Experience</h3>
              <p>プール、ビーチ、ジャングル、ショッピング、アクティビティを1日中楽しめる。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Night Paradise</h3>
              <p>炎のショー、花火、DJ、ナイトプール、ライトアップで夜も眠らない。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Food Paradise</h3>
              <p>世界中の料理、海上レストラン、ジャングルBBQ、VIPダイニング。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Future Transport</h3>
              <p>モノレール、電動カート、海上タクシー、ヘリ、未来型移動システム。</p>
            </article>
          </div>
        </section>

        <section className={styles.shokujibaSection}>
          <h2>VIP Membership</h2>
          <p className={styles.shokujibaText}>
            Shokujiba Paradiseの世界観をさらに濃く体験するためのVIP制度。
          </p>

          <div className={styles.shokujibaGrid}>
            <article className={styles.shokujibaCard}>
              <h3>Gold Member</h3>
              <div className={styles.shokujibaPrice}>¥50,000〜</div>
              <p>優先予約、限定イベント、ラウンジ利用。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Paradise VIP</h3>
              <div className={styles.shokujibaPrice}>¥300,000〜</div>
              <p>VIPカバナ、専属案内、特別ディナー、ショー優先席。</p>
            </article>

            <article className={styles.shokujibaCard}>
              <h3>Royal Owner</h3>
              <div className={styles.shokujibaPrice}>相談制</div>
              <p>専用ヴィラ、投資枠、共同ブランド展開、特別待遇。</p>
            </article>
          </div>
        </section>

        <section className={`${styles.shokujibaSection} ${styles.shokujibaDark}`} id="shokujiba-contact">
          <h2>Contact</h2>
          <p className={styles.shokujibaText}>
            出資、協業、土地提供、飲食出店、イベント、メディア掲載、採用などはこちら。
          </p>

          <div className={styles.shokujibaContact}>
            <div className={styles.shokujibaGold}>
              <h3>募集パートナー</h3>
              <p>
                投資家 / 建築家 / ホテル運営 / 飲食ブランド / 農家・生産者 /
                イベント会社 / インフルエンサー / スタッフ
              </p>
              <p>メール：shokujibamaster@gmail.com</p>
              <p>Instagram：@shokujiba_paradise</p>
            </div>
            <form className={styles.shokujibaForm}>
              <input placeholder="お名前" />
              <input placeholder="メールアドレス" />
              <select defaultValue="">
                <option value="" disabled>
                  お問い合わせ種別
                </option>
                <option>出資相談</option>
                <option>協業相談</option>
                <option>出店相談</option>
                <option>採用応募</option>
              </select>
              <textarea placeholder="内容"></textarea>
              <button className={`${styles.shokujibaButton} ${styles.shokujibaPrimary}`} type="button">
                送信する
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>PARADISE EARTH visual introduction page</footer>
    </div>
  );
}
