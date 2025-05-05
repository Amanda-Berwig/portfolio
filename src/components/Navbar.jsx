import React from "react";
import { useLanguage } from "./Contexts/LanguageContext";

const Navbar = () => {
  const { language, switchLanguage, translations } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 text-sm md:text-lg w-full text-white bg-gradient-to-br from-black via-gray-900  to-cyan-900 shadow-md z-50">
      <div className="container mx-auto px-1 md:px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold ">
          <button
            onClick={switchLanguage}
            className="text-xs md:text-base px-3 md:px-4 py-2 transition"
          >
            <span>
              <span
                className={language === "pt" ? "font-bold text-cyan-300" : ""}
              >
                pt
              </span>
              {"   |   "}
              <span
                className={language === "en" ? "font-bold text-cyan-300" : ""}
              >
                en
              </span>
            </span>
          </button>
        </div>
        <ul className="flex space-x-3 md:space-x-10 items-center">
          <li>
            <a
              href="#home"
              className="hover:text-cyan-300 transition duration-300"
            >
              {translations.home}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-cyan-300 transition duration-300"
            >
              {translations.about}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-cyan-300 transition duration-300"
            >
              {translations.projects}
            </a>
          </li>
          {/* <li>
            <a
              href="#contact"
              className="hover:text-cyan-300 transition duration-300"
            >
              {translations.contact}
            </a>
          </li> */}
          <li className="hover:-translate-0.5 transform transition-all duration-300 ease-in-out">
            <a
              href="/curriculo-amanda.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-300 rounded py-2 px-4 hover:shadow-[3px_3px_0_0_rgba(103,232,249,1)] transform transition-all duration-200 ease-in-out"
            >
              {translations.resume}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
