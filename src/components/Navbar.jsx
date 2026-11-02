import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const WA_LINK = 'https://wa.me/919940800569?text=Hello%20Archana%20Travels%2C%20I%20would%20like%20to%20book%20a%20vehicle.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress */}
      <motion.div className="scroll-bar" style={{ width }} />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark shadow-2xl py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center text-[#071A0E] font-black text-lg">
                A
              </div>
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-yellow-400"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
            <div className="leading-none">
              <div className="text-lg font-black tracking-widest text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>
                Archana
              </div>
              <div className="text-xs font-bold tracking-[0.3em] text-gradient-gold uppercase">
                Travels
              </div>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#C8DFD0] hover:text-yellow-400 hover-underline-gold tracking-wide transition-colors duration-300"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA group */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919940800569"
              className="flex items-center gap-2 text-sm text-[#C8DFD0] hover:text-yellow-400 transition-colors"
            >
              <FiPhone className="text-yellow-500 text-base" />
              <span className="font-semibold">99408 00569</span>
            </a>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-whatsapp flex items-center gap-2 px-5 py-2.5 rounded-full text-sm tracking-wider"
            >
              <FaWhatsapp className="text-lg" />
              BOOK NOW
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-cream text-2xl p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#071A0E] flex flex-col items-center justify-center gap-7 px-8"
          >
            {/* Logo in mobile menu */}
            <div className="text-3xl font-black text-cream mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Archana <span className="text-gradient-gold">Travels</span>
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-cream hover:text-yellow-400 tracking-widest uppercase transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
              <a
                href="tel:+919940800569"
                className="flex items-center justify-center gap-3 btn-outline-gold px-6 py-3 rounded-full text-sm font-bold tracking-wider"
              >
                <FiPhone /> 99408 00569
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-3 px-6 py-3 rounded-full text-sm font-bold tracking-wider"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp button */}
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </motion.a>
    </>
  )
}
