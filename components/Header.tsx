import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/#home" className={styles.logoArea} aria-label="Shokujiba home">
        <Image
          id="home"
          src="/images/shokujibaicon.jpeg"
          alt="Shokujiba ロゴ"
          width={48}
          height={48}
          className={styles.logoImage}
          priority
        />
      </Link>
    </header>
  );
}
