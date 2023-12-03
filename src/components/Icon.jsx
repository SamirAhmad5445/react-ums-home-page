import { ReactSVG } from "react-svg";

const Icon = ({ name, size = 18, className }) => {
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
    "--size": `${size}px`,
  };
  return (
    <ReactSVG
      src={name}
      style={styles}
      className={`icon ${className ? className : ""}`}
    />
  );
};

export default Icon;
