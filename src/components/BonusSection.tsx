import React from 'react';
import { Sparkles } from 'lucide-react';
import { CHECKOUT_URLS, trackAndRedirectToCheckout } from '../data/landingData';

export const COMPACT_BONUSES = [
  {
    id: 'bonus-1',
    title: 'Apostila Pré-silábica',
    image: '/assets/optimized/IMG_8849_802607ea.webp',
    description: 'Percepção visual, coordenação e discriminação auditiva.',
    originalPrice: 'De R$ 47,90',
    freeLabel: 'GRÁTIS'
  },
  {
    id: 'bonus-2',
    title: 'Silábico Alfabético',
    image: '/assets/optimized/IMG_8850_0f38af62.webp',
    description: 'Correspondência entre fonemas e grafemas.',
    originalPrice: 'De R$ 47,90',
    freeLabel: 'GRÁTIS'
  },
  {
    id: 'bonus-3',
    title: 'Alfabético',
    image: '/assets/optimized/IMG_8851_7c1333ed.webp',
    description: 'Compreensão plena e escrita convencional.',
    originalPrice: 'De R$ 47,90',
    freeLabel: 'GRÁTIS'
  },
  {
    id: 'bonus-4',
    title: 'Sílabas sem valor',
    image: '/assets/optimized/IMG_8852_5d97c54a.webp',
    description: 'Análise fonológica avançada e transição sonora.',
    originalPrice: 'De R$ 29,90',
    freeLabel: 'GRÁTIS'
  },
  {
    id: 'bonus-5',
    title: 'Silábicos com valor',
    image: '/assets/optimized/IMG_8854_7e02eb0d.webp',
    description: 'Fixação das vogais e junção correta das sílabas.',
    originalPrice: 'De R$ 29,90',
    freeLabel: 'GRÁTIS'
  },
  {
    id: 'bonus-6',
    title: 'Sílabas Complexas',
    image: '/assets/optimized/IMG_8853_1f7fa2e3.webp',
    description: 'Domínio de encontros consonantais (BRA, TRU, CLI).',
    originalPrice: 'De R$ 29,90',
    freeLabel: 'GRÁTIS'
  }
];

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="py-8 sm:py-12 bg-[#FFF2EC] border-b border-amber-200/60 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        
        {/* Section Header - Sensação de Ganho Imediato */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-2 shadow-2xs">
            <span>🎁 PRESENTE ESPECIAL LIBERADO HOJE</span>
          </span>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2 [text-wrap:balance]">
            Comprando hoje você vai receber <span className="text-emerald-600 underline decoration-emerald-300 decoration-2">totalmente gratuito:</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
            Mais de <strong className="text-slate-900 font-extrabold">R$ 233,40</strong> em materiais complementares de alfabetização sem pagar nem um centavo a mais por eles:
          </p>
        </div>

        {/* 2-Column Grid on Mobile, Exactly Matching Reference Screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mb-10">
          {COMPACT_BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="relative bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 border-2 border-dashed border-amber-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow pt-4"
            >
              {/* Pink Floating BÔNUS Pill */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF2D60] text-white text-[10px] sm:text-[11px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs whitespace-nowrap">
                BÔNUS
              </div>

              <div>
                {/* Book Cover Image */}
                <div className="rounded-xl overflow-hidden bg-slate-50 aspect-[3/4] mb-2 sm:mb-3 shadow-xs border border-slate-100">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1 leading-snug line-clamp-1">
                  {bonus.title}
                </h3>

                {/* Short Description */}
                <p className="text-[10px] sm:text-[11.5px] text-slate-500 leading-tight mb-2 line-clamp-2">
                  {bonus.description}
                </p>
              </div>

              {/* Price Line with Pink Crossed-Out Value & Bold Green GRÁTIS */}
              <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10.5px] sm:text-xs">
                <span className="line-through text-[#FF2D60] font-bold">
                  {bonus.originalPrice}
                </span>
                <span className="text-[#00B050] font-black uppercase">
                  {bonus.freeLabel}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Anchored Value Summary Callout */}
        <div className="max-w-md mx-auto bg-white/95 border-2 border-amber-300 rounded-2xl p-4 text-center shadow-md">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-700 font-bold mb-3">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Valor real de todos os 6 bônus:</span>
            <span className="line-through text-[#FF2D60] font-black text-sm">R$ 233,40</span>
            <span className="text-white bg-[#00B050] font-black px-2 py-0.5 rounded text-xs ml-1 uppercase shadow-xs">
              100% GRÁTIS
            </span>
          </div>

          <a
            href={CHECKOUT_URLS.combo}
            onClick={(e) => {
              e.preventDefault();
              trackAndRedirectToCheckout('combo');
            }}
            className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-600 via-[#00B050] to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer uppercase tracking-wider text-center"
          >
            <span>QUERO GARANTIR TODOS OS BÔNUS POR R$ 37,90</span>
          </a>
        </div>

      </div>
    </section>
  );
};
