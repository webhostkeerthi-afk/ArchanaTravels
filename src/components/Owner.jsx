import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiGlobe } from 'react-icons/fi'
import { MdVerified, MdStar } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const highlights = [
  { label: '51+ Years', sub: 'Experience' },
  { label: '5000+',     sub: 'Happy Clients' },
  { label: '8',         sub: 'Vehicle Types' },
  { label: '24/7',      sub: 'Reachable' },
]

export default function Owner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 bg-[#071A0E] relative overflow-hidden">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      {/* Background decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none hidden lg:block"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(201,162,39,0.4) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-yellow-500/20 animate-spin-slow"
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-[#2E8B57]/20 animate-spin-slow"
                style={{ animationDirection: 'reverse' }}
              />

              {/* Photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden ring-4 ring-yellow-500/30">
                <img
                  src="/owner.jpg"
                  alt="K. Keerthiraj — Founder, Archana Travels"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Verified badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-gold flex items-center gap-2 px-4 py-2 rounded-full"
              >
                <MdVerified className="text-yellow-400 text-base" />
                <span className="text-xs text-cream font-bold">Verified Owner</span>
              </motion.div>

              {/* Stars badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
                className="absolute -top-3 right-0 glass-dark px-3 py-2 rounded-xl"
              >
                <div className="flex gap-0.5 justify-center mb-0.5">
                  {[...Array(5)].map((_, i) => <MdStar key={i} className="text-yellow-400 text-xs" />)}
                </div>
                <div className="text-[9px] text-[#7A9E82] text-center">5 Star Rated</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-green px-4 py-2 rounded-full mb-5">
              <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">Meet the Owner</span>
            </div>

            <h2
              className="font-black text-cream mb-1"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              K. Keerthiraj
            </h2>
            <p className="text-gradient-gold font-bold text-lg mb-5 tracking-wide">
              Founder &amp; Director, Archana Travels
            </p>

            <p className="text-[#B0C9B8] leading-relaxed mb-6 text-sm">
              With over 51 years of experience in passenger transport, Keerthiraj built Archana Travels
              from the ground up with one clear vision to give every traveller a safe, comfortable
              and memorable journey. Based in Sholinghur, Ranipet, we have grown to serve thousands of
              families, pilgrims, corporates and wedding parties across South India.
            </p>

            <p className="text-[#B0C9B8] leading-relaxed mb-8 text-sm">
              Every vehicle in our fleet is personally inspected. Every driver is trained, licensed and
              courteous. We believe trust is built one trip at a time, and that&apos;s how we&apos;ve been
              operating since day one.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {highlights.map(h => (
                <div key={h.label} className="glass-gold rounded-xl p-4 text-center">
                  <div className="text-xl font-black text-gradient-gold">{h.label}</div>
                  <div className="text-[10px] text-[#7A9E82] tracking-wider mt-0.5">{h.sub}</div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="space-y-3 mb-7">
              {[
                { icon: FiPhone, text: '99408 00569 / 88070 00569', href: 'tel:+919940800569' },
                { icon: FiMail,  text: 'Keerthiraj@ArchanaTravels.co.in', href: 'mailto:Keerthiraj@ArchanaTravels.co.in' },
                { icon: FiGlobe, text: 'www.ArchanaTravels.co.in', href: 'https://www.ArchanaTravels.co.in' },
                { icon: FiMapPin, text: '1/c/1, Westboardingpet Street, Sholinghur, Ranipet 631102', href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 glass-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="text-yellow-400 text-sm" />
                  </div>
                  {href
                    ? <a href={href} className="text-[#B0C9B8] text-sm hover:text-yellow-400 transition-colors leading-relaxed">{text}</a>
                    : <span className="text-[#B0C9B8] text-sm leading-relaxed">{text}</span>
                  }
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://wa.me/919940800569?text=Hello%20Keerthiraj%20sir%2C%20I%20want%20to%20book%20a%20vehicle%20from%20Archana%20Travels."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-whatsapp flex items-center gap-2 px-6 py-3 rounded-full text-sm tracking-wider"
              >
                <FaWhatsapp className="text-lg" /> WhatsApp Me
              </motion.a>
              <motion.a
                href="tel:+919940800569"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-gold flex items-center gap-2 px-6 py-3 rounded-full text-sm tracking-wider"
              >
                <FiPhone className="text-yellow-400" /> Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
