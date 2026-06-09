import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const desires = [
  {
    title: "食欲",
    route: "Dispense",
    href: "/Dispense",
    copy: "果物、野菜、肉、魚、飲み物まで。見た瞬間に食べたくなるものが並ぶ場所。",
  },
  {
    title: "購買欲",
    route: "Goods",
    href: "/Goods",
    copy: "身につける、飾る、持ち歩く。Shokujibaの世界観を日常へ連れていく場所。",
  },
  {
    title: "欲望",
    route: "Paradise",
    href: "/Paradise",
    copy: "富、成功、輝き、癒し、夢。思いつく限りの欲望が、楽園として形になる場所。",
  },
];

const pillars = [
  "Shokujibaは、このWebサイト全体に流れる世界の名前。",
  "Dispenseでは食欲が満たされ、Goodsでは購買欲が満たされる。",
  "Paradiseでは、人が思いつく限りの欲望が満たされる。",
  "MasterはShokujibaを創った存在であり、Shokujibaのキャラクターでもある。",
];

export default function TripPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="shokujiba-title">
          <Image
            src="/images/shokujiba-paradise-concept.png"
            alt="Shokujibaの世界を表す楽園都市"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>About Shokujiba</p>
            <h1 id="shokujiba-title">Shokujiba</h1>
            <p className={styles.lead}>
              食欲、購買欲、楽園への欲望。Webサイトの中に散らばるすべての欲を受け止め、
              それぞれの場所で満たしていく世界。それが現在のShokujibaです。
            </p>
            <div className={styles.heroActions}>
              <Link href="/Dispense" className={styles.primaryAction}>
                食欲へ
              </Link>
              <Link href="/Paradise" className={styles.secondaryAction}>
                Paradiseへ
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.statement} aria-label="Shokujibaの定義">
          <p className={styles.sectionLabel}>Definition</p>
          <h2>Shokujibaとは、欲望が目的地を持つWeb世界。</h2>
          <p>
            果物や野菜を見て食べたくなる気持ち、Goodsを見て手に入れたくなる気持ち、
            Paradiseで成功や輝きや自由を求める気持ち。Shokujibaは、それらを否定せず、
            ひとつずつ満たすために作られています。
          </p>
        </section>

        <section className={styles.desireGrid} aria-label="Shokujibaの欲望エリア">
          {desires.map((desire) => (
            <Link href={desire.href} className={styles.desireCard} key={desire.title}>
              <span>{desire.route}</span>
              <h3>{desire.title}</h3>
              <p>{desire.copy}</p>
            </Link>
          ))}
        </section>

        <section className={styles.masterSection} aria-labelledby="master-title">
          <div className={styles.masterImageWrap}>
            <Image
              src="/images/shokujibaicon.jpeg"
              alt="Shokujibaを創ったMasterを象徴するアイコン"
              fill
              sizes="(max-width: 860px) 100vw, 42vw"
              className={styles.masterImage}
            />
          </div>
          <div className={styles.masterCopy}>
            <p className={styles.sectionLabel}>Master</p>
            <h2 id="master-title">Shokujibaを創ったのはMaster。</h2>
            <p>
              Masterは、Shokujibaを創った存在です。同時に、Shokujibaの中にいる
              1キャラクターでもあります。世界の外から作り、世界の中から導く。
              その二つの立場を持つ存在として、Shokujibaの中心にいます。
            </p>
          </div>
        </section>

        <section className={styles.pillars} aria-label="Shokujibaの要点">
          {pillars.map((pillar, index) => (
            <article className={styles.pillar} key={pillar}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{pillar}</p>
            </article>
          ))}
        </section>

        <section className={styles.worldSection} aria-label="Shokujibaの現在地">
          <div className={styles.worldCopy}>
            <p className={styles.sectionLabel}>Now</p>
            <h2>現在のShokujibaは、欲望を分類せずに受け入れる。</h2>
            <p>
              食べる、買う、夢を見る、憧れる、満たされる。別々に見える欲望を、
              Shokujibaは同じ世界の中でつなげます。だからこのWebサイトでは、
              食材も、Goodsも、Paradiseも、すべてShokujibaの一部です。
            </p>
          </div>
          <div className={styles.imagePair}>
            <Image
              src="/images/ryouri.png"
              alt="食欲を表す料理"
              width={520}
              height={660}
              className={styles.floatImage}
            />
            <Image
              src="/images/goods/paradise-amulet.jpg"
              alt="購買欲を表すパラダイスお守り"
              width={520}
              height={660}
              className={styles.floatImage}
            />
          </div>
        </section>

        <section className={styles.finalCta} aria-label="Shokujibaの入口">
          <p className={styles.sectionLabel}>Enter</p>
          <h2>欲望の入口を選ぶ。</h2>
          <div className={styles.finalActions}>
            <Link href="/Dispense">Dispense</Link>
            <Link href="/Goods">Goods</Link>
            <Link href="/Paradise">Paradise</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
