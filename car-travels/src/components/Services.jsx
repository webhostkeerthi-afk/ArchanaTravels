import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MdAirportShuttle, MdDirectionsCar, MdTour, MdHeadsetMic, MdVerified, MdWifi } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: MdAirportShuttle,
    title: 'Airport Transfers',
    desc: 'Seamless door-to-door transfers with real-time flight tracking and meet & greet service.',
    features: ['Flight tracking', 'Meet & greet', '24/7 available'],
    gradient: 'from-yellow-500/20 to-transparent',
  },
  {
    icon: MdDirectionsCar,
    title: 'Chauffeur Service',
    desc: 'Professional, uniformed chauffeurs trained in defensive driving and hospitality.',
    features: ['Licensed drivers', 'Uniformed staff', 'Multi-language'],
    gradient: 'from-blue-500/20 to-transparent',
  },
  {
    icon: MdTour,
    title: 'Curated Road Trips',
    desc: 'Bespoke road trip itineraries across iconic routes — from Route 66 to the Amalfi Coast.',
    features: ['Custom routes', 'Hotel bookings', 'Local guides'],
    gradient: 'from-purple-500/20 to-transparent',
  },
  {
    icon: MdHeadsetMic,
    title: 'Concierge Support',
    desc: 'Dedicated 24/7 concierge team to handle every detail of your luxury travel experience.',
    features: ['24/7 support', 'Personal agent', 'Instant booking'],
    gradient: 'from-green-500/20 to-transparent',
  },
  {
    icon: MdVerified,
    title: 'Corporate Travel',
    desc: 'Premium corporate packages for executives with flexible billing and dedicated account managers.',
    features: ['Bulk discounts', 'Monthly invoicing', 'Priority fleet'],
    gradient: 'from-red-500/20 to-transparent',
  },
  {
    icon: MdWifi,
    title: 'Connected Experience',
    desc: 'Every vehicle equipped with high-speed WiFi, entertainment systems and premium amenities.',
    features: ['High-speed WiFi', 'Entertainment', 'Mini-bar'],
    gradient: 'from-pink-500/20 to-transparent',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-5"
            >
              <span className="text-xs text-yellow-400 tracking-widest uppercase font-medium">What We Offer</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-white"
            >
              World-Class<br /><span className="text-gradient-gold">Services</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-500 max-w-sm text-right hidden md:block"
          >
            Every service is tailored to exceed your expectations with attention to every detail.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-shine glass rounded-2xl p-7 group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient bg on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 glass-gold rounded-2xl flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-yellow-500/20 transition-shadow duration-300"
                >
                  <s.icon className="text-yellow-400 text-2xl" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="flex items-center gap-2 text-yellow-500 text-xs font-bold tracking-widest uppercase group-hover:gap-3 transition-all duration-300">
                  <span>LEARN MORE</span>
                  <FiArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
