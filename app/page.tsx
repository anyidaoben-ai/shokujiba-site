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
            <h1 id="shokujiba-title">食事場</h1>
            <p className={styles.subtitle}>Shokujiba 公式サイト</p>
            <p className={styles.lead}>
              Shokujibaなリンクから、Shokujibaの世界感を体験しよう。Dispens、Goods、Paradise、TripなどShokujibaを楽しめるShokujibaのトップページです。
            </p>
          </div>

          <div className={styles.tabWorld} aria-hidden="true">
            <div className={styles.tabWorldInner}>
              <span className={styles.orbitLine} />
              <span className={styles.worldCore} />
              <span className={styles.worldLeafLeft} />
              <span className={styles.worldLeafRight} />
            </div>
          </div>
        </section>

     

        <section className={styles.carouselWorlds} aria-label="Shokujiba experience gallery">
          <p className={styles.sectionLabel}>Experience Gates</p>
          <h2>Shokujiba Paradise</h2>
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
