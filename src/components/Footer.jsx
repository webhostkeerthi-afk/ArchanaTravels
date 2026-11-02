import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiGlobe, FiInstagram, FiFacebook } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const WA_LINK = 'https://wa.me/919940800569?text=Hello%20Archana%20Travels%2C%20I%20would%20like%20to%20book%20a%20vehicle.'

const quickLinks = {
  Services: ['Outstation Trips', 'Airport Transfers', 'Pilgrimage Tours', 'Wedding Vehicles', 'Corporate Travel', 'Local Rental'],
  Fleet: ['Toyota Innova Crysta', 'Kia Carens', 'Maruti Ertiga', 'Mahindra BE6', 'Tempo Traveller', 'Tata City Rider'],
  Destinations: ['Ooty', 'Munnar', 'Tirupati', 'Pondicherry', 'Kodaikanal', 'Rameswaram'],
}

export default function Footer() {
  return (
    <footer className="bg-[#040E07] border-t border-[#1B5E35]/20 pt-16 pb-8 relative">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-5">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center text-[#071A0E] font-black text-lg">
                A
              </div>
              <div>
                <div className="text-xl font-black text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Archana <span className="text-gradient-gold">Travels</span>
                </div>
                <div className="text-[10px] text-[#7A9E82] tracking-[0.2em] uppercase">Sholinghur, Ranipet</div>
              </div>
            </div>

            <p className="text-[#4A6E52] text-sm leading-relaxed mb-6 max-w-xs">
              Trusted car travel service from Sholinghur since 1975. Serving families, pilgrims,
              corporates and wedding parties across Tamil Nadu and beyond.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="tel:+919940800569" className="flex items-center gap-3 text-[#4A6E52] hover:text-yellow-400 transition-colors text-sm">
                <FiPhone className="text-yellow-500/70 text-sm flex-shrink-0" />
                99408 00569
              </a>
              <a href="tel:+918807000569" className="flex items-center gap-3 text-[#4A6E52] hover:text-yellow-400 transition-colors text-sm">
                <FiPhone className="text-yellow-500/70 text-sm flex-shrink-0" />
                88070 00569
              </a>
              <a href="mailto:Keerthiraj@ArchanaTravels.co.in" className="flex items-center gap-3 text-[#4A6E52] hover:text-yellow-400 transition-colors text-sm">
                <FiMail className="text-yellow-500/70 text-sm flex-shrink-0" />
                Keerthiraj@ArchanaTravels.co.in
              </a>
              <a href="https://www.ArchanaTravels.co.in" className="flex items-center gap-3 text-[#4A6E52] hover:text-yellow-400 transition-colors text-sm">
                <FiGlobe className="text-yellow-500/70 text-sm flex-shrink-0" />
                www.ArchanaTravels.co.in
              </a>
              <div className="flex items-start gap-3 text-[#4A6E52] text-sm">
                <FiMapPin className="text-yellow-500/70 text-sm flex-shrink-0 mt-0.5" />
                1/c/1, Westboardingpet Street, Sholinghur,<br />Ranipet 631102, Tamil Nadu
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-9 h-9 glass-green rounded-full flex items-center justify-center text-green-400 hover:text-green-300 transition-colors"
              >
                <FaWhatsapp className="text-base" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-9 h-9 glass-green rounded-full flex items-center justify-center text-[#4A6E52] hover:text-yellow-400 transition-colors"
              >
                <FiFacebook className="text-sm" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-9 h-9 glass-green rounded-full flex items-center justify-center text-[#4A6E52] hover:text-yellow-400 transition-colors"
              >
                <FiInstagram className="text-sm" />
              </motion.a>
            </div>
          </div>

          {/* Quick links */}
          {Object.entries(quickLinks).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-cream font-bold text-sm tracking-widest uppercase mb-5">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#4A6E52] text-xs hover:text-yellow-400 hover-underline-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA banner */}
        <div className="glass-green rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center gap-5 justify-between">
          <div>
            <div className="font-bold text-cream text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Travel? Book Now on WhatsApp
            </div>
            <div className="text-[#7A9E82] text-xs">Instant response · No booking fee · Trusted service since 1975</div>
          </div>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-whatsapp flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold tracking-wider whitespace-nowrap flex-shrink-0"
          >
            <FaWhatsapp className="text-lg" />
            BOOK ON WHATSAPP
          </motion.a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1B5E35]/15">
          <p className="text-[#3A6E4A] text-[11px]">
            © 2026 Archana Travels · K. Keerthiraj · Sholinghur, Ranipet 631102 · All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms', 'Sitemap'].map(item => (
              <a key={item} href="#" className="text-[#3A6E4A] text-[11px] hover:text-yellow-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
