import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { MdLocationOn, MdTimer } from 'react-icons/md'

const destinations = [
  {
    name: 'Monaco',
    country: 'France / Monaco',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    duration: '3-7 days',
    highlight: 'French Riviera Coastal Drive',
    price: 'From $2,400',
    size: 'large',
  },
  {
    name: 'Amalfi Coast',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&q=80',
    duration: '5-10 days',
    highlight: 'Cliffside Mediterranean Road',
    price: 'From $1,800',
    size: 'small',
  },
  {
    name: 'Swiss Alps',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    duration: '4-8 days',
    highlight: 'Alpine Mountain Pass',
    price: 'From $2,100',
    size: 'small',
  },
  {
    name: 'Dubai',
    country: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    duration: '3-6 days',
    highlight: 'Desert Luxury Experience',
    price: 'From $1,600',
    size: 'medium',
  },
  {
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    duration: '4-7 days',
    highlight: 'Aegean Coastal Route',
    price: 'From $1,900',
    size: 'medium',
  },
]

function DestCard({ dest, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ height: dest.size === 'large' ? '500px' : dest.size === 'medium' ? '350px' : '240px' }}
    >
      <motion.img
        src={dest.image}
        alt={dest.name}
        className="w-full h-full object-cover"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          animate={{ y: hovered ? -10 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <MdLocationOn className="text-yellow-400 text-sm" />
            <span className="text-gray-400 text-xs tracking-widest uppercase">{dest.country}</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-1">{dest.name}</h3>
          <p className="text-yellow-400 text-xs font-medium mb-3">{dest.highlight}</p>

          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <MdTimer className="text-yellow-500" />
                {dest.duration}
              </div>
              <span className="text-yellow-400 font-bold text-sm">{dest.price}</span>
            </div>
            <button className="w-full btn-gold py-2.5 rounded-xl text-xs font-bold text-black tracking-widest flex items-center justify-center gap-2">
              EXPLORE ROUTE <FiArrowRight />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decoration */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 border border-yellow-500/50 rounded-full"
        animate={{ scale: hovered ? 1.5 : 1, opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}

export default function Destinations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="destinations" ref={ref} className="py-28 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-5"
          >
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-medium">Where We Go</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-4"
          >
            Iconic <span className="text-gradient-gold">Destinations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md mx-auto"
          >
            Drive the world's most breathtaking roads in vehicles worthy of the scenery.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card */}
          <div className="md:row-span-2">
            <DestCard dest={destinations[0]} index={0} />
          </div>
          {/* Small cards */}
          <DestCard dest={destinations[1]} index={1} />
          <DestCard dest={destinations[2]} index={2} />
          {/* Medium cards */}
          <DestCard dest={destinations[3]} index={3} />
          <DestCard dest={destinations[4]} index={4} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline-gold px-10 py-4 rounded-full text-sm font-bold text-white tracking-widest"
          >
            VIEW ALL DESTINATIONS
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
