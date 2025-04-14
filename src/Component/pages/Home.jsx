import '../../App.css'
import HeroSection from '../HeroSection/HomeHeroSection'
import Services from '../MiddleSection/ServiceMiddle'
import Timer from '../HeroSection/TimerHeoSection'
import Customer from '../AboutSection/Customer'
import Reviews from '../Reviews/ClientReviews'

function Home() {
  return (
    <div>
        <HeroSection/>
        <Services/>
        <Customer/>
        <Reviews/>
    </div>
  )
}

export default Home