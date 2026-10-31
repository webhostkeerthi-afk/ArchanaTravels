import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MdLocationOn, MdCalendarToday, MdPeople, MdDirectionsCar } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'

const carTypes = ['Sedan', 'SUV', 'Sports', 'Supercar', 'Van', 'Limousine']

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ pickup: '', dropoff: '', date: '', returnDate: '', guests: '1', carType: 'Sedan' })

  const handle = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  return (
    <section id="contact" ref={ref} className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <span className="text-xs text-yellow-400 tracking-widest uppercase font-medium">Book Now</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Reserve Your<br /><span className="text-gradient-gold">Luxury Ride</span>
            </h2>

            <p className="text-gray-500 mb-10 leading-relaxed max-w-md">
              Begin your extraordinary journey today. Our team will confirm your booking
              within minutes and ensure every detail is perfect.
            </p>

            {/* Features */}
            {[
              'Instant booking confirmation',
              'Free cancellation up to 24h',
              'Price match guarantee',
              'Dedicated concierge support',
            ].map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.4 }}
                className="flex items-center gap-3 mb-3"
              >
                <div className="w-5 h-5 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                </div>
                <span className="text-gray-400 text-sm">{f}</span>
              </motion.div>
            ))}

            {/* Trust badges */}
            <div className="flex gap-4 mt-10 flex-wrap">
              {['SSL Secured', 'GDPR Compliant', 'ISO Certified'].map(b => (
                <div key={b} className="glass px-4 py-2 rounded-full text-xs text-gray-500 font-medium">
                  {b}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-gold rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Plan Your Journey</h3>

            <div className="space-y-4">
              {/* Pickup */}
              <div className="relative">
                <MdLocationOn className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-lg" />
                <input
                  type="text"
                  name="pickup"
                  placeholder="Pickup Location"
                  value={form.pickup}
                  onChange={handle}
                  className="w-full glass rounded-xl pl-11 pr-4 py-4 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-yellow-500/50 border border-transparent transition-colors"
                />
              </div>

              {/* Dropoff */}
              <div className="relative">
                <MdLocationOn className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500/60 text-lg" />
                <input
                  type="text"
                  name="dropoff"
                  placeholder="Drop-off Location"
                  value={form.dropoff}
                  onChange={handle}
                  className="w-full glass rounded-xl pl-11 pr-4 py-4 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-yellow-500/50 border border-transparent transition-colors"
                />
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <MdCalendarToday className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-sm" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handle}
                    className="w-full glass rounded-xl pl-11 pr-4 py-4 text-white placeholder-gray-600 text-sm focus:outline-none border border-transparent transition-colors"
                  />
                </div>
                <div className="relative">
                  <MdCalendarToday className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500/60 text-sm" />
                  <input
                    type="date"
                    name="returnDate"
                    value={form.returnDate}
                    onChange={handle}
                    className="w-full glass rounded-xl pl-11 pr-4 py-4 text-white placeholder-gray-600 text-sm focus:outline-none border border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Guests + Car type */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <MdPeople className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-lg" />
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handle}
                    className="w-full glass rounded-xl pl-11 pr-4 py-4 text-white text-sm focus:outline-none border border-transparent appearance-none cursor-pointer"
                  >
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="bg-gray-900">{n} Guest{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
                <div className="relative">
                  <MdDirectionsCar className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-lg" />
                  <select
                    name="carType"
                    value={form.carType}
                    onChange={handle}
                    className="w-full glass rounded-xl pl-11 pr-4 py-4 text-white text-sm focus:outline-none border border-transparent appearance-none cursor-pointer"
                  >
                    {carTypes.map(t => <option key={t} value={t} className="bg-gray-900">{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-gold py-4 rounded-xl font-bold text-black tracking-widest text-sm flex items-center justify-center gap-3 mt-2"
              >
                GET INSTANT QUOTE
                <FiArrowRight className="text-lg" />
              </motion.button>
            </div>

            <p className="text-center text-gray-600 text-xs mt-4">
              No payment required · Free cancellation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
