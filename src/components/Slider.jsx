import { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";
import { slidesContent } from "../data";
import { Previous, Next } from "../assets";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  function handleNext() {
    setCurrentSlide((a) => (a + 1) % 3);
  }

  function handlePrevious() {
    setCurrentSlide((a) => (a === 0 ? 2 : (a - 1) % 3));
  }

  return (
    <div className="slider-wrapper">
      <main className="slider bg-dark">
        {slidesContent.map((slide, index) => (
          <Slide
            key={index}
            content={slide}
            position={
              currentSlide === index
                ? "isCurrent"
                : index === (currentSlide + 1) % 3
                ? "isNext"
                : "isPrevious"
            }
          />
        ))}
      </main>
      <button className="slider-btn-previous" onClick={handlePrevious}>
        <Icon name={Previous} size={20} />
        <span className="sr-only">Previous Slide</span>
      </button>
      <button className="slider-btn-next" onClick={handleNext}>
        <Icon name={Next} size={20} />
        <span className="sr-only">Next Slide</span>
      </button>
      <ul className="slider-bullets">
        {[...new Array(3)].map((_, index) => (
          <li
            key={index}
            className={currentSlide === index ? "current-bullet" : ""}
          >
            <button onClick={() => setCurrentSlide(index)}>
              <span className="sr-only">Go to Slide {index + 1}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Slide = ({ content, position }) => {
  return (
    <div className={`slide ${content.bgImage} ${position}`}>
      <h2>{content.title}</h2>
      <p>{content.content}</p>
      <div>
        {content.actions.map((action, index) => (
          <Button key={index} type={action?.type} href={action?.href}>
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
