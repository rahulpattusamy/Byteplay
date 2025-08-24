import AboutUs from "./components/AboutUs";
import GameBannerCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import { HeroSection } from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import WhatIcon from "./components/WhatIcon";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />

      <GameBannerCarousel />
      <AboutUs />
      <div className="mt-10">
        <GameCard />
      </div>
      <WhatIcon/>
      <PrivacyPolicy />
      <Footer/>
    </div>
  );

};

export default App;
