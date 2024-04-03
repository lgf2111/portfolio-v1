import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-5 right-5 z-50 flex items-center justify-center bg-green-600 text-white p-2 w-10 h-10 rounded-full shadow-lg transition-transform duration-300 ease-in-out ${
        showButton ? "" : "translate-y-16"
      }`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5 text-center" />
    </button>
  );
};

export default ScrollToTopButton;
