import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    title: "Dispens",
    label: "Energy Charge",
    description: "アメリカをこえるShokujiba Paradiseのエネルギーを、最初に受け取る場所。",
    href: "/Dispense",
    tone: "from-[#ffe38a] via-[#ffffff] to-[#8feaff]",
  },
  {
    title: "Goods",
    label: "Take It Home",
    description: "ワクワクするエネルギーを現実へ持ち帰るためのShokujiba Goods。",
    href: "/Goods",
    tone: "from-[#ffb7e8] via-[#ffffff] to-[#ffe28a]",
  },
  {
    title: "Paradise",
    label: "Main Area",
    description: "Shokujiba国家の中核。巨大な楽園エリアから光が流れ出す。",
    href: "/Paradise",
    tone: "from-[#9cffcf] via-[#ffffff] to-[#ffd1f1]",
  },
  {
    title: "Trip",
    label: "Travel Energy",
    description: "Shokujiba Paradiseの世界を旅として体験し、胸が上がるルート。",
    href: "/trip",
    tone: "from-[#99ddff] via-[#ffffff] to-[#d6bdff]",
  },
  {
    title: "Services",
    label: "Make Energy",
    description: "Web制作、AI画像、映像制作、世界観制作でエネルギーを形にする場所。",
    href: "/TechnologyLand-AI",
    tone: "from-[#c8d0ff] via-[#ffffff] to-[#fff08f]",
  },
  {
    title: "Contact",
    label: "Master Link",
    description: "Masterとつながり、現実世界とShokujiba Paradiseを接続する窓口。",
    href: "/upitel",
    tone: "from-[#ffc0d1] via-[#ffffff] to-[#90f0df]",
  },
];

const energyWords = ["WAKUWAKU", "WHITE LIGHT", "GOLD LIGHT", "RAINBOW", "PARADISE", "NAGAREBOU"];

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative isolate min-h-screen overflow-hidden bg-[#fffdf7] text-[#101018]">
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
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#fffdf7_0%,#fff8db_18%,#f1fdff_42%,#fff7fb_64%,#ffffff_100%)]" />
          <div className="absolute inset-x-[-12%] top-[-7rem] h-[26rem] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.98),rgba(255,232,141,.54)_36%,rgba(159,236,255,.26)_58%,transparent_76%)] blur-2xl" />
          <div className="absolute inset-x-[-18%] top-[18rem] h-36 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.96),rgba(255,220,113,.62),rgba(143,235,255,.5),rgba(255,188,238,.42),transparent)] blur-xl [animation:light-sweep_8s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-x-0 top-[42rem] h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          <div className="absolute inset-x-0 top-[43rem] h-40 bg-[linear-gradient(180deg,rgba(255,255,255,.52),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-[32rem] bg-[linear-gradient(180deg,transparent,rgba(255,244,197,.42)_36%,rgba(255,255,255,.82))]" />
        </div>

        <section className="relative px-5 pb-16 pt-14 sm:px-8 lg:px-12">
          <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col justify-center">
            <div className="reveal-energy relative overflow-hidden border border-white/80 bg-white/50 px-5 py-5 shadow-[0_24px_90px_rgba(189,142,24,.15),inset_0_1px_0_rgba(255,255,255,.95)] backdrop-blur-2xl sm:px-8 lg:px-12 [animation:gate-glow_5s_ease-in-out_infinite]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#ffd65b,#ffffff,#74e6ff,#ffb7ef,#ffd65b)]" />
              <div className="grid gap-10 py-10 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:py-14">
                <div className="relative z-10">
                  <p className="inline-flex border border-amber-300/70 bg-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-[.3em] text-amber-800 shadow-[0_0_34px_rgba(255,219,102,.34)] backdrop-blur-xl">
                    Shokujiba Web Site / Receive Energy
                  </p>
                  <h1 className="mt-7 max-w-5xl text-[clamp(3.2rem,10.4vw,10rem)] font-black leading-[.84] tracking-normal text-[#111018]">
                    Shokujiba
                    <span className="block bg-[linear-gradient(92deg,#a66d00,#ffe680_18%,#ffffff_31%,#4edfff_52%,#ff99e8_70%,#d99a00_92%)] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,228,129,.72)]">
                      Paradise
                    </span>
                  </h1>
                  <div className="mt-8 max-w-2xl border-l-2 border-amber-300/80 pl-5">
                    <p className="text-xl font-black uppercase tracking-[.18em] text-[#17151a] sm:text-2xl">
                      Energy is Wakuwaku.
                    </p>
                    <p className="mt-4 text-base font-semibold leading-8 text-slate-700 sm:text-lg">
                      Shokujiba WebサイトのENERGYは、見た人をワクワクさせるエネルギー。NagareBouの白い光、金色の光、淡い虹色が、Paradise国家から現実へ流れ込みます。
                    </p>
                  </div>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/Paradise"
                      className="inline-flex items-center justify-center border border-amber-300 bg-[#111018] px-6 py-4 text-sm font-black uppercase tracking-[.18em] text-white shadow-[0_20px_54px_rgba(17,16,24,.22),0_0_38px_rgba(255,221,119,.48)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111018]"
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

                <div className="relative min-h-[430px] overflow-hidden border border-amber-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,.78),rgba(255,247,205,.42),rgba(238,252,255,.58))] shadow-[inset_0_1px_0_rgba(255,255,255,.96),0_24px_70px_rgba(183,133,18,.14)]">
                  <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                  <div className="absolute bottom-0 left-[12%] h-[78%] w-[16%] border border-white/70 bg-white/35 shadow-[0_0_34px_rgba(255,255,255,.5)] backdrop-blur-md" />
                  <div className="absolute bottom-0 left-[33%] h-[58%] w-[18%] border border-cyan-100/80 bg-white/30 shadow-[0_0_34px_rgba(116,230,255,.22)] backdrop-blur-md" />
                  <div className="absolute bottom-0 right-[18%] h-[70%] w-[20%] border border-amber-100/90 bg-white/30 shadow-[0_0_34px_rgba(255,218,99,.25)] backdrop-blur-md" />
                  <div className="absolute inset-x-[-12%] top-[44%] h-16 rotate-[-10deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.95),rgba(255,217,96,.55),rgba(108,224,255,.46),transparent)] blur-lg" />
                  <div className="absolute left-1/2 top-[47%] w-[78%] -translate-x-1/2 border-t border-amber-300/60" />
                  <div className="absolute left-1/2 top-[47%] grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-amber-300/70 bg-white/70 shadow-[0_0_70px_rgba(255,255,255,.95),0_0_48px_rgba(255,216,102,.52)] backdrop-blur-xl">
                    <div className="text-center">
                      <p className="text-[10px] font-black uppercase tracking-[.26em] text-amber-800">Receive</p>
                      <p className="mt-2 text-5xl font-black text-[#111018]">E</p>
                      <p className="mt-2 text-[10px] font-black uppercase tracking-[.18em] text-slate-600">Wakuwaku</p>
                    </div>
                  </div>
                  <p className="absolute bottom-7 left-7 right-7 text-center text-xs font-black uppercase tracking-[.28em] text-slate-600">
                    Energy = Shokujiba x NagareBou²
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-amber-200/60 bg-white/45 py-4 backdrop-blur-xl">
          <div className="flex w-[200%] gap-8 whitespace-nowrap [animation:word-flow_22s_linear_infinite]">
            {[...energyWords, ...energyWords, ...energyWords, ...energyWords].map((word, index) => (
              <span
                className="bg-[linear-gradient(90deg,#9b6b03,#fff3b4,#58d8ff,#eaa8ff,#d99a00)] bg-clip-text text-sm font-black uppercase tracking-[.3em] text-transparent"
                key={`${word}-${index}`}
              >
                {word}
              </span>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="reveal-energy mx-auto grid max-w-7xl gap-5 lg:grid-cols-[.95fr_1.05fr]">
            <div className="border border-white/90 bg-white/58 p-7 shadow-[0_20px_70px_rgba(255,255,255,.54),inset_0_1px_0_rgba(255,255,255,.96)] backdrop-blur-2xl sm:p-9">
              <p className="text-xs font-black uppercase tracking-[.3em] text-amber-700">Energy Definition</p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-[#111018] sm:text-6xl">
                見た人の心に、ワクワクが点灯する。
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Matter = Shokujiba", "Light = NagareBou", "Energy = Wakuwaku"].map((formula) => (
                <div
                  className="border border-amber-200/70 bg-white/62 p-6 shadow-[0_16px_44px_rgba(184,134,11,.1),inset_0_1px_0_rgba(255,255,255,.95)] backdrop-blur-xl"
                  key={formula}
                >
                  <p className="text-[11px] font-black uppercase tracking-[.24em] text-slate-500">Formula</p>
                  <p className="mt-4 bg-[linear-gradient(90deg,#9b6b03,#fff3b4,#58d8ff,#eaa8ff)] bg-clip-text text-xl font-black text-transparent">
                    {formula}
                  </p>
                </div>
              ))}
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
                  className="reveal-energy group relative min-h-[330px] overflow-hidden border border-white/90 bg-white/58 p-7 shadow-[0_18px_54px_rgba(148,112,24,.12),inset_0_1px_0_rgba(255,255,255,.95)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-amber-300 hover:bg-white/80 hover:shadow-[0_30px_86px_rgba(184,134,11,.22),0_0_48px_rgba(255,236,166,.54)]"
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
          <div className="reveal-energy relative mx-auto max-w-7xl overflow-hidden border border-amber-200/80 bg-[#111018] px-6 py-16 text-white shadow-[0_30px_100px_rgba(17,16,24,.22)] sm:px-10 lg:px-16">
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,.1),transparent_28%,rgba(255,222,118,.2)_48%,rgba(111,225,255,.18)_68%,transparent),radial-gradient(ellipse_at_top,rgba(255,255,255,.28),transparent_58%)]" />
            <div className="absolute inset-x-[-12%] top-20 h-28 rotate-[-6deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.82),rgba(255,218,96,.52),rgba(112,226,255,.38),transparent)] blur-xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[.3em] text-amber-200">Shokujiba Web Site Energy</p>
                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
                  RECEIVE ENERGYは、ワクワクを受け取ること。
                </h2>
                <p className="mt-7 max-w-2xl text-lg font-semibold leading-9 text-white/76">
                  Shokujiba Paradiseを見た瞬間に、行きたい、知りたい、持ち帰りたい、つながりたいという感覚が立ち上がる。その動きが、このWebサイトのENERGYです。
                </p>
              </div>
              <Link
                href="/upitel"
                className="inline-flex w-full items-center justify-center border border-white/60 bg-white px-6 py-4 text-sm font-black uppercase tracking-[.2em] text-[#111018] shadow-[0_0_44px_rgba(255,255,255,.42)] transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-[#fff2b8] sm:w-auto"
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
