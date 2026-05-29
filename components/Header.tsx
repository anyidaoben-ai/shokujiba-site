// components/Header.jsx
import Image from "next/image";
import styles from "./Header.module.css";
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>

      {/* ── 左上：ロゴ ───────────────────── */}
      <a href="#home" className={styles.logoArea}>
        <Image
          id="home"
          src="/images/shokujibaicon.jpeg"
          alt="Royal Kitchen ロゴ"
          width={48}
          height={48}
          className={styles.logoImage}
        />
        
      </a>

      {/* ── 右上：タブナビゲーション ────────── */}
     <nav className={styles.paradiseNav}>
  <ul className={styles.paradiseHeadtag}>
    <li>
      <Link
        href="/Dispense"
        className={`${styles.paradiseNavLink} ${styles.paradiseNavLinkActive}`}
      >
        Dispens
      </Link>
    </li>

    <li>
      <Link href="/Goods" className={styles.paradiseNavLink}>
        Goods
      </Link>
    </li>

    <li>
      <Link href="/Paradise" className={styles.paradiseNavLink}>
        Paradise
      </Link>
    </li>

    <li>
      <Link href="/trip" className={styles.paradiseNavLink}>
        楽しむ
      </Link>
    </li>

    <li>
      <Link href="/upitel" className={styles.paradiseNavLink}>
        UpiteL
      </Link>
    </li>
  </ul>
</nav>

    </header>
  );
}