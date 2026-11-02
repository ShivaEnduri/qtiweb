import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, text, cta }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-[#163c5d] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 hidden h-[340px] w-[340px] rounded-full border border-[#1d778b] shadow-[0_0_0_42px_rgba(0,187,170,.07),0_0_0_95px_rgba(0,187,170,.04)] md:block" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />
      <div className="container-x relative animate-fadeIn">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1 className="h1 max-w-[850px] !text-white">{title}</h1>
        <p className="max-w-[690px] text-[17px] text-[#c2d9e7]">{text}</p>
        {cta && (
          <div className="mt-7">
            <Link to={cta.to} className="btn">{cta.label} <ArrowRight size={16} /></Link>
          </div>
        )}
      </div>
    </section>
  )
}
