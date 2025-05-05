import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">
          Sobre Mim
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-600">
              Minha Trajetória
            </h3>
            <p className="text-gray-500 mb-6 ">
              Iniciei minha carreira em Biomedicina, atuando em ambientes de
              alta demanda, onde desenvolvi habilidades essenciais para
              trabalhar sob pressão e seguir protocolos rigorosos. Motivada pela
              paixão por tecnologia e pelo desejo de criar soluções inovadoras,
              decidi fazer uma transição para o desenvolvimento web, unindo
              minha experiência anterior a novos conhecimentos na área da
              tecnologia
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-600">
              Transição de Carreira
            </h3>
            <p className="text-gray-500 mb-6">
              Minha jornada de transição começou com [como começou - cursos,
              bootcamp, etc]. Enfrentei desafios como [desafios enfrentados],
              mas cada obstáculo superado fortaleceu minha determinação e
              ampliou meu conhecimento técnico.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-600">
              Motivações
            </h3>
            <p className="text-gray-500 mb-6">
              O que me motiva como desenvolvedor é [suas motivações - resolver
              problemas complexos, criar interfaces intuitivas, etc]. Acredito
              que [sua filosofia de trabalho/desenvolvimento] e busco
              constantemente aprimorar minhas habilidades e conhecimentos.
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
