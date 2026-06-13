import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Carousel, { type Slide } from "@/components/Carousel";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const scale = [
  { value: "5,000ha", label: "御遊覧と祝祭の庭園" },
  { value: "3,000室", label: "迎賓宿泊と御休息" },
  { value: "500,000,000人", label: "世界から訪れる楽園目標" },
];

const protocols = [
  {
    title: "御休息",
    label: "Imperial Rest",
    text: "人目と喧騒から離れ、北海道の空気、水、森、温泉に包まれる静養導線。休むほど次の体験が楽しみになる時間を整えます。",
  },
  {
    title: "御遊覧",
    label: "Royal Leisure",
    text: "海、山、庭園、劇場、水族館、食の回廊を、品位ある速度で巡る遊覧計画。曲がるたびに驚きが現れる構成です。",
  },
  {
    title: "御食事",
    label: "Ceremonial Dining",
    text: "北海道の食材とShokujibaの食文化を、儀礼性のある献立と空間で提供。香り、器、景色まで一皿として演出します。",
  },
  {
    title: "御移動",
    label: "Mega Transportation",
    text: "空港、駅、港、ホテル、迎賓施設を結び、移動そのものを静かで安全な体験にします。専用列車も船も旅の主役です。",
  },
];

const wonderMoments = [
  {
    title: "御幸列車",
    label: "Royal Train",
    text: "北海道の景色を額縁のように眺める専用列車。車窓、食、音楽、停車駅の演出で移動を祝祭に変えます。",
  },
  {
    title: "海上パレード",
    label: "Ocean Parade",
    text: "マリーナから始まる静かな船上遊覧。夕陽、花火、水上音楽、海上レストランが連続して現れます。",
  },
  {
    title: "天空晩餐",
    label: "Sky Dinner",
    text: "Sky Palace Hotelの上層で、北海道の夜景と花火を見ながら行う晩餐。食事そのものが記憶になります。",
  },
  {
    title: "夜の祝祭",
    label: "Night Ceremony",
    text: "Entertainment Cityで行う光、音楽、噴水、ドローン、花火の祝祭。派手さではなく品位のある高揚を設計します。",
  },
  {
    title: "秘密の果樹園",
    label: "Hidden Orchard",
    text: "Shokujibaらしい果物と野菜の楽園。採る、香る、食べる、贈るまでを、静かな冒険として体験します。",
  },
  {
    title: "ユピテル",
    label: "Yupiteru",
    text: "Paradiseにある、MasterとDragonが新しい遊びを見つけるワクワクする場所。次の発見がここから始まります。",
  },
];

const zones = [
  {
    title: "Imperial Garden",
    label: "迎賓庭園",
    description:
      "御散策、記念植樹、茶席、静かな写真撮影に対応する庭園。次の小道に何があるのか楽しみになる、Paradiseの公式入口です。",
  },
  {
    title: "Sky Palace Hotel",
    label: "迎賓宿泊",
    description:
      "皇室級・国賓級の賓客にも対応できるスイート、控室、会食室、警備動線を備える宿泊中枢。空に近い部屋から祝祭を見下ろせます。",
  },
  {
    title: "Central Mountain",
    label: "象徴山岳",
    description:
      "北海道全域の眺望、花火、式典、朝の御来光を体験できるParadiseの象徴。登るほど世界が広がる中心ランドマークです。",
  },
  {
    title: "Wellness Island",
    label: "静養島",
    description:
      "温泉、スパ、医療リトリート、瞑想、長期滞在に対応する静の区域。回復したあとにもう一度遊びたくなる場所です。",
  },
  {
    title: "Ocean Kingdom",
    label: "海洋御遊覧",
    description:
      "水族館、海上レストラン、海中鑑賞、船上遊覧を含む海の迎賓区域。海の奥へ進むほど驚きが増える設計です。",
  },
  {
    title: "Paradise Beach",
    label: "沿岸御散策",
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
    label: "自然御滞在",
    description:
      "森、滝、ヴィラ、星空、野生の気配を安全に体験する自然区域。静かな冒険として北海道の自然を味わえます。",
  },
  {
    title: "Yupiteru",
    label: "ユピテル",
    description:
      "Paradiseの中にあるワクワクする場所。MasterとDragonと一緒に、まだ名前のない遊び、発見、Goods、次の楽園体験を生み出します。",
  },
];

const paradiseSlides: Slide[] = [
  {
    id: 1,
    title: "Royal Surprise Route",
    description: "天皇陛下にも胸を高鳴らせていただける、静かな驚きが連続する御遊覧コース。",
    image: "/images/paradise-theme-park.jpg",
    textColor: "#fff7e2",
  },
  {
    id: 2,
    title: "Sky Palace Festival",
    description: "天空晩餐、夜景、花火、音楽が重なる、品位あるわくわくを生む迎賓ホテル。",
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
            <p className={styles.eyebrow}>Shokujiba Paradise Imperial Wonder Plan</p>
            <h1>天皇陛下にも、わくわくしていただける楽園へ。</h1>
            <p className={styles.lead}>
              Shokujiba Paradiseは、北海道全域を品位ある迎賓地として整えながら、
              最上位の賓客にも胸が高鳴る体験を届ける構想です。
              御休息、御遊覧、御食事、御移動、祝祭、発見、そしてユピテルのワクワクを一体で設計します。
            </p>
            <div className={styles.actions}>
              <a href="#protocol" className={styles.primary}>
                わくわく計画を見る
              </a>
              <a href="mailto:shokujibamaster@gmail.com" className={styles.secondary}>
                Masterへ連絡
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
          <h2>静かな格式の中に、発見の連続を仕込む。</h2>
          <p>
            Paradiseは派手な娯楽施設だけではありません。静けさ、清潔さ、安全性を守りながら、
            次の扉を開けるたびに驚きが現れる場所です。天皇陛下級の賓客にも、
            童心のような高揚を感じていただける楽園を目指します。
          </p>
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
            <h2 id="wonder-title">胸が高鳴る五つの瞬間。</h2>
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

        <section className={styles.carouselSection} aria-label="迎賓資産">
          <div className={styles.carouselHeader}>
            <p className={styles.sectionLabel}>Guest Journey</p>
            <h2>わくわくする御遊覧コース。</h2>
          </div>
          <Carousel slides={paradiseSlides} />
        </section>

        <section className={styles.zones} aria-label="Paradise zones">
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
            <p className={styles.sectionLabel}>Audience With Master</p>
            <h2>迎賓、出資、協業の相談。</h2>
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
