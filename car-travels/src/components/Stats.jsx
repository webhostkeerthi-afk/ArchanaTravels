import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Countries', desc: 'Global Presence' },
  { value: 500, suffix: '+', label: 'Luxury Cars', desc: 'Premium Fleet' },
  { value: 98, suffix: '%', label: 'Satisfaction', desc: 'Client Rating' },
  { value: 24, suffix: '/7', label: 'Support', desc: 'Always Available' },
  { value: 10, suffix: 'K+', label: 'Happy Clients', desc: 'Since 2015' },
  { value: 15, suffix: '+', label: 'Car Brands', desc: 'Top Marques' },
]

const brands = [
  'Rolls-Royce', 'Lamborghini', 'Ferrari', 'Bentley', 'Porsche',
  'Mercedes-Benz', 'Bugatti', 'McLaren', 'Aston Martin', 'Maserati',
  'Rolls-Royce', 'Lamborghini', 'Ferrari', 'Bentley', 'Porsche',
  'Mercedes-Benz', 'Bugatti', 'McLaren', 'Aston Martin', 'Maserati',
]

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const duration = 2000
    const step = duration / end
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-gold rounded-2xl p-6 text-center cursor-default"
            >
              <div className="text-3xl font-black text-gradient-gold mb-1">
                <AnimatedCounter value={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <div className="text-white font-bold text-sm mb-1">{s.label}</div>
              <div className="text-gray-600 text-xs tracking-wider">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Brand marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{ background: 'linear-gradient(90deg, #0d0d0d, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{ background: 'linear-gradient(-90deg, #0d0d0d, transparent)' }} />

          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {brands.map((b, i) => (
              <div key={i} className="flex items-center gap-10 flex-shrink-0">
                <span className="text-gray-700 text-sm font-bold tracking-widest uppercase hover:text-yellow-400 transition-colors cursor-default">
                  {b}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/40 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
