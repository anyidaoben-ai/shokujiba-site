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
     {/* ── 右上：タブナビゲーション ────────── */}
<nav className={styles.paradiseNav}>
  <ul className={styles.paradiseHeadtag}>
    <li>
      <Link
        href="/Dispense"
        className={`${styles.paradiseNavLink} ${styles.dispensLink}`}
      >
        Dispens
      </Link>
    </li>

    <li>
      <Link
        href="/Goods"
        className={`${styles.paradiseNavLink} ${styles.goodsLink}`}
      >
        Goods
      </Link>
    </li>

    <li>
      <Link
        href="/Paradise"
        className={`${styles.paradiseNavLink} ${styles.paradiseLink}`}
      >
        Paradise
      </Link>
    </li>

    <li>
      <Link
        href="/trip"
        className={`${styles.paradiseNavLink} ${styles.tripLink}`}
      >
        Trip
      </Link>
    </li>

    <li>
      <Link
        href="/upitel"
        className={`${styles.paradiseNavLink} ${styles.upitelLink}`}
      >
        UpiteL
      </Link>
    </li>

    <li>
      <Link
        href="/TechnologyLand"
        className={`${styles.paradiseNavLink} ${styles.technologyLink}`}
      >
        TechnologyLand
      </Link>
    </li>
  </ul>
</nav>

    </header>
  );
}

