/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect } from 'react';
import { Globe, ChevronDown, Check, Loader2 } from 'lucide-react';

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<'ES' | 'EN'>('ES');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initGoogle = () => {
      // @ts-ignore
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        // @ts-ignore
        new window.google.translate.TranslateElement({
          pageLanguage: 'es',
          includedLanguages: 'en,es',
          autoDisplay: false
        }, 'google_translate_element');
      }
    };

    // Pequeño delay para asegurar que el DOM de React esté listo
    const timer = setTimeout(initGoogle, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTranslate = (code: string, label: 'ES' | 'EN') => {
    if (label === currentLang || isLoading) return;

    setIsLoading(true);
    setIsOpen(false);
    
    // @ts-ignore
    if (window.triggerGoogleTranslate) {
      // @ts-ignore
      window.triggerGoogleTranslate(code);
      setCurrentLang(label);
    }

    // Aumentamos el tiempo de bloqueo. Google Translate necesita 
    // estabilizar el DOM antes de permitir otro cambio.
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de "respiro" para el motor de traducción
  };

  return (
    <div className="relative w-full md:w-auto">
      <div id="google_translate_element" className="absolute opacity-0 pointer-events-none -z-10"></div>

      {/* Overlay de Bloqueo: Evita clics en cualquier parte de la nav mientras traduce */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] cursor-wait bg-white/10 backdrop-blur-[1px]" />
      )}

      <button
        disabled={isLoading}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between md:justify-start w-full md:w-auto gap-2 px-3 py-2 rounded-lg transition-all font-bold group
          ${isLoading ? 'opacity-50' : 'hover:bg-gray-100 text-[#1e3a8a]'}`}
      >
        <div className="flex items-center gap-2">
          {isLoading ? (
            <Loader2 className="w-4 h-4 text-[#10b981] animate-spin" />
          ) : (
            <Globe className="w-4 h-4 text-[#10b981]" />
          )}
          <span className="text-sm">
            {isLoading ? (currentLang === 'ES' ? 'Traduciendo...' : 'Translating...') : (currentLang === 'ES' ? 'Español' : 'English')}
          </span>
        </div>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-gray-400`} />
      </button>

      {/* Dropdown Menu */}
      <div className={`
        ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'} 
        overflow-hidden transition-all duration-300 ease-in-out md:absolute md:right-0 md:w-40 md:bg-white md:border md:border-gray-100 md:shadow-2xl md:rounded-xl md:py-2 md:z-50 bg-gray-50/80 rounded-lg
      `}>
        <div className="flex flex-col">
          <button 
            disabled={isLoading}
            onClick={() => handleTranslate('es', 'ES')} 
            className={`flex items-center justify-between px-4 py-3 md:py-2 text-sm transition-colors
              ${currentLang === 'ES' ? 'text-[#10b981] font-bold' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <span>Español</span>
            {currentLang === 'ES' && <Check size={14} />}
          </button>
          <button 
            disabled={isLoading}
            onClick={() => handleTranslate('en', 'EN')} 
            className={`flex items-center justify-between px-4 py-3 md:py-2 text-sm transition-colors
              ${currentLang === 'EN' ? 'text-[#10b981] font-bold' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <span>English</span>
            {currentLang === 'EN' && <Check size={14} />}
          </button>
        </div>
      </div>

      {isOpen && !isLoading && (
        <div className="hidden md:block fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}