import { useState, useEffect } from 'react';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Images1 from '../assets/slider/5141091577647270830.jpg'
import Images2 from '../assets/slider/5141091577647270832.jpg'
import Images3 from '../assets/slider/5150342323022531459.jpg'
import Images4 from '../assets/slider/5150342323022531461.jpg'
import Images5 from '../assets/slider/5150342323022531462.jpg'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const slides = [
    {
      url: Images1,
      title: "Especialista de Logística integrada en",
      highlight: "Aduana y Transportes desde 1981",
      desc: "Más de 40 años conectando a Venezuela con los puertos más importantes del mundo."
    },
    {
      url: Images2,
      title: "Transporte Aéreo Express",
      highlight: "Rapidez y Seguridad",
      desc: "Gestionamos sus envíos urgentes con prioridad absoluta y seguimiento en tiempo real."
    },
    {
      url: Images3,
      title: "Asesoría Aduanera",
      highlight: "Sin Complicaciones",
      desc: "Expertos en legislación venezolana para garantizar que su carga fluya sin retrasos."
    },
    {
      url: Images4,
      title: "Almacenaje Seguro",
      highlight: "Control Total",
      desc: "Infraestructura moderna para el resguardo y manejo de su mercancía más valiosa."
    },
    {
      url: Images5,
      title: "Soluciones de Carga Pesada",
      highlight: "Logística Terrestre",
      desc: "Transporte especializado para proyectos industriales de gran escala en todo el país."
    }
  ];


  const handleNext = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsExiting(false);
    }, 300); // Tiempo de la transición de salida del texto
  };

   const goToSlide = (index:number) => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsExiting(false);
    }, 300);
  };


  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  
  const handlePrev = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsExiting(false);
    }, 300);
  };

 

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-50" : "opacity-0"
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/40 via-transparent to-[#0f172a]"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className={`transition-all duration-500 transform ${isExiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            {slides[currentSlide].title}<br />
            <span className="text-[#10b981]">{slides[currentSlide].highlight}</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            {slides[currentSlide].desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/584143808044"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#10b981] text-white rounded-full hover:bg-[#059669] transition-all shadow-xl hover:shadow-[#10b981]/40 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold text-lg">Contactar a un Asesor</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-6 z-20 p-3 rounded-full bg-white/5 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-6 z-20 p-3 rounded-full bg-white/5 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators (Interactive Bars) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group py-4 px-1" // Área de click más grande
          >
            <div className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentSlide ? "w-12 bg-[#10b981]" : "w-4 bg-white/30 group-hover:bg-white/60"
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
}