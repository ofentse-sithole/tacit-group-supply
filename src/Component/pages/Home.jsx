import '../../App.css'
import HeroSection from '../HeroSection/HeroSection'
import Services from '../MiddleSection/ServiceMiddle'
import Timer from '../HeroSection/TimerHeoSection'
import Customer from '../AboutSection/Customer'

function Home() {
  return (
    <div>
        <Timer/>
        <Services/>
        <Customer/>
    </div>
  )
}

export default Home