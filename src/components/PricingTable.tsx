import React from 'react';
import { ArrowRight, Check, Lock, ShieldCheck, Star, X, Zap } from 'lucide-react';
import {
  ASSETS,
  CHECKOUT_URLS,
  decorateCheckoutUrl,
  trackAndRedirectToCheckout,
  warmCheckoutUrl,
} from '../data/checkoutConfig';
import { PRICING_PLANS } from '../data/landingData';

interface PricingTableProps {
  onOpenPrizeWheel: () => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({ onOpenPrizeWheel }) => {
  const basicPlan = PRICING_PLANS[0];
  const comboPlan = PRICING_PLANS[1];
  const comboUrl = decorateCheckoutUrl(CHECKOUT_URLS.combo);

  return (
    <section
      id="ofertas"
      className="cv-auto py-10 sm:py-14 bg-gradient-to-b from-slate-50 via-white to-amber-50/30 border-b border-slate-200/70 scroll-mt-6"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#FF3B69] mb-2">
            Escolha a melhor opção para sua família
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2 [text-wrap:balance]">
            Comece hoje mesmo com acesso vitalício em PDF
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Pagamento único, sem mensalidade. Receba no e-mail logo após a confirmação.
          </p>
        </div>

        <div className="space-y-8">
          {/* ============================================================== */}
          {/* 1. PRIMEIRO: PLANO BÁSICO (R$ 8,90)                            */}
          {/* ============================================================== */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs max-w-lg mx-auto">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {basicPlan.title}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-slate-400 line-through font-semibold">
                  {basicPlan.originalPrice}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-900">
                  {basicPlan.currentPrice}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              {basicPlan.tagline}
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-5">
              {basicPlan.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  {feat.included ? (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                  ) : (
                    <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  )}
                  <span className={feat.included ? 'font-medium text-slate-800' : 'text-slate-400 line-through'}>
                    {feat.text}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                warmCheckoutUrl('basic');
                onOpenPrizeWheel();
              }}
              className="w-full py-3.5 px-5 rounded-xl border-2 border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 font-extrabold text-sm uppercase tracking-wide transition-colors cursor-pointer"
            >
              {basicPlan.ctaText}
            </button>
          </div>

          {/* ============================================================== */}
          {/* 2. SEGUNDO (PROTAGONISTA): COMBO COMPLETO (R$ 9,90)            */}
          {/* ============================================================== */}
          <div className="relative bg-white rounded-[32px] border-2 border-[#FF3B69] p-5 sm:p-8 shadow-2xl shadow-rose-200/40 max-w-lg mx-auto">
            {/* Selo natural solicitado */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF3B69] text-white text-[10.5px] sm:text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-md whitespace-nowrap tracking-wide z-10">
              {comboPlan.badge}
            </div>

            <div className="text-center mt-2 mb-4">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {comboPlan.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {comboPlan.tagline}
              </p>
            </div>

            {/* Imagem real do Kit Completo */}
            <div className="my-4 flex justify-center">
              <div className="rounded-2xl overflow-hidden max-w-[320px] w-full bg-rose-50/40 p-2 border border-rose-100">
                <img
                  src={ASSETS.comboMockup}
                  alt="Combo Completo Meus 8 Cadernos da Leitura + 6 Bônus"
                  width={440}
                  height={440}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            {/* Avaliação */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <div className="flex items-center gap-0.5 text-[#FF3B69]">
                <Star className="w-4 h-4 fill-[#FF3B69]" />
                <Star className="w-4 h-4 fill-[#FF3B69]" />
                <Star className="w-4 h-4 fill-[#FF3B69]" />
                <Star className="w-4 h-4 fill-[#FF3B69]" />
                <Star className="w-4 h-4 fill-[#FF3B69]" />
              </div>
              <span className="text-slate-700 text-xs sm:text-sm font-bold">
                4,9/5 de avaliação das famílias
              </span>
            </div>

            {/* Todos os 8 cadernos + 6 bônus reais listados */}
            <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-800">
              {comboPlan.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-rose-50 border border-[#FF3B69] text-[#FF3B69] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className={feat.highlight ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}>
                    {feat.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Ancoragem destacando a diferença de apenas R$ 1,00 */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 text-center mb-5">
              <p className="text-xs sm:text-sm font-extrabold text-emerald-900 leading-snug">
                Por apenas R$ 1,00 a mais que o Plano Básico, você leva os 8 cadernos completos + todos os 6 bônus de apoio.
              </p>
            </div>

            {/* Preço do Combo Completo */}
            <div className="text-center mb-5">
              <span className="text-xs sm:text-sm text-slate-400 line-through font-semibold block">
                de {comboPlan.originalPrice}
              </span>
              <div className="text-5xl sm:text-6xl font-black text-[#FF3B69] tracking-tight leading-none my-1">
                {comboPlan.currentPrice}
              </div>
              <span className="text-xs sm:text-sm text-slate-600 font-medium block mt-1">
                Pagamento único via PIX ou Cartão
              </span>
            </div>

            <a
              href={comboUrl}
              onPointerDown={() => warmCheckoutUrl('combo')}
              onMouseEnter={() => warmCheckoutUrl('combo')}
              onClick={(e) => {
                e.preventDefault();
                trackAndRedirectToCheckout('combo', e.currentTarget);
              }}
              className="w-full py-4 px-5 rounded-2xl sm:rounded-full bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-base uppercase tracking-wider shadow-xl shadow-rose-200 border-b-4 border-[#C81C44] active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>{comboPlan.ctaText}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-around text-[11px] sm:text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Envio Imediato</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Garantia 7 Dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
