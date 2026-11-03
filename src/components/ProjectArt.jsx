const Chip = ({ className = '', label }) => (
  <div className={`absolute rounded-md border-2 border-[#05c9ae] shadow-[0_0_15px_rgba(2,171,147,.45)] ${className}`}>
    {label && <span className="absolute -top-4 left-0 bg-[#00bfab] px-1 py-0.5 text-[8px] font-extrabold text-[#002b2b]">{label}</span>}
  </div>
)

const arts = {
  vision: (
    <div className="relative h-full bg-gradient-to-br from-[#081629] to-[#194d66]">
      <div className="absolute inset-x-[30%] bottom-0 h-[72%] rounded-t-full bg-gradient-to-b from-[#88bdcd] to-[#315f77] opacity-85" />
      <div className="absolute left-1/2 top-[22%] h-10 w-10 -translate-x-1/2 rounded-full bg-[#b7d6dc]" />
      <Chip className="inset-x-[22%] top-[14%] bottom-3" label="PERSON 0.96" />
      <div className="absolute inset-x-0 h-0.5 animate-scan bg-teal/80 shadow-glow" />
    </div>
  ),
  gesture: (
    <div className="relative grid h-full place-items-center bg-[radial-gradient(circle_at_55%_50%,#246b89,#081628_70%)]">
      <div className="animate-floaty text-[88px] drop-shadow-[0_0_10px_#24f8e1]">✋</div>
      <Chip className="inset-x-[24%] inset-y-4 rotate-3" />
    </div>
  ),
  driver: (
    <div className="relative h-full bg-gradient-to-br from-[#09172b] to-[#154e6d]">
      <div className="absolute left-1/2 top-8 h-[130px] w-[108px] -translate-x-1/2 rounded-[46%_46%_39%_39%] bg-[#8aafb5] shadow-[0_-20px_0_2px_#142234]" />
      <div className="absolute left-[41%] top-[92px] h-1.5 w-4 rounded-full bg-[#06313f]" />
      <div className="absolute left-[55%] top-[92px] h-1.5 w-4 rounded-full bg-[#06313f]" />
      <Chip className="left-1/2 top-3 h-[160px] w-[160px] -translate-x-1/2" label="ATTENTIVE" />
    </div>
  ),
  voice: (
    <div className="flex h-full items-center justify-center gap-1.5 bg-[radial-gradient(circle,#174f63,#071b31_70%)]">
      {Array.from({ length: 17 }).map((_, i) => (
        <i
          key={i}
          className="block w-1.5 origin-center animate-wave rounded bg-gradient-to-b from-[#69f3db] to-[#16a7cb] shadow-[0_0_12px_rgba(5,213,199,.35)]"
          style={{ height: `${[40, 72, 110, 70, 140, 92, 60, 120, 150, 120, 60, 92, 140, 70, 110, 72, 40][i]}px`, animationDelay: `${i * 0.07}s` }}
        />
      ))}
    </div>
  ),
}

export default function ProjectArt({ kind }) {
  return (
    <div className="relative h-[180px] overflow-hidden bg-[#0b243d]">
      {arts[kind]}
      <span className="absolute bottom-2 right-2 text-[8px] font-bold tracking-widest text-[#bee8e7]">RATIVE VISUAL</span>
    </div>
  )
}
