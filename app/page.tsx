import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const gates = [
  {
    href: "/Dispense",
    title: "Shokuzai",
    label: "食欲を満たす",
    image: "/images/ryouri.png",
  },
  {
    href: "/Goods",
    title: "Goods",
    label: "購買欲を満たす",
    image: "/images/goods/paradise-amulet.jpg",
  },
  {
    href: "/Paradise",
    title: "Paradise",
    label: "欲望を満たす",
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
            alt="Shokujiba Paradise"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <p>Shokujiba</p>
            <h1>欲望が満たされる場所</h1>
            <Link href="/trip" className={styles.mainLink}>
              Shokujibaについて
            </Link>
          </div>
        </section>

        <section className={styles.intro}>
          <h2>Shokujibaは、食欲、購買欲、思いつく限りの欲望をひとつの世界に集めたWebサイトです。</h2>
          <p>
            果物や野菜はShokuzaiへ。身につけたいものはGoodsへ。
            もっと大きな夢や輝きはParadiseへ。Masterが創ったShokujibaの入口がここにあります。
          </p>
        </section>

        <section className={styles.gates} aria-label="Shokujiba links">
          {gates.map((gate) => (
            <Link href={gate.href} className={styles.gate} key={gate.href}>
              <Image
                src={gate.image}
                alt={gate.title}
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
                className={styles.gateImage}
              />
              <div>
                <span>{gate.label}</span>
                <h3>{gate.title}</h3>
              </div>
            </Link>
          ))}
        </section>

        <section className={styles.final}>
          <h2>Enter Shokujiba Paradise.</h2>
          <Link href="/Paradise" className={styles.mainLink}>
            Paradiseへ入る
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
