import Icon from "./Icon";
import { Accessibility, Robot, Audio, Video, Up } from "../assets";
import { useEffect, useState } from "react";

const Controls = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button className="fixed top-4 right-2 bg-primary-500 rounded-full z-50">
        <Icon name={Accessibility} size={40} />
      </button>
      <button
        onClick={handleClick}
        className={`fixed bottom-4 right-2 bg-primary-600 text-white rounded-full z-50 p-4 ${
          !isVisible ? "hidden" : ""
        }`}
      >
        <Icon name={Up} />
      </button>
      <div className="fixed bottom-8 left-8 hidden md:flex flex-col gap-2 z-50">
        <button className="bg-primary-600 text-white rounded-full p-3">
          <Icon name={Video} size={26} />
        </button>
        <button className="bg-primary-600 text-white rounded-full p-3">
          <Icon name={Audio} size={26} />
        </button>
        <button className="bg-primary-600 text-white rounded-full p-3">
          <Icon name={Robot} size={26} />
        </button>
      </div>
    </>
  );
};

export default Controls;
