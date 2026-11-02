import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { navItems } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b border-white/5 bg-navy/95 text-white backdrop-blur transition-all duration-300 ${scrolled ? 'shadow-[0_6px_28px_rgba(7,19,35,.35)]' : ''}`}>
      <div className={`mx-auto flex max-w-[1280px] items-center gap-4 px-5 transition-all duration-300 ${scrolled ? 'min-h-[62px]' : 'min-h-[76px]'}`}>
        <Logo className={scrolled ? 'h-9' : 'h-11'} />
        <nav className="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `relative rounded-md px-3 py-2 text-[13px] font-semibold transition ${isActive ? 'text-teal-light' : 'text-[#d6e9f1] hover:text-teal-light'}
                 after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:rounded after:bg-teal after:transition-transform after:duration-300
                 ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn ml-3 !px-4 !py-2">Talk to Us</Link>
        </nav>
        <button
          className="ml-auto rounded-lg border border-[#4b6b7e] p-2 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-navy-2 px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `block rounded-lg px-3 py-3 text-sm font-semibold ${isActive ? 'bg-navy-3 text-teal-light' : 'text-[#d6e9f1]'}`}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
