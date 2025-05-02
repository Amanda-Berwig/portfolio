import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7be4iql",
        "template_ln34kpg",
        form.current,
        "SubL75nfpCFhazH-g"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log(error.text);
          alert("Erro ao enviar mensagem. Tente novamente.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Entre em Contato
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col justify-center md:flex-row gap-8">
          {/* Contact Form */}
          <div className="md:w-2/3 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Envie uma mensagem
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-700 font-medium mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm text-gray-700 font-medium mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-700 font-medium mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full h-20 px-4 py-2 border border-gray-300 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Como eu posso te ajudar?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-purple-400 text-white rounded-md hover:bg-purple-300 transition duration-300 w-full md:w-auto"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Information
          <div className="md:w-1/3">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="min-w-10 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Email</p>
                    <a
                      href="mailto:seu.email@exemplo.com"
                      className="text-blue-600 hover:underline"
                    >
                      seu.email@exemplo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="min-w-10 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Telefone</p>
                    <a
                      href="tel:+5511999999999"
                      className="text-blue-600 hover:underline"
                    >
                      +55 (11) 99999-9999
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="min-w-10 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Localização</p>
                    <p className="text-gray-800">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
