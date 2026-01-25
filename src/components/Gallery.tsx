import portuarias from '../assets/slider2/5141091577647270828.jpg'
import almacenamiento from '../assets/slider2/5141091577647270831.jpg';
import aduanal from '../assets/slider2/5141091577647270834.jpg';
import transporte from '../assets/slider2/5141091577647270835.jpg';
import { useState } from 'react'

const galleryImages = [
  {
    url: portuarias,
    title: 'Logística de Carga Pesada',
    description: 'Transporte terrestre eficiente con flota de gran capacidad para carga paletizada.'
  },
  {
    url: almacenamiento,
    title: 'Transporte y Manipulación de Químicos',
    description: 'Manejo especializado de contenedores IBC con estrictos protocolos de seguridad y control de derrames.'
  },
  {
    url: aduanal,
    title: 'Transporte de Material Petrolero',
    description: 'Servicios logísticos especializados para la industria energética y transporte de carga sobredimensionada.'
  },
  {
    url: transporte,
    title: 'Operaciones en Plantas Industriales',
    description: 'Distribución técnica y suministro directo en instalaciones industriales y campos petroleros.'
  }
];



const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}


export function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">
            Nuestras Operaciones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre cómo trabajamos día a día para ofrecer soluciones logísticas de clase mundial
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="div-img">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
            >
              {/* Image */}
               <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay - appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-16 h-1 bg-emerald-500 mb-4"></div>
                  <h3 className="text-white text-2xl mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Label - always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-white text-xl">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿Necesitas más información sobre nuestros servicios?
          </p>
          <a
            href="https://wa.me/584143808044"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
