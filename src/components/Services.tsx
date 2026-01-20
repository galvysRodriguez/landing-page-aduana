import { FileText, Plane, Anchor } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Agentes de Aduana',
      description: 'Asesoría técnica-legal especializada en materia aduanera y tramitación integral de permisos de importación y exportación.',
      features: [
        'Clasificación arancelaria',
        'Gestión documental',
        'Trámites aduaneros completos',
        'Asesoría legal especializada'
      ]
    },
    {
      icon: Plane,
      title: 'Transporte Internacional',
      description: 'Servicios completos de importación y exportación vía aérea, marítima y acarreo terrestre con cobertura nacional e internacional.',
      features: [
        'Transporte aéreo',
        'Transporte marítimo',
        'Acarreo terrestre',
        'Logística multimodal'
      ]
    },
    {
      icon: Anchor,
      title: 'Logística Especializada',
      description: 'Soluciones avanzadas de almacenamiento y operaciones especiales en depósitos In-Bond y regímenes aduaneros especializados.',
      features: [
        'Depósitos In-Bond',
        'Regímenes especiales',
        'Operaciones portuarias',
        'Almacenamiento seguro'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#1e3a8a] mb-4">
            Servicios Especializados
          </h2>
          <div className="w-24 h-1 bg-[#10b981] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales adaptadas a las necesidades específicas de cada cliente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#10b981]"
            >
              <div className="bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl text-[#1e3a8a] mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
