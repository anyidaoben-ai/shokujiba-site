import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/#services", label: "事業内容" },
  { href: "/Paradise", label: "プロジェクト" },
  { href: "/Goods", label: "商品" },
  { href: "mailto:shokujibamaster@gmail.com", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logoArea} aria-label="Shokujiba home">
          <Image
            src="/images/shokujibaicon.jpeg"
            alt="Shokujiba ロゴ"
            width={44}
            height={44}
            className={styles.logoImage}
            priority
          />
          <span>
            <strong>Shokujiba</strong>
            <small>株式会社食事場</small>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          {navLinks.map((link) =>
            link.href.startsWith("mailto:") ? (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ) : (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
