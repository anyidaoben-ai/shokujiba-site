'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const onsenslides = [
  { id: 1, title: 'Paradise Onsenn', description: '極上のパラダイス温泉。極楽の湯。日々の疲れを癒すのに最適', image: '/images/gokujouonsenn.png', textColor: 'white' },
  { id: 2, title: 'TechnologyLand', description: 'AIのワクワクを、最高の環境で。', image: '/images/dragonai.png', textColor: '#1d1d1f' },
  { id: 3, title: 'Japanese Hokkaido', description: '道産子パラダイス。まだまだのびしろあり', image: '/images/japanesehokkaido.jpg', textColor: '#1d1d1f' },
  { id: 4, title: 'Shokujiba Beach', description: 'Paradiseを感じよう。', image: '/images/shokujibabeach.jpg', textColor: '#1d1d1f' },
  { id: 5, title: 'Japanese Tokyo', description: 'Tokyo', image: '/images/neontokyo.jpg', textColor: '#1d1d1f' },
];

const beachslides = [
  { id: 1, title: 'Paradise Onsenn', description: '極上のパラダイス温泉。極楽の湯。日々の疲れを癒すのに最適', image: '/images/gokujouonsenn.png', textColor: 'white' },
  { id: 2, title: 'TechnologyLand', description: 'AIのワクワクを、最高の環境で。', image: '/images/dragonai.png', textColor: '#1d1d1f' },
  { id: 3, title: 'Japanese Hokkaido', description: '道産子パラダイス。まだまだのびしろあり', image: '/images/japanesehokkaido.jpg', textColor: '#1d1d1f' },
  { id: 4, title: 'Shokujiba Beach', description: 'Paradiseを感じよう。', image: '/images/shokujibabeach.jpg', textColor: '#1d1d1f' },
  { id: 5, title: 'Japanese Tokyo', description: 'Tokyo', image: '/images/neontokyo.jpg', textColor: '#1d1d1f' },
];

const oceanslides = [
  { id: 1, title: 'Paradise Onsenn', description: '極上のパラダイス温泉。極楽の湯。日々の疲れを癒すのに最適', image: '/images/gokujouonsenn.png', textColor: 'white' },
  { id: 2, title: 'TechnologyLand', description: 'AIのワクワクを、最高の環境で。', image: '/images/dragonai.png', textColor: '#1d1d1f' },
  { id: 3, title: 'Japanese Hokkaido', description: '道産子パラダイス。まだまだのびしろあり', image: '/images/japanesehokkaido.jpg', textColor: '#1d1d1f' },
  { id: 4, title: 'Shokujiba Beach', description: 'Paradiseを感じよう。', image: '/images/shokujibabeach.jpg', textColor: '#1d1d1f' },
  { id: 5, title: 'Japanese Tokyo', description: 'Tokyo', image: '/images/neontokyo.jpg', textColor: '#1d1d1f' },
];

const hotelslides = [
  { id: 1, title: 'Paradise Onsenn', description: '極上のパラダイス温泉。極楽の湯。日々の疲れを癒すのに最適', image: '/images/gokujouonsenn.png', textColor: 'white' },
  { id: 2, title: 'TechnologyLand', description: 'AIのワクワクを、最高の環境で。', image: '/images/dragonai.png', textColor: '#1d1d1f' },
  { id: 3, title: 'Japanese Hokkaido', description: '道産子パラダイス。まだまだのびしろあり', image: '/images/japanesehokkaido.jpg', textColor: '#1d1d1f' },
  { id: 4, title: 'Shokujiba Beach', description: 'Paradiseを感じよう。', image: '/images/shokujibabeach.jpg', textColor: '#1d1d1f' },
  { id: 5, title: 'Japanese Tokyo', description: 'Tokyo', image: '/images/neontokyo.jpg', textColor: '#1d1d1f' },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(index);
    startTimer();
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>

      {/* 画像 */}
      <Image
        key={slide.id}
        src={slide.image}
        alt={slide.title}
        fill
        style={{ objectFit: 'cover' }}
      />

      <div style={{
        position: 'absolute',
        bottom: '80px',
        left: '40px',
        color: slide.textColor,
      }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 8px' }}>{slide.title}</h2>
        <p style={{ fontSize: '16px', margin: 0 }}>{slide.description}</p>
      </div>

      <button onClick={prev} style={btnStyle('left')}>‹</button>
      <button onClick={next} style={btnStyle('right')}>›</button>

      <div style={{ position: 'absolute', bottom: '24px', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              borderRadius: '99px',
              background: i === current ? 'white' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s',
            }}
          />
        ))}
      </div>

    </div>
  );
}

function btnStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '16px',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.3)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
}