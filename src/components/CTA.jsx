import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function CTA({ eyebrow, title, text, to = '/contact', label = 'Contact QTIMINDS' }) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal from="scale">
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b243d] to-[#0e535b] px-7 py-10 text-white md:flex-row md:items-center md:px-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
            <div className="relative">
              {eyebrow && <span className="eyebrow eyebrow-light">{eyebrow}</span>}
              <h2 className="h2 !mb-2 !text-white">{title}</h2>
              <p className="max-w-xl text-[#cde9e8]">{text}</p>
            </div>
            <Link to={to} className="btn relative shrink-0">{label} <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
