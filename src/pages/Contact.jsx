import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { DiagramBox } from '../components/Diagram.jsx'

const field = 'w-full rounded-lg border border-[#d1dee5] bg-white px-3.5 py-3 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/25'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // TODO: connect to your backend / form service (e.g. Formspree, EmailJS, own API).
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <>
      <PageHero eyebrow="Contact QTIMINDS" title={<>Let's engineer<br />what's next.</>} text="Tell us about your platform, talent requirement, AI collaboration or college initiative." />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal from="left">
            <span className="eyebrow">Business Enquiries</span>
            <h2 className="h2">One conversation can start something meaningful.</h2>
            <p className="mb-4 text-muted"><b className="text-ink">QTIMINDS Private Limited</b><br />Suite 501, H.No: 1-111/3/c, 5th Floor, Subishi Plaza, Behind Gem Motors, Kondapur, Hyderabad, Telangana - 500082, India</p>
            {['Engineering services & platform support', 'Specialized staffing requirements', 'Edge AI and semiconductor collaborations', 'Academy and college partnerships'].map((t) => <div key={t} className="tick">{t}</div>)}
          </Reveal>
          <Reveal from="right" delay={120}>
            <DiagramBox title="Send us an enquiry">
              {sent ? (
                <div className="grid place-items-center gap-3 py-12 text-center">
                  <CheckCircle2 size={44} className="text-teal" />
                  <h3>Thank you!</h3>
                  <p className="text-sm text-muted">Your enquiry has been noted. (Demo form — connect a backend before launch.)</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
                  <input required placeholder="Your name" className={field} />
                  <input required type="email" placeholder="Work email" className={field} />
                  <input placeholder="Company / Institution" className={field} />
                  <input placeholder="Phone (optional)" className={field} />
                  <select className={`${field} sm:col-span-2`} defaultValue="">
                    <option value="" disabled>Choose enquiry type</option>
                    {['Engineering services', 'Engineering talent', 'Edge AI collaboration', 'Training partnership', 'Careers'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <textarea required rows={4} placeholder="Tell us about your requirement" className={`${field} resize-y sm:col-span-2`} />
                  <button className="btn sm:col-span-2">Submit Enquiry <Send size={15} /></button>
                </form>
              )}
            </DiagramBox>
          </Reveal>
        </div>
      </section>
    </>
  )
}
