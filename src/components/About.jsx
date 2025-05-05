import React from "react";
import { useLanguage } from "./Contexts/LanguageContext";

const About = () => {
  const { translations } = useLanguage();
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 md:mb-12 text-slate-50">
          {translations.AboutMe}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-lg shadow-md text-justify">
            <p className="text-slate-200 mb-6 ">
              {translations.descriptionAbout}
            </p>
            <p className="text-slate-50 mb-6">
              {translations.descriptionAbout2}
            </p>

            {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-purple-300 p-3 rounded shadow text-center">
                <div className="text-white font-bold text-lg">HTML/CSS</div>
              </div>
              <div className="bg-purple-300 p-3 rounded shadow text-center">
                <div className="text-white font-bold text-lg">JavaScript</div>
              </div>
              <div className="bg-purple-300 p-3 rounded shadow text-center">
                <div className="text-white font-bold text-lg">React</div>
              </div>
              <div className="bg-purple-300 p-3 rounded shadow text-center">
                <div className="text-white font-bold text-lg">Tailwind</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
