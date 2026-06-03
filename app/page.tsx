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

const worlds = [
  {
    title: "Dispens",
    label: "Energy Embassy",
    description: "アメリカに似たShokujibaのエネルギーを賦与する場所。",
    href: "/Dispense",
    gradient: "from-amber-200 via-white to-cyan-200",
  },
  {
    title: "Goods",
    label: "Portable Light",
    description: "Shokujibaのエネルギーを現実に持ち帰るグッズが買える場所。",
    href: "/Goods",
    gradient: "from-fuchsia-200 via-white to-amber-200",
  },
  {
    title: "Paradise",
    label: "Eleventh Garden",
    description: "Shokujiba国家の中にある巨大な楽園エリア。",
    href: "/Paradise",
    gradient: "from-emerald-200 via-white to-rose-200",
  },
  {
    title: "Trip",
    label: "Dimensional Route",
    description: "Shokujibaの世界を旅として体験する空間。",
    href: "/trip",
    gradient: "from-sky-200 via-white to-violet-200",
  },
  {
    title: "Services",
    label: "Creation Office",
    description: "Web制作、AI画像、映像制作、世界観制作などエネルギーの賦与を行う場所。",
    href: "/TechnologyLand-AI",
    gradient: "from-indigo-200 via-white to-yellow-200",
  },
  {
    title: "Contact",
    label: "Master Gate",
    description: "Masterとつながる場所。現実世界とShokujibaがつながる窓口。",
    href: "/upitel",
    gradient: "from-rose-200 via-white to-teal-200",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative isolate min-h-screen overflow-hidden bg-[#fbf8ee] text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <style>{`
          @keyframes shokujiba-rise {
            from { opacity: 0; transform: translateY(34px) scale(.985); filter: blur(10px); }
            to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes nagare-flow {
            0%, 100% { transform: translate3d(-4%, -2%, 0) rotate(0deg); opacity: .62; }
            50% { transform: translate3d(4%, 3%, 0) rotate(7deg); opacity: .92; }
          }
          @keyframes prism-pulse {
            0%, 100% { opacity: .48; filter: saturate(1) brightness(1); }
            50% { opacity: .86; filter: saturate(1.35) brightness(1.08); }
          }
          .shokujiba-reveal {
            animation: shokujiba-rise .9s ease both;
            animation-timeline: view();
            animation-range: entry 8% cover 32%;
          }
          @supports not (animation-timeline: view()) {
            .shokujiba-reveal { animation-timeline: auto; animation-range: normal; }
          }
        `}</style>

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.98),rgba(255,250,225,.84)_24%,rgba(235,250,255,.82)_48%,rgba(255,255,255,.96)_72%),radial-gradient(circle_at_18%_8%,rgba(255,215,105,.58),transparent_30rem),radial-gradient(circle_at_78%_14%,rgba(153,236,255,.38),transparent_28rem),radial-gradient(circle_at_50%_52%,rgba(255,171,222,.25),transparent_34rem)]" />
          <div className="absolute left-1/2 top-[-16rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-white/85 blur-3xl" />
          <div className="absolute inset-x-[-20%] top-24 h-56 rotate-[-8deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.9),rgba(255,221,125,.48),rgba(175,245,255,.42),transparent)] blur-2xl [animation:nagare-flow_10s_ease-in-out_infinite]" />
          <div className="absolute right-[-12rem] top-56 h-[36rem] w-[36rem] rounded-full bg-[conic-gradient(from_40deg,rgba(255,255,255,.1),rgba(255,216,116,.42),rgba(143,233,255,.34),rgba(236,180,255,.34),rgba(255,255,255,.1))] blur-2xl [animation:prism-pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-18rem] left-[-14rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,229,145,.42),rgba(255,255,255,.18)_44%,transparent_68%)] blur-2xl" />
          <div className="absolute inset-0 opacity-[.18] [background-image:linear-gradient(rgba(185,143,46,.38)_1px,transparent_1px),linear-gradient(90deg,rgba(185,143,46,.3)_1px,transparent_1px)] [background-size:92px_92px]" />
        </div>

        <section className="relative min-h-[calc(100vh-88px)] px-5 pb-16 pt-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[760px] lg:grid-cols-[1.08fr_.92fr]">
            <div className="shokujiba-reveal relative z-10">
              <p className="mb-5 inline-flex border border-amber-300/70 bg-white/55 px-4 py-2 text-[11px] font-bold uppercase tracking-[.28em] text-amber-800 shadow-[0_0_34px_rgba(255,221,122,.34)] backdrop-blur-xl">
                Matter = Shokujiba / Light = NagareBou
              </p>
              <h1 className="max-w-5xl text-[clamp(3.4rem,10vw,9.6rem)] font-black leading-[.88] tracking-normal text-slate-950">
                Shokujiba
                <span className="block bg-[linear-gradient(92deg,#b8860b,#fff7c8_25%,#ffffff_40%,#7ee7ff_58%,#f3b2ff_76%,#d7a526)] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(255,236,166,.72)]">
                  Paradise
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-9 text-slate-700 sm:text-xl">
                Shokujibaは、国家のように巨大な場所。NagareBouはそこを満たす白い光、金色の光、淡い虹色の流れ。静けさの中で次元を上げ、現実にエネルギーを賦与するWebサイトです。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/Paradise"
                  className="group inline-flex items-center justify-center border border-amber-300 bg-slate-950 px-6 py-4 text-sm font-bold uppercase tracking-[.18em] text-white shadow-[0_18px_50px_rgba(15,23,42,.22),0_0_36px_rgba(255,222,132,.42)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950"
                >
                  Enter Paradise
                </Link>
                <Link
                  href="/TechnologyLand-AI"
                  className="inline-flex items-center justify-center border border-white/80 bg-white/50 px-6 py-4 text-sm font-bold uppercase tracking-[.18em] text-slate-900 shadow-[0_18px_42px_rgba(255,255,255,.5)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white"
                >
                  Receive Energy
                </Link>
              </div>
            </div>

            <div className="shokujiba-reveal relative mx-auto grid aspect-square w-full max-w-[560px] place-items-center [animation-delay:.12s]">
              <div className="absolute inset-0 border border-amber-200/70 bg-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_30px_90px_rgba(184,134,11,.16)] backdrop-blur-2xl" />
              <div className="absolute inset-8 border border-white/80" />
              <div className="absolute h-[82%] w-[82%] rounded-full border border-amber-300/60 shadow-[0_0_50px_rgba(255,221,122,.44)]" />
              <div className="absolute h-[62%] w-[62%] rotate-12 rounded-full border border-cyan-200/80 shadow-[0_0_44px_rgba(126,231,255,.34)]" />
              <div className="absolute h-[44%] w-[44%] -rotate-12 rounded-full border border-fuchsia-200/80 shadow-[0_0_44px_rgba(243,178,255,.32)]" />
              <div className="relative grid h-[54%] w-[54%] place-items-center rounded-full bg-[radial-gradient(circle_at_50%_38%,white,rgba(255,244,193,.95)_34%,rgba(126,231,255,.46)_68%,rgba(255,255,255,.12))] shadow-[0_0_90px_rgba(255,255,255,.96),0_0_58px_rgba(255,215,105,.55)]">
                <div className="text-center">
                  <p className="text-xs font-black uppercase tracking-[.26em] text-amber-800">Energy</p>
                  <p className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">E</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[.2em] text-slate-700">
                    Shokujiba x NagareBou²
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="shokujiba-reveal mx-auto max-w-7xl border border-white/80 bg-white/48 p-5 shadow-[0_24px_80px_rgba(255,255,255,.42),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="grid gap-5 lg:grid-cols-3">
              {["Matter = Shokujiba", "Light = NagareBou", "Energy = Shokujiba x NagareBou²"].map((formula) => (
                <div key={formula} className="border border-amber-200/70 bg-white/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.9)]">
                  <p className="bg-[linear-gradient(90deg,#9b6b03,#fff3b4,#58d8ff,#eaa8ff)] bg-clip-text text-lg font-black text-transparent sm:text-xl">
                    {formula}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="shokujiba-reveal mb-10 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[.3em] text-amber-700">Shokujiba Nation</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
                6つの領域が、ひとつの国家光をつくる。
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {worlds.map((world, index) => (
                <Link
                  href={world.href}
                  key={world.title}
                  className="shokujiba-reveal group relative min-h-[310px] overflow-hidden border border-white/80 bg-white/50 p-7 shadow-[0_18px_54px_rgba(148,112,24,.12),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-amber-300 hover:bg-white/70 hover:shadow-[0_28px_80px_rgba(184,134,11,.22),0_0_46px_rgba(255,236,166,.5)]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${world.gradient}`} />
                  <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${world.gradient} opacity-45 blur-3xl transition duration-500 group-hover:opacity-90`} />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-10 flex items-center justify-between gap-4">
                      <span className="text-xs font-black uppercase tracking-[.24em] text-amber-700">{world.label}</span>
                      <span className="grid h-11 w-11 place-items-center border border-amber-200/80 bg-white/60 text-sm font-black text-slate-900 shadow-[0_0_28px_rgba(255,235,170,.42)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-4xl font-black text-slate-950">{world.title}</h3>
                    <p className="mt-5 flex-1 text-base font-medium leading-8 text-slate-700">{world.description}</p>
                    <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
                    <p className="mt-5 text-xs font-black uppercase tracking-[.22em] text-slate-500 transition group-hover:text-amber-700">
                      Open Gate
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-28 pt-10 sm:px-8 lg:px-12">
          <div className="shokujiba-reveal relative mx-auto max-w-7xl overflow-hidden border border-amber-200/70 bg-slate-950 px-6 py-16 text-white shadow-[0_28px_90px_rgba(15,23,42,.22)] sm:px-10 lg:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(255,231,155,.38),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(126,231,255,.28),transparent_28rem),linear-gradient(120deg,rgba(255,255,255,.08),transparent_36%,rgba(255,255,255,.08))]" />
            <div className="absolute inset-x-[-10%] top-1/2 h-32 -translate-y-1/2 rotate-[-5deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.72),rgba(255,221,122,.4),transparent)] blur-2xl" />
            <div className="relative max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[.3em] text-amber-200">Paradise Signal</p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
                白い神聖な光が、現実世界とShokujibaを接続する。
              </h2>
              <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-white/76">
                Paradiseの文字を中心に、未来都市、国家感、11次元の静けさを重ねました。ここからShokujibaの旅、グッズ、制作、Masterへの接続が始まります。
              </p>
              <Link
                href="/upitel"
                className="mt-10 inline-flex border border-white/50 bg-white px-6 py-4 text-sm font-black uppercase tracking-[.2em] text-slate-950 shadow-[0_0_40px_rgba(255,255,255,.4)] transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-100"
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
