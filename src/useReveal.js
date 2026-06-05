import { useEffect } from 'react'

// Adds the `in` class to .reveal / .step elements as they scroll into view.
export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal, .step').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
