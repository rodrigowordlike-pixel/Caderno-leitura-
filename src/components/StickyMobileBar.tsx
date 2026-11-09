import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { CHECKOUT_URLS, trackAndRedirectToCheckout } from '../data/landingData';

interface StickyMobileBarProps {
  onCtaClick?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onCtaClick }) => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 450px
      if (window.scrollY > 450) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showBar) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3 max-h-[64px]">
      <div className="min-w-0">
        <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-700">
          <Flame className="w-3 h-3 text-amber-600 fill-amber-500" />
          <span>80% OFF • Lote Final</span>
        </div>
        <div className="text-xs font-black text-slate-900 leading-tight">
          Apenas <span className="text-[#FF3B69] text-sm">R$ 37,90</span>
        </div>
      </div>

      <a
        href={CHECKOUT_URLS.combo}
        onClick={(e) => {
          e.preventDefault();
          trackAndRedirectToCheckout('combo');
        }}
        className="px-4 py-2.5 rounded-xl bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-xs shadow-md flex items-center gap-1.5 shrink-0 active:scale-95 cursor-pointer text-center"
      >
        <span>Garantir Combo</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
