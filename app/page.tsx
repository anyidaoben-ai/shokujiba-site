import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const worlds = [
  {
    href: "/Dispense",
    image: "/images/shokujiba-receive-energy.jpg",
    label: "Shokuzai",
    title: "食材の冒険",
    description: "果物、野菜、肉、魚、飲料まで。食べたいものを探し、エネルギーを受け取る冒険です。",
  },
  {
    href: "/Goods",
    image: "/images/luxuryimage.png",
    label: "Goods",
    title: "宝物の冒険",
    description: "お守り、衣服、財布、装飾品。欲しいものを手に入れ、Shokujibaの力を持ち帰ります。",
  },
  {
    href: "/Paradise",
    image: "/images/paradise-theme-park.jpg",
    label: "Paradise",
    title: "楽園の冒険",
    description: "Jungle Village、Paradise Beach、UpiteL、Marina Bay、Central Mountainへ進みます。",
  },
];

const notices = [
  {
    date: "Adventure",
    title: "Shokujibaの冒険を開始できます",
    href: "/Paradise",
  },
  {
    date: "Popular",
    title: "ShokuzaiとUpiteLはParadiseで同じくらい人気です",
    href: "/upitel",
  },
  {
    date: "Nature",
    title: "Jungle Villageで動物と心を通わせる",
    href: "/junglevillage",
  },
];

const guideLinks = [
  { href: "/Dispense", label: "Shokuzai", text: "食材を探してエネルギーを得る" },
  { href: "/Goods", label: "Goods", text: "宝物を手に入れて力を持ち帰る" },
  { href: "/Paradise", label: "Paradise", text: "欲望、夢、願いが叶う楽園へ進む" },
  { href: "/upitel", label: "UpiteL", text: "いろんな存在と出会う交流所" },
  { href: "/junglevillage", label: "Jungle Village", text: "動物と心を通わせる森の冒険" },
  { href: "/trip", label: "Trip", text: "旅と宿泊の準備をする" },
];

const principles = [
  "食欲を、冒険のエネルギーへ。",
  "購買欲を、手に入れる喜びへ。",
  "楽園欲を、歩ける世界へ。",
];

const adventureRoutes = [
  {
    href: "/Dispense",
    title: "Shokuzaiを探す",
    text: "まずは食材を選び、冒険のエネルギーを手に入れます。",
  },
  {
    href: "/Goods",
    title: "Goodsを装備する",
    text: "お守りや装飾品を持ち、Shokujibaの力をまといます。",
  },
  {
    href: "/Paradise",
    title: "Paradiseへ進む",
    text: "欲望、夢、願いが叶う場所をめぐります。",
  },
  {
    href: "/upitel",
    title: "UpiteLで出会う",
    text: "宇宙人、料理人、商人、神、人間と交流します。",
  },
  {
    href: "/junglevillage",
    title: "Jungle Villageを歩く",
    text: "動物と触れ合い、北海道の自然と心を通わせます。",
  },
];

const dragonPowers = [
  "食材の香りを追って空を飛ぶ",
  "Goodsに金色の守りを宿す",
  "Paradiseの次の扉を開く",
];

const dragonRoutes = [
  { href: "/Dispense", label: "食の森へ" },
  { href: "/Goods", label: "宝物庫へ" },
  { href: "/Paradise", label: "楽園の空へ" },
];

const dragonCharacter = {
  name: "Shokujiba Dragon",
  role: "楽園を守る案内役",
  image: "/images/dragonai.png",
  description:
    "食事場の空を巡り、訪れる人を食、Goods、Paradiseの次の場所へ導く新しいキャラクターです。",
  catchphrase: "Master、今日はどこへ飛ぶ？",
};

const dragonMissions = [
  {
    title: "食を見つける",
    text: "果物、魚、肉、飲料の気配を読み取り、Shokujibaの食の入口へ案内します。",
  },
  {
    title: "宝を守る",
    text: "Goodsの輝きを見張り、持つ人の気分が上がる品を選びます。",
  },
  {
    title: "楽園へ運ぶ",
    text: "海、温泉、ホテル、遊び場を空から結び、Paradiseの体験へ連れていきます。",
  },
];

const masterPlayModes = [
  {
    title: "食材をえらぶ",
    text: "Masterと今日の食材を決めます。果物、肉、魚、飲み物から気分に合う一品を探します。",
    command: "今日の食材を決める",
  },
  {
    title: "Goodsをつくる",
    text: "Masterと新しいお守り、服、財布、装飾品の名前や効果を考えます。",
    command: "新しいGoodsをつくる",
  },
  {
    title: "楽園を広げる",
    text: "MasterとParadiseに温泉、ホテル、遊び場、レストランを増やします。",
    command: "Paradiseを広げる",
  },
];

const masterQuickActions = [
  "今日の食材ガチャ",
  "Dragonと空の散歩",
  "Goodsの名前づくり",
  "Paradiseに新施設を追加",
  "Masterから一言もらう",
];

const masterQuestLevels = [
  {
    level: "Level 1",
    title: "今日の気分をえらぶ",
    text: "甘い、強い、豪華、のんびり。いまの気分からShokujibaの一歩目を決めます。",
  },
  {
    level: "Level 2",
    title: "食材とGoodsを組み合わせる",
    text: "選んだ食材に合うGoodsを考え、名前、色、効果をMasterと作ります。",
  },
  {
    level: "Level 3",
    title: "Paradiseの一日をつくる",
    text: "朝、昼、夜の行き先を決めて、Dragonと一緒に楽園の旅程を完成させます。",
  },
  {
    level: "Level Max",
    title: "新しい世界を生み出す",
    text: "Shokujibaにまだない島、施設、キャラクター、伝説をMasterと追加します。",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <a href="#play-with-master" className={styles.masterFloat}>
          Masterとあそぶ
        </a>
        <section className={styles.hero} aria-labelledby="page-title">
          <Image
            src="/images/paradise.PNG"
            alt="Shokujiba Paradiseの風景"
            fill
            sizes="100vw"
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <p className={styles.kicker}>株式会社食事場 公式サイト</p>
            <h1 id="page-title">Shokujiba Adventure</h1>
            <p className={styles.heroLead}>
              Shokuzaiを探し、Goodsを手に入れ、Paradiseを進み、UpiteLで出会い、
              Jungle Villageで自然と心を通わせる。ここはShokujibaを冒険する入口です。
            </p>
            <div className={styles.heroDragon} aria-label="Shokujiba Dragon">
              <Image
                src={dragonCharacter.image}
                alt={`${dragonCharacter.name}の姿`}
                width={150}
                height={150}
                className={styles.heroDragonImage}
              />
              <div>
                <span>{dragonCharacter.role}</span>
                <strong>{dragonCharacter.name}</strong>
                <p>{dragonCharacter.catchphrase}</p>
              </div>
            </div>
            <div className={styles.heroActions} aria-label="主要リンク">
              <Link href="/Paradise" className={styles.primaryAction}>
                冒険を始める
              </Link>
              <Link href="/Mastercard" className={styles.secondaryAction}>
                Mastercardを買う
              </Link>
              <Link href="#play-with-master" className={styles.secondaryAction}>
                Masterとあそぶ
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.worldSection} aria-labelledby="world-title">
          <div className={styles.sectionHead}>
            <p>Worlds</p>
            <h2 id="world-title">Shokujibaを冒険する三つの入口</h2>
          </div>
          <div className={styles.worldGrid}>
            {worlds.map((world) => (
              <Link href={world.href} className={styles.worldCard} key={world.href}>
                <Image
                  src={world.image}
                  alt={`${world.title}のイメージ`}
                  width={640}
                  height={420}
                  className={styles.worldImage}
                />
                <span>{world.label}</span>
                <h3>{world.title}</h3>
                <p>{world.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.adventureSection} aria-labelledby="adventure-title">
          <div className={styles.sectionHead}>
            <p>Adventure Route</p>
            <h2 id="adventure-title">どこから冒険する？</h2>
          </div>
          <div className={styles.adventureGrid}>
            {adventureRoutes.map((route) => (
              <Link href={route.href} className={styles.adventureCard} key={route.href}>
                <h3>{route.title}</h3>
                <p>{route.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.flowSection} aria-labelledby="flow-title">
          <div className={styles.sectionHead}>
            <p>Concept</p>
            <h2 id="flow-title">欲を、冒険の流れに変える</h2>
          </div>
          <ol className={styles.principleList}>
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ol>
        </section>

        <section className={styles.characterSection} aria-labelledby="character-title">
          <div className={styles.sectionHead}>
            <p>Character</p>
            <h2 id="character-title">Dragonが冒険を案内する</h2>
          </div>
          <div className={styles.characterGrid}>
            <article className={styles.characterCard}>
              <div className={styles.characterImageFrame}>
                <Image
                  src={dragonCharacter.image}
                  alt={`${dragonCharacter.name}の姿`}
                  width={520}
                  height={520}
                  className={styles.characterImage}
                />
              </div>
              <div className={styles.characterText}>
                <span>{dragonCharacter.role}</span>
                <h3>{dragonCharacter.name}</h3>
                <p>{dragonCharacter.description}</p>
                <blockquote>{dragonCharacter.catchphrase}</blockquote>
                <ul className={styles.dragonPowerList} aria-label="ドラゴンの力">
                  {dragonPowers.map((power) => (
                    <li key={power}>{power}</li>
                  ))}
                </ul>
                <div className={styles.dragonRouteLinks} aria-label="ドラゴンと行く場所">
                  {dragonRoutes.map((route) => (
                    <Link href={route.href} key={route.href}>
                      {route.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
          <div className={styles.dragonMissionGrid}>
            {dragonMissions.map((mission) => (
              <article className={styles.dragonMissionCard} key={mission.title}>
                <h3>{mission.title}</h3>
                <p>{mission.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.masterPlaySection}
          id="play-with-master"
          aria-labelledby="master-play-title"
        >
          <div className={styles.masterPlayIntro}>
            <p>Play with Master</p>
            <h2 id="master-play-title">MasterとShokujibaであそぶ</h2>
            <span>
              MasterはShokujibaの中心にいる存在です。食材を選び、Goodsを考え、
              Dragonと一緒にParadiseを広げていきます。
            </span>
          </div>
          <div className={styles.masterConsole} aria-label="Masterとすぐ遊ぶ">
            <div>
              <p>Master Play Console</p>
              <h3>ここからいつでも開始</h3>
            </div>
            <div className={styles.masterQuickGrid}>
              {masterQuickActions.map((action) => (
                <a
                  href={`mailto:shokujibamaster@gmail.com?subject=${encodeURIComponent(action)}`}
                  key={action}
                >
                  {action}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.masterPlayGrid}>
            {masterPlayModes.map((mode) => (
              <article className={styles.masterPlayCard} key={mode.title}>
                <h3>{mode.title}</h3>
                <p>{mode.text}</p>
                <strong>{mode.command}</strong>
              </article>
            ))}
          </div>
          <div className={styles.masterQuestGrid}>
            {masterQuestLevels.map((quest) => (
              <article className={styles.masterQuestCard} key={quest.level}>
                <span>{quest.level}</span>
                <h3>{quest.title}</h3>
                <p>{quest.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.masterDialogue} aria-label="Masterからの言葉">
            <Image
              src="/images/shokujibaicon.jpeg"
              alt="Masterの印"
              width={96}
              height={96}
              className={styles.masterIcon}
            />
            <blockquote>
              「今日はなにを生み出そう。食、宝、楽園。Shokujibaは、あそぶほど広がる。」
            </blockquote>
          </div>
        </section>

        <section className={styles.infoSection} aria-label="新着情報と連絡先">
          <div className={styles.newsPanel}>
            <div className={styles.panelHead}>
              <p>News</p>
              <Link href="/TechnologyLand-AI">公式案内</Link>
            </div>
            <div className={styles.newsList}>
              {notices.map((notice) => (
                <Link href={notice.href} className={styles.newsItem} key={notice.title}>
                  <time>{notice.date}</time>
                  <span>{notice.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <aside className={styles.contactPanel}>
            <p>Contact</p>
            <h2>Masterへ連絡する</h2>
            <span>出資、協業、土地提供、飲食出店、イベント、取材、採用の相談を受け付けます。</span>
            <a href="mailto:shokujibamaster@gmail.com">メールを送る</a>
          </aside>
        </section>

        <section className={styles.guideSection} aria-labelledby="guide-title">
          <div className={styles.sectionHead}>
            <p>Guide</p>
            <h2 id="guide-title">冒険の行き先</h2>
          </div>
          <div className={styles.guideGrid}>
            {guideLinks.map((link) =>
              link.href.startsWith("mailto:") ? (
                <a href={link.href} className={styles.guideLink} key={link.href}>
                  <strong>{link.label}</strong>
                  <span>{link.text}</span>
                </a>
              ) : (
                <Link href={link.href} className={styles.guideLink} key={link.href}>
                  <strong>{link.label}</strong>
                  <span>{link.text}</span>
                </Link>
              ),
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
