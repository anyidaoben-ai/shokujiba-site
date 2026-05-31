export type Product = {
  id: string;
  name: string;
  price: number;
};

export const products: Product[] = [
  { id: "abokado", name: "樹上アボカド", price: 680 },
  { id: "burokkori", name: "畑ブロッコリー", price: 390 },
  { id: "endoumame", name: "朝露えんどう豆", price: 520 },
  { id: "jagaimo", name: "新じゃがいも", price: 420 },
  { id: "jkdj", name: "泥つき生姜", price: 520 },
  { id: "kiui", name: "完熟キウイ", price: 620 },
  { id: "klek", name: "グリーンパプリカ", price: 460 },
  { id: "kokonatu", name: "ココナッツ", price: 980 },
  { id: "konsai", name: "紫根菜ミックス", price: 480 },
  { id: "kyuuri", name: "みずみずしい胡瓜", price: 320 },
  { id: "mango", name: "完熟マンゴー", price: 1480 },
  { id: "midori", name: "高原白菜", price: 430 },
  { id: "momo", name: "香り桃", price: 1280 },
  { id: "nasubi", name: "艶なす", price: 360 },
  { id: "neshouga", name: "新しょうが", price: 450 },
  { id: "ninjin", name: "土付き人参", price: 380 },
  { id: "ninniku", name: "乾燥にんにく", price: 560 },
  { id: "oribu", name: "グリーンオリーブ", price: 760 },
  { id: "painapuru", name: "畑パイナップル", price: 980 },
  { id: "piman", name: "肉厚ピーマン", price: 340 },
  { id: "sakuranbo", name: "光沢さくらんぼ", price: 1380 },
  { id: "tamanegi", name: "白玉ねぎ", price: 330 },
  { id: "tomato", name: "露地トマト", price: 420 },
  { id: "tougarasi", name: "赤とうがらし", price: 360 },
  { id: "toumorokosi", name: "とうもろこし", price: 580 },
  { id: "yakiimo", name: "紅やきいも", price: 640 },
  { id: "koubebeef", name: "神戸ビーフ", price: 4800 },
  { id: "matuzakausi", name: "松坂牛", price: 3600 },
  { id: "oumigyu", name: "近江牛", price: 4600 },
  { id: "shatoburian", name: "シャトーブリアン", price: 7000 },
  { id: "kinkaton", name: "金華豚", price: 7000 },
  { id: "angasubeef", name: "アンガスビーフ", price: 3000 },
  { id: "honmaguro", name: "本マグロ", price: 15000 },
  { id: "hugu", name: "フグ", price: 8000 },
  { id: "awabi", name: "アワビ", price: 10000 },
  { id: "iseebi", name: "伊勢海老", price: 15000 },
  { id: "hamo", name: "ハモ", price: 9000 },
  { id: "samon", name: "サーモン", price: 9000 },
  { id: "yukata-black", name: "Royal Dining 浴衣 Black Crown", price: 17800 },
  { id: "yukata-gold", name: "Royal Dining 浴衣 Gold Feast", price: 18800 },
  { id: "sweat-white", name: "Royal Dining Hoodie Set White", price: 14800 },
  { id: "tee-white", name: "Royal Dining Tee & Shorts White", price: 9800 },
  { id: "sweat-black", name: "Royal Dining Hoodie Set Black", price: 14800 },
];

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};
