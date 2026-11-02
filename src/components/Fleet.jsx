import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { MdPeople, MdStar, MdAcUnit } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const WA_BASE = 'https://wa.me/919940800569?text=Hello%20Archana%20Travels%2C%20I%20want%20to%20book%20a%20'

const vehicles = [
  {
    name: 'Toyota Innova Crysta',
    category: 'Premium MPV',
    image: '/cars/innova-crysta.jpg',
    fallback: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    seats: 7,
    ac: true,
    rating: 4.9,
    badge: 'BESTSELLER',
    badgeColor: '#C9A227',
    badgeTxt: '#071A0E',
    desc: 'Most preferred for family outstation trips. Spacious, powerful and supremely comfortable.',
    tags: ['Outstation', 'Airport', 'Pilgrimage'],
  },
  {
    name: 'Kia Carens',
    category: 'Premium MPV',
    image: '/cars/kia-carens.jpg',
    fallback: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    seats: 7,
    ac: true,
    rating: 4.8,
    badge: 'NEW',
    badgeColor: '#2E8B57',
    badgeTxt: '#fff',
    desc: 'Modern premium MPV with panoramic sunroof and advanced safety features.',
    tags: ['Outstation', 'Corporate', 'Airport'],
  },
  {
    name: 'Maruti Ertiga',
    category: 'Family MPV',
    image: '/cars/maruti-ertiga.jpg',
    fallback: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    seats: 7,
    ac: true,
    rating: 4.7,
    badge: 'POPULAR',
    badgeColor: '#1B5E35',
    badgeTxt: '#fff',
    desc: 'Fuel-efficient family car, perfect for city rides and short outstation trips.',
    tags: ['Local', 'Outstation', 'Wedding'],
  },
  {
    name: 'Mahindra XEV 6e',
    category: 'Electric SUV',
    image: '/cars/mahindra-be6.jpg',
    fallback: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    seats: 5,
    ac: true,
    rating: 4.9,
    badge: 'ECO',
    badgeColor: '#25D366',
    badgeTxt: '#071A0E',
    desc: 'Bold all-electric SUV with futuristic design. Zero emission, ultra-smooth and tech-packed.',
    tags: ['Airport', 'Corporate', 'Local'],
  },
  {
    name: 'Honda Amaze',
    category: 'Compact Sedan',
    image: '/cars/honda-amaze.webp',
    fallback: 'https://images.unsplash.com/photo-1617531653332-bd46c16f4d68?w=800&q=80',
    seats: 5,
    ac: true,
    rating: 4.6,
    badge: 'ECONOMY',
    badgeColor: '#4A90D9',
    badgeTxt: '#fff',
    desc: 'Smart, stylish compact sedan for daily commutes and airport transfers.',
    tags: ['Airport', 'Local', 'Outstation'],
  },
  {
    name: 'Maruti Swift',
    category: 'Hatchback',
    image: '/cars/maruti-swift.jpg',
    fallback: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
    seats: 5,
    ac: true,
    rating: 4.5,
    badge: 'VALUE',
    badgeColor: '#E67E22',
    badgeTxt: '#fff',
    desc: 'Nimble city car, best for local runs and short trips with great fuel economy.',
    tags: ['Local', 'City Rides'],
  },
  {
    name: 'Force Tempo Traveller',
    category: 'Mini Bus',
    image: '/cars/tempo-traveller.jpg',
    fallback: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
    seats: 12,
    ac: true,
    rating: 4.8,
    badge: 'GROUP',
    badgeColor: '#8B4513',
    badgeTxt: '#fff',
    desc: '12-seater AC Tempo Traveller, ideal for group tours, corporate trips and pilgrimages.',
    tags: ['Group Tours', 'Pilgrimage', 'Corporate'],
  },
  {
    name: 'Tata City Rider',
    category: 'Maxi Cab',
    image: '/cars/tata-city-rider.png',
    fallback: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    seats: 16,
    ac: true,
    rating: 4.7,
    badge: 'LARGE GROUP',
    badgeColor: '#6B2E8B',
    badgeTxt: '#fff',
    desc: '16-seater maxi cab, perfect for large family groups, school trips and events.',
    tags: ['Large Group', 'Events', 'School'],
  },
]

const categories = ['All', 'Premium MPV', 'Family MPV', 'Electric SUV', 'Compact Sedan', 'Hatchback', 'Mini Bus', 'Maxi Cab']

function VehicleCard({ v, index }) {
  const [hovered, setHovered] = useState(false)
  const [imgSrc, setImgSrc] = useState(v.image)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card-shine rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: 'rgba(12, 33, 23, 0.85)',
        border: hovered ? '1px solid rgba(201,162,39,0.45)' : '1px solid rgba(46,139,87,0.15)',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={imgSrc}
          alt={v.name}
          className="w-full h-full object-cover"
          onError={() => setImgSrc(v.fallback)}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A0E]/80 via-transparent to-transparent" />

        {/* Badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black tracking-widest"
          style={{ background: v.badgeColor, color: v.badgeTxt }}
        >
          {v.badge}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 glass-dark flex items-center gap-1 px-2.5 py-1 rounded-full">
          <MdStar className="text-yellow-400 text-xs" />
          <span className="text-xs font-bold text-cream">{v.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-[10px] text-[#7A9E82] tracking-widest uppercase font-semibold mb-1">{v.category}</div>
        <h3 className="font-black text-cream text-base mb-2 leading-tight">{v.name}</h3>
        <p className="text-[#7A9E82] text-xs leading-relaxed mb-4">{v.desc}</p>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-[#B0C9B8]">
            <MdPeople className="text-yellow-500" />
            {v.seats} Seats
          </div>
          {v.ac && (
            <div className="flex items-center gap-1.5 text-xs text-[#B0C9B8]">
              <MdAcUnit className="text-blue-400" />
              AC
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {v.tags.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#1B5E35]/40 text-[#5DBB8A] border border-[#2E8B57]/20">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end">
          <motion.a
            href={`${WA_BASE}${encodeURIComponent(v.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-whatsapp flex items-center gap-2 px-4 py-2.5 rounded-full text-xs tracking-wider"
          >
            <FaWhatsapp />
            BOOK
          </motion.a>
        </div>
      </div>

      {/* Bottom glow line */}
      <motion.div
        className="h-0.5 w-full"
        animate={{ background: hovered ? 'linear-gradient(90deg,transparent,#C9A227,transparent)' : 'transparent' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function Fleet() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'All' ? vehicles : vehicles.filter(v => v.category === active)

  return (
    <section id="fleet" ref={ref} className="py-24 bg-[#071A0E] relative">
      <div className="divider-green absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass-green px-4 py-2 rounded-full mb-5"
          >
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">Our Fleet</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-black text-cream mb-3"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Choose Your <span className="text-gradient-gold">Perfect Ride</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#7A9E82] max-w-lg mx-auto text-sm"
          >
            From compact hatchbacks to 16-seater maxi cabs — clean, well-maintained vehicles
            with experienced drivers for every journey type.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                active === cat
                  ? 'btn-gold'
                  : 'glass-green text-[#B0C9B8] hover:text-yellow-400 hover:border-yellow-400/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((v, i) => (
              <VehicleCard key={v.name} v={v} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://wa.me/919940800569?text=Hello%20Archana%20Travels%2C%20I%20want%20to%20enquire%20about%20your%20full%20fleet."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn-outline-gold inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold tracking-widest"
          >
            ENQUIRE ABOUT FULL FLEET <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
