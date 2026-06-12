import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const primarySections = [
  {
    href: "/Dispense",
    title: "食事場の食を知る",
    description: "果物、野菜、肉、魚、飲料など、Shokujibaの食欲経済を案内します。",
  },
  {
    href: "/Goods",
    title: "食事場の品位を身につける",
    description: "お守り、衣服、財布、装飾品など、所有欲を満たすGoodsを案内します。",
  },
  {
    href: "/Paradise",
    title: "食事場の楽園を訪れる",
    description: "北海道全域を舞台とするShokujiba Paradise構想を案内します。",
  },
];

const notices = [
  {
    date: "令和8年6月12日",
    title: "株式会社食事場の公式玄関を整備しました",
    href: "/TechnologyLand-AI",
  },
  {
    date: "令和8年6月12日",
    title: "Shokujiba Paradiseの事業構想を公開しています",
    href: "/Paradise",
  },
  {
    date: "令和8年6月12日",
    title: "北海道ホテル滞在案内をTripに掲載しました",
    href: "/trip",
  },
];

const contentLinks = [
  { href: "/TechnologyLand-AI", label: "株式会社食事場について" },
  { href: "/Dispense", label: "食材・飲料のご案内" },
  { href: "/Goods", label: "Goodsのご案内" },
  { href: "/Paradise", label: "Paradise構想" },
  { href: "/trip", label: "北海道宿泊案内" },
  { href: "mailto:shokujibamaster@gmail.com", label: "ご意見・お問い合わせ" },
];

const activityCards = [
  {
    title: "Masterについて",
    text: "Shokujibaを創ったMasterは、株式会社食事場の思想と世界観を司る中心人物です。",
  },
  {
    title: "食事場の役割",
    text: "食欲、購買欲、楽園欲を秩序ある体験へ変換し、生活の中に豊かさを配します。",
  },
  {
    title: "公式連絡",
    text: "出資、協業、土地提供、飲食出店、イベント、メディア掲載、採用などを受け付けます。",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="page-title">
          <div className={styles.heroText}>
            <p className={styles.kicker}>株式会社食事場</p>
            <h1 id="page-title">Shokujiba Paradise</h1>
            <p>
              食欲、購買欲、楽園欲をひとつに束ねる、株式会社食事場の公式案内です。
              事業、構想、商品、宿泊、連絡先をこちらから確認できます。
            </p>
          </div>
          <div className={styles.heroPortrait}>
            <Image
              src="/images/shokujibaicon.jpeg"
              alt="株式会社食事場の印"
              width={170}
              height={170}
              priority
            />
            <span>Official Portal</span>
          </div>
        </section>

        <section className={styles.primaryNav} aria-label="主要案内">
          {primarySections.map((item) => (
            <Link href={item.href} className={styles.primaryCard} key={item.href}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          ))}
        </section>

        <section className={styles.infoGrid}>
          <div className={styles.noticePanel}>
            <div className={styles.panelHead}>
              <p>注目情報</p>
              <Link href="/TechnologyLand-AI">もっと見る</Link>
            </div>
            <div className={styles.noticeList}>
              {notices.map((notice) => (
                <Link href={notice.href} className={styles.noticeItem} key={notice.title}>
                  <time>{notice.date}</time>
                  <span>{notice.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <aside className={styles.contactPanel} aria-label="お問い合わせ">
            <p>お問い合わせ</p>
            <h2>Masterへ連絡する</h2>
            <span>
              出資、協業、土地提供、飲食出店、イベント、メディア掲載、採用などはこちらから。
            </span>
            <a href="mailto:shokujibamaster@gmail.com">メールを送る</a>
          </aside>
        </section>

        <section className={styles.activitySection} aria-labelledby="activity-title">
          <div className={styles.sectionTitle}>
            <p>食事場のご活動</p>
            <h2 id="activity-title">Shokujibaの現在</h2>
          </div>
          <div className={styles.activityGrid}>
            {activityCards.map((card) => (
              <article className={styles.activityCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contents} aria-label="食事場コンテンツ">
          <div className={styles.sectionTitle}>
            <p>食事場コンテンツ</p>
            <h2>各種案内</h2>
          </div>
          <div className={styles.contentLinks}>
            {contentLinks.map((link) =>
              link.href.startsWith("mailto:") ? (
                <a href={link.href} className={styles.contentLink} key={link.href}>
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={styles.contentLink} key={link.href}>
                  {link.label}
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
