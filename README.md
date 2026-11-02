# QTIMINDS Website (React + Tailwind CSS)

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build in /dist

## Structure
- `src/pages/` – one component per page (Home, About, Engineering, Talent, EdgeAI, Academy, Products, Careers, Contact, Challenge, Partners)
- `src/components/` – Header, Footer, Logo, Reveal (scroll animation), PageHero, CTA, Diagram helpers, ProjectArt
- `src/data/site.js` – nav links, **leadership names/designations**, Edge AI projects
- `public/images/` – `logo.png`, `hero.webp`, `leaders/`

## Scroll animation
Wrap anything in `<Reveal from="up|left|right|scale" delay={150}>…</Reveal>`.
Respects `prefers-reduced-motion`.

## Deployment
Uses BrowserRouter, so configure your host to serve `index.html` for unknown paths
(Netlify: `/* /index.html 200`, Vercel: rewrites). 
