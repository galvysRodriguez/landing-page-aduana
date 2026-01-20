import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Cierra el menú móvil al hacer click
  };

  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Nuestra Historia', id: 'historia' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Clientes', id: 'clientes' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Customs Brokers de Venezuela"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop & iPad Navigation (Visible desde 'md') */}
          <div className='mi-div-oculto'>
            <div className="flex items-center space-x-4 lg:space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-[#1e3a8a] font-medium hover:text-[#10b981] transition-colors text-sm lg:text-base"
              >
                Inicio
              </button>

              <button
                onClick={() => scrollToSection('historia')}
                className="text-[#1e3a8a] font-medium hover:text-[#10b981] transition-colors text-sm lg:text-base"
              >
                Nuestra Historia
              </button>

              <button
                onClick={() => scrollToSection('servicios')}
                className="text-[#1e3a8a] font-medium hover:text-[#10b981] transition-colors text-sm lg:text-base"
              >
                Servicios
              </button>

              <button
                onClick={() => scrollToSection('clientes')}
                className="text-[#1e3a8a] font-medium hover:text-[#10b981] transition-colors text-sm lg:text-base"
              >
                Clientes
              </button>
              <a
                href="https://wa.me/584143808044"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#10b981] text-[#10b981] rounded-lg hover:bg-[#10b981] hover:text-white transition-all text-sm font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>


          {/* Mobile Button (Hamburguesa) */}
          <div className="md:invisible flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1e3a8a] hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:invisible absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-4 py-3 text-[#1e3a8a] hover:bg-gray-50 hover:text-[#10b981] rounded-lg transition-colors font-medium"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4">
            <a
              href="https://wa.me/584143808044"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#10b981] text-white rounded-xl font-bold"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}