import { Header, Slider } from "../components";
import { umsLogo } from "../assets";

const HeroSection = () => {
  return (
    <section id="hero" aria-labelledby="pageTitle">
      <Header />

      <div className="max-container flex items-center max-md:flex-col md:gap-16 lg:gap-20">
        <img src={umsLogo} alt="UMS Logo" width={200} />
        <h1
          id="pageTitle"
          className="py-4 md:py-12 text-primary-200 text-xl max-md:text-center"
        >
          Electronic Management System of Ain Shams University
        </h1>
      </div>

      <Slider />
    </section>
  );
};

export default HeroSection;
