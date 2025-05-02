import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 text-lg w-full text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-end items-center">
        {/* <div className="text-xl font-bold">Portfolio</div> */}
        <ul className="flex space-x-10 items-center">
          <li>
            <a
              href="#home"
              className="hover:text-cyan-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-cyan-300 transition duration-300"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-cyan-300 transition duration-300"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-cyan-300 transition duration-300"
            >
              Contato
            </a>
          </li>
          <li className="hover:-translate-0.5 transform transition-all duration-300 ease-in-out">
            <a
              href="/curriculo-amanda.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-300 rounded py-2 px-4 hover:shadow-[3px_3px_0_0_rgba(103,232,249,1)] transform transition-all duration-200 ease-in-out"
            >
              Currículo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
