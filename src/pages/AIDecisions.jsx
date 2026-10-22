
import { BrainCircuit } from 'lucide-react'

const agents = [
  'Research Agent',
  'Analysis Agent',
  'Resource Agent',
  'Planning Agent',
  'Decision Agent',
]

export default function AIDecisions() {
  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center gap-3">
        <BrainCircuit size={28} className="text-sky-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Decisions
          </h2>
          <p className="text-sm text-slate-400">
            Monitor AI agent activity and recommendations.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <h3 className="font-semibold text-white">
          AI Agent Activity
        </h3>

        <div className="mt-4 space-y-3">
          {agents.map((agent, index) => (
            <div
              key={agent}
              className="flex items-center justify-between rounded-lg border border-slate-800 p-3"
            >
              <span className="text-sm text-slate-200">
                {index + 1}. {agent}
              </span>
              <span className="text-xs text-amber-400">
                Awaiting integration
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-400">
          These are workflow placeholders, not live AI agent statuses.
        </p>
      </div>
    </div>
  )
}
