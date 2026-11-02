import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Fleet from './components/Fleet'
import Services from './components/Services'
import Destinations from './components/Destinations'
import WhyUs from './components/WhyUs'
import Owner from './components/Owner'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#071A0E]">
      <Navbar />
      <Hero />
      <Stats />
      <Fleet />
      <Services />
      <Destinations />
      <WhyUs />
      <Owner />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  )
}
