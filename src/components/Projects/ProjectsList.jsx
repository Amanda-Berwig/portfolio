import React from "react";
import { projects } from "./projects";
import { ExternalLink } from "lucide-react";
import Github from "lucide-react/dist/esm/icons/github";

const ProjectsList = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Meus Projetos
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> */}
        <div className="flex flex-wrap gap-8 relative">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-x-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-70 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-200 text-gray-500 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2"
                  >
                    <span>
                      <Github
                        size={20}
                        className="text-black hover:text-purple-400 transition duration-300"
                      />
                    </span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2"
                  >
                    <ExternalLink
                      size={20}
                      className="hover:text-purple-400 transition duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
