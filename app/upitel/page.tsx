import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const residents = [
  {
    name: "宇宙人",
    label: "Visitors",
    text: "星の外から来た存在。見たことのない知恵、道具、物語をUpiteLへ持ち込みます。",
  },
  {
    name: "料理人",
    label: "Cooks",
    text: "Paradiseの食材を使い、集まった存在たちをつなぐ料理を作ります。",
  },
  {
    name: "商人",
    label: "Merchants",
    text: "Goods、珍しい素材、旅の記念品を並べ、出会いを取引と発見に変えます。",
  },
  {
    name: "神",
    label: "Gods",
    text: "UpiteLに祝福と不思議なルールを与え、場所そのものを特別にします。",
  },
  {
    name: "人間",
    label: "Humans",
    text: "食べ、話し、笑い、驚く存在。UpiteLの交流をいちばん近くで育てます。",
  },
];

const exchanges = [
  "料理を囲んで話す",
  "Goodsを交換する",
  "次のParadiseを相談する",
  "Dragonの案内を聞く",
  "知らない世界の話を集める",
  "Masterと新しい遊びを決める",
];

const places = [
  {
    title: "交流広間",
    image: "/images/hiroma.png",
    text: "あらゆる存在が最初に集まる広間。灯り、料理、声が重なり、UpiteLの一日が始まります。",
  },
  {
    title: "商人の回廊",
    image: "/images/koushoujou.png",
    text: "珍しい品と会話が行き交う通路。Goodsの種、旅の道具、まだ名前のない宝物が並びます。",
  },
  {
    title: "至高の湯",
    image: "/images/sikounoyu.png",
    text: "種族も立場もほどける温泉。話し合いのあと、みんなが同じ湯気の中で休みます。",
  },
];

export default function UpitelPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/images/hiroma.png"
            alt="UpiteLの交流広間"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Inside Shokujiba Paradise</p>
            <h1>UpiteL</h1>
            <p className={styles.lead}>
              UpiteLは、Paradiseの中にある交流の場所です。宇宙人、料理人、商人、神、人間。
              いろんな存在が集まり、食べて、話して、交換して、新しいワクワクを生み出します。
            </p>
            <div className={styles.actions}>
              <a href="#residents" className={styles.primary}>
                集まる存在を見る
              </a>
              <Link href="/Paradise" className={styles.secondary}>
                Paradiseへ戻る
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.statement}>
          <p className={styles.sectionLabel}>What is UpiteL?</p>
          <h2>ここは、違う世界どうしが出会う広場。</h2>
          <p>
            Paradiseの奥にあるUpiteLでは、強い者も、やさしい者も、遠くから来た者も、
            今日初めて来た人間も、同じ場所で交流します。食事場らしく、食とGoodsと物語が
            みんなの間を行き来します。
          </p>
        </section>

        <section className={styles.residents} id="residents" aria-labelledby="residents-title">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Residents</p>
            <h2 id="residents-title">UpiteLにいる存在たち</h2>
          </div>
          <div className={styles.residentGrid}>
            {residents.map((resident) => (
              <article className={styles.residentCard} key={resident.name}>
                <span>{resident.label}</span>
                <h3>{resident.name}</h3>
                <p>{resident.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.exchangeSection} aria-labelledby="exchange-title">
          <div>
            <p className={styles.sectionLabel}>Exchange</p>
            <h2 id="exchange-title">交流から、Paradiseの次が生まれる。</h2>
          </div>
          <ul className={styles.exchangeList}>
            {exchanges.map((exchange) => (
              <li key={exchange}>{exchange}</li>
            ))}
          </ul>
        </section>

        <section className={styles.placeSection} aria-labelledby="places-title">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Places</p>
            <h2 id="places-title">UpiteLの中にある場所</h2>
          </div>
          <div className={styles.placeGrid}>
            {places.map((place) => (
              <article className={styles.placeCard} key={place.title}>
                <Image
                  src={place.image}
                  alt={`${place.title}の景色`}
                  width={720}
                  height={500}
                  className={styles.placeImage}
                />
                <div>
                  <h3>{place.title}</h3>
                  <p>{place.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.invitation}>
          <p className={styles.sectionLabel}>Invitation</p>
          <h2>MasterとDragonも、ここで待っています。</h2>
          <p>
            UpiteLは、Paradiseの中でいちばん会話が生まれる場所。
            何者であっても、ここでは席につき、料理を受け取り、次の冒険の話を始められます。
          </p>
          <div className={styles.invitationActions}>
            <Link href="/Paradise" className={styles.primary}>
              Paradiseへ
            </Link>
            <a href="mailto:shokujibamaster@gmail.com" className={styles.secondary}>
              Masterへ連絡
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
