import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MdStar, MdFormatQuote } from 'react-icons/md'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const reviews = [
  {
    name: 'Rajesh Kumar',
    place: 'Sholinghur',
    trip: 'Tirupati Pilgrimage',
    text: 'Excellent service! Driver was very punctual and drove carefully. The Innova Crysta was spotlessly clean. Keerthiraj sir is very responsive on WhatsApp. Will definitely book again for our next pilgrimage.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    vehicle: 'Toyota Innova Crysta',
  },
  {
    name: 'Priya Subramaniam',
    place: 'Ranipet',
    trip: 'Ooty Family Trip',
    text: 'Booked Ertiga for our family trip to Ooty. The driver was knowledgeable about the hill routes and was patient with our children. Pricing was exactly as quoted — no hidden charges. Very happy!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    vehicle: 'Maruti Ertiga',
  },
  {
    name: 'Suresh Annamalai',
    place: 'Vellore',
    trip: 'Chennai Airport Drop',
    text: 'Used Archana Travels for airport drop at early morning 3 AM. Driver arrived 10 minutes early, comfortable ride, AC working well. Highly professional service. Recommended to all my colleagues.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    vehicle: 'Honda Amaze',
  },
  {
    name: 'Meenakshi Devi',
    place: 'Sholinghur',
    trip: 'Wedding Vehicle',
    text: 'We hired 3 Innova Crystas for our daughter\'s wedding. All vehicles were beautifully decorated, drivers wore formal dress and were very respectful. It added great elegance to our wedding. Thank you Keerthiraj sir!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
    vehicle: 'Toyota Innova Crysta (x3)',
  },
  {
    name: 'Karthik Ramesh',
    place: 'Arakkonam',
    trip: 'Corporate Monthly',
    text: 'Our company has a monthly contract with Archana Travels for employee pickups. Very reliable, never missed a single day. Driver is courteous and the vehicle is always clean. Best corporate travel service in Ranipet.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    vehicle: 'Maruti Swift',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const prev = () => { setDir(-1); setCurrent(p => (p - 1 + reviews.length) % reviews.length) }
  const next = () => { setDir(1);  setCurrent(p => (p + 1) % reviews.length) }

  const r = reviews[current]

  return (
    <section className="py-24 bg-[#0C2117] relative overflow-hidden" ref={ref}>
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass-green px-4 py-2 rounded-full mb-5"
          >
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">Customer Reviews</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-black text-cream"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            What Our <span className="text-gradient-gold">Passengers Say</span>
          </motion.h2>
        </div>

        {/* Main review card */}
        <div className="max-w-3xl mx-auto relative min-h-72">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.45 }}
              className="glass-gold rounded-3xl p-8 md:p-10"
            >
              <MdFormatQuote className="text-yellow-500/40 text-6xl mb-4" />

              <p className="text-[#C8DFD0] text-base md:text-lg leading-relaxed italic mb-7">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-500/40"
                  />
                  <div>
                    <div className="font-bold text-cream">{r.name}</div>
                    <div className="text-xs text-[#7A9E82]">{r.place} · {r.trip}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex gap-0.5 justify-end mb-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <MdStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <div className="text-[10px] text-yellow-500/70 font-semibold">{r.vehicle}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <button
            onClick={prev}
            className="w-11 h-11 glass-green rounded-full flex items-center justify-center text-cream hover:text-yellow-400 transition-colors"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-2 bg-yellow-400' : 'w-2 h-2 bg-[#2E8B57]/50 hover:bg-[#2E8B57]'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-11 h-11 glass-green rounded-full flex items-center justify-center text-cream hover:text-yellow-400 transition-colors"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

        {/* Note */}
        <p className="text-center text-[#3A6E4A] text-xs mt-6">
          ★ Sample reviews representative of typical customer feedback · Based in Sholinghur, Ranipet
        </p>
      </div>
    </section>
  )
}
