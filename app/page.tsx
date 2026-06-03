import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "食事場",
  alternateName: "Shokujiba",
  url: "https://shokujiba-site.vercel.app",
};

const energyRoutes = [
  {
    title: "Shokuzai",
    label: "Shokuzai",
    description: "Shokuzaiやパワーを受け取るリンク",
    href: "/Dispense",
    tone: "from-[#ffe38a] via-[#ffffff] to-[#8feaff]",
  },
  {
    title: "Goods",
    label: "Goods",
    description: "Shokujibaファンがグッズを受け取る",
    href: "/Goods",
    tone: "from-[#ffb7e8] via-[#ffffff] to-[#ffe28a]",
  },
  {
    title: "Paradise",
    label: "Paradise",
    description: "Shokujibaのエネルギーを肌で体感する",
    href: "/Paradise",
    tone: "from-[#9cffcf] via-[#ffffff] to-[#ffd1f1]",
  },
  {
    title: "Trip",
    label: "Trip",
    description: "ShokujibaのShokuzaiで楽しむ",
    href: "/trip",
    tone: "from-[#99ddff] via-[#ffffff] to-[#d6bdff]",
  },
  {
    title: "Services",
    label: "Services",
    description: "Shokujibaの歴史を知る、Shokujibaを利用する",
    href: "/TechnologyLand-AI",
    tone: "from-[#c8d0ff] via-[#ffffff] to-[#fff08f]",
  },
  {
    title: "Contact",
    label: "Contact",
    description: "Masterとつながれる唯一のリンク",
    href: "/upitel",
    tone: "from-[#ffc0d1] via-[#ffffff] to-[#90f0df]",
  },
];

const energyWords = [
  "WAKUWAKU",
  "WHITE LIGHT",
  "GOLD LIGHT",
  "RAINBOW",
  "PARADISE",
  "NAGAREBOU",
  "FREEDOM",
  "DREAM",
  "BEYOND AMERICA",
];

const nationSignals = [
  { label: "Freedom", text: "自由のスケールをParadiseへ上げる。" },
  { label: "Dream", text: "見た瞬間に、未来へ進みたくなる。" },
  { label: "Scale", text: "国家のような巨大さでワクワクを満たす。" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative isolate min-h-screen overflow-hidden bg-white text-[#050508]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <style>{`
          @keyframes rise-in {
            from { opacity: 0; transform: translateY(42px); filter: blur(12px); }
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes light-sweep {
            0% { transform: translateX(-28%) rotate(-7deg); opacity: .36; }
            50% { opacity: .9; }
            100% { transform: translateX(28%) rotate(-7deg); opacity: .36; }
          }
          @keyframes gate-glow {
            0%, 100% { box-shadow: 0 0 28px rgba(255, 225, 126, .28), inset 0 1px 0 rgba(255,255,255,.82); }
            50% { box-shadow: 0 0 64px rgba(255, 225, 126, .58), 0 0 44px rgba(133, 229, 255, .32), inset 0 1px 0 rgba(255,255,255,.94); }
          }
          @keyframes word-flow {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes symbol-float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.018); }
          }
          @keyframes aura-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes receive-pulse {
            0%, 100% { opacity: .55; transform: scale(.96); }
            50% { opacity: .95; transform: scale(1.04); }
          }
          @keyframes white-dimension {
            0%, 100% { opacity: .72; filter: blur(18px) brightness(1); }
            50% { opacity: 1; filter: blur(24px) brightness(1.08); }
          }
          @keyframes star-blink {
            0%, 100% { opacity: .32; transform: scale(.92); }
            50% { opacity: .86; transform: scale(1.08); }
          }
          .reveal-energy {
            animation: rise-in .9s ease both;
            animation-timeline: view();
            animation-range: entry 7% cover 28%;
          }
          @supports not (animation-timeline: view()) {
            .reveal-energy { animation-timeline: auto; animation-range: normal; }
          }
        `}</style>

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#ffffff_0%,#fffef9_18%,#ffffff_42%,#fffafd_64%,#ffffff_100%)]" />
          <div className="absolute left-1/2 top-[-22rem] h-[54rem] w-[54rem] -translate-x-1/2 rounded-full bg-white shadow-[0_0_180px_rgba(255,255,255,1)] [animation:white-dimension_7s_ease-in-out_infinite]" />
          <div className="absolute inset-x-[-12%] top-[-7rem] h-[26rem] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.98),rgba(255,232,141,.54)_36%,rgba(159,236,255,.26)_58%,transparent_76%)] blur-2xl" />
          <div className="absolute left-[8%] top-[28rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(201,30,57,.13),rgba(255,255,255,.72)_42%,transparent_70%)] blur-xl" />
          <div className="absolute inset-x-[-18%] top-[18rem] h-36 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.96),rgba(255,220,113,.62),rgba(143,235,255,.5),rgba(255,188,238,.42),transparent)] blur-xl [animation:light-sweep_8s_ease-in-out_infinite_alternate]" />
          <div className="absolute left-[-12%] top-[10rem] h-[46rem] w-[34rem] rotate-[-18deg] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,.0)_0,rgba(255,255,255,.0)_28px,rgba(201,30,57,.08)_28px,rgba(201,30,57,.08)_42px,rgba(23,71,151,.075)_42px,rgba(23,71,151,.075)_56px)] blur-[1px]" />
          <div className="absolute right-[-10%] top-[5rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(23,71,151,.13),transparent_62%)] blur-2xl" />
          <div className="absolute inset-x-0 top-[42rem] h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          <div className="absolute inset-x-0 top-[43rem] h-40 bg-[linear-gradient(180deg,rgba(255,255,255,.52),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-[32rem] bg-[linear-gradient(180deg,transparent,rgba(255,244,197,.42)_36%,rgba(255,255,255,.82))]" />
        </div>

        <section className="relative px-5 pb-16 pt-14 sm:px-8 lg:px-12">
          <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col justify-center">
            <div className="reveal-energy relative overflow-hidden border border-white/90 bg-white/72 px-5 py-5 shadow-[0_0_90px_rgba(255,255,255,1),0_24px_90px_rgba(189,142,24,.08),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-2xl sm:px-8 lg:px-12 [animation:gate-glow_5s_ease-in-out_infinite]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#ffd65b,#ffffff,#74e6ff,#ffb7ef,#ffd65b)]" />
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-64 bg-[linear-gradient(135deg,rgba(23,71,151,.16),rgba(255,255,255,.22)_48%,rgba(201,30,57,.13))]" />
              <div className="pointer-events-none absolute right-6 top-6 grid grid-cols-4 gap-2 opacity-60">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,.95)] [animation:star-blink_3.4s_ease-in-out_infinite]"
                    key={index}
                    style={{ animationDelay: `${index * 120}ms` }}
                  />
                ))}
              </div>
              <div className="grid gap-10 py-10 lg:grid-cols-[.86fr_1.14fr] lg:items-center lg:py-14">
                <div className="relative z-10">
                  <p className="inline-flex border border-amber-300/70 bg-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-[.3em] text-amber-800 shadow-[0_0_34px_rgba(255,219,102,.34)] backdrop-blur-xl">
                    Receive Energy from the Symbol
                  </p>
                  <p className="mt-4 inline-flex border border-blue-200/80 bg-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-[.26em] text-blue-900 shadow-[0_0_28px_rgba(23,71,151,.12)] backdrop-blur-xl">
                    Paradise Nation beyond America
                  </p>
                  <h1 className="mt-7 max-w-5xl text-[clamp(3rem,8.2vw,8.2rem)] font-black leading-[.86] tracking-normal text-[#111018]">
                    Shokujiba
                    <span className="block text-[#050508] drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
                      Paradise
                    </span>
                  </h1>
                  <div className="mt-8 max-w-2xl border-l-2 border-amber-300/80 pl-5">
                  </div>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/Paradise"
                      className="inline-flex items-center justify-center border border-amber-300/80 bg-white px-6 py-4 text-sm font-black uppercase tracking-[.18em] text-[#050508] shadow-[0_0_42px_rgba(255,255,255,1),0_0_32px_rgba(255,221,119,.38),0_18px_44px_rgba(17,16,24,.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white"
                    >
                      Enter Paradise
                    </Link>
                    <Link
                      href="/TechnologyLand-AI"
                      className="inline-flex items-center justify-center border border-white/90 bg-white/65 px-6 py-4 text-sm font-black uppercase tracking-[.18em] text-[#111018] shadow-[0_18px_44px_rgba(255,255,255,.72)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-[#fff5c6]"
                    >
                      Receive Energy
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[520px] overflow-hidden border border-white/90 bg-[radial-gradient(circle_at_50%_44%,rgba(255,255,255,1),rgba(255,252,236,.78)_28%,rgba(244,253,255,.72)_56%,rgba(255,250,253,.72)),linear-gradient(180deg,rgba(255,255,255,.96),rgba(255,253,246,.62),rgba(250,254,255,.72))] shadow-[0_0_100px_rgba(255,255,255,1),inset_0_1px_0_rgba(255,255,255,1),0_24px_80px_rgba(183,133,18,.12)] sm:min-h-[620px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,215,79,.28),transparent_34%),radial-gradient(circle_at_50%_48%,rgba(112,226,255,.2),transparent_52%),radial-gradient(circle_at_50%_48%,rgba(255,155,231,.16),transparent_68%)]" />
                  <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_34px,rgba(201,30,57,.07)_34px,rgba(201,30,57,.07)_42px,transparent_42px,transparent_68px,rgba(23,71,151,.06)_68px,rgba(23,71,151,.06)_76px)]" />
                  <div className="absolute inset-x-8 top-10 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                  <div className="absolute bottom-0 left-[8%] h-[72%] w-[14%] border border-white/70 bg-white/30 shadow-[0_0_34px_rgba(255,255,255,.5)] backdrop-blur-md" />
                  <div className="absolute bottom-0 left-[28%] h-[50%] w-[16%] border border-cyan-100/80 bg-white/24 shadow-[0_0_34px_rgba(116,230,255,.22)] backdrop-blur-md" />
                  <div className="absolute bottom-0 right-[13%] h-[64%] w-[18%] border border-amber-100/90 bg-white/24 shadow-[0_0_34px_rgba(255,218,99,.25)] backdrop-blur-md" />
                  <div className="absolute inset-x-[-18%] top-[46%] h-20 rotate-[-10deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.95),rgba(255,217,96,.62),rgba(108,224,255,.48),rgba(255,170,235,.36),transparent)] blur-lg" />
                  <div className="absolute inset-x-[-18%] top-[54%] h-16 rotate-[9deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.86),rgba(255,236,160,.46),rgba(255,163,228,.32),transparent)] blur-xl" />
                  <div className="absolute left-1/2 top-[50%] h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/50 shadow-[0_0_70px_rgba(255,221,111,.32)]" />
                  <div className="absolute left-1/2 top-[50%] h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/60 shadow-[0_0_58px_rgba(108,224,255,.24)]" />
                  <div className="absolute left-1/2 top-[50%] h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-200/60 shadow-[0_0_54px_rgba(255,170,235,.22)]" />
                  <div className="absolute left-1/2 top-[50%] h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_90deg,transparent,rgba(255,218,92,.34),transparent,rgba(111,225,255,.26),transparent,rgba(255,166,231,.28),transparent)] blur-sm [animation:aura-spin_18s_linear_infinite]" />
                  <div className="absolute left-1/2 top-[50%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.82),rgba(255,231,142,.34)_42%,transparent_67%)] blur-xl [animation:receive-pulse_4.8s_ease-in-out_infinite]" />
                  <div className="absolute left-1/2 top-[50%] grid h-[min(74vw,390px)] w-[min(74vw,390px)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/90 bg-white/82 p-7 shadow-[0_0_100px_rgba(255,255,255,1),0_0_70px_rgba(255,211,72,.7),0_0_56px_rgba(108,224,255,.38)] backdrop-blur-xl [animation:symbol-float_5.6s_ease-in-out_infinite] sm:p-9 lg:h-[430px] lg:w-[430px]">
                    <div className="absolute inset-3 rounded-full border border-amber-200/70" />
                    <div className="absolute inset-[-18px] rounded-full border border-white/70" />
                    <Image
                      src="/images/shokujiba-receive-energy.jpg"
                      alt="Shokujibaのエネルギーを受け取る王冠とカトラリーのシンボル"
                      width={640}
                      height={640}
                      priority
                      className="relative z-10 h-full w-full object-contain mix-blend-multiply drop-shadow-[0_0_32px_rgba(255,188,35,.68)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-white/90 bg-white/72 py-4 shadow-[0_0_60px_rgba(255,255,255,1)] backdrop-blur-xl">
          <div className="flex w-[200%] gap-8 whitespace-nowrap [animation:word-flow_22s_linear_infinite]">
            {[...energyWords, ...energyWords, ...energyWords, ...energyWords].map((word, index) => (
              <span
                className="text-sm font-black uppercase tracking-[.3em] text-[#050508] drop-shadow-[0_0_18px_rgba(255,255,255,1)]"
                key={`${word}-${index}`}
              >
                {word}
              </span>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="reveal-energy mx-auto grid max-w-7xl gap-5 lg:grid-cols-[.95fr_1.05fr]">
            <div className="border border-white/95 bg-white/76 p-7 shadow-[0_0_72px_rgba(255,255,255,1),0_20px_70px_rgba(255,255,255,.72),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-2xl sm:p-9">
              <p className="text-xs font-black uppercase tracking-[.3em] text-amber-700">Energy Definition</p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-[#111018] sm:text-6xl">
                見た人の心に、ワクワクが点灯する。
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Matter = Shokujiba", "Light = NagareBou", "Energy = Wakuwaku"].map((formula) => (
                <div
                  className="border border-white/95 bg-white/76 p-6 shadow-[0_0_52px_rgba(255,255,255,1),0_16px_44px_rgba(184,134,11,.08),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-xl"
                  key={formula}
                >
                  <p className="text-[11px] font-black uppercase tracking-[.24em] text-slate-500">Formula</p>
                  <p className="mt-4 text-xl font-black text-[#050508] drop-shadow-[0_0_18px_rgba(255,255,255,1)]">
                    {formula}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-8 sm:px-8 lg:px-12">
          <div className="reveal-energy relative mx-auto max-w-7xl overflow-hidden border border-white/95 bg-white/78 p-6 shadow-[0_0_76px_rgba(255,255,255,1),0_22px_72px_rgba(23,71,151,.07),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-2xl sm:p-8">
            <div className="absolute inset-y-0 left-0 w-2 bg-[linear-gradient(180deg,#174797,#ffffff,#c91e39,#ffd65b)]" />
            <div className="absolute right-0 top-0 h-32 w-64 bg-[linear-gradient(135deg,rgba(23,71,151,.14),rgba(255,255,255,.3),rgba(201,30,57,.12))]" />
            <div className="relative grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[.3em] text-blue-900">Paradise Nation Signal</p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-[#111018] sm:text-5xl">
                  アメリカのワクワクを、Shokujiba Paradiseの次元へ。
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {nationSignals.map((signal) => (
                  <div
                    className="border border-white/90 bg-white/76 p-5 shadow-[0_0_44px_rgba(255,255,255,1),0_16px_44px_rgba(23,71,151,.07),inset_0_1px_0_rgba(255,255,255,1)]"
                    key={signal.label}
                  >
                    <p className="text-xl font-black text-[#050508] drop-shadow-[0_0_18px_rgba(255,255,255,1)]">
                      {signal.label}
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">{signal.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-18 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-energy mb-10 max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[.3em] text-amber-700">Receive Routes</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#111018] sm:text-6xl">
                Shokujiba Paradiseから、6つのワクワクが届く。
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {energyRoutes.map((route, index) => (
                <Link
                  className="reveal-energy group relative min-h-[330px] overflow-hidden border border-white/95 bg-white/76 p-7 shadow-[0_0_58px_rgba(255,255,255,1),0_18px_54px_rgba(148,112,24,.08),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-amber-200 hover:bg-white hover:shadow-[0_0_86px_rgba(255,255,255,1),0_30px_86px_rgba(184,134,11,.14),0_0_48px_rgba(255,236,166,.54)]"
                  href={route.href}
                  key={route.title}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${route.tone}`} />
                  <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${route.tone} opacity-[.18] blur-2xl transition duration-500 group-hover:opacity-45`} />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-10 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[.24em] text-amber-700">{route.label}</p>
                        <p className="mt-3 text-sm font-black text-slate-400">Route {String(index + 1).padStart(2, "0")}</p>
                      </div>
                      <span className="h-12 w-12 border border-amber-200/80 bg-white/70 shadow-[0_0_28px_rgba(255,235,170,.46)] transition duration-500 group-hover:rotate-45 group-hover:bg-amber-100" />
                    </div>
                    <h3 className="text-4xl font-black text-[#111018]">{route.title}</h3>
                    <p className="mt-5 flex-1 text-base font-semibold leading-8 text-slate-700">{route.description}</p>
                    <div className="mt-8 flex items-center gap-4">
                      <span className="h-px flex-1 bg-gradient-to-r from-amber-300/80 via-cyan-200/80 to-transparent" />
                      <span className="text-xs font-black uppercase tracking-[.22em] text-slate-500 transition group-hover:text-amber-700">
                        Receive
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-28 pt-12 sm:px-8 lg:px-12">
          <div className="reveal-energy relative mx-auto max-w-7xl overflow-hidden border border-white/95 bg-white/82 px-6 py-16 text-[#050508] shadow-[0_0_110px_rgba(255,255,255,1),0_30px_100px_rgba(17,16,24,.08),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-2xl sm:px-10 lg:px-16">
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,.96),transparent_28%,rgba(255,222,118,.18)_48%,rgba(111,225,255,.13)_68%,transparent),radial-gradient(ellipse_at_top,rgba(255,255,255,1),transparent_58%)]" />
            <div className="absolute inset-x-[-12%] top-20 h-28 rotate-[-6deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,1),rgba(255,218,96,.34),rgba(112,226,255,.24),transparent)] blur-xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[.3em] text-amber-700">Shokujiba Web Site Energy</p>
                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
                  RECEIVE ENERGYは、ワクワクを受け取ること。
                </h2>
                <p className="mt-7 max-w-2xl text-lg font-semibold leading-9 text-slate-700">
                  Shokujiba Paradiseを見た瞬間に、行きたい、知りたい、持ち帰りたい、つながりたいという感覚が立ち上がる。その動きが、このWebサイトのENERGYです。
                </p>
              </div>
              <Link
                href="/upitel"
                className="inline-flex w-full items-center justify-center border border-amber-200 bg-white px-6 py-4 text-sm font-black uppercase tracking-[.2em] text-[#050508] shadow-[0_0_52px_rgba(255,255,255,1),0_0_28px_rgba(255,218,96,.28)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white sm:w-auto"
              >
                Contact Master
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
