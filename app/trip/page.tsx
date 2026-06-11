import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";

const bookingUrl = "https://www.jozankeiview.com/";

const highlights = [
  {
    title: "温泉",
    text: "札幌の奥座敷、定山渓でゆっくり滞在。旅の疲れをほどく温泉時間を中心に計画できます。",
  },
  {
    title: "客室",
    text: "家族旅行、グループ、記念日、ゆったり滞在まで、目的に合わせて部屋を選べるホテルとして掲載します。",
  },
  {
    title: "食事",
    text: "北海道らしい食の楽しみを旅程に組み込み、Shokujibaらしく食欲も満たす滞在へつなげます。",
  },
];

const gallery = [
  {
    title: "Hotel Stay",
    image: "/images/hotel.PNG",
    alt: "北海道ホテルステイのイメージ",
  },
  {
    title: "Onsen",
    image: "/images/gokujouonsenn.png",
    alt: "温泉滞在のイメージ",
  },
  {
    title: "Hokkaido",
    image: "/images/japanesehokkaido.jpeg",
    alt: "北海道旅行のイメージ",
  },
];

export default function TripPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/images/japanesehokkaido.jpeg"
            alt="北海道の旅"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Hokkaido Hotel Booking</p>
            <h1>定山渓ビューホテル</h1>
            <p className={styles.lead}>
              北海道・定山渓で泊まる、見る、予約へ進むためのホテルページ。
              Shokujiba Tripでは、旅の目的地をホテルから選べます。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#booking">
                予約へ進む
              </a>
              <a className={styles.secondaryAction} href="#gallery">
                ホテルを見る
              </a>
            </div>
          </div>
        </section>

        <section className={styles.bookingPanel} id="booking" aria-label="予約情報">
          <div>
            <p className={styles.sectionLabel}>Featured Hotel</p>
            <h2>Jozankei View Hotel</h2>
            <p>
              定山渓ビューホテルを、Shokujiba Paradise北海道エリアの滞在拠点として掲載。
              空室、料金、宿泊プランは公式予約ページで確認できます。
            </p>
          </div>

          <div className={styles.reserveCard}>
            <span>Official Booking</span>
            <strong>空室と宿泊プランを確認</strong>
            <p>日付、人数、部屋タイプは公式サイトで選択してください。</p>
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              公式予約ページへ
            </a>
          </div>
        </section>

        <section className={styles.highlights} aria-label="ホテルの特徴">
          {highlights.map((item) => (
            <article className={styles.highlight} key={item.title}>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className={styles.gallerySection} id="gallery">
          <div className={styles.galleryHeader}>
            <p className={styles.sectionLabel}>View</p>
            <h2>北海道ホテル滞在を見る。</h2>
          </div>
          <div className={styles.gallery}>
            {gallery.map((item) => (
              <article className={styles.galleryItem} key={item.title}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  className={styles.galleryImage}
                />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.access}>
          <p className={styles.sectionLabel}>Access</p>
          <h2>札幌から定山渓へ。</h2>
          <p>
            定山渓は札幌市南区の温泉エリア。Shokujiba Tripでは、北海道内のホテルを
            Paradiseの滞在拠点として見られるようにしていきます。
          </p>
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            定山渓ビューホテルを見る
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
