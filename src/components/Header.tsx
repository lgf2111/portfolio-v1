import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";

const Header = () => {
  const { y } = useWindowScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(y > 0);
  }, [y]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 mx-auto py-8 px-10 sm:flex sm:justify-between sm:items-end animated-fade ${
        isScrolled ? "fade-in" : "fade-out"
      }`}
    >
      <div>
        <Link to="/" className="text-2xl text-green-400 font-bold">
          Jeff Lee
        </Link>
      </div>
      <div>
        <ul className="flex gap-x-5 text-green-600">
          <li>
            <Link
              to="/"
              className="group transition-all duration-300 ease-in-out whitespace-nowrap"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="group transition-all duration-300 ease-in-out whitespace-nowrap"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="group transition-all duration-300 ease-in-out whitespace-nowrap"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="group transition-all duration-300 ease-in-out whitespace-nowrap"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
