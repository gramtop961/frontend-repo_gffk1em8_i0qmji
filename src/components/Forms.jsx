import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export function BriefForm() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.type = payload.type || 'brand'

    try {
      const res = await fetch(`${API}/api/brief`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Error')
      setStatus('Received. We’ll be in touch.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something broke. Try again or email us.')
    }
  }

  return (
    <form id="brief" onSubmit={onSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <select name="type" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white">
          <option value="brand">Brand</option>
          <option value="artist">Artist</option>
        </select>
        <input name="name" required placeholder="Name" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input name="email" type="email" required placeholder="Email" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
        <input name="handle" placeholder="@handle or site" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      </div>
      <input name="subject" required placeholder="Subject" className="w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      <textarea name="message" required placeholder="Describe the brief" rows="4" className="w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      <div className="grid grid-cols-2 gap-3">
        <input name="budget_range" placeholder="Budget Range" className="w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
        <input name="timeline" placeholder="Timeline" className="w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      </div>
      <button className="inline-flex items-center justify-center rounded-md bg-[#E11D2A] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:opacity-90">Send Brief</button>
      {status && <p className="text-xs text-zinc-400">{status}</p>}
    </form>
  )
}

export function CreatorForm() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Submitting...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${API}/api/creator`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Error')
      setStatus('Application received.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Could not submit. Try again later.')
    }
  }

  return (
    <form id="creator" onSubmit={onSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input name="name" required placeholder="Name" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
        <input name="email" type="email" required placeholder="Email" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input name="discipline" required placeholder="Discipline" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
        <input name="city" placeholder="City" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input name="portfolio" placeholder="Portfolio URL" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
        <input name="instagram" placeholder="Instagram" className="col-span-2 sm:col-span-1 w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      </div>
      <textarea name="bio" placeholder="Short bio" rows="4" className="w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      <button className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-white/20">Apply</button>
      {status && <p className="text-xs text-zinc-400">{status}</p>}
    </form>
  )
}

export function SubscribeForm() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Joining...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.source = payload.source || 'hero'

    try {
      const res = await fetch(`${API}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Error')
      setStatus('Welcome to DSM — check your inbox soon.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Could not add. Try again later.')
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input aria-label="Email address" name="email" type="email" required placeholder="you@domain" className="min-w-0 flex-1 rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-sm text-white" />
      <input type="hidden" name="source" value="footer" />
      <button className="rounded-md bg-[#E11D2A] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:opacity-90">Join</button>
      {status && <span className="sr-only" role="status">{status}</span>}
    </form>
  )
}
