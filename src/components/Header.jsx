
import { Activity, Bell, Plane } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-slate-950 px-6 py-5 text-white">
      <div>
        <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400">
          <Plane size={15} />
          Airport Operations Coordination Engine
        </div>

        <h1 className="text-2xl font-bold">
          Live Operations Overview
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Monitor flights, resources and AI-assisted decisions.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-full border border-emerald-800 bg-emerald-950/40 px-3 py-2 sm:flex">
          <Activity size={16} className="text-emerald-400" />
          <span className="text-sm text-emerald-400">
            Operations Dashboard
          </span>
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="rounded-lg border border-slate-700 p-2 hover:bg-slate-800"
        >
          <Bell size={19} />
        </button>
      </div>
    </header>
  )
}
