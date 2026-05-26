"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  note: string;
};

const products: Product[] = [
  { id: "abokado", name: "樹上アボカド", category: "果物", price: 680, unit: "2玉", image: "/images/abokado.png", note: "濃厚でなめらか。サラダ、トースト、ディップに。" },
  { id: "burokkori", name: "畑ブロッコリー", category: "野菜", price: 390, unit: "1株", image: "/images/burokkori.png", note: "茎まで甘い。蒸し料理やグリルで香りが立ちます。" },
  { id: "endoumame", name: "朝露えんどう豆", category: "豆類", price: 520, unit: "300g", image: "/images/endoumame.png", note: "さやの香りが爽やか。豆ごはんやスープに。" },
  { id: "jagaimo", name: "新じゃがいも", category: "根菜", price: 420, unit: "700g", image: "/images/jagaimo.png", note: "皮ごとおいしい小粒系。ローストや煮込みに。" },
  { id: "jkdj", name: "泥つき生姜", category: "香味", price: 520, unit: "250g", image: "/images/jkdj.png", note: "掘りたて感のある力強い香り。煮魚や薬味に。" },
  { id: "kiui", name: "完熟キウイ", category: "果物", price: 620, unit: "4玉", image: "/images/kiui.png", note: "酸味と甘みのバランスがよく、朝食に最適。" },
  { id: "klek", name: "グリーンパプリカ", category: "野菜", price: 460, unit: "3個", image: "/images/klek.png", note: "肉厚でジューシー。グリルや彩り炒めに。" },
  { id: "kokonatu", name: "ココナッツ", category: "果物", price: 980, unit: "1玉", image: "/images/kokonatu.png", note: "南国感のある香り。デザートやドリンクに。" },
  { id: "konsai", name: "紫根菜ミックス", category: "根菜", price: 480, unit: "1束", image: "/images/konsai.png", note: "彩りが美しい根菜。浅漬けやローストに。" },
  { id: "kyuuri", name: "みずみずしい胡瓜", category: "野菜", price: 320, unit: "3本", image: "/images/kyuuri.png", note: "歯切れの良い食感。サラダや冷製料理に。" },
  { id: "mango", name: "完熟マンゴー", category: "果物", price: 1480, unit: "2玉", image: "/images/mango.png", note: "濃密な甘さ。贈り物にも映えるプレミアム品。" },
  { id: "midori", name: "高原白菜", category: "野菜", price: 430, unit: "1玉", image: "/images/midori.png", note: "葉脈までみずみずしい。鍋、浅漬け、スープに。" },
  { id: "momo", name: "香り桃", category: "果物", price: 1280, unit: "4玉", image: "/images/momo.png", note: "果汁たっぷり。冷やしてそのまま楽しめます。" },
  { id: "nasubi", name: "艶なす", category: "野菜", price: 360, unit: "4本", image: "/images/nasubi.png", note: "油との相性が抜群。焼きなすや麻婆なすに。" },
  { id: "neshouga", name: "新しょうが", category: "香味", price: 450, unit: "250g", image: "/images/neshouga.png", note: "香りが若く爽やか。甘酢漬けや薬味に。" },
  { id: "ninjin", name: "土付き人参", category: "根菜", price: 380, unit: "600g", image: "/images/ninjin.png", note: "甘みが強い土付きタイプ。スープやラペに。" },
  { id: "ninniku", name: "乾燥にんにく", category: "香味", price: 560, unit: "300g", image: "/images/ninniku.png", note: "香りの芯が強く、炒め物やパスタに便利。" },
  { id: "oribu", name: "グリーンオリーブ", category: "果物", price: 760, unit: "250g", image: "/images/oribu.png", note: "爽やかな苦味。マリネや前菜に。" },
  { id: "painapuru", name: "畑パイナップル", category: "果物", price: 980, unit: "1玉", image: "/images/painapuru.png", note: "芯まで香る甘酸っぱさ。カットフルーツに。" },
  { id: "piman", name: "肉厚ピーマン", category: "野菜", price: 340, unit: "5個", image: "/images/piman.png", note: "苦味控えめ。肉詰め、炒め物、グリルに。" },
  { id: "sakuranbo", name: "光沢さくらんぼ", category: "果物", price: 1380, unit: "300g", image: "/images/sakuranbo.png", note: "甘酸っぱい初夏の主役。ギフトにもおすすめ。" },
  { id: "tamanegi", name: "白玉ねぎ", category: "野菜", price: 330, unit: "4玉", image: "/images/tamanegi.png", note: "辛味が穏やか。サラダにも加熱にも使えます。" },
  { id: "tomato", name: "露地トマト", category: "野菜", price: 420, unit: "500g", image: "/images/tomato.png", note: "水分と旨みが濃い。冷やして塩だけでも。" },
  { id: "tougarasi", name: "赤とうがらし", category: "香味", price: 360, unit: "120g", image: "/images/tougarasi.png", note: "鮮烈な辛み。オイル漬けや炒め物に。" },
  { id: "toumorokosi", name: "とうもろこし", category: "野菜", price: 580, unit: "2本", image: "/images/toumorokosi.png", note: "粒立ちの良い甘さ。茹でても焼いても主役級。" },
  { id: "yakiimo", name: "紅やきいも", category: "根菜", price: 640, unit: "700g", image: "/images/yakiimo.png", note: "しっとり甘いさつまいも。焼き芋や天ぷらに。" },
  { id: "koubebeef", name: "神戸ビーフ", category: "肉", price: 4800, unit: "100g", image: "/images/wagyu.png", note: "高級和牛。炙りや寿司に。" },
  { id: "matuzakausi", name: "松坂牛", category: "肉", price: 3600, unit: "100g", image: "/images/matuzakausi.png", note: "とろける極上和牛。" },
  { id: "oumigyu", name: "近江牛", category: "肉", price: 4600, unit: "100g", image: "/images/oumigyu.png", note: "とろける高級和牛。" },
  { id: "shatoburian", name: "シャトーブリアン", category: "肉", price: 7000, unit: "100g", image: "/images/shatoburian.png", note: "希少部位の極み" },
  { id: "kinkaton", name: "金華豚", category: "肉", price: 7000, unit: "100g", image: "/images/kinkaton.png", note: "甘み広がる贅沢豚。" },
  { id: "angasubeef", name: "アンガスビーフ", category: "肉", price: 3000, unit: "100g", image: "/images/angasubeef.png", note: "旨味濃厚ステーキ" },
  { id: "honmaguro", name: "本マグロ", category: "魚", price: 15000, unit: "100g", image: "/images/honmaguro.png", note: "脂乗り極上マグロ" },
  { id: "hugu", name: "フグ", category: "魚", price: 8000, unit: "100g", image: "/images/hugu.png", note: "高級白身の贅沢" },
  { id: "awabi", name: "アワビ", category: "魚", price: 10000, unit: "100g", image: "/images/awabi.png", note: "磯香る極上食感" },
  { id: "iseebi", name: "伊勢海老", category: "魚", price: 15000, unit: "100g", image: "/images/iseebi.png", note: "ぷりぷり海の王様。" },
  { id: "hamo", name: "ハモ", category: "魚", price: 9000, unit: "100g", image: "/images/hamo.png", note: "夏香る上品白身" },
  { id: "samon", name: "サーモン", category: "魚", price: 9000, unit: "100g", image: "/images/samon.png", note: "脂とろける絶品魚" },
];

const categories = ["すべて", ...Array.from(new Set(products.map((product) => product.category)))];
const yen = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 });

export default function DispensePage() {
  const [category, setCategory] = useState("すべて");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const categoryMatches = category === "すべて" || product.category === category;
      const queryMatches =
        !normalizedQuery ||
        `${product.name} ${product.category} ${product.note}`.toLowerCase().includes(normalizedQuery);

      return categoryMatches && queryMatches;
    });
  }, [category, query]);

  const cartEntries = Object.entries(cart)
    .map(([id, quantity]) => ({ product: products.find((item) => item.id === id), quantity }))
    .filter((entry): entry is { product: Product; quantity: number } => Boolean(entry.product));

  const cartCount = cartEntries.reduce((sum, entry) => sum + entry.quantity, 0);
  const cartTotal = cartEntries.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 1600);
  }

  function addToCart(product: Product) {
    setCart((current) => ({ ...current, [product.id]: (current[product.id] || 0) + 1 }));
    showToast(`${product.name}を追加しました`);
  }

  function updateQuantity(id: string, difference: number) {
    setCart((current) => {
      const nextQuantity = (current[id] || 0) + difference;
      const next = { ...current };

      if (nextQuantity <= 0) {
        delete next[id];
      } else {
        next[id] = nextQuantity;
      }

      return next;
    });
  }

  function addSurpriseItem() {
    const product = products[Math.floor(Math.random() * products.length)];
    addToCart(product);
    setCartOpen(true);
  }

  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div className={`${styles.shell} ${styles.nav}`}>
          <div className={styles.brand}>
            <div className={styles.mark} aria-hidden="true">S</div>
            <span>SHOKUJIBA PRIME</span>
          </div>
          <nav className={styles.navLinks} aria-label="メインナビゲーション">
            <a href="#products">商品</a>
            <a href="#promise">品質</a>
            <a href="#delivery">配送</a>
            <button className={styles.cartButton} type="button" onClick={() => setCartOpen(true)}>
              <span>カート</span>
              <span className={styles.cartCount}>{cartCount}</span>
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className={`${styles.shell} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>朝採れデータで選ぶ次世代マルシェ</span>
            <h1>産地を、そのまま食卓へ。</h1>
            <p>
              果物、野菜、根菜、香味野菜をひとつのスマートストアで。鮮度・旬・使いやすさを見ながら、今日の料理に合う一品をすぐに選べます。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#products">商品を見る</a>
              <button className={styles.secondary} type="button" onClick={addSurpriseItem}>おすすめを選ぶ</button>
            </div>
            <div className={styles.metricRow} aria-label="サービス指標">
              <div className={styles.metric}><strong>26</strong><span>旬の商品</span></div>
              <div className={styles.metric}><strong>24h</strong><span>鮮度発送</span></div>
              <div className={styles.metric}><strong>4.9</strong><span>購入満足度</span></div>
            </div>
          </div>

          <div className={styles.heroMarket} aria-label="注目商品">
            <HeroTile product={products[10]} label="今週のプレミアム" />
            <HeroTile product={products[22]} label="水分量の高い濃厚タイプ" />
            <HeroTile product={products[0]} label="サラダにも朝食にも" />
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`} id="products">
          <div className={styles.sectionHead}>
            <h2>Fresh Catalog</h2>
            <p>写真で選んで、料理のイメージまで一気に決められる商品一覧。検索とカテゴリで目的の食材にすぐ届きます。</p>
          </div>

          <div className={styles.toolbar}>
            <input
              className={styles.search}
              type="search"
              placeholder="商品名・カテゴリで検索"
              aria-label="商品検索"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className={styles.filters} aria-label="カテゴリ絞り込み">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`${styles.filter} ${category === item ? styles.active : ""}`}
                  type="button"
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.productGrid}>
            {visibleProducts.map((product) => (
              <article className={styles.product} key={product.id}>
                <div className={styles.productMedia}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 980px) 33vw, 25vw"
                  />
                  <span className={styles.badge}>{product.category}</span>
                </div>
                <div className={styles.productBody}>
                  <div className={styles.productTitle}>
                    <div>
                      <h3>{product.name}</h3>
                      <small>{product.unit}</small>
                    </div>
                    <div className={styles.price}>{yen.format(product.price)}</div>
                  </div>
                  <p>{product.note}</p>
                  <button className={styles.add} type="button" onClick={() => addToCart(product)}>
                    カートに入れる
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`} id="promise">
          <div className={styles.sectionHead}>
            <h2>Quality Stack</h2>
            <p>見た目の良さだけではなく、発送前チェック、温度管理、料理用途まで考えた販売体験にしています。</p>
          </div>
          <div className={styles.promise}>
            {[
              ["01", "写真品質で選べる", "商品ごとの個性が伝わる大きな写真で、買う前の不安を減らします。"],
              ["02", "朝採れ優先発送", "注文タイミングに合わせて、鮮度の高いロットから出荷します。"],
              ["03", "料理用途を明記", "サラダ、煮込み、グリル、デザートなど、使い道で迷いません。"],
              ["04", "ギフトにも対応", "フルーツや旬野菜の詰め合わせ販売にも拡張しやすい設計です。"],
            ].map(([number, title, text]) => (
              <div className={styles.promiseItem} key={number}>
                <div className={styles.icon}>{number}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`} id="delivery">
          <div className={styles.checkoutBand}>
            <div>
              <h2>今日の一箱を、今すぐ組む。</h2>
              <p>商品をカートに入れると合計がすぐ確認できます。決済機能を追加すれば、そのまま販売サイトとして発展できます。</p>
            </div>
            <a className={styles.primary} href="#products">買い物を続ける</a>
          </div>
        </section>
      </main>

      <aside className={`${styles.cartPanel} ${cartOpen ? styles.open : ""}`} aria-label="ショッピングカート">
        <div className={styles.cartHead}>
          <strong>カート</strong>
          <button className={styles.close} type="button" aria-label="カートを閉じる" onClick={() => setCartOpen(false)}>
            ×
          </button>
        </div>

        <div className={styles.cartItems}>
          {cartEntries.length === 0 ? (
            <div className={styles.cartEmpty}>まだ商品が入っていません。</div>
          ) : (
            cartEntries.map(({ product, quantity }) => (
              <div className={styles.cartLine} key={product.id}>
                <Image src={product.image} alt={product.name} width={58} height={58} />
                <div>
                  <strong>{product.name}</strong>
                  <span>{yen.format(product.price)} / {product.unit}</span>
                </div>
                <div className={styles.qty}>
                  <button type="button" aria-label={`${product.name}を減らす`} onClick={() => updateQuantity(product.id, -1)}>−</button>
                  <b>{quantity}</b>
                  <button type="button" aria-label={`${product.name}を増やす`} onClick={() => updateQuantity(product.id, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.cartFoot}>
          <div className={styles.total}>
            <span>合計</span>
            <span>{yen.format(cartTotal)}</span>
          </div>
          <button className={styles.checkout} type="button">注文へ進む</button>
        </div>
      </aside>

      <div className={`${styles.toast} ${toast ? styles.show : ""}`} role="status" aria-live="polite">
        {toast}
      </div>

      <footer className={styles.footer}>
        <div className={styles.shell}>© SHOKUJIBA PRIME. Farm direct concept store.</div>
      </footer>
    </div>
  );
}

function HeroTile({ product, label }: { product: Product; label: string }) {
  return (
    <article className={styles.marketTile}>
      <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 720px) 100vw, 40vw" />
      <div className={styles.tileLabel}>
        <div>
          <strong>{product.name}</strong>
          <span>{label}</span>
        </div>
        <b>{yen.format(product.price)}</b>
      </div>
    </article>
  );
}
