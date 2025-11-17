import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[#0B0B0B]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20 flex items-end md:items-center min-h-[70vh]">
        <div>
          <span className="inline-block uppercase tracking-[0.3em] text-xs md:text-sm text-[#FFC857]">Dusk Society Media</span>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl leading-[1.05] font-black text-white" style={{fontFamily:'Anton, Impact, sans-serif'}}>
            Raw. Rebellious. Unapologetic.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-zinc-300/90">
            Documenting underground culture. Building creators. Amplifying street narratives.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#brief" className="inline-flex items-center justify-center rounded-full bg-[#E11D2A] text-white px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition">Submit a Brief</a>
            <a href="#creator" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/20 transition">Join as Creator</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(225,29,42,0.15),transparent)]" />
    </section>
  )
}
