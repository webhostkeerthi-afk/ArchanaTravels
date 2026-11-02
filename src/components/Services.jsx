import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { MdAirportShuttle, MdDirectionsCar, MdTempleHindu, MdCelebration,
         MdBusinessCenter, MdFamilyRestroom } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  {
    icon: MdDirectionsCar,
    title: 'Outstation Trips',
    desc: 'One-way and round trips to any destination across Tamil Nadu, Andhra Pradesh, Kerala, Karnataka and beyond. Experienced drivers, clean vehicles.',
    features: ['One-way / Round trip', 'Flexible pickup time', 'All India coverage'],
    color: '#C9A227',
    msg: 'Outstation+Trip',
  },
  {
    icon: MdAirportShuttle,
    title: 'Airport Transfers',
    desc: 'Reliable, on-time airport pickups and drops. We track your flight — no extra charges for delays.',
    features: ['Flight tracking', 'Any hour pickup', 'Chennai · BLR · Hyd'],
    color: '#2E8B57',
    msg: 'Airport+Transfer',
  },
  {
    icon: MdTempleHindu,
    title: 'Pilgrimage Tours',
    desc: 'Tirupati, Rameswaram, Shirdi, Vaishno Devi, Sabarimala — comfortable vehicles with experienced drivers who know the routes.',
    features: ['Tirupati package', 'Multi-temple tours', 'Group vehicles'],
    color: '#E67E22',
    msg: 'Pilgrimage+Tour',
  },
  {
    icon: MdCelebration,
    title: 'Wedding & Events',
    desc: 'Decorated vehicles for wedding processions, guest transfers and sangeet nights. Fleet packages available.',
    features: ['Decorated cars', 'Fleet packages', 'Wedding procession'],
    color: '#E91E63',
    msg: 'Wedding+Vehicle',
  },
  {
    icon: MdBusinessCenter,
    title: 'Corporate Travel',
    desc: 'Employee pickups, client transfers and executive travel. Monthly packages with priority fleet and dedicated support.',
    features: ['Monthly contracts', 'Priority vehicles', 'Invoicing support'],
    color: '#4A90D9',
    msg: 'Corporate+Travel',
  },
  {
    icon: MdFamilyRestroom,
    title: 'Local City Rental',
    desc: 'Half-day and full-day city rentals for shopping, hospital visits, sightseeing and errands around Sholinghur, Ranipet and Vellore.',
    features: ['Half day / Full day', 'Hourly available', 'AC vehicles'],
    color: '#9B59B6',
    msg: 'Local+Rental',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="py-24 section-cream relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #071A0E 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-5 relative">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="inline-flex items-center gap-2 bg-[#071A0E]/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="text-xs text-[#1B5E35] tracking-widest uppercase font-bold">How We Serve You</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-black text-[#071A0E]"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Our <span className="text-gradient-green">Travel Services</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#4A6E52] max-w-sm text-sm leading-relaxed md:text-right"
          >
            Every service is backed by well-maintained vehicles, punctual drivers and
            transparent pricing — no hidden charges.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-7 group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-400 relative overflow-hidden"
            >
              {/* Color top bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: s.color }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 + 0.3 }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ background: `${s.color}15` }}
              >
                <s.icon style={{ color: s.color }} className="text-2xl" />
              </motion.div>

              <h3 className="font-black text-[#071A0E] text-lg mb-2 group-hover:text-[#1B5E35] transition-colors">
                {s.title}
              </h3>
              <p className="text-[#4A6E52] text-sm leading-relaxed mb-5">{s.desc}</p>

              <ul className="space-y-1.5 mb-6">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#4A6E52]">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919940800569?text=Hello%20Archana%20Travels%2C%20I%20need%20${s.msg}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all duration-300"
                style={{ color: s.color }}
              >
                <FaWhatsapp />
                BOOK THIS SERVICE
                <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
