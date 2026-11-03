
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { DiagramBox } from '../components/Diagram.jsx'

const field =
  'w-full rounded-lg border border-[#d1dee5] bg-white px-3.5 py-3 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/25'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    const form = e.currentTarget

    setLoading(true)
    setError('')

    const templateParams = {
      from_name: form.elements.from_name.value,
      reply_to: form.elements.reply_to.value,
      company: form.elements.company.value || 'Not provided',
      phone: form.elements.phone.value || 'Not provided',
      enquiry_type: form.elements.enquiry_type.value,
      message: form.elements.message.value,
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSent(true)
      form.reset()
    } catch (err) {
  console.error('EmailJS Error:', err)
  console.error('Error status:', err?.status)
  console.error('Error message:', err?.text)

  setError(
    err?.text || 'Unable to send your enquiry. Please try again.'
  )
} finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact QTIMINDS"
        title={<>Let's engineer<br />what's next.</>}
        text="Tell us about your platform, talent requirement, AI collaboration or college initiative."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[.9fr_1.1fr]">

          <Reveal from="left">
            <span className="eyebrow">Business Enquiries</span>

            <h2 className="h2">
              One conversation can start something meaningful.
            </h2>

            <p className="mb-4 text-muted">
              <b className="text-ink">QTIMINDS Private Limited</b>
              <br />
              Suite 501, H.No: 1-111/3/c, 5th Floor, Subishi Plaza,
              Behind Gem Motors, Kondapur, Hyderabad,
              Telangana - 500082, India
            </p>

            {[
              'Engineering services & platform support',
              'Specialized staffing requirements',
              'Edge AI and semiconductor collaborations',
              'Academy and college partnerships',
            ].map((t) => (
              <div key={t} className="tick">
                {t}
              </div>
            ))}
          </Reveal>

          <Reveal from="right" delay={120}>
            <DiagramBox title="Send us an enquiry">

              {sent ? (
                <div className="grid place-items-center gap-3 py-12 text-center">
                  <CheckCircle2 size={44} className="text-teal" />

                  <h3>Thank you!</h3>

                  <p className="text-sm text-muted">
                    Your enquiry has been successfully sent.
                    Our team will get back to you soon.
                  </p>

                  <button
                    type="button"
                    className="btn mt-3"
                    onClick={() => setSent(false)}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  <input
                    required
                    name="from_name"
                    placeholder="Your name"
                    className={field}
                  />

                  <input
                    required
                    name="reply_to"
                    type="email"
                    placeholder="Work email"
                    className={field}
                  />

                  <input
                    name="company"
                    placeholder="Company / Institution"
                    className={field}
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone (optional)"
                    className={field}
                  />

                  <select
                    required
                    name="enquiry_type"
                    className={`${field} sm:col-span-2`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose enquiry type
                    </option>

                    {[
                      'Engineering services',
                      'Engineering talent',
                      'Edge AI collaboration',
                      'Training partnership',
                      'Careers',
                    ].map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>

                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirement"
                    className={`${field} resize-y sm:col-span-2`}
                  />

                  {error && (
                    <div className="flex items-center gap-2 text-sm text-red-600 sm:col-span-2">
                      <AlertCircle size={17} />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn sm:col-span-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Submit Enquiry'}
                    {!loading && <Send size={15} />}
                  </button>
                </form>
              )}

            </DiagramBox>
          </Reveal>

        </div>
      </section>
    </>
  )
}
