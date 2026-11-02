import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight, FiClock, FiMapPin } from 'react-icons/fi'
import { MdSunny } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const destinations = [
  {
    name: 'Ooty',
    state: 'Tamil Nadu',
    image: '/destinations/ooty.jpg',
    fallback: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    gradient: 'linear-gradient(135deg, #1a4a2e 0%, #2d7a4a 50%, #1B5E35 100%)',
    km: '~280 km',
    duration: '5–6 hrs',
    season: 'Oct – Mar',
    highlight: 'Nilgiri Hills · Tea Gardens · Botanical Garden',
    price: 'From ₹4,500',
    size: 'large',
  },
  {
    name: 'Munnar',
    state: 'Kerala',
    image: '/destinations/munnar.jpg',
    fallback: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    gradient: 'linear-gradient(135deg, #0d3320 0%, #1a6640 50%, #145228 100%)',
    km: '~350 km',
    duration: '7–8 hrs',
    season: 'Sep – Feb',
    highlight: 'Tea Estates · Waterfalls · Eravikulam',
    price: 'From ₹5,500',
    size: 'small',
  },
  {
    name: 'Kodaikanal',
    state: 'Tamil Nadu',
    image: '/destinations/kodaikanal.jpg',
    fallback: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    gradient: 'linear-gradient(135deg, #1a3a2a 0%, #2E8B57 50%, #1a5c38 100%)',
    km: '~240 km',
    duration: '5 hrs',
    season: 'Apr – Jun',
    highlight: 'Kodai Lake · Coaker\'s Walk · Silver Cascade',
    price: 'From ₹4,000',
    size: 'small',
  },
  {
    name: 'Pondicherry',
    state: 'Puducherry',
    image: '/destinations/pondicherry.jpg',
    fallback: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800&q=80',
    gradient: 'linear-gradient(135deg, #1a2a4a 0%, #2a4a8a 50%, #1a3060 100%)',
    km: '~180 km',
    duration: '3.5 hrs',
    season: 'Oct – Mar',
    highlight: 'French Quarter · Promenade · Auroville',
    price: 'From ₹3,200',
    size: 'medium',
  },
  {
    name: 'Tirupati',
    state: 'Andhra Pradesh',
    image: '/destinations/tirupati.jpg',
    fallback: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    gradient: 'linear-gradient(135deg, #4a2a0a 0%, #8a5a1a 50%, #C9A227 100%)',
    km: '~190 km',
    duration: '4 hrs',
    season: 'Year Round',
    highlight: 'Tirumala Temple · Padmavati · Sri Kapileswara',
    price: 'From ₹3,500',
    size: 'medium',
  },
  {
    name: 'Goa',
    state: 'Goa',
    image: '/destinations/goa.jpg',
    fallback: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    gradient: 'linear-gradient(135deg, #0a2a4a 0%, #1a5a8a 50%, #0d3d6e 100%)',
    km: '~820 km',
    duration: '14–15 hrs',
    season: 'Nov – Feb',
    highlight: 'Beaches · Old Goa · Spice Farms',
    price: 'From ₹12,000',
    size: 'small',
  },
  {
    name: 'Rameswaram',
    state: 'Tamil Nadu',
    image: '/destinations/rameswaram.jpg',
    fallback: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    gradient: 'linear-gradient(135deg, #1a3a4a 0%, #2a6a7a 50%, #1a4a5a 100%)',
    km: '~300 km',
    duration: '6 hrs',
    season: 'Oct – Apr',
    highlight: 'Ramanathaswamy Temple · Pamban Bridge · Dhanushkodi',
    price: 'From ₹5,000',
    size: 'small',
  },
]

function DestCard({ dest, index }) {
  const [hovered, setHovered] = useState(false)
  const [imgSrc, setImgSrc] = useState(dest.fallback)
  const [imgFailed, setImgFailed] = useState(false)

  const handleError = () => {
    if (imgSrc === dest.image) {
      setImgSrc(dest.fallback)
    } else {
      setImgFailed(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ height: dest.size === 'large' ? '480px' : dest.size === 'medium' ? '340px' : '230px' }}
    >
      {/* Image or gradient fallback */}
      {!imgFailed ? (
        <motion.img
          src={imgSrc}
          alt={dest.name}
          className="w-full h-full object-cover"
          onError={handleError}
          animate={{ scale: hovered ? 1.09 : 1 }}
          transition={{ duration: 0.7 }}
        />
      ) : (
        <motion.div
          className="w-full h-full"
          style={{ background: dest.gradient }}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.7 }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#071A0E]/95 via-[#071A0E]/20 to-transparent" />

      {/* Destination name watermark when gradient shown */}
      {imgFailed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/10 font-black text-6xl tracking-widest uppercase">
            {dest.name}
          </span>
        </div>
      )}

      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <motion.div animate={{ y: hovered ? -8 : 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-1.5 mb-1.5">
            <FiMapPin className="text-yellow-400 text-xs" />
            <span className="text-[10px] text-[#7A9E82] tracking-widest uppercase font-semibold">{dest.state}</span>
          </div>
          <h3 className="text-xl font-black text-cream mb-1">{dest.name}</h3>
          <p className="text-[10px] text-yellow-400 font-medium mb-3 leading-relaxed">{dest.highlight}</p>

          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
            transition={{ duration: 0.35 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex items-center gap-1 text-[10px] text-[#B0C9B8]">
                  <FiClock className="text-yellow-400" /> {dest.duration}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#B0C9B8]">
                  <FiMapPin className="text-yellow-400" /> {dest.km}
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-[#B0C9B8]">
                <MdSunny className="text-yellow-400" /> {dest.season}
              </div>
            </div>
            <div className="flex items-center justify-end pt-1">
              <a
                href={`https://wa.me/919940800569?text=Hello%20Archana%20Travels%2C%20I%20want%20to%20book%20a%20trip%20to%20${encodeURIComponent(dest.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center gap-1.5 px-3 py-2 rounded-xl text-[10px] font-bold"
              >
                <FaWhatsapp /> BOOK
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Destinations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="destinations" ref={ref} className="py-24 bg-[#0C2117] relative overflow-hidden">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass-green px-4 py-2 rounded-full mb-5"
          >
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">Popular Routes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-black text-cream mb-3"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Where Would You <span className="text-gradient-gold">Like to Go?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#7A9E82] max-w-lg mx-auto text-sm"
          >
            Popular destinations from Sholinghur — comfortable vehicles,
            experienced drivers, transparent pricing. Hover to see details.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large — Ooty */}
          <div className="md:row-span-2">
            <DestCard dest={destinations[0]} index={0} />
          </div>
          {/* Row 1 */}
          <DestCard dest={destinations[1]} index={1} />
          <DestCard dest={destinations[2]} index={2} />
          {/* Row 2 */}
          <DestCard dest={destinations[3]} index={3} />
          <DestCard dest={destinations[4]} index={4} />
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <DestCard dest={destinations[5]} index={5} />
          <DestCard dest={destinations[6]} index={6} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://wa.me/919940800569?text=Hello%20Archana%20Travels%2C%20I%20need%20help%20planning%20a%20trip."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn-outline-gold inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold tracking-widest"
          >
            PLAN A CUSTOM DESTINATION <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
