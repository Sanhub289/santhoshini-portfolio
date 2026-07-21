import type { SkillRow, Job, Project, Education } from './types'

export function renderNav(): string {
  return `
    <nav>
      <a class="nav-logo" href="#">S.V.</a>
      <ul class="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  `
}

export function renderHero(photoSrc: string): string {
  return `
    <section id="hero">
      <canvas id="nodeCanvas"></canvas>
      <div class="hero-inner">
        <div class="hero-text">
          <div class="hero-badge"><span class="badge-dot"></span>Available for Full-Stack Developer roles</div>
          <h1 class="hero-name">Santhoshini<br><span>Vallakatla</span></h1>
          <p class="hero-title">Software Engineer &nbsp;·&nbsp; AWS Certified &nbsp;·&nbsp; Cloud-Native</p>
          <p class="hero-desc">
            I build full-stack applications and backend systems that process events in real time —
            microservices, event-driven pipelines, cloud-native solutions, and the AI tooling
            that keeps them observable and resilient.
          </p>
          <div class="hero-cta">
            <a href="#experience" class="btn btn-primary">View Experience</a>
            <a href="mailto:vallakatlasanthoshini.official@gmail.com" class="btn btn-ghost">Get in Touch</a>
          </div>
          <div class="hero-stats">
            <div class="h-stat"><div class="h-stat-n">5+</div><div class="h-stat-l">Years building</div></div>
            <div class="h-stat"><div class="h-stat-n">3</div><div class="h-stat-l">Cloud platforms</div></div>
            <div class="h-stat"><div class="h-stat-n">AWS</div><div class="h-stat-l">Certified SA</div></div>
          </div>
        </div>
        <div class="hero-photo-side">
          <div class="photo-frame">
            <img src="${photoSrc}" alt="Santhoshini Vallakatla" />
          </div>
        </div>
      </div>
    </section>
  `
}

export function renderSkills(rows: SkillRow[]): string {
  const rowsHtml = rows
    .map(
      (row) => `
      <div class="skill-row">
        <span class="skill-cat-label">${row.category}</span>
        <div class="chips">
          ${row.skills.map((s) => `<span class="chip${s.hot ? ' hot' : ''}">${s.label}</span>`).join('')}
        </div>
      </div>
    `
    )
    .join('')

  return `
    <section id="skills">
      <div class="sec">
        <div class="sec-label">Technical Skills</div>
        <div class="skills-categories reveal">${rowsHtml}</div>
      </div>
    </section>
  `
}

export function renderExperience(jobs: Job[]): string {
  const itemsHtml = jobs
    .map(
      (job) => `
      <div class="tl-item reveal">
        <div class="tl-left">
          <span class="tl-period">${job.period}</span>
          <div class="tl-co">${job.company}</div>
          <div class="tl-dot"></div>
        </div>
        <div class="tl-right">
          <div class="tl-role">${job.role}</div>
          <div class="tl-client">${job.client}</div>
          <ul class="tl-bullets">
            ${job.bullets.map((b) => `<li>${b}</li>`).join('')}
          </ul>
          <div class="tl-env">
            ${job.env.map((t) => `<span class="env-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `
    )
    .join('')

  return `
    <section id="experience">
      <div class="sec">
        <div class="sec-label">Work Experience</div>
        <div class="timeline">${itemsHtml}</div>
      </div>
    </section>
  `
}

export function renderProjects(projects: Project[]): string {
  const cardsHtml = projects
    .map(
      (p) => `
      <div class="proj-card">
        <div class="proj-icon">${p.icon}</div>
        <div class="proj-tag">${p.tag}</div>
        <div class="proj-name">${p.name}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-chips">
          ${p.chips.map((c) => `<span class="proj-chip">${c}</span>`).join('')}
        </div>
      </div>
    `
    )
    .join('')

  return `
    <section id="projects">
      <div class="sec">
        <div class="sec-label">Featured Projects</div>
        <div class="proj-grid reveal">${cardsHtml}</div>
      </div>
    </section>
  `
}

export function renderEducation(edu: Education[]): string {
  const eduHtml = edu
    .map(
      (e) => `
      <div class="edu-item">
        <div>
          <div class="edu-deg">${e.degree}</div>
          <div class="edu-school">${e.school}</div>
        </div>
      </div>
    `
    )
    .join('')

  return `
    <section id="education">
      <div class="sec">
        <div class="sec-label">Education & Certifications</div>
        <div class="edu-cert-grid reveal">
          <div>
            <p class="sub-heading">Education</p>
            <div class="edu-row">${eduHtml}</div>
          </div>
          <div>
            <p class="sub-heading">Certifications</p>
            <div class="cert-card">
              <div class="cert-icon">🏅</div>
              <div>
                <div class="cert-name">AWS Certified Solutions Architect</div>
                <div class="cert-issuer">Amazon Web Services · Associate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

export function renderContact(): string {
  return `
    <section id="contact">
      <div class="contact-headline reveal">Let's build systems<br>worth <span>depending on.</span></div>
      <p class="contact-sub reveal">Open to Full-Stack Developer roles. Based in Lansing, MI.</p>
      <div class="contact-links reveal">
        <a href="mailto:vallakatlasanthoshini.official@gmail.com" class="contact-link">Email</a>
        <a href="https://www.linkedin.com/in/vsanthoshini/" class="contact-link" target="_blank">LinkedIn</a>
        <a href="tel:6038259658" class="contact-link">603-825-9658</a>
      </div>
    </section>
    <footer>
      <span>© 2025 Santhoshini Vallakatla · Lansing, MI</span>
      <span>AWS Certified Solutions Architect · Software Engineer</span>
    </footer>
  `
}
