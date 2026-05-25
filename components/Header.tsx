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
      <nav>
       <ul className={styles.headtag}>
        <li><Link href="/Dispense" className={`${styles.navLink} ${styles.navLinkActive}`}>Dispense</Link></li>
        <li><Link href="/Goods" className={styles.navLink}>Goods</Link></li>
        <li><Link href="/Paradise" className={styles.navLink}>Paradise</Link></li>
        <li><Link href="#hisotory" className={styles.navLink}>楽しむ</Link></li>
        </ul>
      </nav>

    </header>
  );
}