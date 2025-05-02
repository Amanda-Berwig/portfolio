import P01 from "../../assets/p01.png";
import P02 from "../../assets/preview-todo.png";
import P03 from "../../assets/preview-organo.png";
import P04 from "../../assets/preview-codeconnect.png";
import P05 from "../../assets/preview-innovation.png";
import P06 from "../../assets/preview-fokus.png";
import P07 from "../../assets/preview-jogo.png";
import P08 from "../../assets/preview-alurabooks.png";

export const projects = [
  {
    id: 1,
    title: "GitHub User Search App ",
    description:
      "Aplicativo que consome a API do GitHub para buscar usuários e exibir informações detalhadas.",
    image: P01,
    tags: ["React", "Tailwind CSS", "Git Hub API"],
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
    tags: ["React", "CSS"],
    github: "https://github.com/Amanda-Berwig/organo",
    demo: "https://organo-psi-three.vercel.app/",
  },
  {
    id: 4,
    title: "Code Connect",
    description:
      "Plataforma de blog com sistema de comentários, categorias e pesquisa avançada.",
    image: P04,
    tags: ["React", "CSS"],
    github: "https://github.com/Amanda-Berwig/Code-Connect",
    demo: "https://code-connect-react-vite.vercel.app/",
  },
  {
    id: 5,
    title: "Avanti Innovation Class",
    description:
      "Site responsivo com campo de busca interativo e carrosséis funcionais",
    image: P05,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amanda-Berwig/Avanti--innovation-class",
    demo: "https://amanda-berwig.github.io/Avanti--innovation-class/",
  },
  {
    id: 6,
    title: "Fokus",
    description:
      "Temporizador com a técnica Pomodoro, com cronômetro e lista de tarefas.",
    image: P06,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amanda-Berwig/Fokus",
    demo: "https://fokus-two-zeta.vercel.app/",
  },
  {
    id: 7,
    title: "Jogo do Número Secreto",
    description: `Aplicação interativa na qual o usuário deve adivinhar um número aleatório entre 1 e 10. Utiliza ResponsiveVoice para fornecer feedback por voz, tornando a experiência mais dinâmica e acessível.`,
    image: P07,
    tags: ["HTML", "CSS", "JavaScript", "Responsive voice"],
    github: "https://github.com/Amanda-Berwig/jogo-do-numero-secreto",
    demo: "https://jogo-sage-psi.vercel.app/",
  },
  {
    id: 8,
    title: "Alura Books",
    description: "E-commerce, uma livraria online de livros sobre tecnologia.",
    image: P08,
    tags: ["HTML", "CSS", "JavaScript", "Swiper JS"],
    github: "https://github.com/Amanda-Berwig/AluraBooks",
    demo: "https://alura-books-ashy-beta.vercel.app/",
  },
];
