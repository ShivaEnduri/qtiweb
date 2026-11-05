import { Link } from 'react-router-dom'
import { ArrowRight, Users, Cpu, Sparkles, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { DiagramBox, Stack } from '../components/Diagram.jsx'
import ProjectShowcase from '../components/ProjectShowcase.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-[#071e32] text-white">
        <img src="/images/hero.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041226]/90 via-[#041226]/55 to-transparent" />
        <div className="container-x relative py-24">
          <div className="animate-fadeIn">
            <span className="eyebrow eyebrow-light">Semiconductor • Embedded • Edge AI</span>
            <h1 className="h1 max-w-[700px] !text-white">
              Deep Engineering<br /><em className="not-italic text-teal-light">Smarter Innovation</em>
            </h1>
            <p className="max-w-[620px] text-[17px] text-[#d4e4ed]">
              Specialized engineering talent, embedded software expertise and practical AI innovation for tomorrow's technology platforms.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/engineering" className="btn">Explore Engineering <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn btn-outline">Talk to Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <SectionHead eyebrow="Our Focus" title="Four capabilities. One engineering mindset." text="Deep technical understanding, flexible engagement and hands-on execution." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={Users} title="Engineering Talent" text="Find technically aligned engineers for semiconductor, embedded and validation teams." to="/talent" />
            <FeatureCard icon={Cpu} title="Engineering Services" text="Platform software, Android/Linux, drivers, validation and automation." to="/engineering" delay={100} />
            <FeatureCard icon={Sparkles} title="Edge AI & Innovation" text="Working prototypes in vision, gestures, driver monitoring and offline voice AI." to="/edge-ai" delay={200} />
            <FeatureCard icon={GraduationCap} title="QTI Academy" text="Practical embedded engineering education and campus AI challenges." to="/academy" delay={300} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal from="left">
            <span className="eyebrow">How We Help</span>
            <h2 className="h2">From platform challenges to dependable execution.</h2>
            <p className="lead mb-4">Engineering expertise should be easy to understand. These are the layers where QTIMINDS brings relevant skills and problem-solving.</p>
            {['Embedded and Linux/Android platforms', 'SoC and compute validation', 'System debugging and automation', 'Specialized engineering talent'].map((t) => <div key={t} className="tick">{t}</div>)}
            <div className="mt-6"><Link to="/engineering" className="btn btn-secondary">View Capabilities <ArrowRight size={16} /></Link></div>
          </Reveal>
          <Reveal from="right" delay={120}>
            <DiagramBox title="Illustrative platform engineering stack" caption="Technology stack diagram · Not a claim of full-service delivery at every layer">
              <Stack layers={['Applications & System Experience', 'Android / Linux Platform Software', 'BSP • HAL • Drivers • Interfaces', 'System Validation & Automation', 'Semiconductor / SoC Hardware']} />
            </DiagramBox>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <SectionHead eyebrow="Built, not just discussed" title="Explore our Edge AI prototypes." text="Four internal demonstrations developed with accessible laptop and webcam resources." />
          <ProjectShowcase />
          <Reveal className="mt-8"><Link to="/edge-ai" className="btn btn-secondary">See All Four Prototypes <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      <CTA eyebrow="Start a conversation" title="Need engineering talent or platform expertise?" text="Tell us the challenge. We'll discuss the relevant capabilities and next steps." />
    </>
  )
}
