import Image from "next/image";
import Link from "next/link";
import Carousel, { type Slide } from "@/components/Carousel";
import styles from "./page.module.css";

const scale = [
  { value: "5,000ha", label: "敷地面積" },
  { value: "3,000室", label: "ホテル客室計画" },
  { value: "500,000,000人", label: "来場者目標" },
];

const zones = [
  {
    title: "Mega Transportation",
    label: "広域交通",
    description:
      "北海道全域をParadiseとして移動するための統合交通網。空路、鉄道、港湾、専用シャトルを束ね、移動そのものを体験価値へ変えます。",
  },
  {
    title: "Entertainment City",
    label: "娯楽都市",
    description:
      "ライブ、劇場、ナイトショー、テーマパーク、アリーナを集約する中核都市。Shokujiba Paradiseの熱量を生み出す夜の資本拠点です。",
  },
  {
    title: "Marina Bay",
    label: "海洋拠点",
    description:
      "ヨット、クルーズ、海上レストラン、VIP港湾を備える海の玄関口。富裕層滞在と海洋観光をつなぐ高級マリーナです。",
  },
  {
    title: "Paradise Beach",
    label: "沿岸楽園",
    description:
      "白砂、透明な海、ビーチクラブ、海上花火を展開する開放的な海岸エリア。昼はリゾート、夜は祝祭の舞台になります。",
  },
  {
    title: "Central Mountain",
    label: "中央象徴",
    description:
      "Paradise全域の象徴となる中央山岳。展望、花火、レストラン、ホテル、儀式的演出を担うShokujiba Paradiseのランドマークです。",
  },
  {
    title: "Sky Palace Hotel",
    label: "天空宿泊",
    description:
      "Shokujiba Paradiseの格式を示す高層ホテル群。VIPラウンジ、スイート、天空プール、迎賓機能を備えた財閥の宿泊資産です。",
  },
  {
    title: "Ocean Kingdom",
    label: "海洋王国",
    description:
      "水族館、海中レストラン、海底ホテル、ショーを統合した海洋エンターテインメント領域。家族滞在と高級体験を両立します。",
  },
  {
    title: "Water World",
    label: "水上娯楽",
    description:
      "巨大プール、ウォータースライダー、ナイトプール、温水施設を備える水の都市。季節を問わず集客する体験資産です。",
  },
  {
    title: "Wellness Island",
    label: "再生医療・癒し",
    description:
      "温泉、スパ、ヨガ、瞑想、長期滞在、医療リトリートを担う静のエリア。富裕層の回復と滞在価値を高めます。",
  },
  {
    title: "Jungle Village",
    label: "自然滞在",
    description:
      "森、滝、吊り橋、ヴィラ、ナイトサファリを含む自然没入エリア。北海道の自然をParadiseの物語へ接続します。",
  },
];

const paradiseSlides: Slide[] = [
  {
    id: 1,
    title: "Mega Transportation",
    description:
      "北海道全域をParadiseとして接続する広域交通資産。空路、鉄道、港湾、専用シャトルを統合します。",
    image: "/assets/paradise-earth.jpg",
    textColor: "#fff7e2",
  },
  {
    id: 2,
    title: "Entertainment City",
    description:
      "ライブ、劇場、ナイトショー、テーマパーク、アリーナを集約する財閥の娯楽都市です。",
    image: "/images/paradise-theme-park.jpg",
    textColor: "#fff7e2",
  },
  {
    id: 3,
    title: "Hokkaido Paradise",
    description:
      "北海道の自然、海、食、宿泊、ウェルネスを一つの楽園経済圏として運用します。",
    image: "/images/japanesehokkaido.jpeg",
    textColor: "#fff7e2",
  },
];

export default function ParadisePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/assets/paradise-earth.jpg"
          alt="Shokujiba Paradise構想図"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Shokujiba Paradise Zaibatsu</p>
          <h1>北海道全域を、楽園財閥へ。</h1>
          <p className={styles.lead}>
            Shokujiba Paradiseは、5,000ha規模の開発、3,000室の宿泊計画、
            500,000,000人の来場者目標を掲げる巨大構想です。北海道全域をParadiseとして扱い、
            Mega Transportationで各拠点を結びます。
          </p>
          <div className={styles.actions}>
            <a href="#zones" className={styles.primary}>
              構想を見る
            </a>
            <a href="mailto:shokujibamaster@gmail.com" className={styles.secondary}>
              Masterへ連絡
            </a>
          </div>
        </div>
      </section>

      <section className={styles.scaleBoard} aria-label="Shokujiba Paradise scale">
        {scale.map((item) => (
          <div className={styles.scaleItem} key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className={styles.statement}>
        <p className={styles.sectionLabel}>Master Plan</p>
        <h2>Shokujiba Paradiseは、北海道全域を一つの楽園経済圏として管理する。</h2>
        <p>
          交通、宿泊、食、海洋、娯楽、自然、ウェルネスを財閥の事業領域として統合し、
          来訪者の欲望を滞在価値、消費価値、投資価値へ変換します。
        </p>
      </section>

      <section className={styles.carouselSection} aria-label="Paradise asset carousel">
        <div className={styles.carouselHeader}>
          <p className={styles.sectionLabel}>Capital Assets</p>
          <h2>主要資産を巡る。</h2>
        </div>
        <Carousel slides={paradiseSlides} />
      </section>

      <section className={styles.zones} id="zones" aria-label="Paradise zones">
        {zones.map((zone) => (
          <article className={styles.zone} key={zone.title}>
            <span>{zone.label}</span>
            <h3>{zone.title}</h3>
            <p>{zone.description}</p>
          </article>
        ))}
      </section>

      <section className={styles.contact} aria-label="Contact Master">
        <div>
          <p className={styles.sectionLabel}>Contact</p>
          <h2>Masterへ送る。</h2>
        </div>
        <div className={styles.contactBody}>
          <p>
            出資、協業、土地提供、飲食出店、イベント、メディア掲載、採用などはこちらから。
          </p>
          <a href="mailto:shokujibamaster@gmail.com" className={styles.mailLink}>
            shokujibamaster@gmail.com
          </a>
          <Link href="/" className={styles.homeLink}>
            財閥本部へ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
