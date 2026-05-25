export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white px-8 pt-12 pb-6">

      {/* リンク グリッド */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

        {/* ブランド */}
        <div>
          <p className="text-xl font-medium tracking-wide mb-2">Paradise</p>
          <span className="text-sm text-gray-500 leading-relaxed">
            株式会社食事場
          </span>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xs tracking-widest text-gray-600 mb-3">EXPLORE</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#1dba8a] transition-colors">TechnologyLand & AI</a></li>
            <li><a href="#" className="hover:text-[#1dba8a] transition-colors">Paradise Onsenn</a></li>
            <li><a href="#" className="hover:text-[#1dba8a] transition-colors">Japanese Hokkaido</a></li>
            <li><a href="#" className="hover:text-[#1dba8a] transition-colors">Shokujiba Beach</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-xs tracking-widest text-gray-600 mb-3">INFO</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#1dba8a] transition-colors">料金プラン</a></li>
            <li><a href="#" className="hover:text-[#1dba8a] transition-colors">アクセス</a></li>
            <li><a href="#" className="hover:text-[#1dba8a] transition-colors">お問い合わせ</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs tracking-widest text-gray-600 mb-3">LEGAL</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#1dba8a] transition-colors">プライバシーポリシー</a></li>
            <li><a href="#" className="hover:text-[#1dba8a] transition-colors">利用規約</a></li>
          </ul>
        </div>
      </div>

      {/* 区切り線 */}
      <hr className="border-t border-white/10 mb-5" />

      {/* コピーライト ＋ SNS */}
      <div className="flex flex-wrap justify-between items-center gap-3">
        <p className="text-xs text-gray-600">© 2026 Paradise. All rights reserved.</p>
        <div className="flex gap-5 text-gray-600 text-lg">
          <a href="#" className="hover:text-[#1dba8a] transition-colors" aria-label="X">𝕏</a>
          <a href="#" className="hover:text-[#1dba8a] transition-colors" aria-label="Instagram">◻︎</a>
          <a href="#" className="hover:text-[#1dba8a] transition-colors" aria-label="YouTube">▷</a>
        </div>
      </div>

    </footer>
  );
}