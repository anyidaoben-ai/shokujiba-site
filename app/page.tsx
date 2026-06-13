import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const worlds = [
  {
    href: "/Dispense",
    image: "/images/shokujiba-receive-energy.jpg",
    label: "Dispense",
    title: "食の世界",
    description: "果物、野菜、肉、魚、飲料まで。Shokujibaの食欲経済をめぐる案内所です。",
  },
  {
    href: "/Goods",
    image: "/images/luxuryimage.png",
    label: "Goods",
    title: "所有の世界",
    description: "お守り、衣服、財布、装飾品。身につけることで食事場の気配を持ち歩く品々です。",
  },
  {
    href: "/Paradise",
    image: "/images/paradise-theme-park.jpg",
    label: "Paradise",
    title: "楽園の世界",
    description: "北海道を舞台に、宿泊、温泉、海、食、遊びを束ねる構想を案内します。",
  },
];

const notices = [
  {
    date: "2026.06.12",
    title: "株式会社食事場の公式玄関を更新しました",
    href: "/TechnologyLand-AI",
  },
  {
    date: "2026.06.12",
    title: "Shokujiba Paradiseの構想を公開しています",
    href: "/Paradise",
  },
  {
    date: "2026.06.12",
    title: "北海道宿泊案内をTripに掲載しました",
    href: "/trip",
  },
];

const guideLinks = [
  { href: "/TechnologyLand-AI", label: "会社案内", text: "株式会社食事場の思想と活動" },
  { href: "/Dispense", label: "食材案内", text: "食材、飲料、名産品" },
  { href: "/Goods", label: "Goods", text: "装飾品と所有体験" },
  { href: "/Paradise", label: "Paradise", text: "楽園構想と施設案内" },
  { href: "/trip", label: "Trip", text: "北海道の宿泊案内" },
  { href: "mailto:shokujibamaster@gmail.com", label: "Contact", text: "協業、出資、取材、採用" },
];

const principles = [
  "食欲を、選ぶ楽しさへ。",
  "購買欲を、品位ある所有へ。",
  "楽園欲を、現実の体験へ。",
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

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
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
            <h1 id="page-title">Shokujiba Paradise</h1>
            <p className={styles.heroLead}>
              食、Goods、楽園構想、宿泊案内、公式連絡先をひとつにまとめた、
              Shokujibaの入口です。
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
                Paradiseを見る
              </Link>
              <Link href="/TechnologyLand-AI" className={styles.secondaryAction}>
                会社案内へ
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.worldSection} aria-labelledby="world-title">
          <div className={styles.sectionHead}>
            <p>Worlds</p>
            <h2 id="world-title">Shokujibaをめぐる三つの入口</h2>
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

        <section className={styles.flowSection} aria-labelledby="flow-title">
          <div className={styles.sectionHead}>
            <p>Concept</p>
            <h2 id="flow-title">欲を、体験の流れに変える</h2>
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
            <h2 id="character-title">Shokujibaに新しい案内役が登場</h2>
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
            <h2 id="guide-title">各種案内</h2>
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
