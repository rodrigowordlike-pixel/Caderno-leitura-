import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, BookOpen } from 'lucide-react';

export const ACTIVITY_IMAGES = [
  {
    src: '/assets/aistudio/IMG_8848_bae3816b.jpeg',
    title: 'A Galinha Pintadinha',
    tag: 'Sons, Sílabas & Palavras',
    description: 'Associação sonora com quebra de sílabas visuais e leitura guiada',
  },
  {
    src: '/assets/aistudio/IMG_8847_4e1df6d0.jpeg',
    title: 'O Gato Guto',
    tag: 'Frases Guiadas com Estrelas',
    description: 'Pequenas frases com vocabulário progressivo e ritmo natural',
  },
  {
    src: '/assets/aistudio/IMG_8846_e57eceb1.jpeg',
    title: 'O Laço Rosa',
    tag: 'Ritmo & Entonação',
    description: 'História em versos curtos para a criança ler sem pausar mecanicamente',
  },
  {
    src: '/assets/aistudio/IMG_8844_492d187d.jpeg',
    title: 'A Pipoca Maluca',
    tag: 'Palavras do Dia a Dia',
    description: 'Ilustrações divertidas que geram curiosidade e engajamento imediato',
  },
  {
    src: '/assets/aistudio/IMG_8845_b6f5e78a.jpeg',
    title: 'O Pato Agitado',
    tag: 'Autonomia Leitora',
    description: 'Frases simples em caixa alta ideais para a fase inicial de alfabetização',
  },
  {
    src: '/assets/aistudio/IMG_8840_5bf12aa3.jpeg',
    title: 'A Árvore Alta',
    tag: 'Interpretação & Imaginação',
    description: 'Conexão afetiva com a historinha e reforço visual de cada frase',
  },
  {
    src: '/assets/aistudio/IMG_8839_f2ccf262.jpeg',
    title: 'A Vaca Mimosa',
    tag: 'Fixação de Sílabas Simples',
    description: 'Textos com rima suave que a criança consegue ler todinha sozinha',
  },
  {
    src: '/assets/aistudio/IMG_8843_7bd00d4e.jpeg',
    title: 'Meu Caderno de Leitura',
    tag: 'Sílabas Simples e Complexas',
    description: 'Capa e atividades do personagem Besourinho com desafios fônicos',
  },
  {
    src: '/assets/aistudio/IMG_8841_e9911728.jpeg',
    title: 'Caderno do Porquinho',
    tag: 'Formação de Palavras & Frases',
    description: 'Atividades práticas para acabar com as trocas de letras e dúvidas',
  },
  {
    src: '/assets/aistudio/IMG_8842_a8464329.jpeg',
    title: 'A Casinha Encantada',
    tag: 'Livro da Leitura Completo',
    description: 'Formato prático em espiral com letras grandes e ilustrações vivas',
  },
];

export const ActivitiesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-advance slides every 3.5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ACTIVITY_IMAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? ACTIVITY_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % ACTIVITY_IMAGES.length);
  };

  const current = ACTIVITY_IMAGES[currentIndex];

  return (
    <div className="mt-14 pt-12 border-t border-slate-200">
      
      {/* Header Requested by User */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Exemplos de Atividades Reais</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2">
          O Kit Completo de Alfabetização
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Um sistema progressivo de leitura desenvolvido por pedagogas para destravar a leitura da criança de forma leve, divertida e eficaz.
        </p>
      </div>

      {/* Main Interactive Carousel Showcase */}
      <div
        className="relative max-w-md sm:max-w-lg mx-auto"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Active Card with Image */}
        <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-xl border-2 border-amber-300 overflow-hidden">
          
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[3/4]">
            <img
              src={current.src}
              alt={current.title}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />

            {/* Subtle Gradient Overlay at bottom for readable text */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4 sm:p-5 text-white">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider mb-1">
                {current.tag}
              </span>
              <h4 className="text-lg sm:text-xl font-black leading-tight text-white mb-0.5">
                {current.title}
              </h4>
              <p className="text-xs text-slate-200 leading-snug line-clamp-2">
                {current.description}
              </p>
            </div>
          </div>

          {/* Controls: Prev / Next Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg border border-slate-200 transition-transform active:scale-90 cursor-pointer"
            aria-label="Atividade anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg border border-slate-200 transition-transform active:scale-90 cursor-pointer"
            aria-label="Próxima atividade"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicator Counter Pill */}
          <div className="absolute top-5 right-5 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider">
            {currentIndex + 1} / {ACTIVITY_IMAGES.length}
          </div>

        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {ACTIVITY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx
                  ? 'w-6 bg-amber-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ver atividade ${idx + 1}`}
            />
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-4 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-amber-600" />
          <span>Arraste ou clique nas setas para folhear os exemplos das páginas reais</span>
        </div>

      </div>

    </div>
  );
};
