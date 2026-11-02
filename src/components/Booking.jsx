import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiCalendar, FiUsers, FiArrowRight, FiPhone } from 'react-icons/fi'
import { MdDirectionsCar } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const vehicleOptions = [
  'Maruti Swift (5 Seats)',
  'Honda Amaze (5 Seats)',
  'Maruti Ertiga (7 Seats)',
  'Kia Carens (7 Seats)',
  'Toyota Innova Crysta (7 Seats)',
  'Mahindra BE6 Electric (5 Seats)',
  'Force Tempo Traveller (17 Seats)',
  'Tata City Rider (26 Seats)',
]

const serviceOptions = [
  'Outstation Trip',
  'Airport Transfer',
  'Local Rental',
  'Pilgrimage Tour',
  'Wedding / Event',
  'Corporate Travel',
]

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({
    name: '', phone: '', pickup: '', dropoff: '',
    date: '', vehicle: vehicleOptions[4], service: serviceOptions[0], notes: '',
  })

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const buildWAMessage = () => {
    const msg = `Hello Archana Travels 🙏\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Service:* ${form.service}\n` +
      `*Vehicle:* ${form.vehicle}\n` +
      `*Pickup:* ${form.pickup}\n` +
      `*Drop-off:* ${form.dropoff}\n` +
      `*Travel Date:* ${form.date}\n` +
      (form.notes ? `*Notes:* ${form.notes}\n` : '') +
      `\nPlease confirm availability and price. Thank you!`
    return `https://wa.me/919940800569?text=${encodeURIComponent(msg)}`
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.pickup) return
    window.open(buildWAMessage(), '_blank')
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#071A0E] relative overflow-hidden">
      <div className="divider-green absolute top-0 left-0 right-0" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(46,139,87,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-green px-4 py-2 rounded-full mb-6">
              <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">Book a Vehicle</span>
            </div>

            <h2
              className="font-black text-cream mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Plan Your <span className="text-gradient-gold">Journey</span>
            </h2>

            <p className="text-[#B0C9B8] mb-8 text-sm leading-relaxed max-w-md">
              Fill the form and we will send your booking request directly to WhatsApp.
              Keerthiraj sir will confirm within minutes.
            </p>

            {/* Benefits */}
            {[
              'Instant WhatsApp confirmation',
              'No booking fees',
              'Free cancellation (24h advance)',
              'Transparent price quote',
              'All-inclusive pricing',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.4 }}
                className="flex items-center gap-3 mb-3"
              >
                <div className="w-5 h-5 rounded-full border border-[#2E8B57]/50 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#2E8B57]" />
                </div>
                <span className="text-[#B0C9B8] text-sm">{item}</span>
              </motion.div>
            ))}

            {/* Direct contact */}
            <div className="mt-10 glass-green rounded-2xl p-6 space-y-4">
              <div className="text-xs text-yellow-400 tracking-widest uppercase font-bold mb-2">Or Contact Directly</div>
              <a href="tel:+919940800569" className="flex items-center gap-3 text-[#B0C9B8] hover:text-yellow-400 transition-colors text-sm">
                <FiPhone className="text-yellow-500 text-base" /> 99408 00569
              </a>
              <a href="tel:+918807000569" className="flex items-center gap-3 text-[#B0C9B8] hover:text-yellow-400 transition-colors text-sm">
                <FiPhone className="text-yellow-500 text-base" /> 88070 00569
              </a>
              <a
                href="https://wa.me/919940800569"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#B0C9B8] hover:text-yellow-400 transition-colors text-sm"
              >
                <FaWhatsapp className="text-green-400 text-base" /> WhatsApp: 99408 00569
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-dark rounded-3xl p-7 space-y-4">
              <h3 className="text-lg font-bold text-cream mb-2">Booking Details</h3>

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-[#7A9E82] tracking-widest uppercase block mb-1.5">Your Name *</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handle} required
                    placeholder="Full name"
                    className="w-full glass-green rounded-xl px-4 py-3 text-cream placeholder-[#3A6E4A] text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500/40"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#7A9E82] tracking-widest uppercase block mb-1.5">Phone Number *</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handle} required
                    placeholder="10-digit mobile"
                    className="w-full glass-green rounded-xl px-4 py-3 text-cream placeholder-[#3A6E4A] text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500/40"
                  />
                </div>
              </div>

              {/* Pickup / Dropoff */}
              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-sm" />
                <input
                  type="text" name="pickup" value={form.pickup} onChange={handle} required
                  placeholder="Pickup location (e.g. Sholinghur)"
                  className="w-full glass-green rounded-xl pl-10 pr-4 py-3 text-cream placeholder-[#3A6E4A] text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500/40"
                />
              </div>
              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2E8B57] text-sm" />
                <input
                  type="text" name="dropoff" value={form.dropoff} onChange={handle}
                  placeholder="Destination (e.g. Tirupati)"
                  className="w-full glass-green rounded-xl pl-10 pr-4 py-3 text-cream placeholder-[#3A6E4A] text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500/40"
                />
              </div>

              {/* Date + Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-sm" />
                  <input
                    type="date" name="date" value={form.date} onChange={handle}
                    className="w-full glass-green rounded-xl pl-10 pr-4 py-3 text-cream text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500/40"
                  />
                </div>
                <div className="relative">
                  <MdDirectionsCar className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-base" />
                  <select
                    name="service" value={form.service} onChange={handle}
                    className="w-full glass-green rounded-xl pl-10 pr-4 py-3 text-cream text-sm focus:outline-none appearance-none cursor-pointer"
                  >
                    {serviceOptions.map(s => <option key={s} value={s} className="bg-[#0C2117]">{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Vehicle */}
              <div className="relative">
                <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-sm" />
                <select
                  name="vehicle" value={form.vehicle} onChange={handle}
                  className="w-full glass-green rounded-xl pl-10 pr-4 py-3 text-cream text-sm focus:outline-none appearance-none cursor-pointer"
                >
                  {vehicleOptions.map(v => <option key={v} value={v} className="bg-[#0C2117]">{v}</option>)}
                </select>
              </div>

              {/* Notes */}
              <textarea
                name="notes" value={form.notes} onChange={handle} rows={3}
                placeholder="Any special requirements? (e.g. early morning pickup, child seat needed...)"
                className="w-full glass-green rounded-xl px-4 py-3 text-cream placeholder-[#3A6E4A] text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500/40 resize-none"
              />

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full btn-whatsapp flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-bold tracking-wider"
              >
                <FaWhatsapp className="text-xl" />
                SEND BOOKING ON WHATSAPP
                <FiArrowRight />
              </motion.button>

              <p className="text-center text-[#3A6E4A] text-[11px]">
                This opens WhatsApp with your details pre-filled · No payment required
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
