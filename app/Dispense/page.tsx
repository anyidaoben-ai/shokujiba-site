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
  origin: string;
  tag: string;
};

const products: Product[] = [
  { id: "momo", name: "香り桃", category: "果物", price: 1280, unit: "4玉", image: "/images/kjewfjkbew.png", origin: "余市", tag: "朝採れ", note: "果汁たっぷり。冷やしてそのまま楽しめます。" },
  { id: "sakuranbo", name: "光沢さくらんぼ", category: "果物", price: 1380, unit: "300g", image: "/images/sakuranbo.png", origin: "仁木", tag: "旬", note: "甘酸っぱい初夏の主役。ギフトにもおすすめ。" },
  { id: "mango", name: "完熟マンゴー", category: "果物", price: 1480, unit: "2玉", image: "/images/fyi.png", origin: "温室栽培", tag: "濃密", note: "濃密な甘さ。贈り物にも映えるプレミアム品。" },
  { id: "tomato", name: "露地トマト", category: "野菜", price: 420, unit: "500g", image: "/images/tomato.png", origin: "富良野", tag: "人気", note: "水分と旨みが濃い。冷やして塩だけでも。" },
  { id: "toumorokosi", name: "とうもろこし", category: "野菜", price: 580, unit: "2本", image: "/images/toumorokosi.png", origin: "十勝", tag: "甘い", note: "粒立ちの良い甘さ。茹でても焼いても主役級。" },
  { id: "burokkori", name: "畑ブロッコリー", category: "野菜", price: 390, unit: "1株", image: "/images/burokori.png", origin: "北見", tag: "定番", note: "茎まで甘い。蒸し料理やグリルで香りが立ちます。" },
  { id: "yakiimo", name: "紅やきいも", category: "根菜", price: 640, unit: "700g", image: "/images/yakiimo.png", origin: "函館", tag: "しっとり", note: "しっとり甘いさつまいも。焼き芋や天ぷらに。" },
  { id: "jagaimo", name: "新じゃがいも", category: "根菜", price: 420, unit: "700g", image: "/images/jagaimoo.png", origin: "倶知安", tag: "小粒", note: "皮ごとおいしい小粒系。ローストや煮込みに。" },
  { id: "neshouga", name: "新しょうが", category: "香味", price: 450, unit: "250g", image: "/images/neshouga.png", origin: "日高", tag: "爽やか", note: "香りが若く爽やか。甘酢漬けや薬味に。" },
  { id: "ninniku", name: "乾燥にんにく", category: "香味", price: 560, unit: "300g", image: "/images/ninnikuu.png", origin: "上川", tag: "強香", note: "香りの芯が強く、炒め物やパスタに便利。" },
  { id: "koubebeef", name: "神戸ビーフ", category: "肉", price: 4800, unit: "100g", image: "/images/wagyu.png", origin: "兵庫", tag: "特選", note: "高級和牛。炙りや寿司に。" },
  { id: "shatoburian", name: "シャトーブリアン", category: "肉", price: 7000, unit: "100g", image: "/images/shatouburian.png", origin: "厳選牧場", tag: "希少", note: "希少部位の極み。特別な日のメインに。" },
  { id: "honmaguro", name: "本マグロ", category: "魚", price: 15000, unit: "100g", image: "/images/honmaguroo.png", origin: "大間", tag: "極上", note: "脂乗り極上マグロ。刺身や握りに。" },
  { id: "iseebi", name: "伊勢海老", category: "魚", price: 15000, unit: "100g", image: "/images/ebi.png", origin: "三重", tag: "祝い", note: "ぷりぷり海の王様。晴れの日の食卓へ。" },
  { id: "yoguruto", name: "ヨーグルト", category: "デザート", price: 9000, unit: "100g", image: "/images/yoguruto.png", origin: "十勝", tag: "濃厚", note: "なめらかな口当たり。果物と合わせて。" },
  { id: "yuzujusu", name: "柚子ジュース", category: "ジュース", price: 9000, unit: "100g", image: "/images/yuzujusu.png", origin: "高知", tag: "香る", note: "酸味と香りが立つ一杯。食事の余韻に。" },
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
        `${product.name} ${product.category} ${product.note} ${product.origin} ${product.tag}`.toLowerCase().includes(normalizedQuery);

      return categoryMatches && queryMatches;
    });
  }, [category, query]);

  const cartEntries = Object.entries(cart).flatMap(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return product ? [{ product, quantity }] : [];
  });

  const cartCount = cartEntries.reduce((sum, entry) => sum + entry.quantity, 0);
  const cartTotal = cartEntries.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);
  const featuredProducts = products.slice(0, 3);

  const handleCheckout = async () => {
    try {
      if (cartEntries.length === 0) {
        showToast("カートに商品がありません");
        return;
      }

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          returnPath: "/Dispense",
          cartItems: cartEntries.map(({ product, quantity }) => ({
            id: product.id,
            quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "決済ページを作成できませんでした");
      }

      window.location.assign(data.url);
    } catch (error) {
      console.error("Checkout Error:", error);
      showToast("決済ページを開けませんでした");
    }
  };

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 1600);
  }

  function addToCart(product: Product) {
    setCart((current) => ({ ...current, [product.id]: (current[product.id] || 0) + 1 }));
    setCartOpen(true);
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

  function addChefSet() {
    [products[0], products[3], products[10]].forEach((product) => {
      setCart((current) => ({ ...current, [product.id]: (current[product.id] || 0) + 1 }));
    });
    setCartOpen(true);
    showToast("シェフセットを追加しました");
  }

  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div className={`${styles.shell} ${styles.nav}`}>
          <a className={styles.brand} href="#top" aria-label="Shokuzai Dispense ホーム">
            <span className={styles.mark}>食</span>
            <span>Shokuzai Dispense</span>
          </a>
          <nav className={styles.navLinks} aria-label="メインナビゲーション">
            <a href="#products">商品</a>
            <a href="#quality">品質</a>
            <a href="#delivery">配送</a>
            <button className={styles.cartButton} type="button" onClick={() => setCartOpen(true)}>
              カート <span>{cartCount}</span>
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className={`${styles.shell} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Hokkaido Organic Market</span>
            <h1>旬の食材を、旅するように選ぶ。</h1>
            <p>
              Shokujiba が選ぶ野菜、果物、肉、魚を一箱に。産地の表情が見える売り場で、今日の料理とギフトをすばやく組み立てられます。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#products">商品を見る</a>
              <button className={styles.secondary} type="button" onClick={addChefSet}>シェフセットを追加</button>
            </div>
          </div>

          <div className={styles.heroBoard} aria-label="おすすめ商品">
            {featuredProducts.map((product, index) => (
              <button className={styles.featuredCard} type="button" key={product.id} onClick={() => addToCart(product)}>
                <Image src={product.image} alt={product.name} fill priority={index === 0} sizes="(max-width: 760px) 86vw, 28vw" />
                <span>{product.tag}</span>
                <strong>{product.name}</strong>
                <small>{yen.format(product.price)} / {product.unit}</small>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.quickStats} aria-label="サービスの特徴">
          <div className={styles.shell}>
            <div><strong>16</strong><span>厳選アイテム</span></div>
            <div><strong>24h</strong><span>鮮度優先発送</span></div>
            <div><strong>冷蔵対応</strong><span>食材別に梱包</span></div>
            <div><strong>Gift</strong><span>贈答にも対応</span></div>
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`} id="products">
          <div className={styles.sectionHead}>
            <span>ONLINE SHOP</span>
            <h2>ほしい食材をすぐ探せる。</h2>
            <p>カテゴリ、産地、料理用途で検索できます。気になる商品はカードからそのままカートへ。</p>
          </div>

          <div className={styles.toolbar}>
            <input
              className={styles.search}
              type="search"
              placeholder="食材名、産地、用途で検索"
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
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                  <span>{product.category}</span>
                </div>
                <div className={styles.productBody}>
                  <div className={styles.productMeta}>
                    <span>{product.origin}</span>
                    <span>{product.tag}</span>
                  </div>
                  <div className={styles.productTitle}>
                    <h3>{product.name}</h3>
                    <small>{product.unit}</small>
                  </div>
                  <p>{product.note}</p>
                  <div className={styles.buyRow}>
                    <strong>{yen.format(product.price)}</strong>
                    <button type="button" onClick={() => addToCart(product)}>追加</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`} id="quality">
          <div className={styles.qualityGrid}>
            <div>
              <span className={styles.eyebrow}>QUALITY</span>
              <h2>食材ごとのいちばん良い状態で届ける。</h2>
            </div>
            {[
              ["01", "入荷日に合わせて販売", "状態の良いロットだけを並べ、欠品より鮮度を優先します。"],
              ["02", "温度帯を分けて梱包", "野菜、果物、肉、魚をそれぞれの状態に合わせて扱います。"],
              ["03", "料理の入口まで案内", "使い方が想像できる説明で、買った後の迷いを減らします。"],
            ].map(([number, title, text]) => (
              <article className={styles.qualityItem} key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.shell} ${styles.delivery}`} id="delivery">
          <div>
            <span className={styles.eyebrow}>DELIVERY</span>
            <h2>今日の食卓から、特別なギフトまで。</h2>
            <p>必要なものだけ選んで、カートから注文へ。北海道の旬と高級食材を、ひとつの箱にまとめられます。</p>
          </div>
          <button className={styles.primary} type="button" onClick={() => setCartOpen(true)}>カートを確認</button>
        </section>
      </main>

      <aside className={`${styles.cartPanel} ${cartOpen ? styles.open : ""}`} aria-label="ショッピングカート">
        <div className={styles.cartHead}>
          <div>
            <span>YOUR BOX</span>
            <strong>カート</strong>
          </div>
          <button className={styles.close} type="button" aria-label="カートを閉じる" onClick={() => setCartOpen(false)}>
            x
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
                  <button type="button" aria-label={`${product.name}を減らす`} onClick={() => updateQuantity(product.id, -1)}>-</button>
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
            <strong>{yen.format(cartTotal)}</strong>
          </div>
          <button className={styles.checkout} type="button" onClick={handleCheckout}>
            注文へ進む
          </button>
        </div>
      </aside>

      <div className={`${styles.toast} ${toast ? styles.show : ""}`} role="status" aria-live="polite">
        {toast}
      </div>

      <footer className={styles.footer}>
        <div className={styles.shell}>Shokuzai Dispense by Shokujiba</div>
      </footer>
    </div>
  );
}
