import Reveal from './Reveal.jsx'

// Decorative flowing lines (same look as the banner: teal hairlines that sweep across the corners)
const topLines = Array.from({ length: 16 }, (_, i) => {
  const o = i * 7
  return `M${1010 + o},0 C${1180 + o},${120 + o * 0.4} ${1330 + o},${200 + o * 0.5} ${1600},${100 + o * 1.1}`
})
const bottomLines = Array.from({ length: 16 }, (_, i) => {
  const o = i * 7
  return `M${680 + o},${900} C${950 + o},${860 - o * 0.2} ${1250},${820 - o * 0.9} ${1600},${620 + o * 0.9}`
})

export default function CeoCorner({ leader }) {
  return (
    <Reveal>
      <div className="mx-auto w-full max-w-6xl overflow-hidden lg:max-w-4xl rounded-2xl bg-white shadow-card [container-type:inline-size]">
        <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
          {/* Artwork: photo, teal arc, waves */}
          <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <clipPath id="ceoPhotoClip">
                <path d="M0,0 L355,38 C560,150 650,400 612,610 C592,725 540,810 478,868 L0,868 Z" />
              </clipPath>
              <linearGradient id="ceoTeal" x1="0" x2="1">
                <stop offset="0" stopColor="#10b3a8" />
                <stop offset="1" stopColor="#7fdcd3" />
              </linearGradient>
            </defs>

            {/* waves */}
            <g fill="none" stroke="#2fc4b6" strokeOpacity=".45" strokeWidth="1.2">
              {topLines.map((d) => <path key={d} d={d} />)}
            </g>
            <g fill="none" stroke="#2fc4b6" strokeOpacity=".45" strokeWidth="1.2">
              {bottomLines.map((d) => <path key={d} d={d} />)}
            </g>

            {/* teal arc behind the photo */}
            <path d="M345,28 C575,140 668,400 630,615 C610,735 555,820 488,880" fill="none" stroke="#10b3a8" strokeWidth="16" />

            {/* photo, black & white */}
            <g clipPath="url(#ceoPhotoClip)">
              <rect width="660" height="900" fill="#e9eef0" />
              <image
                href={leader.img}
                x="0" y="0" width="640" height="900"
                preserveAspectRatio="xMidYMin slice"
                style={{ filter: 'grayscale(1) contrast(1.05)' }}
              />
            </g>

            {/* bottom navy sweep with teal edge */}
            <path d="M0,712 C150,800 330,850 560,862 C900,880 1250,868 1600,800 L1600,900 L0,900 Z" fill="url(#ceoTeal)" />
            <path d="M0,752 C170,835 380,880 640,884 C980,888 1300,880 1600,840 L1600,900 L0,900 Z" fill="#0b2a5b" />
          </svg>

          {/* Text */}
          <div className="absolute text-navy" style={{ left: '40%', top: '15%' }}>
            <h2 className="m-0 font-extrabold leading-none tracking-tight" style={{ fontSize: '6.3cqw' }}>CEO Corner</h2>
          </div>
          <div className="absolute h-[0.55cqw] rounded-full bg-[#10b3a8]" style={{ left: '40%', top: '28.2%', width: '13%' }} />
          <div className="absolute h-px bg-[#c9d6e2]" style={{ left: '53%', top: '28.5%', width: '19.5%' }} />

          <div className="absolute w-[0.5cqw] bg-[#10b3a8]" style={{ left: '43.5%', top: '35.8%', height: '17%' }} />
          <p className="absolute m-0 font-extrabold italic leading-[1.12] text-navy" style={{ left: '46%', top: '35%', fontSize: '4.6cqw', letterSpacing: '-0.02em' }}>
            Great minds,<br />greater impact.
          </p>

          <p className="absolute m-0 font-medium leading-snug text-navy" style={{ left: '44%', top: '55.5%', fontSize: '2.3cqw' }}>
            At QTIMINDS, we turn ideas into<br />meaningful, lasting solutions.
          </p>

          <div className="absolute w-[0.4cqw] bg-[#10b3a8]" style={{ left: '43.3%', top: '71.5%', height: '12.5%' }} />
          <div className="absolute text-navy" style={{ left: '45.2%', top: '71.5%' }}>
            <p className="m-0 font-extrabold leading-tight" style={{ fontSize: '2.1cqw' }}>{leader.name}</p>
            <p className="m-0 leading-snug" style={{ fontSize: '1.75cqw' }}>
              Chief Executive Officer<br />QTIMINDS Private Limited
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}