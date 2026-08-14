import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import WhyUs from "./sections/WhyUs"
import Portfolio from "./sections/Portfolio"
import Process from "./sections/Process"
import Pricing from "./sections/Pricing"
import Testimonials from "./sections/Testimonials"
import FAQ from "./sections/FAQ"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050B1C] text-white">

      {/* Global background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        {/* Top blue glow */}
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        {/* Left glow */}
        <div className="absolute left-[-250px] top-[500px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        {/* Right cyan glow */}
        <div className="absolute right-[-250px] top-[1100px] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />

        {/* Bottom blue glow */}
        <div className="absolute left-[30%] top-[2500px] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" />

      </div>

      <Navbar />

      <main>
        <Hero />

        <Services />

        <WhyUs />

        <Portfolio />

        <Process />

        <Pricing />

        <Testimonials />

        <FAQ />

        <Contact />
      </main>

      <Footer />

    </div>
  )
}

export default App