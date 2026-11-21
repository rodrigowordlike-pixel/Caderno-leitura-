import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CHECKOUT_URLS,
  decorateCheckoutUrl,
  trackAndRedirectToCheckout,
  warmCheckoutUrl,
} from '../data/checkoutConfig';

interface FinalCtaSectionProps {
  onOpenPrizeWheel: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenPrizeWheel }) => {
  const comboUrl = decorateCheckoutUrl(CHECKOUT_URLS.combo);

  return (
    <section className="cv-auto py-10 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2.5 [text-wrap:balance]">
          Comece hoje com seu filho em casa
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
          Escolha sua opção abaixo e receba o acesso em PDF imediatamente no seu e-mail, com 7 dias de garantia.
        </p>

        <div className="space-y-3">
          <a
            href={comboUrl}
            onPointerDown={() => warmCheckoutUrl('combo')}
            onMouseEnter={() => warmCheckoutUrl('combo')}
            onClick={(e) => {
              e.preventDefault();
              trackAndRedirectToCheckout('combo', e.currentTarget);
            }}
            className="w-full py-4 px-5 rounded-2xl bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-sm sm:text-base uppercase tracking-wide shadow-lg border-b-4 border-[#C81C44] active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>QUERO O COMBO COMPLETO (R$ 9,90)</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          <button
            type="button"
            onClick={() => {
              warmCheckoutUrl('basic');
              onOpenPrizeWheel();
            }}
            className="w-full py-3.5 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm uppercase tracking-wide transition-colors cursor-pointer"
          >
            QUERO O PLANO BÁSICO (R$ 8,90)
          </button>
        </div>
      </div>
    </section>
  );
};
