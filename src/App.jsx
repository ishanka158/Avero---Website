import { Navbar } from "./components";
import Footer from "./components/Footer/footer";
import HeroSection from "./components/Hero/Hero";
import ImageComponent from "./components/ImageCard/ImageComponent";
import ImageHoverCard from "./components/ImageHoverCard/ImageHoverCard";
import Paragraph from "./components/Paragraph/Paragraph";
import SliderComponent from "./components/Slider/SliderComponent";

import TwoSidedComponent from "./components/TwoSidedComponent/TwoSidedComponent";
import Careers from "./components/careers/careers";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Paragraph />
      <ImageComponent />
      <ImageHoverCard />
      <TwoSidedComponent />
      <SliderComponent />
      <Careers />
      <Footer />
    </div>
  );
};

export default App;
