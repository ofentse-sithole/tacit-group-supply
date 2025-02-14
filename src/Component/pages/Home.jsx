import '../../App.css'
import HeroSection from '../HeroSection/HeroSection'
import Services from '../MiddleSection/ServiceMiddle'
import About from '../MiddleSection/AboutMiddle'
import Footer from '../MiddleSection/Footer'

function Home() {
  return (
    <div>
        <HeroSection />
        <Services/>
        <About/>
        <Footer/> 
    </div>
  )
}

export default Home