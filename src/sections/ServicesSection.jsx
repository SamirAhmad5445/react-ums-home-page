import { useState } from "react";
import { ourServices } from "../data";

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState(0);

  return (
    <section id="services" className="max-container text-center py-32">
      <h2 className="text-4xl mb-8">What Are You Searching For ?</h2>
      <ul className="bg-light text-secondary py-2 flex justify-center items-center gap-4 flex-wrap">
        {ourServices.map((service, index) => (
          <li
            key={service.name}
            className={
              currentService === index
                ? "text-primary-400 underline underline-offset-4"
                : ""
            }
            onClick={() => setCurrentService(index)}
          >
            {service.name}
          </li>
        ))}
      </ul>
      <div className="max-md:px-8 py-4 flex justify-center items-stretch flex-wrap gap-2">
        {ourServices.map((serviceList, index) =>
          [...serviceList.services].map(
            (service) =>
              currentService === index && (
                <div
                  key={service}
                  className="basis-full md:basis-1/3 lg:basis-1/4 bg-primary-500 p-4 text-white hover:text-primary-300 text-lg rounded-2xl"
                >
                  <a href="#">{service}</a>
                </div>
              )
          )
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
