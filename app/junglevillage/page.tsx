import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const encounters = [
  {
    title: "動物と触れ合う",
    label: "Touch",
    text: "近づきすぎず、怖がらせず、相手の気配を感じながら触れ合います。",
  },
  {
    title: "心を通わせる",
    label: "Heart",
    text: "言葉ではなく、目線、距離、呼吸、静かな時間で動物とつながります。",
  },
  {
    title: "自然を歩く",
    label: "Walk",
    text: "北海道の森、水、空気、光を感じながら、Jungle Villageをゆっくり巡ります。",
  },
  {
    title: "力を受け取る",
    label: "Energy",
    text: "動物と自然から、生きる力、運、やさしさ、次へ進むエネルギーを受け取ります。",
  },
];

const villageSpots = [
  {
    title: "森の道",
    image: "/images/sikounoyu.png",
    text: "木々と水の音に包まれる道。動物の気配を感じながら、静かに歩く場所です。",
  },
  {
    title: "ふれあい広場",
    image: "/images/jh.png",
    text: "いろいろな動物と出会う場所。見る、待つ、近づく、心を合わせる体験があります。",
  },
  {
    title: "やすらぎの寝床",
    image: "/images/nedoko.png",
    text: "自然の中で休み、心を落ち着ける場所。動物との出会いのあと、気持ちを整えます。",
  },
];

export default function JungleVillagePage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/images/sikounoyu.png"
            alt="Shokujiba Jungle Villageの自然"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Inside Shokujiba Paradise</p>
            <h1>Shokujiba Jungle Village</h1>
            <p className={styles.lead}>
              Jungle Villageは、Shokujiba Paradiseの中にある北海道の自然を生かした
              ジャングルスポットです。いろいろな動物と触れ合い、心を通わせ、
              森のエネルギーを受け取る場所です。
            </p>
            <div className={styles.actions}>
              <a href="#encounters" className={styles.primary}>
                体験を見る
              </a>
              <Link href="/Paradise" className={styles.secondary}>
                Paradiseへ戻る
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.statement}>
          <p className={styles.sectionLabel}>Animal and Nature</p>
          <h2>動物と、心を通わせる森。</h2>
          <p>
            ここでは動物をただ見るだけではありません。相手の気配を感じ、距離を大切にし、
            ゆっくり心を通わせます。北海道の自然の中で、動物、人間、森、水、光がひとつの時間になります。
          </p>
        </section>

        <section className={styles.encounters} id="encounters" aria-labelledby="encounters-title">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Experiences</p>
            <h2 id="encounters-title">Jungle Villageで楽しめること</h2>
          </div>
          <div className={styles.encounterGrid}>
            {encounters.map((encounter) => (
              <article className={styles.encounterCard} key={encounter.title}>
                <span>{encounter.label}</span>
                <h3>{encounter.title}</h3>
                <p>{encounter.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.spots} aria-labelledby="spots-title">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Village Spots</p>
            <h2 id="spots-title">森の中のスポット</h2>
          </div>
          <div className={styles.spotGrid}>
            {villageSpots.map((spot) => (
              <article className={styles.spotCard} key={spot.title}>
                <Image
                  src={spot.image}
                  alt={`${spot.title}の景色`}
                  width={720}
                  height={520}
                  className={styles.spotImage}
                />
                <div>
                  <h3>{spot.title}</h3>
                  <p>{spot.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.promise}>
          <p className={styles.sectionLabel}>Paradise Place</p>
          <h2>Jungle Villageは、Paradiseにある場所です。</h2>
          <p>
            UpiteLやParadise Beach、Marina Bay、Central Mountainと同じように、
            Jungle VillageもShokujiba Paradiseを広げる大切な場所です。
            ここでは自然と動物が、欲望や夢や願いをやさしい力に変えてくれます。
          </p>
          <div className={styles.actions}>
            <Link href="/Paradise" className={styles.primary}>
              Paradiseへ戻る
            </Link>
            <Link href="/Mastercard" className={styles.secondaryDark}>
              Mastercardを買う
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
