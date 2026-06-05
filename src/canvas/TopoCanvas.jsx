import { useEffect, useRef } from 'react'

// Animated topographic / geological survey background for the hero.
export default function TopoCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w, h, t = 0, raf
    const size = () => {
      const ph = c.parentElement.offsetHeight
      w = c.width = window.innerWidth * dpr
      h = c.height = ph * dpr
      c.style.width = window.innerWidth + 'px'
      c.style.height = ph + 'px'
    }
    size()
    window.addEventListener('resize', size)
    const LINES = 18
    const draw = () => {
      x.clearRect(0, 0, w, h)
      for (let i = 0; i < LINES; i++) {
        const yBase = (h / (LINES - 1)) * i
        const depth = i / LINES
        x.beginPath()
        for (let px = 0; px <= w; px += 14 * dpr) {
          const n = (px * 0.0016) / dpr
          const y =
            yBase +
            Math.sin(n * 1.6 + t * 0.6 + i * 0.5) * 26 * dpr * (0.4 + depth) +
            Math.sin(n * 0.7 - t * 0.3 + i) * 40 * dpr * depth +
            Math.cos(n * 3.1 + t * 0.2) * 8 * dpr
          px === 0 ? x.moveTo(px, y) : x.lineTo(px, y)
        }
        const isMarker = i === 5 || i === 11 || i === 15
        x.strokeStyle = isMarker
          ? `rgba(255,122,26,${0.32 - depth * 0.12})`
          : `rgba(95,130,165,${0.16 + depth * 0.1})`
        x.lineWidth = (isMarker ? 1.6 : 1) * dpr
        x.stroke()
      }
      for (let i = 0; i < 26; i++) {
        const px = (((i * 137.5) % 100) / 100) * w
        const py = ((((i * 81.7) % 100) / 100) * h + t * 22 * dpr * (0.3 + (i % 3) * 0.2)) % h
        x.beginPath()
        x.arc(px, py, 1.4 * dpr, 0, 7)
        x.fillStyle = `rgba(255,174,94,${0.1 + (i % 4) * 0.05})`
        x.fill()
      }
      const scan = ((t * 0.08) % 1.4) * w - 0.2 * w
      const g = x.createLinearGradient(scan - 60 * dpr, 0, scan + 60 * dpr, 0)
      g.addColorStop(0, 'rgba(255,122,26,0)')
      g.addColorStop(0.5, 'rgba(255,122,26,.10)')
      g.addColorStop(1, 'rgba(255,122,26,0)')
      x.fillStyle = g
      x.fillRect(scan - 60 * dpr, 0, 120 * dpr, h)
      t += 0.006
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
    }
  }, [])
  return <canvas id="topo" ref={ref} />
}
