import React from "react";
import { Mail } from "lucide-react";
import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Instagram from "lucide-react/dist/esm/icons/instagram";

const SideLinks = () => {
  const links = [
    {
      href: "https://github.com/Amanda-Berwig",
      icon: <Github size={20} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/amanda-berwig",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/amandaberwig/",
      icon: <Instagram size={20} />,
      label: "Instagram",
    },
    {
      href: "mailto:amandaberwig@gmail.com",
      icon: <Mail size={20} />,
      label: "Email",
    },
  ];

  return (
    <div className="md:fixed md:bottom-0 md:left-5 z-10 flex justify-center flex-row  md:flex-col items-center space-x-4 md:space-x-0 md:space-y-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-50 hover:text-cyan-300 transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
      <div className="w-0.5 h-24 bg-slate-50 mt-4 hidden md:block" />
    </div>
  );
};

export default SideLinks;
