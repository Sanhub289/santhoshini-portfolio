import type { Node2D } from './types'

const NODE_COUNT = 38
const LABELS = ['Lambda', 'S3', 'SQS', 'Kinesis', 'CDK', 'Redis', 'K8s', 'Node', 'TS', 'API', 'SRE']

export function initCanvas(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext('2d')!

  function resize(): void {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const nodes: Node2D[] = Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 2.5 + 1.5,
    pulse: Math.random() * Math.PI * 2,
    type: (Math.random() < 0.15 ? 'aws' : Math.random() < 0.3 ? 'hot' : 'normal') as Node2D['type'],
  }))

  function draw(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // update positions
    nodes.forEach((n) => {
      n.x += n.vx
      n.y += n.vy
      n.pulse += 0.025
      if (n.x < 0 || n.x > canvas.width) n.vx *= -1
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1
    })

    // draw edges
    nodes.forEach((a, i) => {
      nodes.slice(i + 1).forEach((b) => {
        const dx = a.x - b.x
        const dy = a.y - b.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 160) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(79,158,248,${(1 - d / 160) * 0.22})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      })
    })

    // draw nodes
    nodes.forEach((n, i) => {
      const g = (Math.sin(n.pulse) + 1) / 2
      const c = n.type === 'aws' ? '248,113,113' : n.type === 'hot' ? '79,158,248' : '139,158,199'
      const alpha = n.type === 'aws' ? 0.9 : n.type === 'hot' ? 0.8 : 0.45

      // glow
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r + 4 + g * 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${c},${0.04 + g * 0.06})`
      ctx.fill()

      // core
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${c},${alpha})`
      ctx.fill()

      // label
      if (n.type !== 'normal') {
        ctx.font = '9px Inter,sans-serif'
        ctx.fillStyle = `rgba(${c},${0.55 + g * 0.3})`
        ctx.fillText(LABELS[i % LABELS.length], n.x + n.r + 4, n.y + 3)
      }
    })

    requestAnimationFrame(draw)
  }

  draw()
}
