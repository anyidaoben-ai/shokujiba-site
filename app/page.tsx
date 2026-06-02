import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import type { Slide } from '@/components/Carousel';
import Link from 'next/link';
import styles from './page.module.css';

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "食事場",
  alternateName: "Shokujiba",
  url: "https://shokujiba-site.vercel.app",
};
const onsenSlides: Slide[] = [
  {
    id: 1,
    title: '',
    description: '',
    image: '/images/luxury.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: '',
    description: '',
    image: '/images/luxuryimage.png',
    textColor: '#1d1d1f',
  },
  {
    id: 3,
    title: '',
    description: '',
    image: '/images/villa.png',
    textColor: '#1d1d1f',
  },
  {
    id: 4,
    title: '',
    description: '',
    image: '/images/lvilla.png',
    textColor: '#1d1d1f',
  },
];

const beachSlides: Slide[] = [
  {
    id: 1,
    title: '',
    description: '',
    image: '/images/water.png',
    textColor: '#1d1d1f',
  },
  {
    id: 2,
    title: '',
    description: '',
    image: '/images/waterl.png',
    textColor: '#1d1d1f',
  },
  {
    id: 3,
    title: '',
    description: '',
    image: '/images/waterroom.png',
    textColor: '#1d1d1f',
  },
  {
    id: 4,
    title: '',
    description: '',
    image: '/images/oceanspa.png',
    textColor: '#1d1d1f',
  },
];

const oceanSlides: Slide[] = [
  {
    id: 1,
    title: '',
    description: '',
    image: '/images/dining.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: '',
    description: '',
    image: '/images/ryouri.png',
    textColor: 'white',
  },
  {
    id: 3,
    title: '',
    description: '',
    image: '/images/pasuta.png',
    textColor: 'white',
  },
  {
    id: 4,
    title: '',
    description: '',
    image: '/images/dryouri.png',
    textColor: 'white',
  },
];

const nightShowSlides: Slide[] = [
  {
    id: 1,
    title: '',
    description: '',
    image: '/images/nights.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: '',
    description: '',
    image: '/images/nighti.png',
    textColor: 'white',
  },
  {
    id: 3,
    title: '',
    description: '',
    image: '/images/nighth.png',
    textColor: 'white',
  },
  {
    id: 4,
    title: '',
    description: '',
    image: '/images/show.png',
    textColor: 'white',
  },
];

const shoppingSlides: Slide[] = [
  {
    id: 1,
    title: '',
    description: '',
    image: '/images/shopping.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: '',
    description: '',
    image: '/images/shoppin.png',
    textColor: 'white',
  },
  {
    id: 3,
    title: '',
    description: '',
    image: '/images/shopp.png',
    textColor: 'white',
  },
  {
    id: 4,
    title: '',
    description: '',
    image: '/images/shoppinga.png',
    textColor: 'white',
  },
];

const sportsSlides: Slide[] = [
  {
    id: 1,
    title: '',
    description: '',
    image: '/images/sportsarena.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: '',
    description: '',
    image: '/images/sportsa.png',
    textColor: 'white',
  },
  {
    id: 3,
    title: '',
    description: '',
    image: '/images/sportsar.png',
    textColor: 'white',
  },
  {
    id: 4,
    title: '',
    description: '',
    image: '/images/sportsare.png',
    textColor: 'white',
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
            <p className={styles.eyebrow}>5th Dimension Dining World</p>
            <h1 id="shokujiba-title">食事場</h1>
            <p className={styles.subtitle}>Shokujiba 公式サイト</p>
            <p className={styles.lead}>
              空に浮かぶ地球から、料理、旅、温泉、海、買い物、夜のショーが芽吹く。
              Shokujibaは、自然と高級感が同じ世界に息づく5次元の食事場です。
            </p>

            <nav className={styles.worldTabs} aria-label="Shokujiba worlds">
              <Link href="/Dispense" className={styles.worldTab}>Dispens</Link>
              <Link href="/Goods" className={styles.worldTab}>Goods</Link>
              <Link href="/Paradise" className={styles.worldTab}>Paradise</Link>
              <Link href="/TechnologyLand-AI" className={styles.worldTab}>Services</Link>
            </nav>
          </div>

          <div className={styles.planetStage} aria-hidden="true">
            <div className={styles.dimensionRing} />
            <div className={styles.planet}>
              <span className={`${styles.land} ${styles.landOne}`} />
              <span className={`${styles.land} ${styles.landTwo}`} />
              <span className={`${styles.land} ${styles.landThree}`} />
              <span className={`${styles.land} ${styles.landFour}`} />
              <span className={`${styles.planetCloud} ${styles.planetCloudOne}`} />
              <span className={`${styles.planetCloud} ${styles.planetCloudTwo}`} />
            </div>
            <div className={`${styles.sprout} ${styles.sproutMain}`}>
              <span className={styles.stem} />
              <span className={`${styles.leaf} ${styles.leafLeft}`} />
              <span className={`${styles.leaf} ${styles.leafRight}`} />
              <span className={`${styles.leaf} ${styles.leafSmall}`} />
            </div>
            <div className={`${styles.sprout} ${styles.sproutSmall}`}>
              <span className={styles.stem} />
              <span className={`${styles.leaf} ${styles.leafLeft}`} />
              <span className={`${styles.leaf} ${styles.leafRight}`} />
            </div>
          </div>
        </section>

        <section className={styles.intro}>
          <p className={styles.sectionLabel}>World Concept</p>
          <h2>地球の上に、食事場の世界が生えている。</h2>
          <div className={styles.conceptGrid}>
            <article className={styles.conceptCard}>
              <span>Sky</span>
              <h3>空と光</h3>
              <p>澄んだ青空と雲の奥行きで、サイト全体を軽やかな別世界として見せます。</p>
            </article>
            <article className={styles.conceptCard}>
              <span>Earth</span>
              <h3>地球と自然</h3>
              <p>丸い惑星、海、緑、芽吹きを重ねて、Shokujibaの生命感を表現します。</p>
            </article>
            <article className={styles.conceptCard}>
              <span>Dining</span>
              <h3>高級な食事場</h3>
              <p>金色のラインとガラスの質感で、食とリゾートの上質さを残します。</p>
            </article>
          </div>
        </section>

        <section className={styles.carouselWorlds} aria-label="Shokujiba experience gallery">
          <p className={styles.sectionLabel}>Experience Gates</p>
          <h2>5次元の食事場へ入る。</h2>
          <Carousel slides={onsenSlides} />
          <Carousel slides={beachSlides} />
          <Carousel slides={oceanSlides} />
          <Carousel slides={nightShowSlides} />
          <Carousel slides={shoppingSlides} />
          <Carousel slides={sportsSlides} />
        </section>
      </main>

      <Footer />
    </>
  );
}
