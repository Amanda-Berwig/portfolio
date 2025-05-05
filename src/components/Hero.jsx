import React from "react";
import PerfilAmanda from "../assets/perfil-amanda.jpeg";
import { useLanguage } from "./Contexts/LanguageContext";

const Hero = () => {
  const { translations } = useLanguage();
  return (
    <section id="home" className="pt-24 pb-10 min-h-screen flex items-center">
      <div className="container mx-auto px-10 md:pl-18 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50">
            {translations.greeting}{" "}
            <span className="text-cyan-200">Amanda Berwig</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300">
            {translations.jobTitle}
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-lg ">
            {translations.description}
          </p>
          <div className="flex space-x-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=amanda.berwig@email.com"
              target="blank"
              className="px-4 md:px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-slate-50 rounded-md transition duration-300"
            >
              {translations.contactMe}
            </a>
            <a
              href="#projects"
              className="px-4 md:px-6 py-3 border border-b-cyan-600 text-cyan-600 rounded-md hover:bg-slate-50 transition duration-300"
            >
              {translations.viewProjects}
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-300 shadow-xl hover:scale-115 transition-transform duration-300">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center ">
              <img src={PerfilAmanda} alt="perfil Amanda" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
