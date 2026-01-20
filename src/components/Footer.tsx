import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src={logo} 
              alt="Customs Brokers de Venezuela" 
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <h3 className="text-xl mb-4">
              Customs Brokers de Venezuela, C.A.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Agente y Asesor de Aduana autorizado desde 1981. 
              Soluciones integrales en logística y comercio exterior.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-6 text-[#10b981]">
              Información de Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Calle 12 de Octubre<br />
                    Guanta, Estado Anzoátegui<br />
                    Venezuela
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <a 
                  href="tel:+584143808044" 
                  className="text-gray-300 hover:text-[#10b981] transition-colors"
                >
                  +58 (414) 380-8044
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <a 
                  href="mailto:info@customsbrokers.com.ve" 
                  className="text-gray-300 hover:text-[#10b981] transition-colors"
                >
                  info@customsbrokers.com.ve
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div>
            <h4 className="text-xl mb-6 text-[#10b981]">
              Horario de Atención
            </h4>
            <div className="space-y-2 mb-6 text-gray-300">
              <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
              <p>Sábados: 8:00 AM - 12:00 PM</p>
              <p className="text-sm text-gray-400 mt-4">
                *Atención de emergencias 24/7
              </p>
            </div>
            
            <a
              href="https://wa.me/584143808044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Customs Brokers de Venezuela, C.A. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Auxiliar Autorizado de la Administración Pública - Aduana de Guanta
          </p>
        </div>
      </div>
    </footer>
  );
}
