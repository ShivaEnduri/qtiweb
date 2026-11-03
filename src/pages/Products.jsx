import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { DiagramBox, Flow } from '../components/Diagram.jsx'

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
            <figure>
              <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
                <img
                  src="/images/mypg.png"
                  alt="MyPG dashboard showing property overview, residents, rooms, rent and issues"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-2 text-center text-[11px] text-muted">MyPG dashboard</figcaption>
            </figure>
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