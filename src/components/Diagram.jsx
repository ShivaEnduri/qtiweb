

import { Fragment, useState } from 'react'
import { ArrowRight, ArrowLeft, ArrowDown } from 'lucide-react'

export function DiagramBox({ title, caption, children }) {
  return (
    <div className="rounded-2xl border border-[#dde9ef] bg-white p-6 shadow-card">
      {title && <h3 className="mb-4 text-lg">{title}</h3>}
      {children}
      {caption && <span className="mt-4 block text-[10px] font-extrabold uppercase tracking-[1.3px] text-[#648498]">{caption}</span>}
    </div>
  )
}

export function Stack({ layers }) {
  // Items share a light background; the dark colour shows only on hover or when clicked.
  const [active, setActive] = useState(null)
  return (
    <div className="flex flex-col gap-2">
      {layers.map((l, i) => {
        const isActive = active === i
        const base = i % 2 ? 'bg-mint text-[#096e70]' : 'bg-[#dceff7] text-[#175679]'
        return (
          <button
            type="button"
            key={l}
            onClick={() => setActive(isActive ? null : i)}
            aria-pressed={isActive}
            className={`rounded-lg px-4 py-4 text-center text-sm font-bold transition duration-300 hover:scale-[1.02] hover:bg-[#173b56] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
              isActive ? 'scale-[1.02] bg-[#173b56] text-white' : base
            }`}
          >
            {l}
          </button>
        )
      })}
    </div>
  )
}

/**
 * Horizontal flow on tablet/desktop. With `stackOnMobile`, it becomes a vertical
 * column with down arrows on phones (below 640px); larger screens are unchanged.
 */
export function Flow({ steps, reverse = false }) {
  const Arrow = reverse ? ArrowLeft : ArrowRight
  // Width needed to keep all steps on one row: widest word + padding per step, plus arrows/gaps.
  const longestWord = Math.max(...steps.flatMap((s) => s.split(/\s+/).map((w) => w.length)))
  const need = steps.length * (longestWord * 7 + 20) + (steps.length - 1) * 30
  const bucket = Math.min(Math.max(Math.ceil(need / 40) * 40, 280), 760)
  return (
    <div className="flow" data-w={bucket}>
      <div className={`flow-track ${reverse ? 'flow-reverse' : ''}`}>
        {steps.map((s, i) => (
          <Fragment key={s}>
            <div className="flow-step">{s}</div>
            {i < steps.length - 1 && (
              <span className="flow-arrow" aria-hidden="true">
                <ArrowDown size={20} className="flow-arrow-v" />
                <Arrow size={20} className="flow-arrow-h" />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export function FlowLoop({ top, bottom }) {
  return (
    <div>
      <Flow steps={top} />
      <div className="my-3 flex justify-center text-teal-dark"><ArrowDown size={22} /></div>
      <Flow steps={bottom} reverse />
    </div>
  )
}

