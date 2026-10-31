import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdDirectionsCar } from 'react-icons/md'

const links = ['Home', 'Fleet', 'Services', 'Destinations', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-gold py-3 shadow-2xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <MdDirectionsCar className="text-3xl text-yellow-500" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ boxShadow: ['0 0 0px rgba(201,162,39,0)', '0 0 15px rgba(201,162,39,0.6)', '0 0 0px rgba(201,162,39,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-wider">LUXE</span>
              <span className="text-xl font-bold text-gradient-gold tracking-wider">DRIVE</span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-400 underline-gold text-sm font-medium tracking-widest uppercase transition-colors duration-300"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block btn-gold px-6 py-2.5 rounded-full text-sm font-bold text-black tracking-wider"
          >
            BOOK NOW
          </motion.button>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 glass-gold flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-yellow-400 tracking-widest uppercase transition-colors"
              >
                {link}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="btn-gold px-8 py-3 rounded-full font-bold text-black tracking-wider mt-4"
            >
              BOOK NOW
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
