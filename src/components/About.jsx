import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-50">
          Sobre Mim
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-lg shadow-md text-justify">
            {/* <h3 className="text-xl font-semibold mb-4 text-slate-50">
              Minha Trajetória
            </h3> */}
            <p className="text-slate-200 mb-6 ">
              Iniciei minha carreira em Biomedicina, atuando em ambientes de
              alta demanda, onde desenvolvi habilidades essenciais para
              trabalhar sob pressão e seguir protocolos rigorosos. Motivada pela
              paixão por tecnologia e pelo desejo de criar soluções inovadoras,
              decidi fazer uma transição para o desenvolvimento web, unindo
              minha experiência anterior a novos conhecimentos na área da
              tecnologia
            </p>
            <p className="text-slate-50 mb-6">
              Atualmente, me dedico integralmente aos estudos de programação,
              com foco em desenvolvimento front-end utilizando React. Busco uma
              oportunidade para atuar em projetos inovadores, em um ambiente
              colaborativo onde eu possa contribuir com meus conhecimentos e
              continuar evoluindo como desenvolvedora
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
