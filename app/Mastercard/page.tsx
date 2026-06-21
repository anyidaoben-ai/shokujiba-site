"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

type Tier = {
  id: string;
  icon: string;
  name: string;
  price: string;
  color: string;
  benefit: string;
  tone: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "crown";
};

type MenuSection = {
  emoji: string;
  title: string;
  items: {
    name: string;
    price: string;
    limited?: string;
  }[];
};

type PreviewImage = {
  src: string;
  alt: string;
};

const tiers: Tier[] = [
  {
    id: "mastercard-bronze",
    icon: "🥉",
    name: "Bronze Master",
    price: "3万円",
    color: "ブロンズ",
    benefit: "会員証発行・限定情報配信・イベント先行案内",
    tone: "bronze",
  },
  {
    id: "mastercard-silver",
    icon: "🥈",
    name: "Silver Master",
    price: "10万円",
    color: "シルバー",
    benefit: "Bronze特典＋優先予約・限定グッズ購入権",
    tone: "silver",
  },
  {
    id: "mastercard-gold",
    icon: "🥇",
    name: "Gold Master",
    price: "100万円",
    color: "ゴールド",
    benefit: "Silver特典＋VIPイベント招待・専用ラウンジ利用",
    tone: "gold",
  },
  {
    id: "mastercard-platinum",
    icon: "⚫",
    name: "Platinum Master",
    price: "1,000万円",
    color: "ブラックプラチナ",
    benefit: "Gold特典＋専属コンシェルジュ・優先宿泊予約",
    tone: "platinum",
  },
  {
    id: "mastercard-diamond",
    icon: "💎",
    name: "Diamond Master",
    price: "1億円",
    color: "ブラックダイヤモンド",
    benefit: "Platinum特典＋限定パラダイス体験・プライベートイベント",
    tone: "diamond",
  },
  {
    id: "mastercard-crown",
    icon: "👑",
    name: "Paradise Crown Master",
    price: "10億円",
    color: "ブラック&ロイヤルゴールド",
    benefit: "全施設VIP待遇・最上位メンバー権",
    tone: "crown",
  },
];

const menuSections: MenuSection[] = [
  {
    emoji: "👕",
    title: "アパレルコレクション",
    items: [
      { name: "ロゴTシャツ", price: "¥29,800" },
      { name: "プレミアムTシャツ", price: "¥49,800" },
      { name: "Paradise パーカー", price: "¥98,000" },
      { name: "ジップパーカー", price: "¥128,000" },
      { name: "キャップ", price: "¥39,800" },
      { name: "バケットハット", price: "¥49,800" },
      { name: "ニット帽", price: "¥39,800" },
      { name: "ポロシャツ", price: "¥69,800" },
    ],
  },
  {
    emoji: "🍽️",
    title: "ダイニングコレクション",
    items: [
      { name: "ゴールドタンブラー", price: "¥39,800" },
      { name: "ワイングラス", price: "¥29,800" },
      { name: "シャンパングラス", price: "¥49,800" },
      { name: "マグカップ", price: "¥19,800" },
      { name: "高級箸", price: "¥29,800" },
      { name: "ゴールドスプーン", price: "¥19,800" },
      { name: "ゴールドフォーク", price: "¥19,800" },
      { name: "ゴールドナイフ", price: "¥29,800" },
      { name: "プレート皿", price: "¥39,800" },
      { name: "カトラリーセット", price: "¥198,000" },
    ],
  },
  {
    emoji: "👛",
    title: "レザーコレクション",
    items: [
      { name: "長財布", price: "¥198,000" },
      { name: "二つ折り財布", price: "¥128,000" },
      { name: "カードケース", price: "¥79,800" },
      { name: "キーケース", price: "¥59,800" },
      { name: "名刺入れ", price: "¥79,800" },
      { name: "パスポートケース", price: "¥98,000" },
      { name: "トートバッグ", price: "¥298,000" },
      { name: "バックパック", price: "¥398,000" },
    ],
  },
  {
    emoji: "💎",
    title: "ジュエリーコレクション",
    items: [
      { name: "リング", price: "¥198,000" },
      { name: "ブレスレット", price: "¥298,000" },
      { name: "ネックレス", price: "¥398,000" },
      { name: "カフス", price: "¥128,000" },
      { name: "腕時計", price: "¥1,980,000" },
      { name: "タイピン", price: "¥98,000" },
      { name: "ピンバッジ", price: "¥49,800" },
      { name: "マネークリップ", price: "¥128,000" },
    ],
  },
  {
    emoji: "👑",
    title: "Paradise Crown Collection",
    items: [
      { name: "純金ロゴオブジェ", limited: "10個", price: "¥10,000,000" },
      { name: "会員専用トロフィー", limited: "50個", price: "¥5,000,000" },
      { name: "創設メンバー認定プレート", limited: "100個", price: "¥1,000,000" },
      { name: "10億円会員専用カード", limited: "10名", price: "¥1,000,000,000" },
      { name: "Paradise Crown 限定腕時計", limited: "100本", price: "¥10,000,000" },
    ],
  },
];

const cardImages = [
  {
    src: "/images/mastercard/master-tiers.jpg",
    alt: "Shokujiba Master Card rank lineup",
  },
  {
    src: "/images/mastercard/ultimate-card.jpg",
    alt: "Shokujiba Paradise ultimate member card benefits",
  },
  {
    src: "/images/mastercard/luxury-collection.jpg",
    alt: "Shokujiba luxury collection overview",
  },
];

const menuImages = [
  "/images/mastercard/apparel-menu.jpg",
  "/images/mastercard/dining-menu.jpg",
  "/images/mastercard/master-card-menu.jpg",
  "/images/mastercard/leather-menu.jpg",
  "/images/mastercard/jewelry-menu.jpg",
  "/images/mastercard/crown-menu.jpg",
];

export default function MastercardPage() {
  const [loadingId, setLoadingId] = useState("");
  const [notice, setNotice] = useState("");
  const [previewImage, setPreviewImage] = useState<PreviewImage | null>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPreviewImage(null);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  async function buyTier(tier: Tier) {
    try {
      setLoadingId(tier.id);
      setNotice("");

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          returnPath: "/Mastercard",
          cartItems: [
            {
              id: tier.id,
              quantity: 1,
            },
          ],
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "決済ページを作成できませんでした");
      }

      window.location.assign(data.url);
    } catch (error) {
      console.error("Mastercard checkout error:", error);
      setNotice("決済ページを開けませんでした。時間をおいてもう一度お試しください。");
    } finally {
      setLoadingId("");
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>👑 SHOKUJIBA LUXURY COLLECTION</p>
          <h1>Shokujiba Master Card</h1>
          <p className={styles.lede}>
            公式ラグジュアリーメニュー。会員ランク、限定特典、Paradise Crown Collectionまでを
            ブラック&ロイヤルゴールドの世界観でまとめました。
          </p>
          <div className={styles.heroActions}>
            <Link href="#membership" className={styles.primaryButton}>
              会員ランクを見る
            </Link>
            <Link href="#luxury-menu" className={styles.secondaryButton}>
              メニューを見る
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/mastercard/ultimate-card.jpg"
            alt="Shokujiba Paradise Master Card"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>

      <section id="membership" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>Membership Rank</p>
          <h2>選ばれた会員だけのマスターカード</h2>
        </div>
        {notice && <p className={styles.notice}>{notice}</p>}
        <div className={styles.tierGrid}>
          {tiers.map((tier) => (
            <button
              className={`${styles.tierCard} ${styles[tier.tone]}`}
              disabled={loadingId !== ""}
              key={tier.name}
              onClick={() => buyTier(tier)}
              type="button"
            >
              <div className={styles.tierTop}>
                <span>{tier.icon}</span>
                <p>{tier.color}</p>
              </div>
              <h3>{tier.name}</h3>
              <strong>{tier.price}</strong>
              <p>{tier.benefit}</p>
              <span className={styles.buyLabel}>
                {loadingId === tier.id ? "決済ページを準備中" : `${tier.name}を買う`}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.gallery} aria-label="Shokujiba Master Card visuals">
        {cardImages.map((image) => (
          <button
            aria-label={`${image.alt}を拡大表示`}
            className={styles.galleryImage}
            key={image.src}
            onClick={() => setPreviewImage(image)}
            type="button"
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
            <span className={styles.zoomLabel}>タップで拡大</span>
          </button>
        ))}
      </section>

      <section id="luxury-menu" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>Official Luxury Menu</p>
          <h2>公式ラグジュアリーメニュー</h2>
        </div>
        <div className={styles.menuGrid}>
          {menuSections.map((section) => (
            <article className={styles.menuCard} key={section.title}>
              <h3>
                <span>{section.emoji}</span>
                {section.title}
              </h3>
              <div className={styles.table}>
                <div className={styles.tableHead}>
                  <span>商品</span>
                  {section.items.some((item) => item.limited) && <span>限定数</span>}
                  <span>価格</span>
                </div>
                {section.items.map((item) => (
                  <div className={styles.tableRow} key={item.name}>
                    <span>{item.name}</span>
                    {section.items.some((entry) => entry.limited) && <span>{item.limited || "-"}</span>}
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.menuVisuals} aria-label="Luxury menu image references">
        {menuImages.map((src, index) => (
          <button
            aria-label={`Shokujiba luxury menu reference ${index + 1}を拡大表示`}
            className={styles.menuVisual}
            key={src}
            onClick={() =>
              setPreviewImage({
                src,
                alt: `Shokujiba luxury menu reference ${index + 1}`,
              })
            }
            type="button"
          >
            <Image
              src={src}
              alt={`Shokujiba luxury menu reference ${index + 1}`}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <span className={styles.zoomLabel}>タップで拡大</span>
          </button>
        ))}
      </section>

      <section className={styles.closing}>
        <p>SHOKUJIBA PARADISE</p>
        <h2>👑 Only For The Ultimate Members.</h2>
        <span>🏝️ 人生を最高のパラダイスへ。</span>
      </section>

      {previewImage && (
        <div
          aria-label="画像拡大表示"
          aria-modal="true"
          className={styles.lightbox}
          onClick={() => setPreviewImage(null)}
          role="dialog"
        >
          <button
            aria-label="拡大画像を閉じる"
            className={styles.closeButton}
            onClick={() => setPreviewImage(null)}
            type="button"
          >
            ×
          </button>
          <div className={styles.lightboxImage} onClick={(event) => event.stopPropagation()}>
            <Image
              src={previewImage.src}
              alt={previewImage.alt}
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
