import React, { createContext, useState, useContext } from "react";
import translationsData from "../utils/translations.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");
  const switchLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "pt" ? "en" : "pt"));
  };

  const translations = translationsData[language];
  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
