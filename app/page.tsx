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

const characters = [
  {
    name: "Shokujiba Dragon",
    role: "楽園を守る案内役",
    image: "/images/dragonai.png",
    description:
      "食事場の空を巡り、訪れる人を食、Goods、Paradiseの次の場所へ導く新しいキャラクターです。",
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
            {characters.map((character) => (
              <article className={styles.characterCard} key={character.name}>
                <div className={styles.characterImageFrame}>
                  <Image
                    src={character.image}
                    alt={`${character.name}の姿`}
                    width={520}
                    height={520}
                    className={styles.characterImage}
                  />
                </div>
                <div className={styles.characterText}>
                  <span>{character.role}</span>
                  <h3>{character.name}</h3>
                  <p>{character.description}</p>
                </div>
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
