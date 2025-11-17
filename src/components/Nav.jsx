export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#0B0B0B]/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E11D2A]" />
          <span className="text-white font-black tracking-wide" style={{fontFamily:'Anton, Impact, sans-serif'}}>DSM</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-wider text-zinc-300">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#brief" className="hover:text-white">Brief</a>
          <a href="#creator" className="hover:text-white">Creators</a>
        </nav>
        <a href="#brief" className="hidden sm:inline-block rounded-full bg-[#E11D2A] text-white px-3 py-2 text-xs font-semibold uppercase tracking-wider hover:opacity-90">Submit</a>
      </div>
    </header>
  )
}
