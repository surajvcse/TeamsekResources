import { useEffect, useRef } from 'react'

// Animated shaft-sinking cross-section for the "Why" visual.
export default function ShaftCanvas() {
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
      const bands = 7
      for (let i = 0; i < bands; i++) {
        const y0 = h * 0.12 + (h * 0.82 / bands) * i
        x.fillStyle = i % 2 ? 'rgba(95,130,165,.05)' : 'rgba(95,130,165,.09)'
        x.fillRect(0, y0, w, h * 0.82 / bands)
        x.strokeStyle = 'rgba(95,130,165,.14)'
        x.lineWidth = 1 * dpr
        x.beginPath(); x.moveTo(0, y0); x.lineTo(w, y0); x.stroke()
      }
      const cx = w * 0.5, sw = w * 0.13
      x.fillStyle = 'rgba(10,14,19,.9)'
      x.fillRect(cx - sw / 2, h * 0.1, sw, h * 0.84)
      x.strokeStyle = 'rgba(255,122,26,.5)'
      x.lineWidth = 1.5 * dpr
      x.strokeRect(cx - sw / 2, h * 0.1, sw, h * 0.84)
      const dy = h * 0.16 + (Math.sin(t * 0.8) * 0.5 + 0.5) * h * 0.66
      x.fillStyle = '#ff7a1a'
      x.beginPath()
      x.moveTo(cx - sw / 2 + 3 * dpr, dy)
      x.lineTo(cx + sw / 2 - 3 * dpr, dy)
      x.lineTo(cx, dy + 18 * dpr)
      x.closePath(); x.fill()
      for (let i = 0; i < 14; i++) {
        const py = dy - ((t * 40 * dpr + i * 30 * dpr) % (dy - h * 0.12))
        const px = cx + Math.sin(i * 2 + t * 2) * sw * 0.3
        x.fillStyle = `rgba(255,174,94,${0.5 - i / 28})`
        x.beginPath(); x.arc(px, py, 1.6 * dpr, 0, 7); x.fill()
      }
      x.font = `${10 * dpr}px "IBM Plex Mono",monospace`
      x.fillStyle = 'rgba(141,160,179,.6)'
      for (let i = 1; i <= 5; i++) {
        const ty = h * 0.12 + (h * 0.78 / 5) * i
        x.fillText(`-${i * 100}m`, cx + sw / 2 + 10 * dpr, ty)
      }
      t += 0.01
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
    }
  }, [])
  return <canvas id="shaft" ref={ref} />
}
