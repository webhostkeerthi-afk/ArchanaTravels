import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { MdSpeed, MdPeople, MdStar, MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { TbManualGearbox, TbEngine } from 'react-icons/tb'

const cars = [
  {
    name: 'Rolls-Royce Phantom',
    category: 'Ultra Luxury',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80',
    price: '$850',
    speed: '250 km/h',
    seats: 4,
    engine: '6.75L V12',
    gear: 'Auto',
    rating: 5.0,
    badge: 'BESTSELLER',
    badgeColor: 'bg-yellow-500',
  },
  {
    name: 'Lamborghini Huracán',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    price: '$1,200',
    speed: '325 km/h',
    seats: 2,
    engine: '5.2L V10',
    gear: 'Auto',
    rating: 4.9,
    badge: 'HOT',
    badgeColor: 'bg-red-500',
  },
  {
    name: 'Mercedes S-Class',
    category: 'Executive',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    price: '$450',
    speed: '250 km/h',
    seats: 5,
    engine: '3.0L I6',
    gear: 'Auto',
    rating: 4.8,
    badge: 'NEW',
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'Bentley Continental GT',
    category: 'Grand Tourer',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=800&q=80',
    price: '$950',
    speed: '335 km/h',
    seats: 4,
    engine: '6.0L W12',
    gear: 'Auto',
    rating: 4.9,
    badge: 'PREMIUM',
    badgeColor: 'bg-purple-500',
  },
  {
    name: 'Ferrari Roma',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
    price: '$1,400',
    speed: '320 km/h',
    seats: 2,
    engine: '3.9L V8',
    gear: 'Auto',
    rating: 5.0,
    badge: 'EXCLUSIVE',
    badgeColor: 'bg-red-600',
  },
  {
    name: 'Porsche Taycan',
    category: 'Electric',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
    price: '$600',
    speed: '260 km/h',
    seats: 4,
    engine: 'Dual Motor EV',
    gear: 'Auto',
    rating: 4.9,
    badge: 'ECO',
    badgeColor: 'bg-green-500',
  },
]

const categories = ['All', 'Ultra Luxury', 'Sports', 'Executive', 'Grand Tourer', 'Electric']

function CarCard({ car, index }) {
  const [liked, setLiked] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card-shine glass rounded-2xl overflow-hidden group cursor-pointer"
      style={{ border: hovered ? '1px solid rgba(201,162,39,0.4)' : '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Badge */}
        <div className={`absolute top-4 left-4 ${car.badgeColor} px-3 py-1 rounded-full text-xs font-bold text-white tracking-widest`}>
          {car.badge}
        </div>

        {/* Like button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-9 h-9 glass rounded-full flex items-center justify-center transition-transform hover:scale-110"
        >
          {liked
            ? <MdFavorite className="text-red-400 text-lg" />
            : <MdFavoriteBorder className="text-white text-lg" />
          }
        </button>

        {/* Category */}
        <div className="absolute bottom-4 left-4 text-xs text-yellow-400 font-medium tracking-widest uppercase">
          {car.category}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-white text-lg leading-tight">{car.name}</h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <MdStar className="text-sm" />
            <span className="text-sm font-bold text-white">{car.rating}</span>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { icon: MdSpeed, label: car.speed },
            { icon: MdPeople, label: `${car.seats} Seats` },
            { icon: TbEngine, label: car.engine },
            { icon: TbManualGearbox, label: car.gear },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-gray-400 text-xs">
              <Icon className="text-yellow-500 text-sm flex-shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-black text-gradient-gold">{car.price}</span>
            <span className="text-gray-500 text-xs ml-1">/day</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black tracking-wider"
          >
            BOOK
            <FiArrowRight />
          </motion.button>
        </div>
      </div>

      {/* Hover glow line */}
      <motion.div
        className="h-0.5 w-full"
        animate={{ background: hovered ? 'linear-gradient(90deg, transparent, #c9a227, transparent)' : 'transparent' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function Fleet() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const filtered = active === 'All' ? cars : cars.filter(c => c.category === active)

  return (
    <section id="fleet" ref={ref} className="py-28 bg-[#0d0d0d] relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-5"
          >
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-medium">Our Premium Fleet</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-4"
          >
            Choose Your <span className="text-gradient-gold">Dream</span> Ride
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto"
          >
            From hyper-exotic supercars to ultra-luxury sedans, every vehicle in our fleet
            delivers an unmatched driving experience.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                active === cat
                  ? 'btn-gold text-black'
                  : 'glass text-gray-400 hover:text-yellow-400 hover:border-yellow-400/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car, i) => (
            <CarCard key={car.name} car={car} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline-gold px-10 py-4 rounded-full text-sm font-bold text-white tracking-widest"
          >
            VIEW ENTIRE FLEET
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
