import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WeatherForecast from "@/components/WeatherForecast";
import RealGoogleMaps from "@/components/RealGoogleMaps";
import ShopSection from "@/components/ShopSection";
import SoilCropSection from "@/components/SoilCropSection";
import PlantClassification from "@/components/PlantClassification";
import FarmerCalendar from "@/components/FarmerCalendar";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WeatherForecast />
      <RealGoogleMaps />
      <ShopSection />
      <SoilCropSection />
      <PlantClassification />
      <FarmerCalendar />
      <AIChat />
      <Footer />
    </div>
  );
};

export default Index;
