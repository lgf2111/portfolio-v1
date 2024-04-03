import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import socialMediaLinks from "../assets/data/socialMediaLinks.json";
import { Link } from "react-router-dom";

const Footer = () => {
  interface SocialMediaButtonProps {
    link: string;
    icon: IconProp;
  }

  const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
    link,
    icon,
  }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-100 h-9 w-9 flex items-center justify-center align-center rounded-full mr-2 hover:shadow-md hover:shadow-white transition-all duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    );
  };

  return (
    <footer className="relative pt-8 pb-6">
      <div className="container mx-auto">
        <hr className="border-t-2 border-gray-400 mb-6" />
        <div className="flex flex-wrap text-center sm:text-left">
          <div className="w-full sm:w-6/12 mb-3 sm:mb-0 px-4">
            <h5 className="text-2xl font-semibold text-green-500 mb-3">
              Let's keep in touch!
            </h5>
            <div className="flex justify-center sm:justify-start">
              <SocialMediaButton
                link={socialMediaLinks.linkedin}
                icon={faLinkedin}
              />
              <SocialMediaButton
                link={socialMediaLinks.github}
                icon={faGithub}
              />
              <SocialMediaButton
                link={socialMediaLinks.instagram}
                icon={faInstagram}
              />
            </div>
          </div>
          <div className="w-full sm:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6 justify-center sm:justify-end">
              <div className="w-full sm:w-4/12 px-4">
                <span className="block uppercase text-green-500 font-semibold mb-2 text-sm">
                  Useful Links
                </span>
                <ul className="list-unstyled text-green-600">
                  <li>
                    <Link
                      to="/"
                      className="group transition-all duration-300 ease-in-out"
                    >
                      <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium text-sm">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="group transition-all duration-300 ease-in-out"
                    >
                      <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium text-sm">
                        About
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className="group transition-all duration-300 ease-in-out"
                    >
                      <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium text-sm">
                        Projects
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="group transition-all duration-300 ease-in-out"
                    >
                      <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium text-sm">
                        Contact
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
