import bg from "../../assets/bgimg.png";

const HeroSection = () => {
  return (
    <div className="relative h-screen" id="hero-section">
      <img
        src={bg}
        alt="Background"
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute lg:left-156 md:left-24 left-4 bottom-60">
        <p className="text-white text-xl lg:text-2xl md:text-lg">
          Extra Aspirational
        </p>
      </div>
      <div className="absolute lg:left-156 md:left-24 left-4 bottom-20 text-white text-4xl lg:text-6xl md:text-5xl leading-tight">
        <p>Avero. Pushing</p>
        <p>engineering forward.</p>
      </div>
    </div>
  );
};

export default HeroSection;
