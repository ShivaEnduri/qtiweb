import Reveal from './Reveal.jsx'
import ProjectArt from './ProjectArt.jsx'
import { projects } from '../data/site.js'

export default function ProjectShowcase() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={i * 110}>
          <div className="card card-hover h-full">
            <ProjectArt kind={p.kind} />
            <div className="p-5">
              <h3 className="mb-2 text-[17px]">{p.title}</h3>
              <p className="text-[13px] text-muted">{p.desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
