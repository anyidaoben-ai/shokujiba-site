import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "食事場",
  alternateName: "Shokujiba",
  url: "https://shokujiba-site.vercel.app",
};

const routes = [
  {
    href: "/Dispense",
    title: "Shokuzai",
    label: "食材を受け取る",
    copy: "Shokujibaの力が宿る食材へ。日常のテーブルを、少し未来の体験に変える入口。",
    image: "/images/ryouri.png",
  },
  {
    href: "/Goods",
    title: "Goods",
    label: "世界観を持ち帰る",
    copy: "着る、飾る、贈る。Shokujiba Paradiseの余韻を暮らしの中へ。",
    image: "/images/goods/royal-dining-yukata-gold.jpg",
  },
  {
    href: "/Paradise",
    title: "Paradise",
    label: "楽園へ入る",
    copy: "高級ホテル、海、都市、エネルギーが重なるShokujibaの中心体験。",
    image: "/images/shokujibabeach.jpg",
  },
  {
    href: "/trip",
    title: "Trip",
    label: "旅を始める",
    copy: "食材と場所がつながり、旅そのものがゲームのステージのように開いていく。",
    image: "/images/japanesehokkaido.jpeg",
  },
  {
    href: "/TechnologyLand-AI",
    title: "Services",
    label: "未来を使う",
    copy: "Shokujibaの歴史、AI、サービスを知る。次の都市体験を動かすための場所。",
    image: "/images/neontokyo.jpeg",
  },
  {
    href: "/upitel",
    title: "Contact",
    label: "Masterへつながる",
    copy: "世界観の扉をさらに開くためのコンタクトポイント。",
    image: "/images/luxuryimage.png",
  },
];

const atmosphere = [
  {
    title: "Apple",
    text: "余白、光、素材感。情報を削ぎ落とし、Shokujibaそのものが主役になる画面へ。",
  },
  {
    title: "Disney",
    text: "ページを進むたびに、別のエリアへ入ったような物語性を持たせる。",
  },
  {
    title: "Luxury Hotel",
    text: "落ち着いた黒、深い緑、シャンパンゴールド。静かに高級感が滲む空気。",
  },
  {
    title: "Future City",
    text: "巨大な都市、光の回廊、広がるスケール。Webサイト全体をひとつの都市にする。",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />

        <section className={styles.hero} aria-labelledby="hero-title">
          <Image
            src="/images/shokujiba-paradise-concept.png"
            alt="Shokujiba Paradiseの未来都市と楽園を描いたキービジュアル"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroVeil} />
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Shokujiba Web Experience</p>
            <h1 id="hero-title">Shokujiba</h1>
            <p className={styles.heroLead}>
              
            </p>
            <div className={styles.heroActions}>
              <Link href="/Paradise" className={styles.primaryAction}>
                Enter Paradise
              </Link>
              <Link href="/Dispense" className={styles.secondaryAction}>
                Receive Shokuzai
              </Link>
            </div>
          </div>
          <div className={styles.heroStatus} aria-label="Shokujiba world status">
            <span>Paradise Open</span>
            <span>Energy Online</span>
            <span>Future Dining</span>
          </div>
        </section>

        <section className={styles.manifesto} aria-label="Shokujiba concept">
          <div className={styles.manifestoCopy}>
            <p className={styles.sectionLabel}>The World</p>
            <h2>サイトではなく、Shokujibaという国へ入る。</h2>
          </div>
          <div className={styles.manifestoText}>
            <p>
              トップページは案内板ではなく、入場ゲートです。最初に巨大な世界を見せ、次に空気を感じさせ、
              最後に自分がどの体験へ進むかを選べる構成へ作り直しました。
            </p>
          </div>
        </section>

        <section className={styles.atmosphere} aria-label="Design atmosphere">
          {atmosphere.map((item) => (
            <article className={styles.atmosphereCard} key={item.title}>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className={styles.hotelSection} aria-label="Luxury Shokujiba stay">
          <div className={styles.hotelMedia}>
            <Image
              src="/images/paradise-theme-park.jpg"
              alt="Shokujiba Paradiseの巨大テーマパーク"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.coverImage}
            />
          </div>
          <div className={styles.hotelCopy}>
            <p className={styles.sectionLabel}>Luxury Layer</p>
            <h2>上質な余韻が、クリックする前から始まる。</h2>
            <p>
              白いカードを並べるだけのサイトから離れ、光、影、写真、余白でShokujibaの空気を作ります。
              ユーザーは説明を読む前に、ここが特別な場所だと感じられます。
            </p>
          </div>
        </section>

        <section className={styles.routesSection} aria-labelledby="routes-title">
          <div className={styles.routesIntro}>
            <p className={styles.sectionLabel}>Choose Your Gate</p>
            <h2 id="routes-title">6つのリンクは、そのまま6つのエリアへ。</h2>
          </div>
          <div className={styles.routeGrid}>
            {routes.map((route, index) => (
              <Link href={route.href} className={styles.routeCard} key={route.href}>
                <Image
                  src={route.image}
                  alt={`${route.title}の入口`}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.routeImage}
                />
                <span className={styles.routeNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.routeContent}>
                  <p>{route.label}</p>
                  <h3>{route.title}</h3>
                  <span>{route.copy}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.citySection} aria-label="Future city scale">
          <Image
            src="/images/neontokyo.jpeg"
            alt="Shokujibaが目指す未来都市のスケール"
            fill
            sizes="100vw"
            className={styles.cityImage}
          />
          <div className={styles.cityContent}>
            <p className={styles.sectionLabel}>Future City Scale</p>
            <h2>次のクリックで、街がひらく。</h2>
            <p>
              食事、買い物、ホテル、ビーチ、AI、旅。Shokujiba Webはそれぞれのページを別々に見せるのではなく、
              ひとつの巨大な都市として感じられる設計です。
            </p>
          </div>
        </section>

        <section className={styles.finalCta} aria-label="Final call to action">
          <p className={styles.sectionLabel}>Begin</p>
          <h2>Shokujiba Paradiseへ。</h2>
          <div className={styles.finalActions}>
            <Link href="/Paradise" className={styles.primaryAction}>
              Enter Paradise
            </Link>
            <Link href="/upitel" className={styles.secondaryAction}>
              Contact Master
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
