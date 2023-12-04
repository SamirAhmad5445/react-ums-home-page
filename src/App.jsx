import {
  HeroSection,
  FeaturesSection,
  LoginSection,
  ServicesSection,
  StatsSection,
  Footer,
} from "./sections";
import { Controls } from "./components";

const App = () => {
  return (
    <>
      <Controls />
      <HeroSection />
      <FeaturesSection />
      <LoginSection />
      <ServicesSection />
      <StatsSection />
      <Footer />
    </>
  );
};

export default App;
