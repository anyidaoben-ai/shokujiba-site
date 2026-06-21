import Link from "next/link";
import styles from "./Footer.module.css";

const exploreLinks = [
  { href: "/Dispense", label: "Shokuzai" },
  { href: "/Goods", label: "Goods" },
  { href: "/Paradise", label: "Paradise" },
  { href: "/trip", label: "Trip" },
  { href: "/Mastercard", label: "Mastercard" },
  { href: "mailto:shokujibamaster@gmail.com", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerFrame}>
        <div className={styles.brandPanel}>
          <p className={styles.eyebrow}>食事場</p>
          <h2>Shokujiba Paradise</h2>
          <p>
            ひとつにつながるShokujibaの世界。
            Shokujibaリンクタブから、それぞれの体験へ進めます。
          </p>
          <span>株式会社食事場</span>
        </div>

        <div className={styles.linkPanel}>
          <h3>EXPLORE</h3>
          <nav className={styles.footerTabs} aria-label="Footer navigation">
            {exploreLinks.map((link) => (
              <Link href={link.href} className={styles.footerTab} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.linkPanel}>
          <h3>LEGAL</h3>
          <nav className={styles.legalLinks} aria-label="Legal navigation">
            {legalLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.socialPanel}>
          <h3>SOCIAL</h3>
          <a
            href=""
            className={styles.socialLink}
            aria-label="X"
          >
            X
          </a>

          <a
            href="https://x.com/Nagarebou"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            ◎
          </a>

          <a
            href="https://youtube.com/channel/UCaeDV49zxiXGYhSupRYi2Nw?si=FLY6Nvf8RE1FY65U"
            className={styles.socialLink}
            aria-label="YouTube"
          >
            ▶
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 株式会社食事場</p>
      </div>
    </footer>
  );
}
