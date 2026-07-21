import './style.css'
import profilePhoto from './assets/profile.jpeg'

import { skills, jobs, projects, education } from './data'
import { renderNav, renderHero, renderSkills, renderExperience, renderProjects, renderEducation, renderContact } from './render'
import { initCanvas } from './canvas'
import { initReveal } from './reveal'

// ── Build the page ──
const app = document.getElementById('app')!

app.innerHTML = `
  ${renderNav()}
  ${renderHero(profilePhoto)}
  <hr class="divider" />
  ${renderSkills(skills)}
  <hr class="divider" />
  ${renderExperience(jobs)}
  <hr class="divider" />
  ${renderProjects(projects)}
  <hr class="divider" />
  ${renderEducation(education)}
  ${renderContact()}
`

// ── Init canvas animation ──
const canvas = document.getElementById('nodeCanvas') as HTMLCanvasElement
initCanvas(canvas)

// ── Init scroll reveal ──
initReveal()
