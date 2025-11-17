export default function Showcase({ items = [] }) {
  return (
    <section id="work" className="relative bg-[#0B0B0B] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black" style={{fontFamily:'Anton, Impact, sans-serif'}}>Work</h2>
            <p className="mt-2 text-sm text-zinc-400">Selected projects and features.</p>
          </div>
          <a href="#brief" className="hidden sm:inline-block text-xs uppercase tracking-wider px-4 py-2 rounded-full bg-white/10 hover:bg-white/20">Commission</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.length === 0 && (
            <div className="col-span-full text-zinc-400 text-sm">No items yet—be the first to collaborate.</div>
          )}
          {items.map((it) => (
            <a key={it._id || it.title} href={it.url || '#'} className="group relative rounded-lg overflow-hidden bg-[#1F1F1F] border border-white/5">
              <img src={it.image} alt={it.title} className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="text-sm font-semibold">{it.title}</div>
                {it.tags && <div className="mt-1 text-xs text-zinc-400">{it.tags.join(' • ')}</div>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
