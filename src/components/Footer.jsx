import { SubscribeForm } from './Forms'

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-2 items-center">
        <div>
          <h3 className="text-xl font-black" style={{fontFamily:'Anton, Impact, sans-serif'}}>Stay in the Dusk</h3>
          <p className="mt-2 text-sm text-zinc-400">News, releases, calls for creators.</p>
        </div>
        <SubscribeForm />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-8 flex items-center justify-between text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Dusk Society Media</p>
        <a href="#top" className="hover:text-zinc-300">Back to top</a>
      </div>
    </footer>
  )
}
