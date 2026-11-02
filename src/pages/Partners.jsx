import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'

const parts = [
  ['01', 'SDK & Tools', 'Study platform documentation, toolchains, SDKs and sample applications.'],
  ['02', 'Technical Demonstration', 'Create reference demos and evaluate integration needs.'],
  ['03', 'Engineering Enablement', 'Explore validation and customer-facing technical support models.'],
]

export default function Partners() {
  return (
    <>
      <PageHero eyebrow="Semiconductor Ecosystem" title={<>Helping silicon platforms<br />reach application developers.</>} text="Exploring engineering partnerships in SDK evaluation, application demonstrations, platform validation and India customer enablement." />
      <section className="section">
        <div className="container-x">
          <Reveal><span className="eyebrow">Potential Engagements</span><h2 className="h2 mb-8">From platform familiarization to customer support.</h2></Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {parts.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 130}>
                <div className="h-full rounded-xl border border-[#dcecef] bg-[#f3fafb] p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="eyebrow">{n}</span>
                  <h3 className="mb-2 text-[#0b7c77]">{t}</h3>
                  <p className="text-[13px] text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted">These are prospective capabilities and partnership models, not claims of established commercial agreements with specific semiconductor vendors.</p>
        </div>
      </section>
      <CTA title="Explore an India engineering collaboration." text="Discuss platform readiness, project scope and development support." label="Start a Conversation" />
    </>
  )
}
