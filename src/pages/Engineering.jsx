import { Cpu, Smartphone, CircuitBoard, ShieldCheck, RefreshCw, Globe } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { DiagramBox, Stack, Flow } from '../components/Diagram.jsx'

export default function Engineering() {
  return (
    <>
      <PageHero eyebrow="Engineering Services" title={<>Complex platforms.<br />Focused engineering.</>} text="Embedded software, Android/Linux, SoC validation and test automation where technical depth matters." cta={{ to: '/contact', label: 'Discuss Your Engineering Need' }} />

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.16fr_.84fr]">
          <Reveal from="left">
            <DiagramBox title="Engineering across the software stack" caption="Layered architecture · conceptual coverage">
              <Stack layers={['Application & UX Layer', 'Android / Embedded Linux', 'Drivers • BSP • HAL • Boot', 'PCIe • USB • Storage • Multimedia', 'SoC / Board Platform']} />
            </DiagramBox>
          </Reveal>
          <Reveal from="right" delay={120}>
            <span className="eyebrow">Core Domains</span>
            <h2 className="h2">Where we focus.</h2>
            {['Embedded C/C++ and device software', 'Android platform and kernel integration', 'SoC / compute platform engineering', 'Functional, stability and power validation', 'Test automation and engineering dashboards', 'Focused full-stack development'].map((t) => <div key={t} className="tick">{t}</div>)}
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <Reveal><span className="eyebrow">Service Capabilities</span><h2 className="h2">Choose the engineering expertise you need.</h2></Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Cpu} title="Embedded Software" text="C/C++, Linux, firmware, BSP, drivers and hardware interfaces." pills={['C/C++', 'Drivers', 'BSP']} />
            <FeatureCard icon={Smartphone} title="Android & Linux" text="Kernel integration, HAL adaptation, platform debugging and compatibility validation." pills={['AOSP', 'HAL', 'Kernel']} delay={100} />
            <FeatureCard icon={CircuitBoard} title="SoC & Compute" text="Platform software, interfaces, bring-up support and diagnostics." pills={['SoC', 'PCIe', 'Storage']} delay={200} />
            <FeatureCard icon={ShieldCheck} title="Platform Validation" text="Functional, regression, multimedia, power, performance and stability tests." pills={['System', 'Stability']} />
            <FeatureCard icon={RefreshCw} title="Test Automation" text="Python frameworks, test orchestration, diagnostics and reporting." pills={['Python', 'CI', 'Logs']} delay={100} />
            <FeatureCard icon={Globe} title="Digital Platforms" text="React, Node.js, API-driven applications, dashboards and workflows." pills={['React', 'Node.js']} delay={200} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal>
            <DiagramBox title="Illustrative validation lifecycle" caption="Workflow visualization · suitable for validation and automation sections">
              <Flow stackOnMobile steps={['Requirements', 'Test Design', 'Execution', 'Debug & Triage', 'Regression']} />
            </DiagramBox>
          </Reveal>
        </div>
      </section>
    </>
  )
}