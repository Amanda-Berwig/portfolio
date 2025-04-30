import React from "react";

const Projects = () => {
  // Sample project data - in a real application, this could come from an API or CMS
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "Uma loja virtual completa com carrinho de compras, sistema de pagamento e painel administrativo.",
      image: "https://via.placeholder.com/600x400?text=E-commerce+Project",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/username/ecommerce-project",
      demo: "https://ecommerce-project.example.com",
    },
    {
      id: 2,
      title: "App de Tarefas",
      description:
        "Aplicativo de gerenciamento de tarefas com recursos de categorização, priorização e lembretes.",
      image: "https://via.placeholder.com/600x400?text=Task+App",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/task-app",
      demo: "https://task-app.example.com",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description:
        "Painel de visualização de dados com gráficos interativos e relatórios personalizáveis.",
      image: "https://via.placeholder.com/600x400?text=Dashboard+Analytics",
      tags: ["React", "D3.js", "Express"],
      github: "https://github.com/username/dashboard-analytics",
      demo: "https://dashboard-analytics.example.com",
    },
    {
      id: 4,
      title: "Blog Pessoal",
      description:
        "Plataforma de blog com sistema de comentários, categorias e pesquisa avançada.",
      image: "https://via.placeholder.com/600x400?text=Personal+Blog",
      tags: ["React", "GraphQL", "Styled Components"],
      github: "https://github.com/username/personal-blog",
      demo: "https://personal-blog.example.com",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
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
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300 flex items-center"
                  >
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-300"
                  >
                    Ver Demo
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

export default Projects;
