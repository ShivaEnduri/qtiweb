import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { DiagramBox, Flow } from '../components/Diagram.jsx'

const phases = [
  ['Phase 01', 'Programming', 'C/C++, memory, debugging and software fundamentals.', 'bg-[#143e59]'],
  ['Phase 02', 'Embedded Linux', 'Operating systems, interfaces and drivers.', 'bg-[#12657b]'],
  ['Phase 03', 'Platforms & QA', 'Android, HAL, functional testing and automation.', 'bg-[#138b8a]'],
  ['Phase 04', 'Capstone', 'Project build, validation and technical presentation.', 'bg-[#0faaa0]'],
]

// Replace with your real photo in /public/images/academy/
const hallImage = { src: '/images/academy.jpeg', alt: 'Students learning in the QTI Academy training hall in Hyderabad' }

export default function Academy() {
  return (
    <>
      <PageHero eyebrow="QTI Academy" title={<>Learn by building.<br />Grow through engineering.</>} text="Practical learning in embedded software, validation and applied Edge AI, designed around real exercises and demonstrations." cta={{ to: '/contact', label: 'Ask About Programs' }} />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Flagship Learning Program</span>
            <h2 className="h2">Embedded Software Development & Validation</h2>
            <p className="lead mb-8">16-week, in-person program in Hyderabad covering programming, embedded Linux, platform fundamentals, validation and hands-on projects.</p>
          </Reveal>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map(([n, t, d, bg], i) => (
              <Reveal key={t} delay={i * 130}>
                <div className={`h-full rounded-xl p-6 text-white transition hover:-translate-y-1 hover:shadow-lift ${bg}`}>
                  <small className="block text-xs font-bold uppercase tracking-wider text-[#b6e4e4]">{n}</small>
                  <h3 className="mt-3 !text-white">{t}</h3>
                  <p className="text-[13px] text-[#eaffff]">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <span className="mt-3 block text-[10px] font-extrabold uppercase tracking-[1.3px] text-[#648498]">Illustrative four-phase grouping of the 16-week curriculum; exact week allocations depend on the batch plan.</span>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container-x">
          <Reveal from="scale">
            <figure className="m-0 overflow-hidden rounded-2xl shadow-lift">
               <img src={hallImage.src} alt={hallImage.alt} loading="lazy" className="h-auto w-full md:aspect-[8/3] md:object-cover md:object-center" />
              <figcaption className="bg-[#0b243d] px-5 py-3 text-sm text-[#cde9e8]">
                Hands-on learning at our training hall in Hyderabad.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal from="left">
            <span className="eyebrow">Our Learning Model</span>
            <h2 className="h2">From theory to engineering confidence.</h2>
            <p className="lead mb-4">Structured classes, coding, debugging and reviews work together to develop practical problem-solving ability.</p>
            <div className="flex flex-wrap gap-2">{['Guided Labs', 'Debugging', 'Projects', 'Reviews'].map((p) => <span key={p} className="pill">{p}</span>)}</div>
          </Reveal>
          <Reveal from="right" delay={120}>
            <DiagramBox title="Learning cycle"><Flow steps={['Learn', 'Build', 'Debug', 'Validate', 'Demonstrate']} /></DiagramBox>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal from="scale">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-[#0b243d] to-[#0e535b] px-7 py-10 text-white md:flex-row md:items-center md:px-12">
              <div>
                <span className="eyebrow eyebrow-light">College Partnerships</span>
                <h2 className="h2 !mb-2 !text-white">QTI Edge AI Build Challenge 1.0</h2>
                <p className="text-[#cde9e8]">Hands-on AI projects. Laptop-based experimentation. Team demonstrations.</p>
              </div>
              <Link to="/challenge" className="btn shrink-0">Explore the Challenge <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
          <p className="mt-5 text-xs text-muted">Program participation does not guarantee employment. Add actual classroom photographs and student work with appropriate permissions.</p>
        </div>
      </section>
    </>
  )
}