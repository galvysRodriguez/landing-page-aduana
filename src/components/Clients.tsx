import logoChevron from '../assets/customer/chevron.png';
import logoKN from '../assets/customer/nagel.png';
import logoNalco from '../assets/customer/nalco.png';
import logoGamma from '../assets/customer/gamma.png';

export function Clients() {
  const clients = [
    { 
      name: 'Kuehne + Nagel', 
      logo: logoKN, // Sustituye por tus rutas reales
      alt: 'Logo de Kuehne + Nagel'
    },
    { 
      name: 'Chevron', 
      logo: logoChevron, 
      alt: 'Logo de Chevron'
    },
    { 
      name: 'Gamma Química de Venezuela', 
      logo: logoGamma, 
      alt: 'Logo de Gamma Química'
    },
    { 
      name: 'Nalco de Venezuela', 
      logo: logoNalco,
      alt: 'Logo de Nalco'
    }
  ];

  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">
            Clientes que Confían en Nosotros
          </h2>
          <div className="w-24 h-1 bg-[#10b981] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas líderes que han confiado en nuestra experiencia y profesionalismo
          </p>
        </div>

        {/* Grid de Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 flex flex-col items-center justify-center hover:shadow-lg hover:bg-white transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-full h-24 flex items-center justify-center mb-4">
                <img 
                  src={client.logo} 
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain  group-hover:grayscale-0 transition-all duration-300"
              
                />
              </div>
              <p className="text-center text-xs font-semibold text-gray-400 group-hover:text-[#1e3a8a] uppercase tracking-wider">
                {client.name}
              </p>
            </div>
          ))}
        </div>

      
        <div className="relative mt-20 overflow-hidden rounded-2xl bg-[#1e3a8a]">
          
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80"
              alt="Partnership"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-transparent"></div>
          </div>

          <div className="relative z-10 p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Construimos Relaciones de Confianza
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Cada cliente es un socio estratégico. Trabajamos con dedicación para 
              garantizar el éxito de sus operaciones comerciales internacionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}