import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Fleet from './components/Fleet'
import Services from './components/Services'
import Destinations from './components/Destinations'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Stats />
      <Fleet />
      <Services />
      <Destinations />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  )
}

export default App
