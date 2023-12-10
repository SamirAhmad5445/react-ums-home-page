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
      <button className="fixed top-4 right-2 bg-primary-500 rounded-full z-50 hover:scale-110 transition-transform duration-300 ">
        <Icon name={Accessibility} size={40} />
        <span className="sr-only">Accessibility</span>
      </button>
      <button
        onClick={handleClick}
        className={`fixed bottom-4 right-2 bg-primary-600 hover:bg-primary-550 text-white rounded-full z-50 p-4 ${
          !isVisible ? "hidden" : ""
        }`}
      >
        <Icon name={Up} />
        <span className="sr-only">Scroll to Top</span>
      </button>
      <div className="fixed bottom-8 left-8 hidden md:flex flex-col gap-2 z-50">
        <button className="bg-primary-600 hover:bg-primary-550 text-white rounded-full p-3">
          <Icon name={Video} size={26} />
          <span className="sr-only">videos</span>
        </button>
        <button className="bg-primary-600 hover:bg-primary-550 text-white rounded-full p-3">
          <Icon name={Audio} size={26} />
          <span className="sr-only">narrator</span>
        </button>
        <button className="bg-primary-600 hover:bg-primary-550 text-white rounded-full p-3">
          <Icon name={Robot} size={26} />
          <span className="sr-only">virtual assistant</span>
        </button>
      </div>
    </>
  );
};

export default Controls;
