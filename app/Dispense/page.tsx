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
  { id: "mango", name: "完熟マンゴー", category: "果物", price: 1480, unit: "2玉", image: "/images/fyi.png", origin: "温室栽培", tag: "濃密", note: "濃密な甘さ。贈り物にも映えるプレミアム品。" },
  { id: "burokkori", name: "畑ブロッコリー", category: "野菜", price: 390, unit: "1株", image: "/images/burokori.png", origin: "北見", tag: "定番", note: "茎まで甘い。蒸し料理やグリルで香りが立ちます。" },
  { id: "ninniku", name: "乾燥にんにく", category: "香味", price: 560, unit: "300g", image: "/images/ninnikuu.png", origin: "上川", tag: "強香", note: "香りの芯が強く、炒め物やパスタに便利。" },
  { id: "koubebeef", name: "神戸ビーフ", category: "肉", price: 4800, unit: "100g", image: "/images/dispense/uyfy.png", origin: "兵庫", tag: "特選", note: "高級和牛。炙りや寿司に。" },
  { id: "shatoburian", name: "シャトーブリアン", category: "肉", price: 7000, unit: "100g", image: "/images/dispense/red.png", origin: "厳選牧場", tag: "希少", note: "希少部位の極み。特別な日のメインに。" },
  { id: "honmaguro", name: "本マグロ", category: "魚", price: 15000, unit: "100g", image: "/images/honmaguroo.png", origin: "大間", tag: "極上", note: "脂乗り極上マグロ。刺身や握りに。" },
  { id: "iseebi", name: "伊勢海老", category: "魚", price: 15000, unit: "100g", image: "/images/ebi.png", origin: "三重", tag: "祝い", note: "ぷりぷり海の王様。晴れの日の食卓へ。" },
  { id: "yoguruto", name: "ヨーグルト", category: "デザート", price: 9000, unit: "100g", image: "/images/yoguruto.png", origin: "十勝", tag: "濃厚", note: "なめらかな口当たり。果物と合わせて。" },
  { id: "yuzujusu", name: "柚子ジュース", category: "ジュース", price: 9000, unit: "100g", image: "/images/yuzujusu.png", origin: "高知", tag: "香る", note: "酸味と香りが立つ一杯。食事の余韻に。" },
  { id: "dispense-corn", name: "朝採りとうもろこし", category: "野菜", price: 640, unit: "2本", image: "/images/dispense/corn.png", origin: "十勝", tag: "甘粒", note: "粒がはじける濃い甘み。焼きとうもろこしや冷製スープに。" },
  { id: "dispense-cucumber", name: "朝露きゅうり", category: "野菜", price: 360, unit: "4本", image: "/images/dispense/cucumber.png", origin: "旭川", tag: "瑞々しい", note: "歯切れの良い一本。浅漬け、サラダ、冷やし料理に。" },
  { id: "dispense-eggplant", name: "艶黒なす", category: "野菜", price: 420, unit: "4本", image: "/images/dispense/eggplant.png", origin: "余市", tag: "艶", note: "皮はつややかで実はやわらか。焼きなすや揚げ浸しに。" },
  { id: "dispense-baked-sweet-potato", name: "蜜焼き芋", category: "根菜", price: 720, unit: "600g", image: "/images/dispense/baked-sweet-potato.png", origin: "函館", tag: "蜜甘", note: "しっとり黄色い甘み。温めるだけでデザートになります。" },
  { id: "dispense-potato-whole", name: "丸ごとじゃがいも", category: "根菜", price: 440, unit: "700g", image: "/images/dispense/potato-whole.png", origin: "美瑛", tag: "定番", note: "皮ごと楽しめる香り。ローストやバターじゃがに。" },
  { id: "dispense-cherry-branch", name: "枝付きさくらんぼ", category: "果物", price: 1580, unit: "300g", image: "/images/dispense/cherry-branch.png", origin: "仁木", tag: "艶赤", note: "枝付きの鮮やかな実。ギフトにも映える初夏の果実です。" },
  { id: "dispense-onion", name: "甘玉ねぎ", category: "野菜", price: 360, unit: "4玉", image: "/images/dispense/onion.png", origin: "北見", tag: "甘み", note: "みずみずしく辛味が穏やか。サラダにも加熱にも。" },
  { id: "dispense-ginger", name: "黄金しょうが", category: "香味", price: 580, unit: "250g", image: "/images/dispense/ginger.png", origin: "日高", tag: "香る", note: "力強い香りと辛味。薬味、煮魚、ジンジャーシロップに。" },
  { id: "dispense-garlic", name: "白にんにく", category: "香味", price: 620, unit: "300g", image: "/images/dispense/garlic.png", origin: "上川", tag: "芳醇", note: "白く締まった香りの芯。炒め物や肉料理の土台に。" },
  { id: "dispense-tomato-basil", name: "バジルトマト", category: "野菜", price: 560, unit: "500g", image: "/images/dispense/tomato-basil.png", origin: "富良野", tag: "香草", note: "バジルと合わせたい濃厚トマト。前菜やソースに。" },
  { id: "dispense-purple-turnip", name: "紫かぶ", category: "根菜", price: 480, unit: "6玉", image: "/images/dispense/purple-turnip.png", origin: "十勝", tag: "彩り", note: "紫と白の色合いが美しい小かぶ。浅漬けやローストに。" },
  { id: "dispense-green-olive", name: "樹上グリーンオリーブ", category: "果物", price: 840, unit: "250g", image: "/images/dispense/green-olive.png", origin: "小豆島", tag: "新漬け", note: "爽やかな苦味と果実感。マリネや前菜に。" },
  { id: "dispense-carrot", name: "雫にんじん", category: "根菜", price: 420, unit: "600g", image: "/images/dispense/carrot.png", origin: "上川", tag: "濃橙", note: "水分を含んだ甘い人参。ラペ、スープ、グリルに。" },
  { id: "dispense-green-paprika", name: "畑グリーンパプリカ", category: "野菜", price: 520, unit: "3個", image: "/images/dispense/green-paprika.png", origin: "日高", tag: "肉厚", note: "肉厚でジューシー。炒め物やグリルで存在感が出ます。" },
  { id: "dispense-avocado-toast", name: "完熟アボカド", category: "果物", price: 780, unit: "2玉", image: "/images/dispense/avocado-toast.png", origin: "温室栽培", tag: "なめらか", note: "クリーミーな完熟感。トースト、サラダ、ディップに。" },
  { id: "dispense-red-chili", name: "赤とうがらし", category: "香味", price: 390, unit: "120g", image: "/images/dispense/red-chili.png", origin: "十勝", tag: "鮮烈", note: "鮮やかな辛み。オイル漬けや炒め物のアクセントに。" },
  { id: "dispense-cabbage", name: "高原キャベツ", category: "野菜", price: 460, unit: "1玉", image: "/images/dispense/cabbage.png", origin: "美瑛", tag: "葉脈", note: "葉が締まり、甘みのある高原キャベツ。千切りや蒸し料理に。" },
  { id: "dispense-edamame", name: "枝付きえだまめ", category: "豆類", price: 560, unit: "300g", image: "/images/dispense/edamame.png", origin: "十勝", tag: "青香", note: "畑の香りが残る枝豆。塩茹でで甘みが立ちます。" },
  { id: "dispense-red-apple", name: "雫りんご", category: "果物", price: 380, unit: "3玉", image: "/images/dispense/fy.png", origin: "余市", tag: "蜜香", note: "みずみずしい赤りんご。生食、サラダ、焼き菓子に。" },
  { id: "dispense-green-apple-tree", name: "青空青りんご", category: "果物", price: 420, unit: "3玉", image: "/images/dispense/green-apple-tree.png", origin: "仁木", tag: "爽快", note: "爽やかな酸味と歯切れ。朝食やジュースにぴったりです。" },
  { id: "dispense-grape-vine", name: "樹上ぶどう", category: "果物", price: 980, unit: "1房", image: "/images/dispense/grape-vine.png", origin: "余市", tag: "房採り", note: "日差しを受けた濃い甘み。冷やしてそのままどうぞ。" },
  { id: "dispense-lemon-tree", name: "枝付きレモン", category: "果物", price: 480, unit: "4玉", image: "/images/dispense/lemon-tree.png", origin: "瀬戸内", tag: "香酸", note: "皮まで香るレモン。料理、ドリンク、焼き菓子に。" },
  { id: "dispense-japanese-pear", name: "洋梨", category: "果物", price: 620, unit: "3玉", image: "/images/dispense/japanese-pear.png", origin: "山形", tag: "芳醇", note: "なめらかな果肉と上品な香り。追熟してデザートに。" },
  { id: "dispense-kiwi-tree", name: "樹上キウイ", category: "果物", price: 540, unit: "5玉", image: "/images/dispense/kiwi-tree.png", origin: "愛媛", tag: "酸甘", note: "甘酸っぱさのバランスが良いキウイ。ヨーグルトにも合います。" },
  { id: "dispense-orange-tree", name: "完熟オレンジ", category: "果物", price: 560, unit: "4玉", image: "/images/dispense/orange-tree.png", origin: "和歌山", tag: "陽光", note: "果汁たっぷりの香り高いオレンジ。朝の一皿に。" },
  { id: "dispense-melon-vine", name: "畑メロン", category: "果物", price: 1680, unit: "1玉", image: "/images/dispense/melon-vine.png", origin: "夕張", tag: "網目", note: "香りの立つメロン。冷やして特別なデザートに。" },
  { id: "dispense-watermelon-vine", name: "露地スイカ", category: "果物", price: 1280, unit: "1玉", image: "/images/dispense/watermelon-vine.png", origin: "富良野", tag: "夏味", note: "みずみずしく甘い夏の主役。大きく切ってどうぞ。" },
  { id: "dispense-strawberry-field", name: "畑いちご", category: "果物", price: 880, unit: "300g", image: "/images/dispense/strawberry-field.png", origin: "日高", tag: "完熟", note: "赤く熟した香り。生食、タルト、ギフトにも。" },
  { id: "dispense-blueberry", name: "朝露ブルーベリー", category: "果物", price: 760, unit: "200g", image: "/images/dispense/blueberry.png", origin: "美瑛", tag: "濃青", note: "粒ごとに香りが立つブルーベリー。朝食やソースに。" },
  { id: "dispense-banana", name: "房バナナ", category: "果物", price: 360, unit: "1房", image: "/images/dispense/fduy.png", origin: "沖縄", tag: "甘熟", note: "やさしい甘さの定番果物。スムージーやおやつに。" },
  { id: "dispense-lime", name: "グリーンライム", category: "果物", price: 420, unit: "4玉", image: "/images/dispense/tdtu.png", origin: "高知", tag: "清香", note: "きりっとした酸味。料理や炭酸ドリンクに香りを添えます。" },
  { id: "dispense-pineapple", name: "畑パイナップル", category: "果物", price: 980, unit: "1玉", image: "/images/dispense/tfuy.png", origin: "沖縄", tag: "南国", note: "甘酸っぱく香る果肉。カットフルーツやデザートに。" },
  { id: "dispense-coconut", name: "生ココナッツ", category: "果物", price: 980, unit: "1玉", image: "/images/dispense/yufyi.png", origin: "沖縄", tag: "白果", note: "白い果肉とやさしい香り。ドリンクやスイーツに。" },
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
            <span className={styles.mark}>D</span>
            <span>Dispense</span>
          </a>
          <nav className={styles.navLinks} aria-label="メインナビゲーション">
            <a href="#products">商品</a>
            <button className={styles.cartButton} type="button" onClick={() => setCartOpen(true)}>
              Bag <span>{cartCount}</span>
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className={`${styles.shell} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Shokujiba for iPhone</span>
            <h1>食材を、手のひらで美しく選ぶ。</h1>
            <p>
              黄色い光をまとう、静かなオンラインマーケット。旬の食材を見つけて、タップして、あなたの一箱へ。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#products">Explore</a>
              <button className={styles.secondary} type="button" onClick={addChefSet}>Chef Set</button>
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
            <div><strong>16</strong><span>Selected</span></div>
            <div><strong>24h</strong><span>Fresh ship</span></div>
            <div><strong>Cold</strong><span>Smart pack</span></div>
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`} id="products">
          <div className={styles.sectionHead}>
            <span>STORE</span>
            <h2>今日の一箱をつくる。</h2>
            <p>検索、カテゴリ、追加。iPhoneで迷わず進めるために、操作は下へ、情報はすっきり。</p>
          </div>

          <div className={styles.toolbar}>
            <input
              className={styles.search}
              type="search"
              placeholder="Search"
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
              <h2>軽く、速く、きれいに届く。</h2>
            </div>
            {[
              ["01", "Fresh", "状態の良いロットだけを並べ、欠品より鮮度を優先します。"],
              ["02", "Packed", "野菜、果物、肉、魚をそれぞれの温度帯で扱います。"],
              ["03", "Simple", "カードを見て、追加して、下部バーから確認できます。"],
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
            <h2>Tap. Box. Checkout.</h2>
            <p>必要なものだけ選んで、カートから注文へ。旬と高級食材をひとつの箱にまとめられます。</p>
          </div>
          <button className={styles.primary} type="button" onClick={() => setCartOpen(true)}>カートを確認</button>
        </section>
      </main>

      <aside className={`${styles.cartPanel} ${cartOpen ? styles.open : ""}`} aria-label="ショッピングカート">
        <div className={styles.cartHead}>
          <div>
            <span>YOUR BAG</span>
            <strong>Bag</strong>
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

      <button className={styles.mobileBag} type="button" onClick={() => setCartOpen(true)} aria-label="カートを確認">
        <span>{cartCount} items</span>
        <strong>{yen.format(cartTotal)}</strong>
      </button>

      <div className={`${styles.toast} ${toast ? styles.show : ""}`} role="status" aria-live="polite">
        {toast}
      </div>

      <footer className={styles.footer}>
        <div className={styles.shell}>Shokuzai Dispense by Shokujiba</div>
      </footer>
    </div>
  );
}
