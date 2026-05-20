import { Award, GraduationCap } from "lucide-react";

export function Certificates() {
  const education = {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Senac",
    status: "Graduanda (Conclusão: 2027)",
    description: "Formação focada em engenharia de software, modelagem de dados e desenvolvimento de aplicações.",
    color: "bg-[#F5F7CD]",
  };

  const certificates = [
    {
      title: "SQL e PostgreSQL",
      issuer: "Udemy",
      date: "Concluído",
      color: "bg-[#FFD9EF]",
      rotation: "rotate-[-1deg]",
    },
    {
      title: "Fundamentos de Orientação a Objetos",
      issuer: "TIC em Trilhas",
      date: "Concluído",
      color: "bg-[#D6FFDB]",
      rotation: "rotate-[2deg]",
    },
    {
      title: "Java + Springboot",
      issuer: "Udemy",
      date: "Em Andamento",
      color: "bg-[#D6FCFF]",
      rotation: "rotate-[-2deg]",
    },
    {
      title: "Banco de Dados Relacional",
      issuer: "FreeCodeCamp",
      date: "Em Andamento",
      color: "bg-[#F5F7CD]",
      rotation: "rotate-[1deg]",
    },
    {
      title: "UX Writing & Psicologia UX",
      issuer: "TIC em Trilhas",
      date: "Concluído",
      color: "bg-[#FCACD1]",
      rotation: "rotate-[-3deg]",
    },
  ];

  return (
    <section id="certificates" className="py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-pixel text-2xl text-[#907162]">✦</span>
            <h2 className="font-script text-6xl text-[#907162] text-center">Educação & Certificados</h2>
            <span className="font-pixel text-2xl text-[#907162]">✦</span>
          </div>
          <p className="font-sans font-bold text-sm uppercase tracking-widest text-[#907162] border-b-2 border-dashed border-[#907162] pb-1">
            Minha Jornada Acadêmica
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className={`${education.color} border-[3px] border-[#907162] p-8 shadow-[8px_8px_0px_0px_#907162] rotate-[-1deg] hover:rotate-0 transition-transform relative`}>
            {/* Tape piece */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 border-2 border-[#907162]/20 rotate-[-2deg] backdrop-blur-sm shadow-sm z-10"></div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 mt-2 border-b-2 border-dashed border-[#907162]/30 pb-4">
              <div className="flex items-center gap-4">
                <div className="bg-white border-[3px] border-[#907162] p-3 rounded-full">
                  <GraduationCap className="text-[#907162]" size={32} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-2xl text-[#907162] leading-tight">
                    {education.title}
                  </h3>
                  <p className="font-mono text-sm uppercase tracking-widest text-[#907162] mt-1">
                    {education.institution}
                  </p>
                </div>
              </div>
              <span className="font-pixel text-xs text-[#907162] bg-white px-3 py-2 border-[2px] border-[#907162] whitespace-nowrap">
                {education.status}
              </span>
            </div>
            
            <p className="font-sans text-[#907162] font-medium leading-relaxed">
              {education.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className={`${cert.color} border-[3px] border-[#907162] p-6 shadow-[6px_6px_0px_0px_#907162] ${cert.rotation} transition-transform hover:rotate-0 hover:-translate-y-2 relative`}
            >
              {/* Tape piece */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 border-2 border-[#907162]/20 rotate-3 backdrop-blur-sm shadow-sm z-10"></div>
              
              <div className="flex items-start justify-between mb-6 mt-2">
                <div className="bg-white border-[3px] border-[#907162] p-3 rounded-full">
                  <Award className="text-[#907162]" size={24} />
                </div>
                <span className="font-pixel text-xs text-[#907162] bg-white px-2 py-1 border-[2px] border-[#907162]">
                  {cert.date}
                </span>
              </div>
              
              <h3 className="font-sans font-bold text-xl text-[#907162] mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="font-mono text-sm uppercase tracking-widest text-[#907162] opacity-80">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
