import { Link } from 'react-router-dom'

export default function Logo({ className = 'h-10' }) {
  return (
    <Link to="/" aria-label="QTIMINDS home" className="inline-flex items-center">
      <img src="/images/logo.png" alt="QTIMINDS" className={`${className} w-auto object-contain`} />
    </Link>
  )
}
