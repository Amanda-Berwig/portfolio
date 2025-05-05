import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects/ProjectsList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideLinks from "./components/SideLinks";
import { LanguageProvider } from "./components/Contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="bg-gradient-to-br from-black via-cyan-900 to-gray-900">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <SideLinks />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
// bg-gradient-to-br from-purple-200 via-blue-200 to-rose-600
// bg-gradient-to-tr from-slate-900 via-cyan-900 to-slate-800
// bg-gradient-to-br from-black via-cyan-900 to-gray-900
