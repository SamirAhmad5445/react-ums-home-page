import { Icon } from "../components";
import { features } from "../data";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="max-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-4 py-4"
    >
      {features.map((feature) => (
        <Feature key={feature.url} feature={feature} />
      ))}
    </section>
  );
};

const Feature = ({ feature }) => {
  return (
    <a
      href={feature.url}
      className="group bg-primary-500 pt-8 pb-2 px-10 flex flex-col items-center content-start gap-1 rounded-[20px] hover:-translate-y-2 transition-transform duration-300 ease-in-out"
    >
      <span className="w-fit mx-auto p-4 rounded-full bg-primary-300 group-[&:nth-child(2n)]:bg-accent group-[&:nth-child(8)]:bg-danger group-[&:nth-child(3)]:bg-danger">
        <Icon name={feature.icon} size={30} className="text-white" />
      </span>
      <p className="text-white text-center text-[17px] font-medium">
        {feature.label}
      </p>
    </a>
  );
};

export default FeaturesSection;
