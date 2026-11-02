import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export default function FeatureCard({ icon: Icon, title, text, pills, to, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card card-hover group h-full p-6">
        <div className="mb-4 grid h-[52px] w-[52px] place-items-center rounded-xl bg-mint text-[#007d76] transition duration-300 group-hover:bg-teal group-hover:text-white">
          <Icon size={24} />
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="mb-3 text-[13px] text-muted">{text}</p>
        {pills && <div className="flex flex-wrap gap-2">{pills.map((p) => <span key={p} className="pill">{p}</span>)}</div>}
        {to && <Link to={to} className="mt-1 inline-block text-xs font-bold text-[#007b75] hover:underline">Explore →</Link>}
      </div>
    </Reveal>
  )
}
