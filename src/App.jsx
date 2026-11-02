import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Engineering = lazy(() => import('./pages/Engineering.jsx'))
const Talent = lazy(() => import('./pages/Talent.jsx'))
const EdgeAI = lazy(() => import('./pages/EdgeAI.jsx'))
const Academy = lazy(() => import('./pages/Academy.jsx'))
const Products = lazy(() => import('./pages/Products.jsx'))
const Careers = lazy(() => import('./pages/Careers.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Challenge = lazy(() => import('./pages/Challenge.jsx'))
const Partners = lazy(() => import('./pages/Partners.jsx'))

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="grid min-h-[60vh] place-items-center text-muted">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/edge-ai" element={<EdgeAI />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
