import { useEffect, useState } from 'react'


export default function ImageCarousel({ images, interval = 2000, className = '' }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length

  useEffect(() => {
    if (paused || count < 2) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval)
    return () => clearInterval(id)
  }, [paused, count, interval])

  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy shadow-lift ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="QTIMINDS photo gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* blurred copy fills any empty space so nothing looks letterboxed */}
          <img src={img.src} alt="" aria-hidden="true" loading={i === 0 ? 'eager' : 'lazy'} className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl" />
          {/* the actual image, always shown in full */}
          <img src={img.src} alt={img.alt} loading={i === 0 ? 'eager' : 'lazy'} className="relative h-full w-full object-contain" />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy/40 to-transparent" />

      {count > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Show image ${i + 1} of ${count}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}