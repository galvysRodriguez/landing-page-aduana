import { Shield, Target, Users, Heart } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Shield,
      title: 'Integridad',
      description: 'Actuamos con honestidad y transparencia en cada operación, cumpliendo rigurosamente con la normativa legal y aduanera.'
    },
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Buscamos la perfección en cada servicio, mejorando continuamente nuestros procesos y estándares de calidad.'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos en equipo con nuestros clientes, socios y autoridades para alcanzar objetivos comunes.'
    },
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Nos dedicamos plenamente al éxito de nuestros clientes, brindando soluciones personalizadas y eficientes.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#10b981] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10b981] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">
            Nuestros Valores
          </h2>
          <div className="w-24 h-1 bg-[#10b981] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Los principios que guían nuestro trabajo diario y definen nuestra cultura empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all border border-white/20"
            >
              <div className="bg-[#10b981] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl text-white mb-3">
                {value.title}
              </h3>
              
              <p className="text-gray-200 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <p className="text-5xl text-[#10b981] mb-2">40+</p>
            <p className="text-white">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-5xl text-[#10b981] mb-2">100%</p>
            <p className="text-white">Cumplimiento Legal</p>
          </div>
          <div className="text-center">
            <p className="text-5xl text-[#10b981] mb-2">24/7</p>
            <p className="text-white">Soporte Disponible</p>
          </div>
        </div>
      </div>
    </section>
  );
}
