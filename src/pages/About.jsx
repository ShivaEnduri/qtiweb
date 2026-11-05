import { Target, Telescope, Gem } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import CeoCorner from '../components/CeoCorner.jsx'
import ImageCarousel from '../components/ImageCarousel.jsx'
import CTA from '../components/CTA.jsx'
import { leaders } from '../data/site.js'

const journey = [
  ['2023', 'Foundation', 'QTIMINDS incorporated in Hyderabad.'],
  ['2024–25', 'Engineering focus', 'Talent and technical services capability development.'],
  ['2026', 'Practical innovation', 'Edge AI prototypes, academy programs and new semiconductor exploration.'],
  ['The road ahead', 'Scalable partnerships', 'Deeper engineering competencies and customer relationships.'],
]

// Replace these placeholder paths (and alt text) with your real images in /public/images/about/
const storyImages = [
  { src: '/images/about/story-1.jpeg', alt: 'QTIMINDS engineering team at work' },
  { src: '/images/about/story-2.jpeg', alt: 'QTIMINDS office in Hyderabad' },
  { src: '/images/about/story-3.jpeg', alt: 'Embedded hardware and development boards' },
  { src: '/images/about/story-4.jpeg', alt: 'Team collaboration and learning session' },
  { src: '/images/about/story-5.jpeg', alt: 'Team collaboration and learning session' },
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About QTIMINDS" title={<>Built around engineers.<br />Driven by possibility.</>} text="A Hyderabad-based technology company connecting engineering expertise, specialized talent and practical innovation." />

      <section className="section">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal from="left">
            <span className="eyebrow">Our Story</span>
            <h2 className="h2">Engineering focus. Entrepreneurial energy.</h2>
            <p className="lead mb-3">Founded in 2023, QTIMINDS focuses on semiconductor and embedded engineering, technology talent and applied innovation.</p>
            <p className="lead">We believe companies succeed when they combine relevant technical skills, responsive execution and a continuous learning culture.</p>
          </Reveal>
          <Reveal from="right" delay={120}>
            <ImageCarousel images={storyImages} interval={4000} />
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <Reveal><span className="eyebrow">Our Journey</span><h2 className="h2">Building capability, step by step.</h2></Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map(([y, t, d], i) => (
              <Reveal key={y} delay={i * 120}>
                <div className="h-full rounded-lg border-l-4 border-teal bg-white p-5 shadow-[0_5px_16px_rgba(9,30,48,.07)] transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="text-xs font-extrabold uppercase text-[#0a8883]">{y}</span>
                  <h3 className="my-1">{t}</h3>
                  <p className="text-[13px] text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-5 md:grid-cols-3">
          <FeatureCard icon={Target} title="Our mission" text="Help technology companies solve complex engineering problems with capable people and practical execution." />
          <FeatureCard icon={Telescope} title="Our vision" text="Become a trusted engineering partner known for technical depth, quality and learning." delay={120} />
          <FeatureCard icon={Gem} title="Our values" text="Integrity, ownership, curiosity, customer partnership and continuous improvement." delay={240} />
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <CeoCorner leader={leaders[0]} />
        </div>
      </section>

      <CTA eyebrow="Work with us" title="Let's build something together." text="Reach out to discuss engineering, talent or innovation collaborations." />
    </>
  )
}