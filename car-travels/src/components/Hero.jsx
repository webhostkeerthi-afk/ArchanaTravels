import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { MdStar, MdSpeed, MdVerified } from 'react-icons/md'

const stats = [
  { icon: MdStar, value: '4.9', label: 'Rating' },
  { icon: MdSpeed, value: '500+', label: 'Luxury Cars' },
  { icon: MdVerified, value: '50+', label: 'Countries' },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 4,
}))

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=90"
          alt="Luxury Car"
          className="w-full h-full object-cover scale-110"
        />
        <div className="hero-overlay absolute inset-0" />
      </motion.div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-yellow-400 opacity-30 z-10 pointer-events-none"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Animated circle ring */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <motion.div
          className="animate-spin-slow border border-yellow-500/20 rounded-full"
          style={{ width: 400, height: 400 }}
        />
        <motion.div
          className="absolute inset-8 border border-yellow-500/10 rounded-full animate-spin-slow"
          style={{ animationDirection: 'reverse' }}
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 max-w-7xl mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-medium text-yellow-400 tracking-widest uppercase">
              World&apos;s #1 Luxury Car Travel Experience
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black leading-none mb-6"
          >
            <span className="block text-white">TRAVEL IN</span>
            <span className="block text-gradient-gold">PURE LUXURY</span>
            <span className="block text-white text-4xl md:text-5xl font-light mt-2">
              Across The Globe
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
          >
            Experience the pinnacle of automotive luxury. Premium chauffeur services,
            exotic car rentals, and curated road trip packages across 50+ countries.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold flex items-center gap-3 px-8 py-4 rounded-full font-bold text-black text-sm tracking-wider"
            >
              EXPLORE FLEET
              <FiArrowRight className="text-lg" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline-gold flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-sm tracking-wider"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <FiPlay className="text-yellow-400 text-sm ml-0.5" />
              </div>
              WATCH VIDEO
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-10"
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full glass-gold flex items-center justify-center">
                  <Icon className="text-yellow-400 text-lg" />
                </div>
                <div>
                  <div className="text-xl font-black text-white">{value}</div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-gray-600 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
