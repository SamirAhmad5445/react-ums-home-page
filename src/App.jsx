import {
  HeroSection,
  FeaturesSection,
  LoginSection,
  ServicesSection,
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
      <Footer />
    </>
  );
};

export default App;
