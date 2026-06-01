"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { href: "/Dispense", label: "Dispens", style: styles.dispensLink },
  { href: "/Goods", label: "Goods", style: styles.goodsLink },
  { href: "/Paradise", label: "Paradise", style: styles.paradiseLink },
  { href: "/trip", label: "Trip", style: styles.tripLink },
  { href: "/TechnologyLand-AI", label: "Services", style: styles.technologyLink },
  { href: "/upitel", label: "Contact", style: styles.contactLink },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {/* ── 左上：ロゴ ───────────────────── */}
      <Link href="/#home" className={styles.logoArea}>
        <Image
          id="home"
          src="/images/shokujibaicon.jpeg"
          alt="Royal Kitchen ロゴ"
          width={48}
          height={48}
          className={styles.logoImage}
        />
      </Link>

      {/* ── 右上：タブナビゲーション ────────── */}
      <nav className={styles.paradiseNav}>
        <ul className={styles.paradiseHeadtag}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${styles.paradiseNavLink} ${item.style} ${
                    isActive ? styles.paradiseNavLinkActive : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
