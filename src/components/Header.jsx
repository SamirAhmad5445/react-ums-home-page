import {
  EgyptFlag,
  Dribbble,
  Eagle,
  Envelope,
  Facebook,
  LinkedIn,
  Youtube,
} from "../assets";
import Icon from "./Icon";

const Header = () => {
  const mediaIcon = [
    { icon: Envelope, alt: "Home", url: "#" },
    { icon: Facebook, alt: "Facebook", url: "#" },
    { icon: Youtube, alt: "Youtube", url: "#" },
    { icon: LinkedIn, alt: "Linked in", url: "#" },
    { icon: Dribbble, alt: "dribbble", url: "#" },
  ];

  return (
    <header className="bg-primary-500 md:pl-10 py-3 flex justify-center items-center max-md:flex-col text-sm">
      <div className="flex-1 flex justify-center items-center gap-[18px]">
        <Icon name={Eagle} size={30} />
        <p className="text-white">
          <span className="text-secondary">Phone:</span>+2-26831474
        </p>
        {mediaIcon.map((link, index) => (
          <a
            href={link.url}
            className="text-white hover:text-primary-300"
            key={index}
          >
            <Icon name={link.icon} size={14} />
            <span className="sr-only">{link.alt}</span>
          </a>
        ))}
      </div>
      <a href="/" className="flex-1 flex justify-center items-center ">
        <img src={EgyptFlag} alt="egypt flag" width={14} />
        <span className="text-white">عربي</span>
      </a>
    </header>
  );
};

export default Header;
