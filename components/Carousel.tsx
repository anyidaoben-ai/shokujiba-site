'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { CSSProperties } from 'react';
import Image from 'next/image';

export type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
  textColor: string;
};

type CarouselProps = {
  slides: Slide[];
};

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    startTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, startTimer]);

  const goTo = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(index);
    if (slides.length > 1) startTimer();
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <div style={carouselStyle}>
      <Image
        key={slide.id}
        src={slide.image}
        alt={slide.title}
        fill
        sizes="(max-width: 900px) 100vw, 1180px"
        style={{ objectFit: 'cover' }}
      />
      <div style={veilStyle} />

      <div style={{ ...copyStyle, color: slide.textColor }}>
        <p style={kickerStyle}>Paradise Asset</p>
        <h2 style={titleStyle}>{slide.title}</h2>
        <p style={descriptionStyle}>{slide.description}</p>
      </div>

      {slides.length > 1 && (
        <>
          <button onClick={prev} style={btnStyle('left')} aria-label="Previous slide">‹</button>
          <button onClick={next} style={btnStyle('right')} aria-label="Next slide">›</button>
        </>
      )}

      <div style={dotsStyle}>
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '32px' : '8px',
              height: '8px',
              borderRadius: '99px',
              background: i === current ? '#fec214' : 'rgba(255,247,226,0.38)',
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

const carouselStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: 'min(72vw, 620px)',
  overflow: 'hidden',
  border: '1px solid rgba(254, 194, 20, 0.32)',
  background: '#070706',
  boxShadow: '0 34px 90px rgba(0,0,0,0.34)',
};

const veilStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(90deg, rgba(0,0,0,0.78), rgba(0,0,0,0.22) 54%, rgba(0,0,0,0.68)), linear-gradient(180deg, transparent 38%, rgba(0,0,0,0.78))',
};

const copyStyle: CSSProperties = {
  position: 'absolute',
  left: 'clamp(22px, 5vw, 58px)',
  right: 'clamp(22px, 5vw, 58px)',
  bottom: 'clamp(74px, 8vw, 110px)',
  maxWidth: '720px',
};

const kickerStyle: CSSProperties = {
  margin: '0 0 12px',
  color: '#fec214',
  fontSize: '12px',
  fontWeight: 900,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
};

const titleStyle: CSSProperties = {
  margin: 0,
  fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", Georgia, serif',
  fontSize: 'clamp(34px, 6vw, 76px)',
  lineHeight: 1,
  fontWeight: 700,
};

const descriptionStyle: CSSProperties = {
  maxWidth: '640px',
  margin: '18px 0 0',
  fontSize: 'clamp(14px, 1.8vw, 18px)',
  lineHeight: 1.85,
};

const dotsStyle: CSSProperties = {
  position: 'absolute',
  bottom: '28px',
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
};

function btnStyle(side: 'left' | 'right'): CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '16px',
    transform: 'translateY(-50%)',
    background: 'rgba(10,9,6,0.72)',
    color: '#fff7e2',
    border: '1px solid rgba(254,194,20,0.36)',
    borderRadius: '2px',
    width: '44px',
    height: '44px',
    fontSize: '24px',
    cursor: 'pointer',
  };
}
