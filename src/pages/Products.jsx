import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { DiagramBox, Flow } from '../components/Diagram.jsx'

const bars = [32, 68, 49, 83, 57, 90, 74, 100]

export default function Products() {
  return (
    <>
      <PageHero eyebrow="Products & Platforms" title={<>Purpose-built tools.<br />Practical digital workflows.</>} text="Developing focused products and internal technology platforms through experimentation and customer-oriented thinking." />

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal from="left">
            <span className="eyebrow">MyPG · In development</span>
            <h2 className="h2">Less paperwork.<br />Better PG operations.</h2>
            <p className="lead mb-4">MyPG is a web-based application being developed to help PG owners and managers organize occupancy, residents, rent tracking, service requests and communication.</p>
            {['Owner / manager / resident views', 'Occupancy and resident records', 'Rent tracking and issue management', 'Notices and simple reports'].map((t) => <div key={t} className="tick">{t}</div>)}
            <div className="mt-6"><Link to="/contact" className="btn btn-secondary">Enquire About MyPG <ArrowRight size={16} /></Link></div>
          </Reveal>
          <Reveal from="right" delay={120}>
            <div className="grid min-h-[320px] grid-cols-[100px_1fr] overflow-hidden rounded-2xl shadow-lift sm:grid-cols-[130px_1fr]">
              <div className="bg-[#0d2f47] p-4 text-xs text-[#b9e6e0]">
                <b className="mb-2 block text-[#62e7d3]">MyPG</b>
                {['Dashboard', 'Residents', 'Rooms & Beds', 'Rent', 'Issues'].map((s) => <div key={s} className="border-b border-[#1d5060] py-2">{s}</div>)}
              </div>
              <div className="min-w-0 bg-soft p-5">
                <b>Property Overview</b>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[['Rooms', 'Inventory'], ['Residents', 'Directory'], ['Issues', 'Tracking']].map(([a, b]) => (
                    <div key={a} className="rounded-md border border-[#e1e9ee] bg-white p-3 text-[11px] text-[#507383]"><strong className="block text-sm text-[#0a776f]">{a}</strong>{b}</div>
                  ))}
                </div>
                <div className="mt-3 flex h-24 items-end gap-2.5 rounded-md bg-white px-4 pt-3">
                  {bars.map((h, i) => <i key={i} className="block flex-1 rounded-t bg-gradient-to-b from-[#15c1af] to-[#1687a6]" style={{ height: `${h}%` }} />)}
                </div>
                <p className="mt-2 text-[11px] text-muted">Indicative activity visualization</p>
              </div>
            </div>
            <p className="mt-2 text-center text-[11px] text-muted">Illustrative interface concept — not a current product screenshot or live data</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal from="left">
            <DiagramBox title="AndroidHUB — conceptual validation workflow">
              <Flow steps={['Test Suite', 'Execution', 'Logs & Results']} />
              <div className="my-4 h-1.5 rounded-full bg-gradient-to-r from-[#00bca7] via-[#72d9db] to-[#378ab7]" />
              <div className="flex flex-wrap gap-2">{['Android', 'Automation', 'Diagnostics', 'Reporting'].map((p) => <span key={p} className="pill">{p}</span>)}</div>
            </DiagramBox>
          </Reveal>
          <Reveal from="right" delay={120}>
            <span className="eyebrow">AndroidHUB · Internal initiative</span>
            <h2 className="h2">Organizing Android test automation.</h2>
            <p className="lead mb-3">AndroidHUB explores reusable test workflows, result visibility and diagnostics to improve engineering productivity.</p>
            <p className="lead">Commercial availability and maturity should be confirmed before making detailed customer claims.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
