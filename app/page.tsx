import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '食事場',
  alternateName: 'Shokujiba',
  url: 'https://shokujiba-site.vercel.app',
};

const worlds = [
  {
    title: 'Shokuzai',
    description: '全て北海道産のオーガニック食材',
    body: 'by Shokujiba',
    href: '/Shokuzai',
  },
  {
    title: 'Goods',
    description: 'Shokujibaの世界を日常へ持ち帰る。',
    body: 'アクセサリー、お守り、ジュエリーなど、Shokujibaの力を身につけ、持ち運ぶためのアイテム（実体のないものを実体にするアイテム）',
    href: '/Goods',
  },
  {
    title: 'Paradise',
    description: 'すべてがあり、すべてが満たされる',
    body: 'Paradiseは、Shokujibaが目指す満たされる世界の姿です。自然と未来都市が重なり、訪れる人の感覚を上の次元へ導きます。',
    href: '/Paradise',
  },
  {
    title: 'Trip',
    description: 'Shokujibaを体験する空間。',
    body: 'Shokujibaの世界を現実の体験として受け取るための空間です。',
    href: '/Trip',
  },
  {
    title: 'Services',
    description: 'Shokujibaの概念を形にするサービス。',
    body: 'Webサイト制作、映像制作、AI表現、世界観設計。Shokujibaの思想や美しさを、実際のサービスとして形にします。',
    href: '/upitel',
  },
  {
    title: 'Contact',
    description: 'Masterとつながる場所。',
    body: '制作の相談、商品について、Paradiseについて、Shokujibaとの関わりはこちらから始まります。',
    href: '/TechnologyLand-AI',
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />

        <section className={styles.hero} aria-labelledby="shokujiba-title">
          <div className={`${styles.cloud} ${styles.cloudOne}`} />
          <div className={`${styles.cloud} ${styles.cloudTwo}`} />
          <div className={`${styles.cloud} ${styles.cloudThree}`} />

          <div className={styles.heroContent}>
            <h1 id="shokujiba-title">Shokujibaへようこそ</h1>
            <p className={styles.subtitle}>Shokujiba 公式サイト</p>
            <p className={styles.lead}>
              Shokujibaなリンクから、Shokujibaの世界感を体感しよう。Shokuzai、Goods、Paradise、TripなどShokujibaを楽しめるトップページです。
            </p>
          </div>
        </section>

        <section className={styles.worldSections} aria-label="Shokujiba worlds">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Shokujiba Worlds</p>
            <h2>Shokujibaの世界をめぐる6つの入口。</h2>
          </div>

          <div className={styles.worldList}>
            {worlds.map((world, index) => (
              <section className={styles.worldSection} key={world.title}>
                <div className={styles.worldImageSlot} aria-label={`${world.title} image area`}>
                  <span className={styles.imageNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.imageSlotText}>Image Area</span>
                </div>

                <div className={styles.worldText}>
                  <p className={styles.worldKicker}>Shokujiba / {world.title}</p>
                  <h3>{world.title}</h3>
                  <p className={styles.worldDescription}>{world.description}</p>
                  <p className={styles.worldBody}>{world.body}</p>
                  <Link className={styles.worldButton} href={world.href}>
                    詳細ページへ進む
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
