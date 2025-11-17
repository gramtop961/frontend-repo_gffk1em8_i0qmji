import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Showcase from './components/Showcase'
import { BriefForm, CreatorForm } from './components/Forms'
import Footer from './components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [work, setWork] = useState([])

  useEffect(() => {
    fetch(`${API}/api/work`).then(r => r.json()).then(d => setWork(d.items || [])).catch(() => {})
  }, [])

  return (
    <div id="top" className="min-h-screen bg-[#0B0B0B] text-white">
      <Nav />
      <Hero />

      <main className="bg-[#0B0B0B]">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black" style={{fontFamily:'Anton, Impact, sans-serif'}}>Submit a Brief</h2>
            <p className="mt-2 text-sm text-zinc-400">Brands, labels, artists — tell us what you need.</p>
            <div className="mt-6"><BriefForm /></div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black" style={{fontFamily:'Anton, Impact, sans-serif'}}>Join the Label</h2>
            <p className="mt-2 text-sm text-zinc-400">Creators across film, photo, edit, writing.</p>
            <div className="mt-6"><CreatorForm /></div>
          </div>
        </section>

        <Showcase items={work} />
      </main>

      <Footer />
    </div>
  )
}

export default App
