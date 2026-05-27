import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import type { Slide } from '@/components/Carousel';
import styles from './page.module.css';

const onsenSlides: Slide[] = [
  {
    id: 1,
    title: 'Paradise Onsen',
    description: '極上のパラダイス温泉。',
    image: '/images/gokujuonsenn.png',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'TechnologyLand',
    description: 'AIのワクワクを、最高の環境で。',
    image: '/images/dragonai.png',
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
    title: 'Japanese Hokkaido',
    description: '道産子パラダイス。',
    image: '/images/japanesehokkaido.jpg',
    textColor: '#1d1d1f',
  },
];

const oceanSlides: Slide[] = [
  {
    id: 1,
    title: 'Ocean',
    description: '海の世界。',
    image: '/images/neontokyo.jpg',
    textColor: 'white',
  },
];

const hotelSlides: Slide[] = [
  {
    id: 1,
    title: 'Hotel',
    description: '最高の宿泊空間。',
    image: '/images/paradise-earth.jpg',
    textColor: 'white',
  },
];

export default function Page() {
  return (
    <>
      <Header />

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