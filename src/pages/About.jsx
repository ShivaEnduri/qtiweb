

// import { Target, ShieldCheck, Lightbulb, Layers, Users } from 'lucide-react'
// import PageHero from '../components/PageHero.jsx'
// import Reveal from '../components/Reveal.jsx'
// import ImageCarousel from '../components/ImageCarousel.jsx'

// // Replace these placeholder paths (and alt text) with your real images in /public/images/
// const storyImages = [
//   { src: '/images/about/story-1.jpeg', alt: 'QTIMINDS team in the Hyderabad office' },
//   { src: '/images/about/story-2.jpeg', alt: 'QTIMINDS engineering team at work' },
// ]
// const ceoImage = '/images/leaders/ceo.jpeg' 

// const journey = [
//   ['2023', 'Incorporated'],
//   ['2024', 'Talent & Training Focus'],
//   ['2025', 'Engineering Services Expansion'],
//   ['2026', 'Innovation & Capability Growth'],
// ]

// const values = [
//   { icon: ShieldCheck, title: 'Integrity', text: 'We do what is right and build lasting trust.' },
//   { icon: Lightbulb, title: 'Innovation', text: 'We embrace new ideas to create better solutions.' },
//   { icon: Layers, title: 'Ownership', text: 'We take responsibility and drive outcomes.' },
//   { icon: Users, title: 'Collaboration', text: 'We work together to achieve greater impact.' },
// ]

// function Eyebrow({ children }) {
//   return (
//     <div className="mb-5 flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.22em] text-[#0b2a6b]">
//       <span className="h-4 w-[3px] bg-[#1565e8]" />
//       {children}
//     </div>
//   )
// }

// function MissionIcon() {
//   return (
//     <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <path d="M4 54 L24 24 L33 38 L40 29 L60 54 Z" />
//       <path d="M40 29 V6 M40 6 H56 L50 13 L56 20 H40" />
//     </svg>
//   )
// }

// export default function About() {
//   return (
//     <>
     
//       <PageHero
//         eyebrow="About QTIMINDS"
//         title={<>Deep Engineering.<br /> <em className="not-italic text-teal-light">Smarter Innovation</em></>}
//         text="Engineering talent, embedded systems expertise and Innovation-driven execution."
//       />

//       {/* WHO WE ARE */}
//       <section className="py-12 md:py-16">
//         <div className="container-x grid items-center gap-8 md:grid-cols-2 md:gap-10">
//           <Reveal from="left">
//             <Eyebrow>Who we are</Eyebrow>
//             <h2 className="m-0 text-2xl font-extrabold leading-snug text-[#0b1f4d] md:text-[28px]">
//               An engineering-led company focused on embedded systems, talent solutions, training and innovation.
//             </h2>
//             <div className="my-5 h-[3px] w-12 bg-[#1565e8]" />
//             <p className="m-0 max-w-md text-[15px] leading-relaxed text-[#3a4a68]">
//               QTIMINDS is an engineering-led company focused on embedded systems, talent solutions, training and innovation.
//             </p>
//           </Reveal>
//           <Reveal from="right" delay={120}>
//             <ImageCarousel images={storyImages} aspect="aspect-[4/3] md:aspect-[16/10]" />
//           </Reveal>
//         </div>
//       </section>

//       {/* VISION & MISSION */}
//       <section className="bg-[#f3f6fb] py-10 md:py-12">
//         <div className="container-x">
//           <Reveal><Eyebrow>Vision &amp; Mission</Eyebrow></Reveal>
//           <div className="grid gap-4 md:grid-cols-2">
//             <Reveal>
//               <div className="flex h-full items-center gap-5 rounded-lg bg-gradient-to-br from-[#0a2a6e] to-[#0b3a97] p-6 text-white shadow-[0_10px_24px_rgba(10,42,110,.22)]">
//                 <Target className="h-14 w-14 shrink-0" strokeWidth={1.5} />
//                 <span className="h-16 w-px shrink-0 bg-white/30" />
//                 <div>
//                   <h3 className="m-0 mb-1 text-2xl font-bold text-white">Our Vision</h3>
//                   <p className="m-0 text-[15px] leading-snug text-white/90">To enable technology-driven growth through engineering excellence.</p>
//                 </div>
//               </div>
//             </Reveal>
//             <Reveal delay={120}>
//               <div className="flex h-full items-center gap-5 rounded-lg bg-gradient-to-br from-[#0c55cf] to-[#1670f0] p-6 text-white shadow-[0_10px_24px_rgba(12,85,207,.22)]">
//                 <span className="shrink-0"><MissionIcon /></span>
//                 <span className="h-16 w-px shrink-0 bg-white/30" />
//                 <div>
//                   <h3 className="m-0 mb-1 text-2xl font-bold text-white">Our Mission</h3>
//                   <p className="m-0 text-[15px] leading-snug text-white/90">To build capable teams, practical solutions and long-term customer value.</p>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* CEO CORNER */}
//      <section className="py-12 md:py-14">
//         <div className="container-x grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10">
//           <Reveal from="left">
//             <img
//               src={ceoImage}
//               alt="Barkha Agrawal, CEO of QTIMINDS"
//               loading="lazy"
//               className="aspect-[31/32] w-full rounded-xl object-cover object-top grayscale shadow-card"
//             />
//           </Reveal>
//           <Reveal from="right" delay={120}>
//             <Eyebrow>CEO Corner — Barkha Agrawal</Eyebrow>
 
//             {/* Headline */}
//             <h2 className="m-0 text-3xl font-extrabold leading-tight tracking-tight text-[#0b1f4d] md:text-4xl">
//               Great minds, <span className="text-[#1565e8]">greater impact.</span>
//             </h2>
//             <div className="my-5 h-[3px] w-14 rounded-full bg-[#1565e8]" />
 
//             {/* Quote */}
//             <blockquote className="relative m-0 rounded-xl border-l-4 border-[#1565e8] bg-[#f3f6fb] px-6 py-5 md:px-8 md:py-6">
              
//               <p className="m-0 text-lg italic leading-relaxed text-[#1f2d4d] md:text-xl">
//                 At QTIMINDS, we turn ideas into meaningful, lasting solutions.
//               </p>
              
//             </blockquote>
 
//             {/* Signature */}
//             <div className="mt-6 flex items-center gap-4">
//               <span className="h-12 w-[3px] rounded-full bg-[#1565e8]" aria-hidden="true" />
//               <div>
//                 <p className="m-0 text-xl font-bold text-[#0b1f4d]">Barkha Agrawal</p>
//                 <p className="m-0 text-[15px] tracking-wide text-[#3a4a68]">Chief Executive Officer</p>
//                 <p className="m-0 text-[15px] tracking-wide text-[#3a4a68]"> QTIMINDS Private Limited</p>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
 

//       {/* JOURNEY & VALUES */}
//       <section className="bg-[#f3f6fb] py-10 md:py-12">
//         <div className="container-x">
//           <Reveal><Eyebrow>Our Journey &amp; Values</Eyebrow></Reveal>
//           <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] md:gap-0">
//             <Reveal className="md:pr-8">
//               <h3 className="m-0 mb-5 text-xl font-bold text-[#0b1f4d]">Our Journey</h3>
//               <ol className="relative m-0 list-none space-y-3 p-0 pl-8">
//                 <span className="absolute bottom-4 left-[11px] top-4 w-[2px] bg-[#1565e8]" aria-hidden="true" />
//                 {journey.map(([y, t]) => (
//                   <li key={y} className="relative rounded-md bg-[#e4ecfb] px-4 py-2.5 text-[15px] text-[#2b3b5c]">
//                     <span className="absolute -left-[26px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-[#1565e8] bg-white" aria-hidden="true" />
//                     <strong className="text-[#0b1f4d]">{y}</strong> - {t}
//                   </li>
//                 ))}
//               </ol>
//             </Reveal>
//             <Reveal delay={120} className="md:border-l md:border-[#d5deee] md:pl-8">
//               <h3 className="m-0 mb-5 text-xl font-bold text-[#0b1f4d]">Our Values</h3>
//               <div className="grid gap-3 sm:grid-cols-2">
//                 {values.map(({ icon: Icon, title, text }) => (
//                   <div key={title} className="flex items-center gap-3 rounded-lg border border-[#d5deee] bg-white p-4 transition hover:-translate-y-1 hover:shadow-card">
//                     <Icon className="h-9 w-9 shrink-0 text-[#1565e8]" strokeWidth={1.5} />
//                     <div>
//                       <p className="m-0 font-bold text-[#0b1f4d]">{title}</p>
//                       <p className="m-0 text-[13px] leading-snug text-[#5a6a88]">{text}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* TAGLINE BAND */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-[#07194a] via-[#0a2a70] to-[#0b3a9a] py-7">
//         <div className="container-x relative flex items-center justify-center gap-5 text-center">
//           <span className="hidden h-[2px] w-24 bg-[#2f7bff] sm:block" />
//           <p className="m-0 text-base font-medium italic text-white md:text-xl">Driven by people. Built on engineering. Focused on the future.</p>
//           <span className="hidden h-[2px] w-24 bg-[#2f7bff] sm:block" />
//         </div>
//       </section>
//     </>
//   )
// }


import { Target, ShieldCheck, Lightbulb, Layers, Users } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'

// Replace with your real image in /public/images/about/
const storyImage = { src: '/images/about/about.jpeg', alt: 'QTIMINDS team in the Hyderabad office' }
const ceoImage = '/images/leaders/ceo.jpeg' 

const journey = [
  ['2023', 'Incorporated'],
  ['2024', 'Talent & Training Focus'],
  ['2025', 'Engineering Services Expansion'],
  ['2026', 'Innovation & Capability Growth'],
]

const values = [
  { icon: ShieldCheck, title: 'Integrity', text: 'We do what is right and build lasting trust.' },
  { icon: Lightbulb, title: 'Innovation', text: 'We embrace new ideas to create better solutions.' },
  { icon: Layers, title: 'Ownership', text: 'We take responsibility and drive outcomes.' },
  { icon: Users, title: 'Collaboration', text: 'We work together to achieve greater impact.' },
]

function Eyebrow({ children }) {
  return (
    <div className="mb-5 flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.22em] text-[#0b2a6b]">
      <span className="h-4 w-[3px] bg-[#1565e8]" />
      {children}
    </div>
  )
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 54 L24 24 L33 38 L40 29 L60 54 Z" />
      <path d="M40 29 V6 M40 6 H56 L50 13 L56 20 H40" />
    </svg>
  )
}

export default function About() {
  return (
    <>
     
      <PageHero
        eyebrow="About QTIMINDS"
        title={<>Deep Engineering.<br /> <em className="not-italic text-teal-light">Smarter Innovation</em></>}
        text="Engineering talent, embedded systems expertise and Innovation-driven execution."
      />

      {/* WHO WE ARE */}
      <section className="py-12 md:py-16">
        <div className="container-x grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <Reveal from="left">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="m-0 text-2xl font-extrabold leading-snug text-[#0b1f4d] md:text-[28px]">
              An engineering-led company focused on embedded systems, talent solutions, training and innovation.
            </h2>
            <div className="my-5 h-[3px] w-12 bg-[#1565e8]" />
            <p className="m-0 max-w-md text-[15px] leading-relaxed text-[#3a4a68]">
              QTIMINDS is an engineering-led company focused on embedded systems, talent solutions, training and innovation.
            </p>
          </Reveal>
          <Reveal from="right" delay={120}>
            <img src={storyImage.src} alt={storyImage.alt} loading="lazy" className="h-auto w-full rounded-2xl shadow-lift" />
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-[#f3f6fb] py-10 md:py-12">
        <div className="container-x">
          <Reveal><Eyebrow>Vision &amp; Mission</Eyebrow></Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full items-center gap-5 rounded-lg bg-gradient-to-br from-[#0a2a6e] to-[#0b3a97] p-6 text-white shadow-[0_10px_24px_rgba(10,42,110,.22)]">
                <Target className="h-14 w-14 shrink-0" strokeWidth={1.5} />
                <span className="h-16 w-px shrink-0 bg-white/30" />
                <div>
                  <h3 className="m-0 mb-1 text-2xl font-bold text-white">Our Vision</h3>
                  <p className="m-0 text-[15px] leading-snug text-white/90">To enable technology-driven growth through engineering excellence.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex h-full items-center gap-5 rounded-lg bg-gradient-to-br from-[#0c55cf] to-[#1670f0] p-6 text-white shadow-[0_10px_24px_rgba(12,85,207,.22)]">
                <span className="shrink-0"><MissionIcon /></span>
                <span className="h-16 w-px shrink-0 bg-white/30" />
                <div>
                  <h3 className="m-0 mb-1 text-2xl font-bold text-white">Our Mission</h3>
                  <p className="m-0 text-[15px] leading-snug text-white/90">To build capable teams, practical solutions and long-term customer value.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CEO CORNER */}
     <section className="py-12 md:py-14">
        <div className="container-x grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10">
          <Reveal from="left">
            <img
              src={ceoImage}
              alt="Barkha Agrawal, CEO of QTIMINDS"
              loading="lazy"
              className="aspect-[31/32] w-full rounded-xl object-cover object-top grayscale shadow-card"
            />
          </Reveal>
          <Reveal from="right" delay={120}>
            <Eyebrow>CEO Corner — Barkha Agrawal</Eyebrow>
 
            {/* Headline */}
            <h2 className="m-0 text-3xl font-extrabold leading-tight tracking-tight text-[#0b1f4d] md:text-4xl">
              Great minds, <span className="text-[#1565e8]">greater impact.</span>
            </h2>
            <div className="my-5 h-[3px] w-14 rounded-full bg-[#1565e8]" />
 
            {/* Quote */}
            <blockquote className="relative m-0 rounded-xl border-l-4 border-[#1565e8] bg-[#f3f6fb] px-6 py-5 md:px-8 md:py-6">
              
              <p className="m-0 text-lg italic leading-relaxed text-[#1f2d4d] md:text-xl">
                At QTIMINDS, we turn ideas into meaningful, lasting solutions.
              </p>
              
            </blockquote>
 
            {/* Signature */}
            <div className="mt-6 flex items-center gap-4">
              <span className="h-20 w-[3px] rounded-full bg-[#1565e8]" aria-hidden="true" />
              <div>
                <p className="m-0 text-xl font-bold text-[#0b1f4d]">Barkha Agrawal</p>
                <p className="m-0 text-[15px] tracking-wide text-[#3a4a68]">Chief Executive Officer</p>
                <p className="m-0 text-[15px] tracking-wide text-[#3a4a68]"> QTIMINDS Private Limited</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
 

      {/* JOURNEY & VALUES */}
      <section className="bg-[#f3f6fb] py-10 md:py-12">
        <div className="container-x">
          <Reveal><Eyebrow>Our Journey &amp; Values</Eyebrow></Reveal>
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] md:gap-0">
            <Reveal className="md:pr-8">
              <h3 className="m-0 mb-5 text-xl font-bold text-[#0b1f4d]">Our Journey</h3>
              <ol className="relative m-0 list-none space-y-3 p-0 pl-8">
                <span className="absolute bottom-4 left-[11px] top-4 w-[2px] bg-[#1565e8]" aria-hidden="true" />
                {journey.map(([y, t]) => (
                  <li key={y} className="relative rounded-md bg-[#e4ecfb] px-4 py-2.5 text-[15px] text-[#2b3b5c]">
                    <span className="absolute -left-[26px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-[#1565e8] bg-white" aria-hidden="true" />
                    <strong className="text-[#0b1f4d]">{y}</strong> - {t}
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={120} className="md:border-l md:border-[#d5deee] md:pl-8">
              <h3 className="m-0 mb-5 text-xl font-bold text-[#0b1f4d]">Our Values</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {values.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-center gap-3 rounded-lg border border-[#d5deee] bg-white p-4 transition hover:-translate-y-1 hover:shadow-card">
                    <Icon className="h-9 w-9 shrink-0 text-[#1565e8]" strokeWidth={1.5} />
                    <div>
                      <p className="m-0 font-bold text-[#0b1f4d]">{title}</p>
                      <p className="m-0 text-[13px] leading-snug text-[#5a6a88]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TAGLINE BAND */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#07194a] via-[#0a2a70] to-[#0b3a9a] py-7">
        <div className="container-x relative flex items-center justify-center gap-5 text-center">
          <span className="hidden h-[2px] w-24 bg-[#2f7bff] sm:block" />
          <p className="m-0 text-base font-medium italic text-white md:text-xl">Driven by people. Built on engineering. Focused on the future.</p>
          <span className="hidden h-[2px] w-24 bg-[#2f7bff] sm:block" />
        </div>
      </section>
    </>
  )
}