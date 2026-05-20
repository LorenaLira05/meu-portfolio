import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import raizImg from "../../imports/image.png";
import horasImg from "../../imports/image-1.png";
import coletaSeletivaImg from "../../imports/coleta-seletiva.jpg";

export function Projects() {
  const projects = [
    {
      title: "Sistema de Horas Complementares",
      description: "Líder técnica de back-end. APIs REST, modelagem de banco, autenticação 2FA, integração com OCR e automação de e-mails.",
      image: horasImg,
      tags: ["Node.js", "PostgreSQL", "2FA", "OCR", "Pesquisa UX"],
      github: "https://github.com/LorenaLira05/sistema-horas-complementares",
      demo: "https://github.com/LorenaLira05/sistema-horas-complementares",
      color: "bg-[#FFD9EF]",
      rotation: "rotate-[-2deg]",
    },
    {
      title: "Sistema Raiz (IPA)",
      description: "Sistema de gestão de sementes desenvolvido para o Instituto Agronômico de Pernambuco (IPA), facilitando o controle e distribuição agrícola.",
      image: raizImg,
      tags: ["Node.js", "MySQL", "Agronomia", "Pesquisa UX"],
      github: "https://github.com/LorenaLira05/Raiz",
      demo: "https://github.com/LorenaLira05/Raiz",
      color: "bg-[#D6FCFF]",
      rotation: "rotate-[1deg]",
    },
    {
      title: "EcoSenac",
      description: "Projeto conceitual de lixeiras inteligentes para gestão de resíduos com sensores IoT. Solução pensada para otimizar a coleta seletiva no campus.",
      image: coletaSeletivaImg,
      tags: ["Modelagem de Dados", "SQL", "UX/UI", "Pesquisa UX"],
      github: "https://www.figma.com/proto/qf3hVVzrmirhIKb1lgbIbK/Ecosenac-app?node-id=66-264&starting-point-node-id=119%3A286",
      demo: "https://www.figma.com/proto/qf3hVVzrmirhIKb1lgbIbK/Ecosenac-app?node-id=66-264&starting-point-node-id=119%3A286",
      color: "bg-[#D6FFDB]",
      rotation: "rotate-[3deg]",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-pixel text-2xl text-[#907162]">✦</span>
            <h2 className="font-script text-6xl text-[#907162]">Projetos & Estudos</h2>
            <span className="font-pixel text-2xl text-[#907162]">✦</span>
          </div>
          <p className="font-sans font-bold text-sm uppercase tracking-widest text-[#907162] border-b-2 border-dashed border-[#907162] pb-1">2025 - 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col bg-[#ffffff] border-[3px] border-[#907162] p-4 shadow-[8px_8px_0px_0px_#907162] ${project.rotation} hover:rotate-0 hover:translate-y-[-10px] transition-all duration-300 relative z-10 hover:z-20`}
            >
              {/* Image Frame */}
              <div className="border-[3px] border-[#907162] overflow-hidden mb-4 bg-gray-100 aspect-video relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-mono font-bold text-lg text-[#907162] mb-2 uppercase">{project.title}</h3>
                <p className="font-sans text-sm text-[#907162] font-medium leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`${project.color} px-2 py-1 font-sans font-bold text-[10px] uppercase text-[#907162] border-[2px] border-[#907162]`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t-2 border-dashed border-[#907162]/30 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#ffffff] border-[3px] border-[#907162] py-2 font-mono font-bold text-xs uppercase text-[#907162] hover:bg-[#FFD9EF] transition-colors"
                  >
                    {project.title === "EcoSenac" ? (
                      <>
                        <ExternalLink size={14} />
                        Figma
                      </>
                    ) : (
                      <>
                        <Github size={14} />
                        Código
                      </>
                    )}
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#907162] border-[3px] border-[#907162] py-2 font-mono font-bold text-xs uppercase text-[#F5F7CD] hover:bg-[#FCACD1] hover:text-[#907162] transition-colors"
                  >
                    <ExternalLink size={14} />
                    {project.title === "EcoSenac" ? "Protótipo" : "Acessar"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
