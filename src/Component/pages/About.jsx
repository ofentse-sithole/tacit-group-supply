import '../../App.css'
import AboutHero from '../HeroSection/AboutHeroSection'
import AboutTop from '../AboutSection/AboutTop'
import AboutMission from '../AboutSection/AboutMission'
import AboutVision from '../AboutSection/AboutVision'
import MissionVision from '../AboutSection/MissionAndVision'
import AboutMid from '../AboutSection/AboutMiddle'
import Customer from '../AboutSection/Customer'

function About() {
  return (
    <div>
        <AboutHero/>
        <AboutTop/>
        <MissionVision/>
    </div>
  )
}

export default About;