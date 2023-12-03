import { HeroSection, FeaturesSection, ServicesSection } from "./sections";
import { Controls } from "./components";

const App = () => {
  return (
    <>
      <Controls />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
    </>
  );
};

export default App;
