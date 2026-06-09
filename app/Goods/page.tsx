"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Product = {
  id: string;
  name: string;
  line: string;
  category: string;
  price: number;
  image: string;
  color: string;
  material: string;
  description: string;
};

type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

const products: Product[] = [
  {
    id: "yukata-black",
    name: "Royal Dining 浴衣 Black Crown",
    line: "Yukata Edition",
    category: "浴衣",
    price: 17800,
    image: "/images/goods/royal-dining-yukata-black.jpg",
    color: "Ivory / Black",
    material: "綿麻ブレンド",
    description: "王冠とカトラリーを黒でまとめた、静かに強い一着。黒帯とのコントラストで品よく締まります。",
  },
  {
    id: "yukata-gold",
    name: "Royal Dining 浴衣 Gold Feast",
    line: "Yukata Edition",
    category: "浴衣",
    price: 18800,
    image: "/images/goods/royal-dining-yukata-gold.jpg",
    color: "Cream / Gold",
    material: "綿麻ブレンド",
    description: "金の王冠柄と波模様を重ねた主役級浴衣。夏祭り、イベント、撮影で映える華やかなモデルです。",
  },
  {
    id: "sweat-white",
    name: "Royal Dining Hoodie Set White",
    line: "Street Set",
    category: "セットアップ",
    price: 14800,
    image: "/images/goods/royal-dining-sweat-white.jpg",
    color: "White / Rainbow Cord",
    material: "ヘビーウェイト裏毛",
    description: "白のフーディーとパンツに小さなエンブレムを配置。虹色コードが軽やかなアクセントです。",
  },
  {
    id: "tee-white",
    name: "Royal Dining Tee & Shorts White",
    line: "Summer Set",
    category: "セットアップ",
    price: 9800,
    image: "/images/goods/royal-dining-tee-white.jpg",
    color: "White / Rainbow Cord",
    material: "コットンジャージー",
    description: "Tシャツとショーツの涼しいセット。ミニロゴとコードカラーで、ミニマルでも退屈しない仕上がり。",
  },
  {
    id: "sweat-black",
    name: "Royal Dining Hoodie Set Black",
    line: "Street Set",
    category: "セットアップ",
    price: 14800,
    image: "/images/goods/royal-dining-sweat-black.jpg",
    color: "Black / Rainbow Cord",
    material: "ヘビーウェイト裏毛",
    description: "黒のフーディーセットに色鮮やかなロゴとコードを効かせたモデル。日常着にもライブ感があります。",
  },
  {
    id: "paradise-wallet",
    name: "パラダイスお守りウォレット",
    line: "Paradise Accessory",
    category: "アクセサリー",
    price: 12800,
    image: "/images/goods/paradise-wallet.jpg",
    color: "Black / Gold",
    material: "PUレザー / ポリエステル / 合金",
    description: "幸運と美食を象徴するゴールドロゴを添えた長財布。カードポケットと小銭入れを備えた上品な一品です。",
  },
  {
    id: "paradise-jewelry",
    name: "パラダイスジュエリー Crown Set",
    line: "Paradise Amulet",
    category: "ジュエリー",
    price: 19800,
    image: "/images/goods/paradise-jewelry.jpg",
    color: "Gold / Blue Gem",
    material: "合金 / AAAランクストーン",
    description: "クラウン、ナイフ、フォークを重ねた輝きのアミュレット。成功運と華やかさをまとえるアクセサリーです。",
  },
  {
    id: "paradise-amulet",
    name: "パラダイスお守り",
    line: "Paradise Amulet",
    category: "お守り",
    price: 9800,
    image: "/images/goods/paradise-amulet.jpg",
    color: "Aqua / Purple",
    material: "ポリエステルコード / 合金チャーム",
    description: "南国の光とクラウンロゴを閉じ込めたお守り。バッグや鍵につけて毎日の幸運をそばに置けます。",
  },
  {
    id: "hawaiian-setup-white",
    name: "Hawaiian Paradise Set Up White",
    line: "Resort Set",
    category: "セットアップ",
    price: 16800,
    image: "/images/goods/hawaiian-setup-white.jpg",
    color: "White / Rainbow Cord",
    material: "綿100% 裏毛パイル",
    description: "ハワイの自然を織り込んだ白のセットアップ。王冠ロゴ刺繍と淡い総柄で、上質なリゾート感を演出します。",
  },
];

const categories = ["すべて", ...Array.from(new Set(products.map((product) => product.category)))];
const sizes = ["S", "M", "L", "XL"];
const yen = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 });

export default function GoodsPage() {
  const [activeId, setActiveId] = useState(products[0].id);
  const [category, setCategory] = useState("すべて");
  const [selectedSize, setSelectedSize] = useState("M");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  const handleCheckout = async () => {
    try {
      if (cart.length === 0) {
        setToast("カートに商品がありません");
        return;
      }

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          returnPath: "/Goods",
          cartItems: cart.map((item) => ({
            id: item.product.id,
            size: item.size,
            quantity: item.quantity,
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
      setToast("決済ページを開けませんでした");
    }
  };

  const activeProduct = products.find((product) => product.id === activeId) || products[0];

  const filteredProducts = useMemo(() => {
    if (category === "すべて") return products;
    return products.filter((product) => product.category === category);
  }, [category]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 1600);
  }

  function addToCart(product: Product, size = selectedSize) {
    setCart((current) => {
      const exists = current.find((item) => item.product.id === product.id && item.size === size);

      if (exists) {
        return current.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { product, size, quantity: 1 }];
    });
    setCartOpen(true);
    showToast(`${product.name} / ${size} を追加しました`);
  }

  function changeQuantity(productId: string, size: string, diff: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity: item.quantity + diff }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>RD</span>
          <span>ROYAL DINING GOODS</span>
        </Link>
        <nav className={styles.nav} aria-label="Goods navigation">
          <a href="#collection">Collection</a>
          <a href="#fit">Fit</a>
          <a href="#drop">Drop</a>
          <button className={styles.cartButton} type="button" onClick={() => setCartOpen(true)}>
            Bag <span>{cartCount}</span>
          </button>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Food Culture Apparel / Limited Drop</p>
            <h1>食の王冠を、着る。</h1>
            <p className={styles.lead}>
              王冠、ナイフ、フォークをシグネチャーにした Royal Dining のウェアコレクション。
              浴衣の品格とストリートウェアの軽さを、ひとつのブランド体験にまとめました。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#collection">商品を見る</a>
              <button className={styles.secondary} type="button" onClick={() => addToCart(activeProduct)}>
                今すぐ追加
              </button>
            </div>
            <div className={styles.stats} aria-label="販売情報">
              <div><strong>5</strong><span>items</span></div>
              <div><strong>24h</strong><span>ship ready</span></div>
              <div><strong>限定</strong><span>first drop</span></div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
            <div className={styles.productPanel}>
              <span>{activeProduct.line}</span>
              <h2>{activeProduct.name}</h2>
              <p>{activeProduct.description}</p>
              <div className={styles.panelMeta}>
                <b>{yen.format(activeProduct.price)}</b>
                <small>{activeProduct.color}</small>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="collection">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>Collection</p>
              <h2>Royal Dining Drop 01</h2>
            </div>
            <p>
              浴衣、フーディー、Tシャツセットを横断した小さなコレクション。写真を選ぶと上のヒーローも切り替わります。
            </p>
          </div>

          <div className={styles.controls}>
            <div className={styles.filters} aria-label="カテゴリ">
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
            <div className={styles.sizePicker} aria-label="サイズ">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? styles.activeSize : ""}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <article className={styles.card} key={product.id}>
                <button
                  className={styles.cardImage}
                  type="button"
                  onClick={() => {
                    setActiveId(product.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  aria-label={`${product.name}を大きく表示`}
                >
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 720px) 100vw, 33vw" />
                </button>
                <div className={styles.cardBody}>
                  <div>
                    <span>{product.line}</span>
                    <h3>{product.name}</h3>
                  </div>
                  <p>{product.description}</p>
                  <dl className={styles.details}>
                    <div><dt>Color</dt><dd>{product.color}</dd></div>
                    <div><dt>Material</dt><dd>{product.material}</dd></div>
                  </dl>
                  <div className={styles.cardFoot}>
                    <b>{yen.format(product.price)}</b>
                    <button type="button" onClick={() => addToCart(product)}>Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.fit}`} id="fit">
          <div>
            <p className={styles.eyebrow}>Fit Guide</p>
            <h2>余白で魅せる、ユニセックスシルエット。</h2>
          </div>
          <div className={styles.fitGrid}>
            <div><strong>S</strong><span>すっきり</span></div>
            <div><strong>M</strong><span>標準</span></div>
            <div><strong>L</strong><span>ゆったり</span></div>
            <div><strong>XL</strong><span>オーバー</span></div>
          </div>
        </section>

        <section className={styles.drop} id="drop">
          <div>
            <p className={styles.eyebrow}>First Drop</p>
            <h2>ブランドの最初の一枚を、ここから。</h2>
            <p>カートUIまで実装済み。決済や在庫管理を足せば、そのまま販売ページとして発展できます。</p>
          </div>
          <button className={styles.primary} type="button" onClick={() => addToCart(activeProduct)}>
            選択中の商品を追加
          </button>
        </section>
      </main>

      <aside className={`${styles.cart} ${cartOpen ? styles.open : ""}`} aria-label="ショッピングバッグ">
        <div className={styles.cartHead}>
          <strong>Shopping Bag</strong>
          <button type="button" onClick={() => setCartOpen(false)} aria-label="カートを閉じる">×</button>
        </div>
        <div className={styles.cartItems}>
          {cart.length === 0 ? (
            <p className={styles.empty}>まだ商品が入っていません。</p>
          ) : (
            cart.map((item) => (
              <div className={styles.cartLine} key={`${item.product.id}-${item.size}`}>
                <Image src={item.product.image} alt={item.product.name} width={64} height={64} />
                <div>
                  <strong>{item.product.name}</strong>
                  <span>Size {item.size} / {yen.format(item.product.price)}</span>
                </div>
                <div className={styles.qty}>
                  <button type="button" onClick={() => changeQuantity(item.product.id, item.size, -1)}>−</button>
                  <b>{item.quantity}</b>
                  <button type="button" onClick={() => changeQuantity(item.product.id, item.size, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className={styles.cartFoot}>
          <div><span>Total</span><strong>{yen.format(cartTotal)}</strong></div>
          <button type="button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </aside>

      <div className={`${styles.toast} ${toast ? styles.show : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  );
}
