import Link from "next/link";
import styles from "./Footer.module.css";

const exploreLinks = [
  { href: "/", label: "会社トップ" },
  { href: "/Dispense", label: "食体験" },
  { href: "/Paradise", label: "場の開発" },
  { href: "/Goods", label: "物販" },
  { href: "/trip", label: "旅・滞在" },
  { href: "/Mastercard", label: "会員サービス" },
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
          <h2>Shokujiba</h2>
          <p>
            食材、飲食、観光、物販をつなぎ、訪れる理由と買う理由を設計するブランド開発会社です。
          </p>
          <span>株式会社食事場</span>
        </div>

        <div className={styles.linkPanel}>
          <h3>BUSINESS</h3>
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
          <h3>CONTACT</h3>
          <a
            href="mailto:shokujibamaster@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            Mail
          </a>

          <a
            href="https://x.com/"
            className={styles.socialLink}
            aria-label="X"
          >
            X
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
