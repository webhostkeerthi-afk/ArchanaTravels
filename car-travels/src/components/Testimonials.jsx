import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MdStar, MdFormatQuote } from 'react-icons/md'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Alexander Wright',
    role: 'CEO, TechVentures Inc.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    text: 'LuxeDrive redefined what I thought luxury travel meant. The Rolls-Royce Phantom awaiting me at Monaco was just the beginning. Every detail was flawless — from the vintage champagne to the hotel drop-off.',
    rating: 5,
    location: 'Monaco Experience',
  },
  {
    name: 'Sophia Laurent',
    role: 'Fashion Director, Paris Vogue',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'I have traveled extensively but nothing compares to the Amalfi Coast drive in a Ferrari Roma arranged by LuxeDrive. The chauffeur was knowledgeable, the itinerary impeccable. Pure magic.',
    rating: 5,
    location: 'Amalfi Coast Drive',
  },
  {
    name: 'James Thornton',
    role: 'Investment Banker, Goldman Sachs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    text: 'Our corporate retreat in the Swiss Alps was elevated by LuxeDrive\'s fleet. Eight Bentleys through mountain passes — the team was blown away. Will absolutely use again for our next executive offsite.',
    rating: 5,
    location: 'Swiss Alps Tour',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, LuxeHotel Group',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    text: 'Dubai has never felt more extraordinary. LuxeDrive had a Lamborghini Urus waiting with chilled towels and custom playlists. The desert sunset drive was one of the most memorable moments of my life.',
    rating: 5,
    location: 'Dubai Desert Drive',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = () => {
    setDirection(1)
    setCurrent(p => (p + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection(-1)
    setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section id="about" ref={ref} className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Bg circle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — decorative */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main image */}
              <div className="absolute inset-10 rounded-2xl overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Rotating ring */}
              <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 border border-yellow-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />

              {/* Stats card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-gold rounded-2xl p-5 w-48"
              >
                <div className="text-3xl font-black text-gradient-gold">98%</div>
                <div className="text-xs text-gray-400 tracking-wider mt-1">Customer Satisfaction</div>
              </motion.div>

              {/* Stars card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -left-4 glass-gold rounded-xl p-4"
              >
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <MdStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <div className="text-xs text-gray-400">10,000+ Reviews</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <span className="text-xs text-yellow-400 tracking-widest uppercase font-medium">Client Stories</span>
            </div>

            <h2 className="text-5xl font-black text-white mb-10">
              What Our <span className="text-gradient-gold">Clients</span> Say
            </h2>

            {/* Quote card */}
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.5 }}
                  className="glass-gold rounded-2xl p-8"
                >
                  <MdFormatQuote className="text-yellow-500 text-5xl opacity-50 mb-4" />

                  <p className="text-gray-300 leading-relaxed text-lg mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-500/50" />
                      <div>
                        <div className="font-bold text-white">{t.name}</div>
                        <div className="text-xs text-gray-500">{t.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-0.5 justify-end mb-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <MdStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                      <div className="text-xs text-yellow-500 font-medium">{t.location}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button onClick={prev} className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-yellow-400 hover:border-yellow-400/30 transition-all duration-300 btn-outline-gold">
                <FiChevronLeft className="text-xl" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-yellow-400' : 'w-2 bg-gray-700 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-yellow-400 hover:border-yellow-400/30 transition-all duration-300 btn-outline-gold">
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
