import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada! Obrigado pelo contato.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "lorenab.lira@outlook.com",
      href: "mailto:lorenab.lira@outlook.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(81) 9 9913-5206",
      href: "tel:+5581999135206",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Pernambuco, Brasil",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-script text-6xl text-[#907162] mb-2">Vamos Conversar</h2>
            <p className="font-mono text-sm uppercase tracking-widest text-[#907162]">
              Iniciar um novo projeto
            </p>
          </div>
          <span className="font-pixel text-4xl text-[#907162] opacity-50">✉</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          {/* Postcard effect background */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#907162_0,#907162_2px,transparent_2px,transparent_4px)] h-[10px] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block"></div>

          {/* Form */}
          <div className="w-full lg:w-3/5 bg-[#ffffff] border-[3px] border-[#907162] p-8 shadow-[8px_8px_0px_0px_#907162] relative z-10">
            <div className="absolute top-4 right-4 bg-[#FFD9EF] border-[3px] border-[#907162] p-2 rotate-[10deg] shadow-[2px_2px_0px_0px_#907162]">
              <span className="font-pixel text-xs text-[#907162]">SELO</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full space-y-2">
                  <label htmlFor="name" className="font-mono text-xs font-bold uppercase tracking-widest text-[#907162]">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-[#F5F7CD] border-[3px] border-[#907162] p-3 font-sans text-sm outline-none focus:bg-[#D6FCFF] transition-colors"
                  />
                </div>
                <div className="w-full space-y-2">
                  <label htmlFor="email" className="font-mono text-xs font-bold uppercase tracking-widest text-[#907162]">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-[#F5F7CD] border-[3px] border-[#907162] p-3 font-sans text-sm outline-none focus:bg-[#D6FCFF] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs font-bold uppercase tracking-widest text-[#907162]">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-[#F5F7CD] border-[3px] border-[#907162] p-3 font-sans text-sm outline-none focus:bg-[#D6FCFF] transition-colors resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="group flex items-center justify-center gap-3 w-full bg-[#907162] text-[#F5F7CD] border-[3px] border-[#907162] p-4 font-mono font-bold uppercase tracking-widest hover:bg-[#FCACD1] hover:text-[#907162] transition-colors shadow-[4px_4px_0px_0px_rgba(144,113,98,0.5)]"
              >
                Enviar Mensagem
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6 relative z-10">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-[#D6FCFF] border-[3px] border-[#907162] p-6 shadow-[6px_6px_0px_0px_#907162] flex items-center gap-4 hover:-translate-y-1 transition-transform"
              >
                <div className="bg-[#ffffff] border-[3px] border-[#907162] w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                  <info.icon size={20} className="text-[#907162]" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#907162] opacity-70 mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a href={info.href} className="font-sans font-bold text-[#907162] hover:text-[#FCACD1] transition-colors break-all">
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-sans font-bold text-[#907162] break-all">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
            
            <div className="mt-auto bg-[#FCACD1] border-[3px] border-[#907162] p-6 shadow-[6px_6px_0px_0px_#907162] rotate-[2deg]">
              <h3 className="font-mono font-bold uppercase tracking-widest text-[#907162] mb-2">Disponível para Projetos</h3>
              <p className="font-sans text-sm text-[#907162] font-medium leading-relaxed">
                Atualmente aberta a novas oportunidades e desafios técnicos. Vamos construir algo incrível!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
