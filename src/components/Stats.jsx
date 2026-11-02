import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 51,   suffix: '+',  label: 'Years in Service',  sub: 'Est. 1975' },
  { value: 500,  suffix: '+',  label: 'Monthly Trips',     sub: 'Across India' },
  { value: 8,    suffix: '',   label: 'Vehicle Types',     sub: 'For Every Need' },
  { value: 5000, suffix: '+',  label: 'Happy Families',    sub: 'Since 2010' },
  { value: 98,   suffix: '%',  label: 'On-Time Rate',      sub: 'Punctuality First' },
  { value: 24,   suffix: '/7', label: 'Support Available', sub: 'Always Reachable' },
]

const routes = [
  'Sholinghur', 'Chennai', 'Bangalore', 'Ooty', 'Munnar', 'Tirupati', 'Pondicherry', 'Kodaikanal',
  'Rameswaram', 'Madurai', 'Coimbatore', 'Vellore', 'Kanchipuram', 'Goa', 'Shirdi', 'Hyderabad',
  'Sholinghur', 'Chennai', 'Bangalore', 'Ooty', 'Munnar', 'Tirupati', 'Pondicherry', 'Kodaikanal',
  'Rameswaram', 'Madurai', 'Coimbatore', 'Vellore', 'Kanchipuram', 'Goa', 'Shirdi', 'Hyderabad',
]

function Counter({ value, suffix, inView }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.max(1, Math.floor(value / 60))
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, value])
  return <>{count.toLocaleString('en-IN')}{suffix}</>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 bg-[#0C2117] relative overflow-hidden" ref={ref}>
      <div className="divider-green absolute top-0 left-0 right-0" />
      <div className="divider-green absolute bottom-0 left-0 right-0" />

      {/* Radial bg glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(46,139,87,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-5">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-gold rounded-2xl p-5 text-center cursor-default"
            >
              <div className="text-2xl font-black text-gradient-gold mb-1">
                <Counter value={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <div className="text-cream font-bold text-xs mb-0.5">{s.label}</div>
              <div className="text-[#7A9E82] text-[10px] tracking-wider">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Destinations marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10"
            style={{ background: 'linear-gradient(90deg, #0C2117, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10"
            style={{ background: 'linear-gradient(-90deg, #0C2117, transparent)' }} />

          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {routes.map((r, i) => (
              <div key={i} className="flex items-center gap-8 flex-shrink-0">
                <span className="text-[#3A6E4A] text-xs font-bold tracking-widest uppercase hover:text-yellow-400 transition-colors cursor-default">
                  {r}
                </span>
                <span className="w-1 h-1 rounded-full bg-yellow-500/40 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
