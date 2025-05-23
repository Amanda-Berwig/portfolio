import React from "react";
import { motion } from "motion/react";
import { projects } from "./projects";
import { ExternalLink } from "lucide-react";
import Github from "lucide-react/dist/esm/icons/github";
import { useLanguage } from "../Contexts/LanguageContext";

const ProjectsList = () => {
  const { translations } = useLanguage();
  return (
    <section id="projects" className="py-24 ">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-extrabold text-center md:text-start text-slate-50 mb-20">
          {translations.MyProjects}
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col md:flex-row items-center md:mx-6 gap-10 shadow-2xl rounded-2xl ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }} // Começa invisível e deslocado pra baixo
              whileInView={{ opacity: 1, y: 0 }} // Aparece ao entrar na viewport
              viewport={{ once: true, amount: 0.2 }} // Só anima uma vez quando 30% visível
              transition={{ duration: 0.6, delay: index * 0.2 }} // Anima em sequência
            >
              {/* Imagem */}
              <div className="md:w-1/2 w-full group">
                <div className="relative rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-105 shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-64 md:h-80"
                  />
                </div>
              </div>

              {/* Conteúdo  */}
              <div
                className={`md:w-1/2 w-full p-4 md:p-0 text-center ${
                  index % 2 !== 0
                    ? "md:text-left md:pl-8"
                    : "md:text-right md:pr-8"
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-50 mb-4">
                  {translations.projectsDetails[project.translationKey].title}
                </h3>

                <p className="text-white mb-6 leading-relaxed text-justify py-4">
                  {
                    translations.projectsDetails[project.translationKey]
                      .description
                  }
                </p>

                <div
                  className={`flex flex-wrap gap-2 mb-6 justify-center ${
                    index % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-700 hover:bg-cyan-600 text-white text-sm font-medium px-3 py-1 mb-8 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex gap-4 ${
                    index % 2 !== 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-white transition-colors duration-300"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
