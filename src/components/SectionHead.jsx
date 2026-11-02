import Reveal from './Reveal.jsx'

export default function SectionHead({ eyebrow, title, text, light = false }) {
  return (
    <Reveal className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span>
        <h2 className={`h2 mb-0 ${light ? '!text-white' : ''}`}>{title}</h2>
      </div>
      {text && <p className="max-w-[500px] text-muted">{text}</p>}
    </Reveal>
  )
}
