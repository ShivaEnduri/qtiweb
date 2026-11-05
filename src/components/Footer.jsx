import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  ['/engineering', 'Engineering'], ['/talent', 'Talent'], ['/edge-ai', 'Edge AI'], ['/academy', 'Academy'],
  ['/products', 'Products'], ['/partners', 'Partners'], ['/careers', 'Careers'], ['/contact', 'Contact'],
]

export default function Footer() {
  return (
    <footer className="bg-[#061525] pb-6 pt-12 text-[#bed0dc]">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-12" />
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[#95b3c3]">
              Semiconductor engineering • Embedded systems • Edge AI • Engineering talent
            </p>
            <p className="mt-3 flex items-center gap-2 text-[13px] text-[#95b3c3]"><MapPin size={18} /> Suite 501, H.No: 1-111/3/c, 5th Floor, Subishi Plaza, Behind Gem Motors, Kondapur, Hyderabad, Telangana - 500082, India</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-white">Explore</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
              {links.map(([to, label]) => (
                <li key={to}><Link className="transition hover:text-teal-light" to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-white">Programs</h4>
            <ul className="space-y-2 text-[13px]">
              <li><Link className="transition hover:text-teal-light" to="/academy">QTI Academy</Link></li>
              <li><Link className="transition hover:text-teal-light" to="/challenge">Edge AI Build Challenge 1.0</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[#244057] pt-5 text-[11px] text-[#9ab0bf]">
          © {new Date().getFullYear()} QTIMINDS Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
