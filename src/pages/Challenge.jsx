import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectShowcase from '../components/ProjectShowcase.jsx'
import { DiagramBox, Flow } from '../components/Diagram.jsx'

export default function Challenge() {
  return (
    <>
      <PageHero eyebrow="QTI Edge AI Build Challenge 1.0" title={<>Don't just learn AI.<br />Build it.</>} text="Build. Measure. Test. Compete. A hands-on program introducing engineering students to practical AI applications." cta={{ to: '/contact', label: 'Bring the Challenge to Campus' }} />
      <section className="section">
        <div className="container-x">
          <Reveal><span className="eyebrow">The Challenge</span><h2 className="h2 mb-8">Four compelling starting points.</h2></Reveal>
          <ProjectShowcase />
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container-x">
          <Reveal><span className="eyebrow">How Participants Learn</span></Reveal>
          <Reveal delay={100}><DiagramBox><Flow steps={['Learn', 'Build', 'Measure', 'Test', 'Demonstrate']} /></DiagramBox></Reveal>
          <Reveal delay={150}><div className="mt-4 rounded-md border-l-4 border-[#09ae9f] bg-[#edf9f8] px-4 py-2.5 text-xs text-[#167a76]">Program duration, pricing, eligibility and recognition should be confirmed for each college engagement.</div></Reveal>
        </div>
      </section>
    </>
  )
}
