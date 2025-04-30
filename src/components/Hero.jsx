import React from "react";
import PerfilAmandaLight from "../assets/perfil-amanda-light.png";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Olá, eu sou <span className="text-purple-400">Amanda Berwig</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">
            Desenvolvedora Front-end
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-lg">
            Apaixonada por criar interfaces interativas e responsivas que
            proporcionam experiências incríveis aos usuários.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-purple-400 text-white rounded-md hover:bg-purple-300 transition duration-300"
            >
              Entre em contato
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-purple-400 text-purple-400 rounded-md hover:bg-blue-50 transition duration-300"
            >
              Ver projetos
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-lg">
                <img src={PerfilAmandaLight} alt="perfil Amanda" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
