export interface SkillRow {
  category: string
  skills: { label: string; hot?: boolean }[]
}

export interface Job {
  period: string
  company: string
  role: string
  client: string
  bullets: string[]
  env: string[]
}

export interface Project {
  icon: string
  tag: string
  name: string
  desc: string
  chips: string[]
}

export interface Education {
  degree: string
  school: string
}

export interface Node2D {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  pulse: number
  type: 'aws' | 'hot' | 'normal'
}
