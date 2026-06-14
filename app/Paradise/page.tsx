import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Carousel, { type Slide } from "@/components/Carousel";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const scale = [
  { value: "Dreams", label: "夢を叶える場所" },
  { value: "Wishes", label: "願いを形にする楽園" },
  { value: "UpiteL", label: "たくさんある場所のひとつ" },
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
    text: "ShokujibaのShokuzaiを選び、買い、味わう体験。香り、器、景色まで含めてParadiseの食にします。",
  },
  {
    title: "遊ぶ",
    label: "Play",
    text: "Dragon、Master、Goods、UpiteL、さまざまな場所がつながり、Paradiseの中で次の遊びを生み出していきます。",
  },
];

const paradiseMarket = [
  {
    href: "/Dispense",
    title: "Shokuzaiを買う",
    label: "Food Market",
    image: "/images/shokujiba-receive-energy.jpg",
    text: "果物、野菜、肉、魚、飲料。Paradiseの中でShokujibaの食材を見つけて、食べたいものを選びます。",
  },
  {
    href: "/Goods",
    title: "Goodsを買う",
    label: "Goods Shop",
    image: "/images/luxury.png",
    text: "お守り、装飾、衣服、財布。Paradiseで遊んだ記憶を持ち帰るためのGoodsを選びます。",
  },
  {
    href: "/upitel",
    title: "UpiteLへ行く",
    label: "Community Place",
    image: "/images/hiroma.png",
    text: "Paradiseにたくさんある場所のひとつ。宇宙人、料理人、商人、神、人間が集まる交流の場所です。",
  },
];

const wishPlaces = [
  {
    title: "欲望を満たす場所",
    label: "Desire",
    text: "食べたい、欲しい、泊まりたい、遊びたい。Paradiseではその気持ちを体験に変えます。",
  },
  {
    title: "夢を広げる場所",
    label: "Dream",
    text: "海、山、ホテル、祝祭、城、温泉。頭の中の夢が、歩ける場所として広がります。",
  },
  {
    title: "願いを叶える場所",
    label: "Wish",
    text: "誰かに会いたい、何かを買いたい、新しい世界を見たい。その願いに行き先を与えます。",
  },
  {
    title: "楽しい場所",
    label: "Fun",
    text: "笑う、驚く、集まる、交換する。UpiteLのような交流場所も、その楽しさのひとつです。",
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
    text: "Shokujibaらしい果物と野菜の楽園。採る、香る、買う、食べる、贈るまでを、静かな冒険として体験します。",
  },
  {
    title: "ユピテル",
    label: "Yupiteru",
    text: "Paradiseにあるワクワクする場所のひとつ。MasterとDragonが新しい遊びを見つけ、次の発見や旅につながります。",
  },
];

const zones = [
  {
    title: "Shokujiba Jungle Village",
    label: "森の村",
    description:
      "森、滝、ヴィラ、星空、自然の気配を楽しめる場所。静かな冒険としてParadiseの自然を味わえます。",
  },
  {
    title: "Shokujiba Paradise Beach",
    label: "楽園の海辺",
    description:
      "白砂、海風、透明な水、夕陽を楽しめる海辺。散歩、休息、遊び、海のワクワクが集まります。",
  },
  {
    title: "UpiteL",
    label: "交流の場所",
    description:
      "宇宙人、料理人、商人、神、人間が集まる交流の場所。食べる、話す、交換する、出会うを楽しめます。",
  },
  {
    title: "Shokujiba Marina Bay",
    label: "海の港",
    description:
      "船、海上散歩、夕陽、海辺の食事を楽しめる港。Paradise BeachやOceanの体験へつながります。",
  },
  {
    title: "Central Mountain",
    label: "中央の山",
    description:
      "Paradiseの中心にある山。景色、朝日、花火、遠くまで見渡す体験を楽しめる象徴の場所です。",
  },
];

const paradiseSlides: Slide[] = [
  {
    id: 1,
    title: "Paradise Wonder Route",
    description: "Shokuzai、Goods、UpiteL、海、空、祝祭へ広がるParadiseのワクワク導線。",
    image: "/images/shokujiba-paradise-concept.png",
    textColor: "#fff7e2",
  },
  {
    id: 2,
    title: "Current Paradise Stay",
    description: "広間、寝床、温泉、ヴィラがつながる、いま見えているParadiseの滞在体験。",
    image: "/images/hiroma.png",
    textColor: "#fff7e2",
  },
  {
    id: 3,
    title: "Ocean Wonder",
    description: "透明な海、波、海辺の祝祭が、ユピテルから広がる水のParadiseをつくります。",
    image: "/images/nami.PNG",
    textColor: "#fff7e2",
  },
];

const currentParadise = [
  {
    title: "Shokujiba Jungle Village",
    label: "Forest",
    image: "/images/sikounoyu.png",
    text: "森、滝、湯、灯りが重なる自然の場所。静かな冒険と休息を楽しめます。",
  },
  {
    title: "Shokujiba Paradise Beach",
    label: "Beach",
    image: "/images/nami.PNG",
    text: "透明な海と白い波の場所。散歩、海遊び、夕陽の時間を楽しめます。",
  },
  {
    title: "UpiteL",
    label: "Community",
    image: "/images/hiroma.png",
    text: "いろんな存在が集まる交流の場所。食べる、話す、交換する、出会うを楽しめます。",
  },
  {
    title: "Shokujiba Marina Bay",
    label: "Marina",
    image: "/images/shokujibabeach.jpg",
    text: "海の港と船の場所。海上散歩、港の食事、海辺の移動を楽しめます。",
  },
  {
    title: "Central Mountain",
    label: "Mountain",
    image: "/images/shokujiba-paradise-concept.png",
    text: "Paradiseを見渡す中央の山。朝日、夜景、花火、眺望を楽しめます。",
  },
  {
    title: "Paradiseの記録",
    label: "Now",
    image: "/images/current-paradise.JPG",
    text: "いま見えているParadiseの気配。ここから次の場所や体験が増えていきます。",
  },
];

const yupiteruSteps = [
  {
    title: "行きたい場所を決める",
    text: "今日の気分、食べたいもの、買いたいもの、会いたい存在からParadiseの一日を始めます。",
  },
  {
    title: "Dragonと巡る",
    text: "Dragonが空から道を見つけ、海、山、ホテル、祝祭都市、UpiteLへ連れていきます。",
  },
  {
    title: "願いが体験になる",
    text: "いろんな場所で見つけた発見から、Goods、物語、交流、次のParadise体験が増えていきます。",
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
            <p className={styles.eyebrow}>Shokujiba Paradise</p>
            <h1>欲望、夢、願いが叶うParadiseへ。</h1>
            <p className={styles.lead}>
              Shokujiba Paradiseは、北海道の海、山、食、宿泊、祝祭、買い物、交流をめぐる楽園です。
              ここではShokujibaのShokuzaiやGoodsを買うことができ、Paradiseの中には
              Shokujiba Jungle Village、Shokujiba Paradise Beach、UpiteL、Shokujiba Marina Bay、
              Central Mountainがあります。それぞれの場所で、休む、巡る、買う、食べる、話す、遊ぶを楽しめます。
            </p>
            <div className={styles.actions}>
              <a href="#market" className={styles.primary}>
                買えるものを見る
              </a>
              <a href="#yupiteru" className={styles.primary}>
                場所を見る
              </a>
              <Link href="/upitel" className={styles.secondary}>
                UpiteL交流所
              </Link>
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

        <section className={styles.currentParadise} aria-labelledby="current-title">
          <div className={styles.currentHeader}>
            <p className={styles.sectionLabel}>Current Paradise</p>
            <h2 id="current-title">現在のParadiseも、ここにあります。</h2>
            <p>
              いまのところ、Jungle Village、Paradise Beach、UpiteL、Marina Bay、Central Mountainがあります。
              それぞれの場所で違う楽しみがあり、次のワクワクへつながっています。
            </p>
          </div>
          <div className={styles.currentHeroImage}>
            <Image
              src="/images/shokujiba-paradise-concept.png"
              alt="現在のParadise構想図"
              width={1536}
              height={1024}
              priority
            />
          </div>
          <div className={styles.currentGrid}>
            {currentParadise.map((place) => (
              <article className={styles.currentCard} key={place.title}>
                <Image
                  src={place.image}
                  alt={`${place.title}の景色`}
                  width={720}
                  height={520}
                  className={styles.currentImage}
                />
                <div>
                  <span>{place.label}</span>
                  <h3>{place.title}</h3>
                  <p>{place.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.marketSection} id="market" aria-labelledby="market-title">
          <div className={styles.marketHeader}>
            <p className={styles.sectionLabel}>Buy and Meet</p>
            <h2 id="market-title">Paradiseでは、ShokuzaiとGoodsが買えて、UpiteLで交流できます。</h2>
            <p>
              Paradiseは景色を見るだけの場所ではありません。Shokujibaの食材を選び、
              Goodsを手に入れ、UpiteLでいろんな存在と出会う場所です。
            </p>
          </div>
          <div className={styles.marketGrid}>
            {paradiseMarket.map((item) => (
              <Link href={item.href} className={styles.marketCard} key={item.title}>
                <Image
                  src={item.image}
                  alt={`${item.title}の案内`}
                  width={720}
                  height={520}
                  className={styles.marketImage}
                />
                <div>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.statement}>
          <p className={styles.sectionLabel}>Official Wonder</p>
            <h2>Paradiseには、いま楽しめる場所があります。</h2>
          <p>
            Paradiseは、ただ眺める場所ではありません。Masterと遊び、Dragonと空を巡り、
            ShokuzaiやGoodsを買い、UpiteLで話し、食べて、泊まって、見つけて、
            次の体験を生み出す場所です。Jungle Village、Paradise Beach、UpiteL、Marina Bay、
            Central Mountainがあり、UpiteLはその中にある交流の場所のひとつです。
          </p>
        </section>

        <section className={styles.wishPlaces} aria-labelledby="wish-title">
          <div className={styles.wishHeader}>
            <p className={styles.sectionLabel}>Many Places</p>
            <h2 id="wish-title">欲望や夢や願いを、場所にする。</h2>
          </div>
          <div className={styles.wishGrid}>
            {wishPlaces.map((place) => (
              <article className={styles.wishCard} key={place.title}>
                <span>{place.label}</span>
                <h3>{place.title}</h3>
                <p>{place.text}</p>
              </article>
            ))}
          </div>
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
            <p className={styles.sectionLabel}>One Place in Paradise</p>
            <h2 id="yupiteru-title">UpiteLは、Paradiseにたくさんある場所のひとつです。</h2>
            <p>
              UpiteLは交流の場所です。宇宙人、料理人、商人、神、人間が集まり、
              Shokuzai、Goods、会話、交換、物語が混ざります。Paradiseにはそのほかにも、
              欲望や夢や願いを叶える場所、楽しい場所がたくさんあります。
            </p>
            <Link href="/upitel" className={styles.yupiteruLink}>
              UpiteLの交流所へ
            </Link>
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

        <section className={styles.placeIntro} aria-labelledby="places-title">
          <p className={styles.sectionLabel}>Current Places</p>
          <h2 id="places-title">いまParadiseにある場所。</h2>
          <p>
            Shokujiba Jungle Village、Shokujiba Paradise Beach、UpiteL、Shokujiba Marina Bay、
            Central Mountain。それぞれの場所で、違う楽しみ方ができます。
          </p>
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
