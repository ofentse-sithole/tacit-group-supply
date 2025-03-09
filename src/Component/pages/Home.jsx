import '../../App.css'
import HeroSection from '../HeroSection/HomeHeroSection'
import Services from '../MiddleSection/ServiceMiddle'
import Timer from '../HeroSection/TimerHeoSection'
import Customer from '../AboutSection/Customer'

function Home() {
  return (
    <div>
        <HeroSection/>
        <Services/>
        <Customer/>
    </div>
  )
}

export default Home