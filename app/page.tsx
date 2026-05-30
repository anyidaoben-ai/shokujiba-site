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
    title: 'Shokujiba Onsen',
    description: '極上のパラダイス温泉。',
    image: '/images/kaijou.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'Shokujiba Onsen',
    description: '極上のパラダイス温泉。',
    image: '/images/hiroma.png',
    textColor: '#1d1d1f',
  },
  {
    id: 3,
    title: 'Shokujiba Onsen',
    description: '極上のパラダイス温泉。',
    image: '/images/enkaijou.png',
    textColor: '#1d1d1f',
  },
  {
    id: 4,
    title: 'Shokujiba Onsen',
    description: '極上のパラダイス温泉。',
    image: '/images/koushoujou.png',
    textColor: '#1d1d1f',
  },
  {
    id: 5,
    title: 'Shokujiba Onsen',
    description: '極上のパラダイス温泉。',
    image: '/images/nedoko.png',
    textColor: '#1d1d1f',
  },
  {
    id: 6,
    title: 'Shokujiba Onsen',
    description: '極上のパラダイス温泉。',
    image: '/images/oyu.png',
    textColor: '#1d1d1f',
  },
  {
    id: 7,
    title: 'Shokujiba Onsen',
    description: '極上のパラダイス温泉。',
    image: '/images/sikounoyu.png',
    textColor: '#1d1d1f',
  },
];

const beachSlides: Slide[] = [
  {
    id: 1,
    title: 'Shokujiba Beach',
    description: 'Paradiseを感じよう。',
    image: '/images/shokujibabeach.jpg',
    textColor: '#1d1d1f',
  },
  {
    id: 2,
    title: 'Shokujiba Beach',
    description: 'Paradiseを感じよう',
    image: '/images/beach.jpeg',
    textColor: '#1d1d1f',
  },
  {
    id: 3,
    title: 'Shokujiba Beach',
    description: 'Paradiseを感じよう。',
    image: '/images/ocean.JPG',
    textColor: '#1d1d1f',

  },
  {
    id: 4,
    title: 'Shokujiba Beach',
    description: 'Paradiseを感じよう。',
    image: '/images/umi.JPG',
    textColor: '#1d1d1f',
  },
];

const oceanSlides: Slide[] = [
  {
    id: 1,
    title: 'Paradise',
    description: '夜のParadise',
    image: '/images/siro.PNG',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'Paradise',
    description: '夜のParadise',
    image: '/images/kanransha.PNG',
    textColor: 'white',
  },
  {
    id: 3,
    title: 'Paradise',
    description: '夜のParadise',
    image: '/images/paradise.PNG',
    textColor: 'white',
  },
  {
    id: 4,
    title: 'Paradise',
    description: '夜のParadise',
    image: '/images/rusutu.PNG',
    textColor: 'white',
  },
];

const hotelSlides: Slide[] = [
  {
    id: 1,
    title: 'Hotel',
    description: '最高の宿泊空間。',
    image: '/images/restoran.PNG',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'Hotel',
    description: '最高の宿泊空間。',
    image: '/images/hotel.PNG',
    textColor: 'white',
  },
  {
    id: 3,
    title: 'Hotel',
    description: '最高の宿泊空間。',
    image: '/images/toshokan.PNG',
    textColor: 'white',
  },
  {
    id: 4,
    title: 'Hotel',
    description: '最高の宿泊空間。',
    image: '/images/bar.PNG',
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
        <Carousel slides={hotelSlides} />
      </main>

      <Footer />
    </>
  );
}