import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "INÍCIO", id: "hero", color: "bg-[#F5F7CD]", textColor: "text-[#907162]" },
    { label: "SOBRE", id: "about", color: "bg-[#FFD9EF]", textColor: "text-[#907162]" },
    { label: "CERTIFICADOS", id: "certificates", color: "bg-[#D6FCFF]", textColor: "text-[#907162]" },
    { label: "HABILIDADES", id: "skills", color: "bg-[#907162]", textColor: "text-[#F5F7CD]" },
    { label: "PROJETOS", id: "projects", color: "bg-[#FCACD1]", textColor: "text-[#907162]" },
    { label: "CONTATO", id: "contact", color: "bg-[#F5F7CD]", textColor: "text-[#907162]" },
  ];

  return (
    <>
      <nav className="absolute -top-[45px] left-0 right-0 z-0 hidden md:block">
        <div className="flex gap-2 items-end px-4">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-6 py-3 font-sans font-bold text-sm tracking-widest
                  rounded-t-xl border-[3px] border-b-0 border-[#907162]
                  transition-all duration-300 origin-bottom hover:-translate-y-2
                  ${item.color} ${item.textColor}
                  ${isActive ? 'z-20 h-[50px] translate-y-1 pb-4' : 'z-10 h-[45px]'}
                `}
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
                  marginLeft: index === 0 ? '0' : '-15px',
                }}
              >
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-[#907162] text-[#F5F7CD] p-3 rounded-full border-[3px] border-[#907162] shadow-[4px_4px_0px_0px_rgba(144,113,98,0.5)]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 w-48 bg-[#F5F7CD] border-[3px] border-[#907162] rounded-xl shadow-[6px_6px_0px_0px_#907162] flex flex-col overflow-hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  text-left px-4 py-3 font-sans font-bold text-sm tracking-widest border-b-2 border-[#907162]/20 last:border-0
                  hover:bg-[#FFD9EF] hover:text-[#907162] transition-colors
                  ${item.textColor === "text-[#F5F7CD]" ? "bg-[#907162] hover:bg-[#907162]/90 hover:text-[#F5F7CD]" : "text-[#907162]"}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
