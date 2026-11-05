import { Cpu, ShieldCheck, Briefcase } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { DiagramBox, Flow } from '../components/Diagram.jsx'

export default function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title={<>Work on problems<br />worth solving.</>} text="Explore opportunities across embedded software, platform validation, full-stack development and technical business operations." cta={{ to: '/contact', label: 'Get in Touch' }} />

      <section className="section">
        <div className="container-x">
          <Reveal><span className="eyebrow">Engineering Opportunities</span><h2 className="h2">Grow with curiosity, ownership and technical discipline.</h2></Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <FeatureCard icon={Cpu} title="Embedded Software" text="C/C++, Linux, Android, drivers and platform software." />
            <FeatureCard icon={ShieldCheck} title="Validation & Automation" text="System testing, diagnostics, performance and Python automation." delay={120} />
            <FeatureCard icon={Briefcase} title="Digital & Operations" text="Full-stack engineering, technical recruiting and business coordination." delay={240} />
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal from="left">
            <span className="eyebrow">Our Hiring Approach</span>
            <h2 className="h2">Relevant skills. Real potential.</h2>
            <p className="lead mb-3">We value strong foundations, practical thinking, learning ability and clear communication.</p>
            <p className="lead">Early-career applicants interested in structured technical learning may separately explore QTI Academy.</p>
          </Reveal>
          <Reveal from="right" delay={120}>
            <DiagramBox title="Candidate journey"><Flow steps={['Apply', 'Screen', 'Interview', 'Decision']} /><p className="mt-4 text-xs text-muted">Training enrollment does not guarantee hiring.</p></DiagramBox>
          </Reveal>
        </div>
      </section>
    </>
  )
}
