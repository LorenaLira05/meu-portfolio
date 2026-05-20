export function Skills() {
  const skillCategories = [
    {
      category: "Back-end & Programação",
      skills: [
        "Node.js (APIs REST, autenticação e integração)",
        "Java (POO e desenvolvimento orientado a objetos)",
        "Python (nível básico a intermediário)"
      ],
      color: "bg-[#FFD9EF]"
    },
    {
      category: "Banco de Dados",
      skills: [
        "Modelagem de bancos relacionais",
        "SQL com PostgreSQL e MySQL",
        "Criação, otimização e análise de consultas"
      ],
      color: "bg-[#D6FCFF]"
    },
    {
      category: "UI/UX & Produto",
      skills: [
        "Prototipação no Figma",
        "UX Writing e design centrado no usuário",
        "Construção de experiências visuais funcionais"
      ],
      color: "bg-[#FCACD1]"
    },
    {
      category: "Ferramentas & Tecnologias",
      skills: [
        "Git e GitHub",
        "Spring Boot",
        "VS Code, IntelliJ IDEA e Eclipse"
      ],
      color: "bg-[#F5F7CD]"
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-12 relative bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,#907162_20px)] bg-opacity-20">
      {/* Background overlay to dull the lines */}
      <div className="absolute inset-0 bg-[#F5F7CD]/80"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12 border-b-[3px] border-[#907162] pb-4">
          <h2 className="font-script text-6xl text-[#907162]">Habilidades</h2>
          <span className="font-mono text-sm font-bold tracking-widest uppercase text-[#907162] bg-[#ffffff] border-[3px] border-[#907162] px-3 py-1 shadow-[2px_2px_0px_0px_#907162]">
            Inventário
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative">
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#ffffff]/50 backdrop-blur-sm border border-[#907162]/20 rotate-[-2deg] z-20"></div>
              
              <div className="bg-[#ffffff] border-[3px] border-[#907162] p-6 shadow-[4px_4px_0px_0px_#907162] h-full relative z-10">
                <h3 className="font-mono text-xl font-bold uppercase tracking-widest text-[#907162] mb-6 text-center border-b-2 border-dashed border-[#907162]/30 pb-4">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${category.color} px-3 py-1.5 border-[2px] border-[#907162] font-sans font-bold text-xs text-[#907162] rotate-[${(skillIndex % 3) - 1}deg] hover:scale-110 transition-transform cursor-default`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
