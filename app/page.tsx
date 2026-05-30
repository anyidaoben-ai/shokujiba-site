import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import type { Slide } from '@/components/Carousel';
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
    title: 'LUXURY VILLA',
    description: '',
    image: '/images/luxury.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'LUXURY VILLA',
    description: '',
    image: '/images/luxuryimage.png',
    textColor: '#1d1d1f',
  },
  {
    id: 3,
    title: 'LUXURY VILLA',
    description: '',
    image: '/images/villa.png',
    textColor: '#1d1d1f',
  },
  {
    id: 4,
    title: 'LUXURY VILLA',
    description: '',
    image: '/images/lvilla.png',
    textColor: '#1d1d1f',
  },
];

const beachSlides: Slide[] = [
  {
    id: 1,
    title: 'UNDERWATER ROOM',
    description: '',
    image: '/images/water.png',
    textColor: '#1d1d1f',
  },
  {
    id: 2,
    title: 'UNDERWATER ROOM',
    description: '',
    image: '/images/waterl.png',
    textColor: '#1d1d1f',
  },
  {
    id: 3,
    title: 'UNDERWATER ROOM',
    description: '',
    image: '/images/waterroom.png',
    textColor: '#1d1d1f',
  },
  {
    id: 4,
    title: 'UNDERWATER ROOM',
    description: '',
    image: '/images/oceanspa.png',
    textColor: '#1d1d1f',
  },
];

const oceanSlides: Slide[] = [
  {
    id: 1,
    title: 'DINING PARADISE',
    description: '',
    image: '/images/dining.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'DINING PARADISE',
    description: '',
    image: '/images/ryouri.png',
    textColor: 'white',
  },
  {
    id: 3,
    title: 'DINING PARADISE',
    description: '',
    image: '/images/pasuta.png',
    textColor: 'white',
  },
  {
    id: 4,
    title: 'DINING PARADISE',
    description: '',
    image: '/images/dryouri.png',
    textColor: 'white',
  },
];

const nightShowSlides: Slide[] = [
  {
    id: 1,
    title: 'NIGHT SHOW',
    description: '',
    image: '/images/nights.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'NIGHT SHOW',
    description: '',
    image: '/images/nighti.png',
    textColor: 'white',
  },
  {
    id: 3,
    title: 'NIGHT SHOW',
    description: '',
    image: '/images/nighth.png',
    textColor: 'white',
  },
  {
    id: 4,
    title: 'NIGHT SHOW',
    description: '',
    image: '/images/show.png',
    textColor: 'white',
  },
];

const shoppingSlides: Slide[] = [
  {
    id: 1,
    title: 'SHOPPING AVENUE',
    description: '',
    image: '/images/shopping.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'SHOPPING AVENUE',
    description: '',
    image: '/images/shoppin.png',
    textColor: 'white',
  },
  {
    id: 3,
    title: 'SHOPPING AVENUE',
    description: '',
    image: '/images/shopp.png',
    textColor: 'white',
  },
  {
    id: 4,
    title: 'SHOPPING AVENUE',
    description: '',
    image: '/images/shoppinga.png',
    textColor: 'white',
  },
];

const sportsSlides: Slide[] = [
  {
    id: 1,
    title: 'SPORTS ARENA',
    description: '',
    image: '/images/sportsarena.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'SPORTS ARENA',
    description: '',
    image: '/images/sportsa.png',
    textColor: 'white',
  },
  {
    id: 3,
    title: 'SPORTS ARENA',
    description: '',
    image: '/images/sportsar.png',
    textColor: 'white',
  },
  {
    id: 4,
    title: 'SPORTS ARENA',
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

      <h1>食事場</h1>
      <p>Shokujiba 公式サイト</p>
    </main>

      <main className={styles.main}>
        <Carousel slides={onsenSlides} />
        <Carousel slides={beachSlides} />
        <Carousel slides={oceanSlides} />
        <Carousel slides={nightShowSlides} />
        <Carousel slides={shoppingSlides} />
        <Carousel slides={sportsSlides} />
      </main>

      <Footer />
    </>
  );
}