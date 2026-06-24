import { useEffect, useState, useRef } from 'react'

function Counter({ to, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true
        const duration = 1800
        const start = performance.now()
        const tick = (now) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          // Ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * to))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to])

  return <b ref={ref}>{count}{suffix}</b>
}

export default function Band() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="band-grid">
          <div className="reveal">
            <Counter to={15} suffix="+" />
            <span>Years in operation</span>
          </div>
          <div className="reveal d1">
            <Counter to={80} suffix="+" />
            <span>Projects delivered</span>
          </div>
          <div className="reveal d2">
            <Counter to={12} suffix="" />
            <span>States across India</span>
          </div>
          <div className="reveal d3">
            <Counter to={3} suffix="" />
            <span>Countries (India · Bhutan · Oman)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
