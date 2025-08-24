import GameBannerCarousel from "./components/Carousel"
import GameCard from "./components/GameCard"
import { HeroSection } from "./components/HeroSection"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div>
     <NavBar/>
     <HeroSection/>

     <GameBannerCarousel/>
<div className="mt-10">
 <GameCard/>
</div>
    
     
    </div>
  )
}

export default App