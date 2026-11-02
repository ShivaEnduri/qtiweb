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
  return (
    <div className="flex flex-col gap-2">
      {layers.map((l, i) => (
        <div
          key={l}
          className={`rounded-lg px-4 py-4 text-center text-sm font-bold transition hover:scale-[1.02] ${
            i === 0 ? 'bg-[#173b56] text-white' : i % 2 ? 'bg-mint text-[#096e70]' : 'bg-[#dceff7] text-[#175679]'
          }`}
        >
          {l}
        </div>
      ))}
    </div>
  )
}

export function Flow({ steps, reverse = false }) {
  const Arrow = reverse ? ArrowLeft : ArrowRight
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {steps.map((s, i) => (
        <div key={s} className="contents">
          <div className="min-w-[88px] flex-1 rounded-xl bg-mint px-2 py-4 text-center text-xs font-bold text-[#0b6a6a] transition hover:bg-teal hover:text-white">{s}</div>
          {i < steps.length - 1 && <Arrow size={20} className="shrink-0 text-teal-dark" />}
        </div>
      ))}
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
