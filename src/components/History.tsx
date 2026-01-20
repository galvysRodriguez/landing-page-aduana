import { Calendar, Shield, Award } from 'lucide-react';
import Trayectory from '../assets/trayectoria.jpg';

export function History() {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#1e3a8a] mb-4">
            Nuestra Trayectoria
          </h2>
          <div className="w-24 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={Trayectory}
              alt="Puerto de Venezuela"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#10b981] text-white p-6 rounded-lg shadow-xl">
              <p className="text-5xl mb-1">40+</p>
              <p className="text-sm">Años de Experiencia</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#1e3a8a]/10 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <h3 className="text-xl text-[#1e3a8a] mb-2">
                  Fundada el 10 de Marzo de 1981
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Con más de cuatro décadas de experiencia, hemos consolidado nuestra 
                  posición como líderes en servicios de agenciamiento aduanal en Venezuela.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#1e3a8a]/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <h3 className="text-xl text-[#1e3a8a] mb-2">
                  Auxiliares Autorizados
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Somos auxiliares autorizados de la Administración Pública por la 
                  Aduana de Guanta, garantizando el cumplimiento de todas las normativas vigentes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#1e3a8a]/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <h3 className="text-xl text-[#1e3a8a] mb-2">
                  Excelencia y Cumplimiento
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nos enfocamos en la excelencia operativa y el cumplimiento estricto 
                  de la normativa aduanera, brindando seguridad y confianza a nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
