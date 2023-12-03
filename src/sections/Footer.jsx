import { umsLogo, mediaIcon } from "../assets";
import { Icon } from "../components";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="max-container text-primary-200 pt-28 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12">
        <img src={umsLogo} width={200} height={150} alt="UMS Logo" />

        <div>
          <h3 className="text-lg text-primary-600 font-medium mb-2">
            Who Are We
          </h3>
          <ul className="grid gap-4">
            <li>
              <a href="#" className="link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Ain Shams University
              </a>
            </li>
            <li>
              <a href="#" className="link">
                FCIS
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Complaints / Suggestions
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Your Opinion Matters
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Contact Us{" "}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-primary-600 font-medium mb-2">
            Important Links
          </h3>
          <ul className="grid gap-4">
            <li>
              <a href="#" className="link">
                Site Map
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Egyptian universities
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Academy Of Scientific Research
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Egyptian Knowledge Bank
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-primary-600 font-medium mb-2">
            FollowUs
          </h3>
          <div className="flex items-center gap-4 mb-11">
            {[...mediaIcon].slice(1).map((link) => (
              <a
                href={link.url}
                key={link.alt}
                className="grid place-content-center p-3 rounded-full hover:bg-primary-300 hover:text-white transition-colors duration-300"
              >
                <Icon name={link.icon} size={30} />
                <span className="sr-only">{link.alt}</span>
              </a>
            ))}
          </div>

          <div className="grid gap-4">
            <p>
              <span className="text-primary-600">E-mail:</span>{" "}
              ums.support@cis.asu.edu.eg
            </p>
            <p>
              <span className="text-primary-600">Phone:</span> 26831231 ,
              26831471 , 26831474
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-200">
        <div className="max-container text-primary-200 py-7 flex justify-center items-center gap-8 flex-wrap">
          <p>&copy; FCIS-AinShams 2020 - {new Date().getFullYear()}</p>

          <ul className="sm:flex-1 pl-10 flex items-center gap-[18px]">
            {mediaIcon.map((link, index) => (
              <a href={link.url} className="hover:text-primary-300" key={index}>
                <Icon name={link.icon} size={16} />
                <span className="sr-only">{link.alt}</span>
              </a>
            ))}
          </ul>

          <ul className="flex justify-center items-center flex-wrap [&_li:hover]:text-primary-300">
            <li className="px-2 border-r border-primary-200">
              <a href="#">Terms of Use </a>
            </li>
            <li className="px-2 border-r border-primary-200">
              <a href="#">Privacy Policy </a>
            </li>
            <li className="px-2 border-r border-primary-200">
              <a href="#">FAQ </a>
            </li>
            <li className="px-2">
              <a href="#">Customer Service Charter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
