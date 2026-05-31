export type Product = {
  id: string;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    id: "jkdj",
    name: "泥つき生姜",
    price: 520,
  },
  {
    id: "kiui",
    name: "完熟キウイ",
    price: 620,
  },
  {
    id: "klek",
    name: "グリーンパプリカ",
    price: 460,
  },
  {
    id: "kokonat",
    name: "ココナッツ",
    price: 980,
  },
   {
    id: "jkdj",
    name: "泥つき生姜",
    price: 520,
  },
  {
    id: "kiui",
    name: "完熟キウイ",
    price: 620,
  },
  {
    id: "kek",
    name: "グリーンパプリカ",
    price: 460,
  },
  {
    id: "kokonat",
    name: "ココナッツ",
    price: 980,
  },
   {
    id: "konsai",
    name: "根根菜ミックス",
    price: 480,
  },
  {
    id: "kyuuri",
    name: "みずみずしい胡瓜",
    price: 320,
  },
  {
    id: "mango",
    name: "完熟マンゴー",
    price: 460,
  },
  {
    id: "momo",
    name: "香り桃",
    price: 980,
  },
   {
    id: "midori",
    name: "高原白菜",
    price: 520,
  },
  {
    id: "nasubi",
    name: "艶なす",
    price: 620,
  },
  {
    id: "neshouga",
    name: "新しょうが",
    price: 460,
  },
  {
    id: "ninniku",
    name: "かんそうにんにく",
    price: 980,
  },
   {
    id: "ninjin",
    name: "土付き人参",
    price: 520,
  },
  {
    id: "oribu",
    name: "グリーンオリーブ",
    price: 620,
  },
  {
    id: "painappuru",
    name: "畑パイナップル",
    price: 460,
  },
  {
    id: "piman",
    name: "肉厚ピーマン",
    price: 980,
  },
  {
    id: "sakuranbo",
    name: "光沢さくらんぼ",
    price: 520,
  },
  {
    id: "tamanegi",
    name: "白玉ねぎ",
    price: 620,
  },
  {
    id: "tomato",
    name: "露地トマト",
    price: 460,
  },
  {
    id: "tougarasi",
    name: "赤とうがらし",
    price: 980,
  },
   {
    id: "toumorokosi",
    name: "泥つき生姜",
    price: 520,
  },
  {
    id: "yakiimo",
    name: "紅やきいも",
    price: 620,
  },
  {
    id: "koubebeef",
    name: "神戸ビーフ",
    price: 460,
  },
  {
    id: "matuzakausi",
    name: "松坂牛",
    price: 980,
  },
   {
    id: "oumigyu",
    name: "近江牛",
    price: 520,
  },
  {
    id: "shatoburian",
    name: "シャトーブリアン",
    price: 620,
  },
  {
    id: "kinkaton",
    name: "金華豚",
    price: 460,
  },
  {
    id: "angasubeef",
    name: "アンガスビーフ",
    price: 980,
  },
   {
    id: "honmaguro",
    name: "本まぐろ",
    price: 520,
  },
  {
    id: "hugu",
    name: "フグ",
    price: 620,
  },
  {
    id: "awabi",
    name: "アワビ",
    price: 460,
  },
  {
    id: "iseebi",
    name: "伊勢海老",
    price: 980,
  },
   {
    id: "hamo",
    name: "ハモ",
    price: 520,
  },
  {
    id: "samon",
    name: "サーモン",
    price: 620,
  },
  {
    id: "abokado",
    name: "樹上アボカド",
    price: 620,
  },
  {
    id: "burokkori",
    name: "畑ブロッコリー",
    price: 620,
  },
  {
    id: "endoumame",
    name: "朝露えんどう豆",
    price: 620,
  },
  {
    id: "jagaimo",
    name: "新じゃがいも",
    price: 620,
  },
  {
    id: "klek",
    name: "グリーンパプリカ",
    price: 620,
  },
  {
    id: "kokonatu",
    name: "ココナッツ",
    price: 620,
  },
  {
    id: "painapuru",
    name: "畑パイナップル",
    price: 620,
  },
];

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};