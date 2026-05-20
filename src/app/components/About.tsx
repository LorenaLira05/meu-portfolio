import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePhoto from "../../imports/WhatsApp_Image_2026-05-20_at_14.42.49.jpeg";

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-12 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-3/5">
            <h2 className="font-pixel text-4xl md:text-5xl text-[#907162] mb-6">Sobre_Mim</h2>
            <div className="border-[3px] border-[#907162] p-6 bg-[#ffffff] shadow-[6px_6px_0px_0px_#907162] relative">
              {/* Note tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/60 border-2 border-[#907162]/20 rotate-[-2deg] backdrop-blur-sm shadow-sm z-10"></div>
              
              <div className="absolute -top-3 left-4 bg-[#F5F7CD] px-2 font-mono text-xs font-bold text-[#907162] uppercase z-20">
                Perfil.txt
              </div>
              <p className="font-sans text-sm leading-relaxed text-[#907162] mt-4">Entre cafés, música, museus e linhas de código, fui encontrando meu espaço na tecnologia.<br/><br/>Atualmente estudo desenvolvimento de sistemas e tenho um interesse especial por back-end e bancos de dados, mas também gosto de&nbsp;&nbsp;explorar o lado visual e criativo das aplicações. Gosto da ideia de construir experiências completas, funcionais, organizadas e com personalidade, unindo lógica, estética e sensibilidade em cada detalhe.</p>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0">
            {/* Polaroid style photo */}
            <div className="bg-[#ffffff] border-[3px] border-[#907162] p-4 pb-12 shadow-[8px_8px_0px_0px_#907162] rotate-[3deg] relative max-w-[280px]">
              {/* Tape */}
              <div className="absolute -top-4 right-8 w-12 h-8 bg-[#D6FCFF]/80 border-2 border-[#907162]/20 rotate-[12deg] z-10"></div>
              
              <div className="border-[3px] border-[#907162] overflow-hidden bg-[#F5F7CD] aspect-square">
                <ImageWithFallback 
                  src={profilePhoto} 
                  alt="Minha foto" 
                  className="w-full h-full object-cover grayscale sepia-[.3]" 
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
