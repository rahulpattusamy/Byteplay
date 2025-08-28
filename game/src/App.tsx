import AboutUs from "./components/AboutUs";
import GameBannerCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import { HeroSection } from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <GameBannerCarousel />
      <AboutUs />
        <GameCard />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default App;
