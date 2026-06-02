import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import { BackToTopButton } from './components/BackToTopButton'

function App() {
  return (
    <>
      <BackToTopButton />
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
