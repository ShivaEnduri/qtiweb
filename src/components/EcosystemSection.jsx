import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

const css = `
.qti-ecosystem{--qe-navy:#0a203a;--qe-deep:#071729;--qe-teal:#0da99d;--qe-teal2:#00c6b3;--qe-ink:#142e46;--qe-muted:#60758b;--qe-line:#dce9ed;background:linear-gradient(170deg,#f8fbfd 0%,#f1f9f9 100%);color:var(--qe-ink);padding:76px 0 66px;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
.qti-ecosystem *{box-sizing:border-box}.qti-eco-wrap{max-width:1190px;margin:0 auto;padding:0 25px}.qti-eco-head{display:flex;justify-content:space-between;align-items:center;gap:40px;margin-bottom:32px}.qti-eco-eyebrow{font-size:11px;letter-spacing:1.65px;font-weight:800;color:#07897f;display:flex;gap:9px;align-items:center}.qti-eco-dot{background:#00bca9;width:8px;height:8px;display:inline-block;border-radius:100%}.qti-eco-head h2{font-size:clamp(32px,4.6vw,54px);font-weight:780;letter-spacing:-1.7px;color:var(--qe-navy);line-height:1.1;margin:15px 0 13px}.qti-eco-head em{font-style:normal;color:#079c94}.qti-eco-lead{color:var(--qe-muted);font-size:16px;max-width:690px;line-height:1.65;margin:0}.qti-eco-ornament{min-width:147px;width:147px;height:147px;border-radius:30px;border:1px solid #bde5e2;box-shadow:0 16px 40px #0b657319;background:radial-gradient(circle at 40% 30%,#13cabd,#07586d 74%);color:white;display:flex;align-items:center;justify-content:center;position:relative;transform:rotate(8deg)}.qti-eco-ornament span{font-weight:900;font-size:33px;letter-spacing:-1px;transform:rotate(-8deg)}.qti-eco-ornament i{position:absolute;width:14px;height:5px;border-radius:3px;background:#9de8df;left:-10px}.qti-eco-ornament i:nth-of-type(1){top:22%}.qti-eco-ornament i:nth-of-type(2){top:70%}.qti-eco-ornament i:nth-of-type(3){left:auto;right:-10px;top:22%}.qti-eco-ornament i:nth-of-type(4){left:auto;right:-10px;top:70%}.qti-eco-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:15px;margin-bottom:22px}.qti-eco-card{background:#fff;border:1px solid var(--qe-line);border-radius:16px;padding:24px 20px;box-shadow:0 7px 22px #07273a09;min-height:219px}.qti-eco-card-icon{height:55px;width:55px;border-radius:15px;background:#e1f7f3;color:#078c87;display:flex;align-items:center;justify-content:center;margin-bottom:18px}.qti-eco-card h3{font-size:16px;letter-spacing:-.25px;line-height:1.3;margin:0 0 9px;color:#112d45}.qti-eco-card p{font-size:13px;line-height:1.65;color:var(--qe-muted);margin:0}.qti-eco-flow-block{background:#fff;border:1px solid var(--qe-line);border-radius:19px;padding:26px 28px 31px;margin-bottom:20px}.qti-eco-small-label{font-size:10px;letter-spacing:1.6px;font-weight:800;color:#07958e}.qti-eco-flow-title h3{font-size:23px;line-height:1.2;letter-spacing:-.4px;margin:7px 0;color:var(--qe-navy)}.qti-eco-flow-title p{font-size:13px;color:var(--qe-muted);margin:0 0 22px}.qti-eco-flow{display:grid;grid-template-columns:minmax(0,1fr) 33px minmax(0,1.14fr) 33px minmax(0,1fr);align-items:center;gap:8px}.qti-eco-node{background:#f3f8fb;border:1px solid #e1eaf0;border-radius:12px;padding:14px 18px;min-width:0;cursor:pointer;user-select:none;transition:background .25s,border-color .25s,box-shadow .25s,transform .25s}.qti-eco-node:focus-visible{outline:2px solid #13c1b0;outline-offset:2px}.qti-eco-node-num,.qti-eco-node strong,.qti-eco-node small{transition:color .25s}.qti-eco-node-num{font-size:10px;letter-spacing:1px;color:#8396aa;display:block;font-weight:800;margin-bottom:4px}.qti-eco-node strong{font-size:16px;color:#173952;display:block}.qti-eco-node small{font-size:12px;color:#617b8c;display:block;margin-top:3px}.qti-eco-node-active{background:linear-gradient(110deg,#0c4d64,#087d7d);border-color:#148e8d;box-shadow:0 10px 24px #0b657326;transform:translateY(-2px)}.qti-eco-node-active .qti-eco-node-num,.qti-eco-node-active small{color:#bce8e6}.qti-eco-node-active strong{color:white}.qti-eco-arrow{font-size:26px;text-align:center;font-weight:700;color:#0d9b91}.qti-eco-bottom{background:linear-gradient(105deg,#08233d,#0e5666);border-radius:17px;color:white;padding:24px 27px;display:flex;align-items:center;justify-content:space-between;gap:25px}.qti-eco-bottom strong{font-size:18px;display:block;line-height:1.4}.qti-eco-bottom span{color:#cbe4e5;font-size:13px;display:block;margin-top:5px}.qti-eco-cta{background:#13c1b0;color:#05363b!important;font-weight:800;font-size:13px;white-space:nowrap;padding:13px 17px;border-radius:9px;text-decoration:none;display:inline-flex;align-items:center;gap:12px}.qti-eco-cta span{font-size:18px;color:#05363b;margin:0}.qti-eco-cta:hover{background:#45d6ca}.qti-eco-qualifier{font-size:11px;line-height:1.5;color:#688193;text-align:center;margin:15px auto 0;max-width:830px}
@media(max-width:960px){.qti-eco-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.qti-eco-ornament{min-width:112px;width:112px;height:112px;border-radius:23px}.qti-eco-bottom{align-items:flex-start;flex-direction:column}}
@media(max-width:620px){.qti-ecosystem{padding:48px 0}.qti-eco-wrap{padding:0 18px}.qti-eco-head{gap:15px}.qti-eco-ornament{display:none}.qti-eco-head h2{letter-spacing:-1px}.qti-eco-lead{font-size:14px}.qti-eco-grid{grid-template-columns:1fr;gap:11px}.qti-eco-card{min-height:0;padding:17px;display:grid;grid-template-columns:47px 1fr;column-gap:13px}.qti-eco-card-icon{height:42px;width:42px;border-radius:11px;grid-row:span 2;margin:0}.qti-eco-card-icon svg{height:23px;width:23px}.qti-eco-card h3{font-size:15px;margin:0 0 4px}.qti-eco-card p{font-size:12px}.qti-eco-flow-block{padding:20px 16px}.qti-eco-flow{grid-template-columns:1fr;gap:5px}.qti-eco-arrow{transform:rotate(90deg);line-height:25px}.qti-eco-node{padding:13px 17px}.qti-eco-bottom{padding:22px}.qti-eco-bottom strong{font-size:16px}.qti-eco-cta{white-space:normal;width:100%;justify-content:center}.qti-eco-qualifier{text-align:left}}
.qti-eco-card-icon svg{width:28px;height:28px}
`

const svgProps = { viewBox: '0 0 32 32', fill: 'none', stroke: 'currentColor', strokeWidth: 1.65 }

const cards = [
  {
    title: 'SoC & SDK Enablement',
    text: 'Platform evaluation, SDK familiarization and reference application workflows.',
    icon: (
      <svg {...svgProps}>
        <rect x="8" y="8" width="16" height="16" rx="3" />
        <rect x="12" y="12" width="8" height="8" rx="1" />
        <path d="M12 3v5m8-5v5M12 24v5m8-5v5M3 12h5m-5 8h5m16-8h5m-5 8h5" />
      </svg>
    ),
  },
  {
    title: 'Embedded & Edge AI',
    text: 'Exploring voice, vision, smart-device and IoT proofs of concept.',
    icon: (
      <svg {...svgProps}>
        <path d="M12 7a5 5 0 0 0-8 4 5 5 0 0 0 1 9 5 5 0 0 0 7 5V7Zm8 0a5 5 0 0 1 8 4 5 5 0 0 1-1 9 5 5 0 0 1-7 5V7Z" />
        <path d="M12 12 8 16l4 3m8-7 4 4-4 3M16 5v22" />
      </svg>
    ),
  },
  {
    title: 'Integration & Validation',
    text: 'Embedded integration, functional testing, debugging and performance evaluation.',
    icon: (
      <svg {...svgProps}>
        <path d="m11 9-7 7 7 7m10-14 7 7-7 7m-3-19-5 24" />
      </svg>
    ),
  },
  {
    title: 'India Engineering Readiness',
    text: 'Developing capabilities for OEM/ODM enablement and local technical support.',
    icon: (
      <svg {...svgProps}>
        <path d="M6 19v-5a10 10 0 0 1 20 0v5" />
        <rect x="3" y="17" width="6" height="8" rx="2" />
        <rect x="23" y="17" width="6" height="8" rx="2" />
        <path d="M26 25a8 8 0 0 1-8 4h-4" />
      </svg>
    ),
  },
]

const flowNodes = [
  { num: '01', title: 'Chip Vendors', sub: 'SoCs · SDKs · Dev Kits' },
  { num: '02', title: 'QTIMINDS', sub: 'Evaluation · PoCs · Validation' },
  { num: '03', title: 'OEMs / ODMs', sub: 'Device & Product Teams' },
]

export default function EcosystemSection() {
  const [hovered, setHovered] = useState(null) // temporary highlight while hovering
  const [selected, setSelected] = useState(null) // sticky highlight after a click
  const active = hovered !== null ? hovered : selected

  return (
    <section className="qti-ecosystem" aria-labelledby="qti-ecosystem-heading">
      <style>{css}</style>
      <div className="qti-eco-wrap">
        <Reveal>
          <div className="qti-eco-head">
            <div>
              <span className="qti-eco-eyebrow"><span className="qti-eco-dot" /> SEMICONDUCTOR ECOSYSTEM &amp; PLATFORM ENABLEMENT</span>
              <h2 id="qti-ecosystem-heading">From Silicon <em>to Solutions.</em></h2>
              <p className="qti-eco-lead">Connecting semiconductor technologies with practical applications through platform learning, embedded engineering and collaboration.</p>
            </div>
            <div className="qti-eco-ornament" aria-hidden="true">
              <span>SoC</span><i /><i /><i /><i />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="qti-eco-grid">
            {cards.map((c) => (
              <article key={c.title} className="qti-eco-card">
                <div className="qti-eco-card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="qti-eco-flow-block">
            <div className="qti-eco-flow-title">
              <span className="qti-eco-small-label">OUR COLLABORATION VISION</span>
              <h3>Bridging chip platforms and product teams</h3>
              <p>An illustrative model for future engineering collaborations.</p>
            </div>
            <div className="qti-eco-flow">
              {flowNodes.map((n, i) => (
                <Fragment key={n.num}>
                  {i > 0 && <span className="qti-eco-arrow">→</span>}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-pressed={selected === i}
                    className={`qti-eco-node${active === i ? ' qti-eco-node-active' : ''}`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    onClick={() => setSelected(selected === i ? null : i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelected(selected === i ? null : i)
                      }
                    }}
                  >
                    <span className="qti-eco-node-num">{n.num}</span>
                    <strong>{n.title}</strong>
                    <small>{n.sub}</small>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="qti-eco-bottom">
            <div>
              <strong>Exploring semiconductor engineering collaboration in India?</strong>
              <span>Let's discuss platform evaluation, prototypes and technical enablement.</span>
            </div>
            <Link to="/contact" className="qti-eco-cta">Discuss a Collaboration <span>↗</span></Link>
          </div>
          <p className="qti-eco-qualifier">Capabilities and engagement models shown reflect areas of ongoing development and potential collaboration. No third-party partnership is implied.</p>
        </Reveal>
      </div>
    </section>
  )
}