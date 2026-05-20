import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-[#D6FCFF] p-4 md:p-12 font-sans flex justify-center items-start">
      <div className="w-full max-w-5xl relative mt-16 md:mt-0">
        <Navigation />
        <main className="bg-[#F5F7CD] relative z-10 border-[3px] border-[#907162] rounded-b-xl md:rounded-tr-xl shadow-[8px_8px_0px_0px_#907162] overflow-hidden">
          <Hero />
          <div className="border-t-[3px] border-dashed border-[#907162]/30"></div>
          <About />
          <div className="border-t-[3px] border-dashed border-[#907162]/30"></div>
          <Certificates />
          <div className="border-t-[3px] border-dashed border-[#907162]/30"></div>
          <Skills />
          <div className="border-t-[3px] border-dashed border-[#907162]/30"></div>
          <Projects />
          <div className="border-t-[3px] border-dashed border-[#907162]/30"></div>
          <Contact />
        </main>
        <footer className="mt-12 text-center text-[#907162] font-pixel text-sm">
          <p>&copy; 2026 Lorena Lira. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
