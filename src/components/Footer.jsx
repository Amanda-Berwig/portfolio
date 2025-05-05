import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-slate-50">
              Desenvolvedora Front-end especializada em criar experiências web
              incríveis.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center"></div>
        </div>
        <div className="border-t border-gray-400 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-slate-50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} - Amanda Berwig
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
