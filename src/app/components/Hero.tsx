import { ArrowDown } from "lucide-react";
import { MousePointer2 } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col items-center justify-center relative p-8"
    >
      {/* Decorative top labels */}
      <div className="absolute top-8 left-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold">
        
        <span className="text-xl leading-none">✦</span>
      </div>
      
      <div className="absolute top-8 right-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold">
        <span className="text-xl leading-none">✦</span>
        
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 font-sans font-bold text-sm tracking-widest text-[#907162]">
        lorenaLira
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10 w-full max-w-4xl mt-12">
        <h1 className="relative inline-block whitespace-nowrap">
          {/* We'll mix script and pixel fonts for "Portfolio" */}
          <span className="font-script text-[120px] md:text-[180px] leading-none text-[#907162] block -mb-[40px] md:-mb-[60px] relative z-10">
            Lorena
          </span>
          <span className="font-pixel text-[60px] md:text-[100px] text-[#907162] block">
            Lira
          </span>
          
          <div className="absolute -bottom-4 md:-bottom-8 right-0 rotate-12 bg-[#907162] text-[#F5F7CD] px-4 py-1 font-pixel text-xl md:text-2xl shadow-[4px_4px_0px_0px_#FCACD1]">
            2025
          </div>
        </h1>

        {/* Decorative elements around main text */}
        <div className="absolute top-1/4 -left-4 md:left-12 text-[#907162]">
          <span className="font-pixel text-4xl">✦</span>
        </div>
        <div className="absolute bottom-1/4 -right-4 md:right-12 text-[#907162]">
          <span className="font-pixel text-4xl">✦</span>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="inline-block border-[3px] border-[#907162] rounded-full px-6 py-2 font-mono text-sm uppercase tracking-widest font-bold text-[#907162] mb-8 relative bg-white/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_#907162]">
            Desenvolvedora
            <MousePointer2 className="absolute -bottom-6 -right-6 text-[#907162] fill-[#D6FCFF] w-8 h-8" strokeWidth={1.5} />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button 
            onClick={scrollToProjects}
            className="group flex flex-col items-center gap-2 text-[#907162] hover:text-[#FCACD1] transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Explorar Projetos</span>
            <div className="w-10 h-10 border-[3px] border-current rounded-full flex items-center justify-center group-hover:translate-y-2 transition-transform shadow-[2px_2px_0px_0px_currentcolor]">
              <ArrowDown size={20} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
