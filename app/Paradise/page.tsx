import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Carousel, { type Slide } from "@/components/Carousel";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const scale = [
  { value: "5,000ha", label: "遊びと発見の楽園" },
  { value: "3,000室", label: "泊まって巡るParadise" },
  { value: "Yupiteru", label: "Paradiseのワクワク中心地" },
];

const protocols = [
  {
    title: "休む",
    label: "Rest",
    text: "北海道の空気、水、森、温泉に包まれ、心を整える時間。休んだあと、次の遊びへ向かいたくなる導線をつくります。",
  },
  {
    title: "巡る",
    label: "Explore",
    text: "海、山、庭園、劇場、水族館、食の回廊を巡り、曲がるたびに新しい景色と発見に出会います。",
  },
  {
    title: "食べる",
    label: "Dining",
    text: "北海道の食材とShokujibaの食文化を、香り、器、景色まで含めて味わう体験にします。",
  },
  {
    title: "遊ぶ",
    label: "Play",
    text: "ユピテル、Dragon、Master、Goodsがつながり、Paradiseの中で次の遊びを生み出していきます。",
  },
];

const wonderMoments = [
  {
    title: "Paradise列車",
    label: "Wonder Train",
    text: "北海道の景色を額縁のように眺める列車。車窓、食、音楽、停車駅の演出で移動を遊びに変えます。",
  },
  {
    title: "海上パレード",
    label: "Ocean Parade",
    text: "マリーナから始まる船上遊覧。夕陽、花火、水上音楽、海上レストランが連続して現れます。",
  },
  {
    title: "天空晩餐",
    label: "Sky Dinner",
    text: "Sky Palace Hotelの上層で、北海道の夜景と花火を見ながら行う晩餐。食事そのものが記憶になります。",
  },
  {
    title: "夜の祝祭",
    label: "Night Ceremony",
    text: "Entertainment Cityで行う光、音楽、噴水、ドローン、花火の祝祭。Paradiseの夜を特別な時間にします。",
  },
  {
    title: "秘密の果樹園",
    label: "Hidden Orchard",
    text: "Shokujibaらしい果物と野菜の楽園。採る、香る、食べる、贈るまでを、静かな冒険として体験します。",
  },
  {
    title: "ユピテル",
    label: "Yupiteru",
    text: "Paradiseにある、MasterとDragonが新しい遊びを見つけるワクワクする場所。次の発見、次のGoods、次の旅がここから始まります。",
  },
];

const zones = [
  {
    title: "Imperial Garden",
    label: "入口の庭園",
    description:
      "散策、記念植樹、茶席、写真撮影に対応する庭園。次の小道に何があるのか楽しみになる、Paradiseの公式入口です。",
  },
  {
    title: "Sky Palace Hotel",
    label: "空のホテル",
    description:
      "空に近い部屋からParadiseの祝祭を見下ろせる宿泊中枢。食事、休息、夜景、花火がひとつながりになります。",
  },
  {
    title: "Central Mountain",
    label: "中央の山",
    description:
      "北海道全域の眺望、花火、式典、朝の御来光を体験できるParadiseの象徴。登るほど世界が広がる中心ランドマークです。",
  },
  {
    title: "Wellness Island",
    label: "回復の島",
    description:
      "温泉、スパ、医療リトリート、瞑想、長期滞在に対応する静の区域。回復したあとにもう一度遊びたくなる場所です。",
  },
  {
    title: "Ocean Kingdom",
    label: "海の王国",
    description:
      "水族館、海上レストラン、海中鑑賞、船上遊覧を含む海の迎賓区域。海の奥へ進むほど驚きが増える設計です。",
  },
  {
    title: "Paradise Beach",
    label: "海辺の散歩道",
    description:
      "白砂、海風、夕陽、花火を静かに楽しめる海岸区域。昼は御散策、夕方は海上パレード、夜は祝祭に変わります。",
  },
  {
    title: "Entertainment City",
    label: "祝祭都市",
    description:
      "劇場、音楽、式典、ナイトショーを制御された演出で提供する都市区域。最上位の賓客にも高揚していただく祝祭を担います。",
  },
  {
    title: "Jungle Village",
    label: "森の村",
    description:
      "森、滝、ヴィラ、星空、野生の気配を安全に体験する自然区域。静かな冒険として北海道の自然を味わえます。",
  },
  {
    title: "Yupiteru",
    label: "ユピテル",
    description:
      "Paradiseの中にあるワクワクの中心地。MasterとDragonと一緒に、まだ名前のない遊び、発見、Goods、次の楽園体験を生み出します。",
  },
];

const paradiseSlides: Slide[] = [
  {
    id: 1,
    title: "Yupiteru Wonder Route",
    description: "ユピテルから始まり、食、海、空、祝祭へ広がるParadiseのワクワク導線。",
    image: "/images/paradise-theme-park.jpg",
    textColor: "#fff7e2",
  },
  {
    id: 2,
    title: "Sky Palace Festival",
    description: "天空晩餐、夜景、花火、音楽が重なる、泊まるだけで楽しいParadiseホテル。",
    image: "/assets/paradise-earth.jpg",
    textColor: "#fff7e2",
  },
  {
    id: 3,
    title: "Ocean Parade",
    description: "港、船、夕陽、海上レストラン、花火をつなぎ、海そのものを祝祭にします。",
    image: "/images/shokujibabeach.jpg",
    textColor: "#fff7e2",
  },
];

const yupiteruSteps = [
  {
    title: "Masterと決める",
    text: "今日の気分、食べたいもの、行きたい場所を選び、Paradiseの一日を始めます。",
  },
  {
    title: "Dragonと飛ぶ",
    text: "Dragonが空から道を見つけ、海、山、ホテル、祝祭都市へ連れていきます。",
  },
  {
    title: "新しい遊びが生まれる",
    text: "ユピテルで見つけた発見から、Goods、物語、次のParadise体験が増えていきます。",
  },
];

export default function ParadisePage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/assets/paradise-earth.jpg"
            alt="Shokujiba Paradiseわくわく迎賓構想"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroPanel}>
            <p className={styles.eyebrow}>Shokujiba Paradise with Yupiteru</p>
            <h1>ユピテルがある、ワクワクするParadiseへ。</h1>
            <p className={styles.lead}>
              Shokujiba Paradiseは、北海道の海、山、食、宿泊、祝祭をめぐる楽園です。
              その中にあるユピテルは、MasterとDragonが新しい遊びを見つけるワクワクの中心地。
              休む、巡る、食べる、遊ぶがひとつにつながります。
            </p>
            <div className={styles.actions}>
              <a href="#yupiteru" className={styles.primary}>
                ユピテルへ行く
              </a>
              <a href="#zones" className={styles.secondary}>
                Paradiseを巡る
              </a>
            </div>
          </div>
        </section>

        <section className={styles.scaleBoard} aria-label="Paradise scale">
          {scale.map((item) => (
            <div className={styles.scaleItem} key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className={styles.statement}>
          <p className={styles.sectionLabel}>Official Wonder</p>
          <h2>Paradiseの中に、ユピテルのワクワクがある。</h2>
          <p>
            Paradiseは、ただ眺める場所ではありません。Masterと遊び、Dragonと空を巡り、
            食べて、泊まって、見つけて、次の体験を生み出す場所です。
            ユピテルはその中心にある、まだ名前のない発見が集まるワクワクスポットです。
          </p>
        </section>

        <section className={styles.yupiteruFeature} id="yupiteru" aria-labelledby="yupiteru-title">
          <div className={styles.yupiteruImageFrame}>
            <Image
              src="/images/dragonai.png"
              alt="ユピテルを案内するShokujiba Dragon"
              width={520}
              height={520}
              className={styles.yupiteruDragon}
            />
          </div>
          <div className={styles.yupiteruText}>
            <p className={styles.sectionLabel}>Yupiteru in Paradise</p>
            <h2 id="yupiteru-title">ユピテルとは、Paradiseにあるワクワクする場所です。</h2>
            <p>
              ここでは、Masterが今日の遊びを決め、Dragonが次の場所へ連れていきます。
              食材、Goods、ホテル、海、祝祭、物語がつながり、Paradiseの新しい一日が始まります。
            </p>
          </div>
        </section>

        <section className={styles.yupiteruSteps} aria-label="ユピテルの遊び方">
          {yupiteruSteps.map((step) => (
            <article className={styles.yupiteruStep} key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </section>

        <section className={styles.protocol} id="protocol" aria-label="迎賓計画">
          {protocols.map((item) => (
            <article className={styles.protocolCard} key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className={styles.wonder} aria-labelledby="wonder-title">
          <div className={styles.wonderHeader}>
            <p className={styles.sectionLabel}>Wakuwaku Moments</p>
            <h2 id="wonder-title">胸が高鳴る六つの瞬間。</h2>
          </div>
          <div className={styles.wonderGrid}>
            {wonderMoments.map((moment) => (
              <article className={styles.wonderCard} key={moment.title}>
                <span>{moment.label}</span>
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.carouselSection} aria-label="Paradise journey">
          <div className={styles.carouselHeader}>
            <p className={styles.sectionLabel}>Guest Journey</p>
            <h2>ユピテルから広がるParadiseコース。</h2>
          </div>
          <Carousel slides={paradiseSlides} />
        </section>

        <section className={styles.zones} id="zones" aria-label="Paradise zones">
          {zones.map((zone) => (
            <article
              className={`${styles.zone} ${zone.title === "Yupiteru" ? styles.yupiteruZone : ""}`}
              key={zone.title}
            >
              <span>{zone.label}</span>
              <h3>{zone.title}</h3>
              <p>{zone.description}</p>
            </article>
          ))}
        </section>

        <section className={styles.contact} aria-label="Contact Master">
          <div>
            <p className={styles.sectionLabel}>Audience With Master</p>
            <h2>MasterとParadiseを広げる。</h2>
          </div>
          <div className={styles.contactBody}>
            <p>
              出資、協業、土地提供、飲食出店、イベント、メディア掲載、採用などはこちらから。
            </p>
            <a href="mailto:shokujibamaster@gmail.com" className={styles.mailLink}>
              shokujibamaster@gmail.com
            </a>
            <Link href="/" className={styles.homeLink}>
              公式玄関へ戻る
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
