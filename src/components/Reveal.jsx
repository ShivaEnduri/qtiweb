import { useEffect, useRef, useState } from 'react'

const variants = { up: 'reveal-up', left: 'reveal-left', right: 'reveal-right', scale: 'reveal-scale' }

/**
 * Reveals children with a slide/fade animation the first time they scroll into view.
 * <Reveal from="up" delay={150}>…</Reveal>
 */
export default function Reveal({ children, from = 'up', delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${variants[from] || variants.up} ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
