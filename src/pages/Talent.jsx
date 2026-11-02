import { Cpu, Microchip, Camera, HardDrive, RefreshCw, Globe } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { DiagramBox, Flow } from '../components/Diagram.jsx'
import CTA from '../components/CTA.jsx'

export default function Talent() {
  return (
    <>
      <PageHero eyebrow="Engineering Talent Solutions" title={<>The right skills.<br />For the right engineering challenge.</>} text="Domain-led sourcing and technical screening for semiconductor, embedded and platform software teams." cta={{ to: '/contact', label: 'Request Engineering Talent' }} />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">How We Work</span>
            <h2 className="h2">A focused approach to engineering recruitment.</h2>
            <p className="lead mb-8">We look beyond technology keywords to understand the actual role and engineering environment.</p>
          </Reveal>
          <Reveal delay={100}>
            <DiagramBox><Flow steps={['Understand Requirement', 'Targeted Sourcing', 'Technical Screening', 'Customer Interviews', 'Onboarding Support']} /></DiagramBox>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <SectionHead eyebrow="Skills We Support" title="Technical domains, not just job titles." text="Specialist requirements across layers of embedded and semiconductor software." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Cpu} title="Embedded & Android" text="C/C++, Linux, kernel, BSP, HAL, drivers and platform software." />
            <FeatureCard icon={Microchip} title="Compute & SoC" text="Board bring-up, integration, platform validation, power and performance." delay={100} />
            <FeatureCard icon={Camera} title="Multimedia & Connectivity" text="Camera, audio, display, sensors, Bluetooth and Wi-Fi." delay={200} />
            <FeatureCard icon={HardDrive} title="Storage & Interfaces" text="PCIe, USB, NVMe, UFS, memory and system interfaces." />
            <FeatureCard icon={RefreshCw} title="QA & Automation" text="Python, test frameworks, system regression and diagnostics." delay={100} />
            <FeatureCard icon={Globe} title="Digital Engineering" text="Frontend, backend, full-stack applications and web platforms." delay={200} />
          </div>
        </div>
      </section>

      <CTA title="Have an open engineering requirement?" text="Share skill set, headcount, experience and expected joining window." label="Submit Requirement" />
    </>
  )
}
