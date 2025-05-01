import P01 from "../../assets/p01.png";
import P02 from "../../assets/preview-todolist.png";
import P03 from "../../assets/preview-organo.png";
import P04 from "../../assets/preview-codeconnect.png";

export const projects = [
  {
    id: 1,
    title: "GitHub User Search App ",
    description:
      "Aplicativo que consome a API do GitHub para buscar usuários e exibir informações detalhadas.",
    image: P01,
    tags: ["React", "Tailwind CSS", "API"],
    github: "https://github.com/Amanda-Berwig/busca-github",
    demo: "https://amanda-berwig.github.io/busca-github/",
  },
  {
    id: 2,
    title: "To Do List",
    description:
      "Aplicativo de gerenciamento de tarefas com recursos de editar, filtrar e remover tarefas.",
    image: P02,
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/Amanda-Berwig/ToDoList",
    demo: "https://amanda-berwig.github.io/ToDoList/",
  },
  {
    id: 3,
    title: "Organo",
    description:
      "Painel para visualizar a estrutura hierárquica de sua equipe e auxiliar a gerir os colaboradores, separando-os por times.",
    image: P03,
    tags: ["React", "D3.js", "Express"],
    github: "https://github.com/Amanda-Berwig/organo",
    demo: "https://organo-psi-three.vercel.app/",
  },
  {
    id: 4,
    title: "Code Connect",
    description:
      "Plataforma de blog com sistema de comentários, categorias e pesquisa avançada.",
    image: P04,
    tags: ["React", "GraphQL", "Styled Components"],
    github: "https://github.com/Amanda-Berwig/Code-Connect",
    demo: "https://code-connect-react-vite.vercel.app/",
  },
];
