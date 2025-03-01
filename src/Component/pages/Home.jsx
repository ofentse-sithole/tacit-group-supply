import '../../App.css'
import HeroSection from '../HeroSection/HeroSection'
import Services from '../MiddleSection/ServiceMiddle'
import About from '../MiddleSection/AboutMiddle'

function Home() {
  return (
    <div>
        <HeroSection />
        <Services/>
        <About/>
    </div>
  )
}

export default Home