import { useEffect, useRef } from 'react'

// Slow technical grid drift behind the sectors section.
export default function GridCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w, h, t = 0, raf
    const size = () => {
      const p = c.parentElement
      w = c.width = p.offsetWidth * dpr
      h = c.height = p.offsetHeight * dpr
      c.style.width = p.offsetWidth + 'px'
      c.style.height = p.offsetHeight + 'px'
    }
    size()
    window.addEventListener('resize', size)
    const draw = () => {
      x.clearRect(0, 0, w, h)
      const gap = 46 * dpr, off = (t * 8) % gap
      x.lineWidth = 1 * dpr
      for (let gx = -gap + off; gx < w + gap; gx += gap) {
        x.strokeStyle = 'rgba(95,130,165,.07)'
        x.beginPath(); x.moveTo(gx, 0); x.lineTo(gx, h); x.stroke()
      }
      for (let gy = -gap + off; gy < h + gap; gy += gap) {
        x.strokeStyle = 'rgba(95,130,165,.07)'
        x.beginPath(); x.moveTo(0, gy); x.lineTo(w, gy); x.stroke()
      }
      const nx = w * 0.5 + Math.sin(t * 0.4) * w * 0.3
      const ny = h * 0.5 + Math.cos(t * 0.3) * h * 0.3
      const r = (Math.sin(t * 1.5) * 0.5 + 0.5) * 40 * dpr + 10 * dpr
      const g = x.createRadialGradient(nx, ny, 0, nx, ny, r * 3)
      g.addColorStop(0, 'rgba(255,122,26,.18)')
      g.addColorStop(1, 'rgba(255,122,26,0)')
      x.fillStyle = g
      x.beginPath(); x.arc(nx, ny, r * 3, 0, 7); x.fill()
      t += 0.006
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
    }
  }, [])
  return <canvas id="grid-bg" ref={ref} />
}
