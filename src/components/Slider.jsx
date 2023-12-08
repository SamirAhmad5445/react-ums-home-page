import { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";
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
        <Slide1
          isPrevious={currentSlide === 1}
          isCurrent={currentSlide === 0}
          isNext={currentSlide === 2}
        />
        <Slide2
          isPrevious={currentSlide === 2}
          isCurrent={currentSlide === 1}
          isNext={currentSlide === 0}
        />
        <Slide3
          isPrevious={currentSlide === 0}
          isCurrent={currentSlide === 2}
          isNext={currentSlide === 1}
        />
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
            style={currentSlide === index ? { opacity: 1 } : { opacity: 0.5 }}
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

const Slide1 = ({ isPrevious, isCurrent, isNext }) => {
  const position = isPrevious
    ? "isPrevious"
    : isCurrent
    ? "isCurrent"
    : isNext
    ? "isNext"
    : "";

  return (
    <div className={`slide bg-slide-1 ${position}`}>
      <h2>What Are Services That Are Provided On Our System?</h2>
      <p>
        You can know your results, submit petitions, pay expenses, register for
        materials, file complaints
      </p>
      <div>
        <Button href="#" type="accent" hover={false}>
          Login
        </Button>
      </div>
    </div>
  );
};

const Slide2 = ({ isPrevious, isCurrent, isNext }) => {
  const position = isPrevious
    ? "isPrevious"
    : isCurrent
    ? "isCurrent"
    : isNext
    ? "isNext"
    : "";

  return (
    <div className={`slide bg-slide-2 ${position}`}>
      <h2>Ain Shams University electronic systems</h2>
      <p>
        Which manages the educational and administrative process within the
        university
      </p>
      <div>
        <Button>Discover</Button>
        <Button>Your Opinion Matters</Button>
      </div>
    </div>
  );
};

const Slide3 = ({ isPrevious, isCurrent, isNext }) => {
  const position = isPrevious
    ? "isPrevious"
    : isCurrent
    ? "isCurrent"
    : isNext
    ? "isNext"
    : "";

  return (
    <div className={`slide bg-slide-3 ${position}`}>
      <h2>Book Your Course Now</h2>
      <p>
        You can know your results, submit petitions, pay expenses, register for
        materials, file complaints
      </p>
      <div>
        <Button type="accent">Apply for PG Studies</Button>
        <Button type="accent">Book Your Course</Button>
      </div>
    </div>
  );
};

export default Slider;
