import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const businesses = [
  {
    href: "/Dispense",
    title: "Food Holdings",
    label: "食材流通",
    image: "/images/ryouri.png",
  },
  {
    href: "/Goods",
    title: "Asset Goods",
    label: "物販資産",
    image: "/images/goods/paradise-amulet.jpg",
  },
  {
    href: "/Paradise",
    title: "Paradise Development",
    label: "楽園開発",
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
            <p>Shokujiba Zaibatsu</p>
            <h1>欲望経済を統治する。</h1>
            <Link href="/trip" className={styles.mainLink}>
              財閥理念を見る
            </Link>
          </div>
        </section>

        <section className={styles.intro}>
          <h2>Shokujiba財閥は、食欲、購買欲、楽園への欲望を資本として束ねる総合事業体です。</h2>
          <p>
            食材流通、Goods、Paradise開発を中核に、人が求めるものを供給し、
            価値へ変換する。Masterの構想から生まれたShokujibaは、
            欲望の流れを読み、育て、次の経済圏へつなぎます。
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
          <h2>Shokujiba Group Capital.</h2>
          <Link href="/Paradise" className={styles.mainLink}>
            主要事業を見る
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
