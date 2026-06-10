import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const businesses = [
  {
    href: "/Dispense",
    title: "Shokuzai",
    label: "Shokujibaのエネルギーを体感する",
    image: "/images/ryouri.png",
  },
  {
    href: "/Goods",
    title: "Goods",
    label: "Shokujibaのエネルギーを身につける",
    image: "/images/goods/paradise-amulet.jpg",
  },
  {
    href: "/Paradise",
    title: "Shokujiba Paradise",
    label: "欲望を解放する",
    image: "/images/paradise-theme-park.jpg",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <Image
            src="/images/shokujiba-paradise-concept.png"
            alt="Shokujiba Zaibatsu"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <p>Shokujiba</p>
            <h1>Shokujiba Paradise</h1>
            <Link href="/trip" className={styles.mainLink}>
              Shokujiba
            </Link>
          </div>
        </section>

        <section className={styles.intro}>
          <h2>Shokujiba Paradiseにはすべてがある</h2>
          <p>
            食材やグッズ、生活に必要なすべてをShokujibaから買う事が出来ます。
            Shokujiba Paradiseを実際に体感する事も出来ます。
          </p>
        </section>

        <section className={styles.gates} aria-label="Shokujiba Zaibatsu businesses">
          {businesses.map((business) => (
            <Link href={business.href} className={styles.gate} key={business.href}>
              <Image
                src={business.image}
                alt={business.title}
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
                className={styles.gateImage}
              />
              <div>
                <span>{business.label}</span>
                <h3>{business.title}</h3>
              </div>
            </Link>
          ))}
        </section>

        <section className={styles.final}>
          <h2>Shokujiba Paradise</h2>
          <Link href="/Paradise" className={styles.mainLink}>
            Paradiseへ
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
