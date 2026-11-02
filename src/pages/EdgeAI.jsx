import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProjectShowcase from '../components/ProjectShowcase.jsx'
import { DiagramBox, FlowLoop } from '../components/Diagram.jsx'
import CTA from '../components/CTA.jsx'

export default function EdgeAI() {
  return (
    <>
      <PageHero eyebrow="Edge AI & Innovation" title={<>Build. Measure.<br />Test. Improve.</>} text="Working internal prototypes demonstrating computer vision, gesture interaction, attention monitoring and local voice intelligence." />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Four Internal Prototypes" title="AI you can see in action." text="Developed for practical learning and demonstrations using laptops and webcams." />
          <ProjectShowcase />
          <p className="mt-4 text-xs text-muted">Visuals are conceptual illustrations, not photographs of the actual QTIMINDS demos. Replace them with screenshots or video from the completed prototypes.</p>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal from="left">
            <span className="eyebrow">From Idea to Evidence</span>
            <h2 className="h2">A practical engineering workflow.</h2>
            <p className="lead mb-4">Edge AI is more than running a model. It requires thoughtful integration, latency measurement and testing under real operating conditions.</p>
            {['Local inference and model optimization', 'Computer vision and audio processing', 'Performance measurement and debug'].map((t) => <div key={t} className="tick">{t}</div>)}
          </Reveal>
          <Reveal from="right" delay={120}>
            <DiagramBox title="Edge AI implementation loop"><FlowLoop top={['Capture', 'Infer', 'Act']} bottom={['Improve', 'Measure', 'Test']} /></DiagramBox>
          </Reveal>
        </div>
      </section>

      <CTA title="Explore a practical Edge AI collaboration." text="Technical demos, prototypes and campus learning initiatives." label="Start a Discussion" />
    </>
  )
}
