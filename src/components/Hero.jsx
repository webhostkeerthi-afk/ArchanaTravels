import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { MdVerified, MdStar, MdRoute } from 'react-icons/md'

const WA_LINK = 'https://wa.me/919940800569?text=Hello%20Archana%20Travels%2C%20I%20would%20like%20to%20book%20a%20vehicle.'

const highlights = [
  { icon: MdVerified, value: '15+', label: 'Years Trusted' },
  { icon: MdStar,     value: '4.9★', label: 'Customer Rating' },
  { icon: MdRoute,    value: '500+', label: 'Trips Monthly' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=90"
          alt="Scenic road through lush green hills"
          className="w-full h-full object-cover scale-110"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-[#071A0E]/30" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none z-10"
          style={{
            width: Math.random() * 5 + 3,
            height: Math.random() * 5 + 3,
            left: `${10 + i * 7}%`,
            top: `${20 + (i % 5) * 15}%`,
            background: i % 2 === 0 ? 'rgba(201,162,39,0.5)' : 'rgba(46,139,87,0.4)',
          }}
          animate={{ y: [-15, 15, -15], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + i * 0.4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 max-w-7xl mx-auto px-5 pt-24 w-full">
        <div className="max-w-2xl">

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-green px-4 py-2 rounded-full mb-6"
          >
            <FiMapPin className="text-yellow-400 text-sm" />
            <span className="text-xs font-semibold text-yellow-300 tracking-widest uppercase">
              Sholinghur, Ranipet · Tamil Nadu
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-black leading-[1.05] mb-5"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
          >
            <span className="block text-cream">Your Trusted</span>
            <span className="block text-gradient-gold">Travel Partner</span>
            <span className="block text-cream text-3xl md:text-4xl font-light mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Across South India
            </span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[#B0C9B8] text-base md:text-lg max-w-lg mb-9 leading-relaxed"
          >
            Outstation trips, airport transfers, pilgrimage tours and wedding vehicles.
            Comfortable, safe and on time. Every single journey.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-whatsapp flex items-center gap-3 px-7 py-4 rounded-full text-sm tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              BOOK ON WHATSAPP
            </motion.a>
            <motion.a
              href="tel:+919940800569"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline-gold flex items-center gap-3 px-7 py-4 rounded-full text-sm tracking-wider"
            >
              <FiPhone className="text-yellow-400" />
              CALL NOW
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-8"
          >
            {highlights.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-11 h-11 glass-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="text-yellow-400 text-lg" />
                </div>
                <div>
                  <div className="text-xl font-black text-cream">{value}</div>
                  <div className="text-[10px] text-[#7A9E82] tracking-widest uppercase">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating info card — right side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="absolute bottom-16 right-6 hidden xl:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-dark rounded-2xl overflow-hidden w-60"
          >
            {/* Car thumbnail */}
            <div className="h-32 overflow-hidden">
              <img
                src="/cars/innova-crysta.jpg"
                alt="Toyota Innova Crysta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-green-300 font-semibold tracking-wider">AVAILABLE NOW</span>
              </div>
              <div className="text-cream font-bold text-sm mb-0.5">Toyota Innova Crysta</div>
              <div className="text-xs text-[#7A9E82] mb-3">7-Seater · AC · Diesel</div>
              <div className="divider-green mb-3" />
              <div className="text-yellow-400 font-black text-lg">₹5,500<span className="text-xs text-[#7A9E82] font-normal">/day</span></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#7A9E82] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-[#2E8B57]/50 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
