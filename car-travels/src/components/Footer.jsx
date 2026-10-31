import { motion } from 'framer-motion'
import { MdDirectionsCar, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi'

const links = {
  Company: ['About Us', 'Our Story', 'Careers', 'Press', 'Blog'],
  Services: ['Airport Transfer', 'Chauffeur Service', 'Road Trips', 'Corporate', 'Events'],
  Fleet: ['Sedans', 'SUVs', 'Sports Cars', 'Supercars', 'Limousines'],
  Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms', 'Sitemap'],
}

const socials = [
  { icon: FiInstagram, href: '#' },
  { icon: FiFacebook, href: '#' },
  { icon: FiTwitter, href: '#' },
  { icon: FiLinkedin, href: '#' },
  { icon: FiYoutube, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <MdDirectionsCar className="text-3xl text-yellow-500" />
              <div>
                <span className="text-xl font-bold text-white">LUXE</span>
                <span className="text-xl font-bold text-gradient-gold">DRIVE</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The world&apos;s premier luxury car travel company. Delivering extraordinary
              experiences through exceptional vehicles and unmatched service since 2015.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: MdEmail, text: 'hello@luxedrive.com' },
                { icon: MdPhone, text: '+1 (800) LUXE-DRIVE' },
                { icon: MdLocationOn, text: 'Monaco · Dubai · London · NYC' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-600 text-sm hover:text-yellow-400 transition-colors cursor-pointer">
                  <Icon className="text-yellow-500/60 text-base flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href }) => (
                <motion.a
                  key={href + Icon.name}
                  href={href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-gray-500 hover:text-yellow-400 hover:border-yellow-400/30 transition-colors"
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">{section}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 text-sm hover:text-yellow-400 underline-gold transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass-gold rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h4 className="text-white font-bold text-xl mb-1">Stay in the Fast Lane</h4>
            <p className="text-gray-500 text-sm">Exclusive offers, new fleet arrivals, and curated travel inspiration.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 glass rounded-xl px-5 py-3 text-white placeholder-gray-600 text-sm focus:outline-none border border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold px-6 py-3 rounded-xl text-black font-bold text-xs tracking-widest whitespace-nowrap"
            >
              SUBSCRIBE
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-gray-700 text-xs">
            © 2026 LuxeDrive. All rights reserved. The ultimate luxury car travel experience.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#" className="text-gray-700 text-xs hover:text-yellow-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
