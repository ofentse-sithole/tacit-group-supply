import '../../App.css'
import HeroSection from '../HeroSection/HeroSection'
import Services from '../MiddleSection/ServiceMiddle'
import Timer from '../HeroSection/TimerHeoSection'

function Home() {
  return (
    <div>
      <Timer/>
        <HeroSection />
        <Services/>
    </div>
  )
}

export default Home