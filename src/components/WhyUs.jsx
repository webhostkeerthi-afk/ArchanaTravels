import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MdVerified, MdSupportAgent, MdCleaningServices, MdPriceCheck,
         MdRoute, MdGroups } from 'react-icons/md'

const reasons = [
  {
    icon: MdVerified,
    title: 'Experienced & Licensed Drivers',
    desc: 'All our drivers are police-verified, licensed and trained for long-distance driving. Your safety is our first priority.',
  },
  {
    icon: MdCleaningServices,
    title: 'Clean & Well-Maintained Vehicles',
    desc: 'Every vehicle is thoroughly cleaned, sanitised and serviced before each trip. We take pride in our fleet condition.',
  },
  {
    icon: MdPriceCheck,
    title: 'Transparent Pricing',
    desc: 'No hidden charges, no surprise extras. You get a clear breakdown before you confirm. What we quote is what you pay.',
  },
  {
    icon: MdSupportAgent,
    title: '24/7 Support on WhatsApp',
    desc: 'Reach us anytime on WhatsApp or phone. We respond quickly — before, during and after your journey.',
  },
  {
    icon: MdRoute,
    title: '15+ Years of Route Knowledge',
    desc: 'We know every route, shortcut and rest stop. From mountain roads to temple towns — we\'ve driven it all.',
  },
  {
    icon: MdGroups,
    title: 'Vehicles for Every Group Size',
    desc: 'From solo travellers to groups of 26 — we have the right vehicle. Mix and match for large family/group bookings.',
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 section-cream relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #071A0E 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      <div className="max-w-7xl mx-auto px-5 relative">

        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#071A0E]/10 px-4 py-2 rounded-full mb-4"
          >
            <span className="text-xs text-[#1B5E35] tracking-widest uppercase font-bold">Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-black text-[#071A0E] mb-3"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            The Archana Travels <span className="text-gradient-green">Difference</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#4A6E52] max-w-lg mx-auto text-sm"
          >
            We are not just a cab service. We are your travel partner —
            one the people of Sholinghur and Ranipet have trusted for over 15 years.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#071A0E]/8 flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(7,26,14,0.08)' }}>
                <r.icon className="text-[#1B5E35] text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-[#071A0E] mb-1.5 text-sm">{r.title}</h4>
                <p className="text-[#4A6E52] text-xs leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
