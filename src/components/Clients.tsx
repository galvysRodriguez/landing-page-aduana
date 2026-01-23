import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Tus imports se mantienen...
import logoChevron from '../assets/customer/chevron.png';
import logoKN from '../assets/customer/nagel.png';
import logoNalco from '../assets/customer/nalcoWalter.png';
import logoGamma from '../assets/customer/gamma.png';
import logoChampionX from '../assets/customer/championX.png';
import logoBakerHughes from '../assets/customer/bakerHughes.png';
import logoMetor from '../assets/customer/metor.png';
import logoHalliburton from '../assets/customer/halliburton.png';
import logoClariant from '../assets/customer/clariant.png';
import logoEcolab from '../assets/customer/ecolab.png';

export function Clients() {
  const allClients = [
    { name: 'Kuehne + Nagel', logo: logoKN, alt: 'Logo de KN' },
    { name: 'Chevron', logo: logoChevron, alt: 'Logo de Chevron' },
    { name: 'Gamma Química', logo: logoGamma, alt: 'Logo de Gamma' },
    { name: 'Nalco Water', logo: logoNalco, alt: 'Logo de Nalco' },
    { name: 'ChampionX', logo: logoChampionX, alt: 'Logo de ChampionX' },
    { name: 'Baker Hughes', logo: logoBakerHughes, alt: 'Logo de Baker' },
    { name: 'Metor', logo: logoMetor, alt: 'Logo de Metor' },
    { name: 'Halliburton', logo: logoHalliburton, alt: 'Logo de Halliburton' },
    { name: 'Clariant', logo: logoClariant, alt: 'Logo de Clariant' },
    { name: 'Ecolab', logo: logoEcolab, alt: 'Logo de Ecolab' },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(allClients.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentClients = allClients.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="clientes" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
            Nuestros Clientes
          </h2>
          <div className="w-24 h-1.5 bg-[#10b981] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empresas globales que confían en nuestra infraestructura logística.
          </p>
        </div>

        {/* Contenedor Principal con Botones Flotantes más grandes */}
        <div className="relative px-2">
          
          {/* Botón Izquierda - Más grande y posicionado más afuera */}
          <button 
            onClick={prevPage}
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-2xl border border-gray-100 text-gray-400 hover:text-[#1e3a8a] hover:scale-110 transition-all active:scale-95"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>

          {/* Grid de 4 columnas fijas */}
          {/* min-h-64 asegura que la sección no colapse si hay menos items */}
          <div className="client-grid">
            {currentClients.map((client, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-[2rem] p-10 flex flex-col items-center justify-center hover:shadow-2xl hover:bg-white transition-all duration-500 border border-gray-100 group animate-in fade-in zoom-in duration-300"
              >
                <div className="w-full h-32 flex items-center justify-center mb-6">
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                <p className="text-center text-xs font-bold text-gray-400 group-hover:text-[#1e3a8a] uppercase tracking-[0.2em] transition-colors">
                  {client.name}
                </p>
              </div>
            ))}
            
            {/* Celdas invisibles para mantener el ancho de las tarjetas cuando faltan elementos */}
            {currentClients.length < itemsPerPage && 
              Array.from({ length: itemsPerPage - currentClients.length }).map((_, i) => (
                <div key={`empty-${i}`} className="hidden lg:block"></div>
              ))
            }
          </div>

          {/* Botón Derecha - Más grande */}
          <button 
            onClick={nextPage}
            className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-2xl border border-gray-100 text-gray-400 hover:text-[#1e3a8a] hover:scale-110 transition-all active:scale-95"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dots de navegación más estéticos */}
        <div className="flex justify-center gap-3 mt-12">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentPage === i ? 'w-10 bg-[#1e3a8a]' : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Banner de Confianza - Diseño Premium */}
        <div className="relative mt-24 overflow-hidden rounded-[3rem] bg-[#1e3a8a] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80"
              alt="Partnership"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a]/90 to-transparent"></div>
          </div>
          <div className="relative z-10 p-16 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Construimos Relaciones de Confianza
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
              Tratamos cada operación como si fuera propia. Su éxito en el comercio 
              internacional es nuestra mayor prioridad y compromiso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}