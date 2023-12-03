import {
  HeroSection,
  FeaturesSection,
  LoginSection,
  ServicesSection,
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
    </>
  );
};

export default App;
