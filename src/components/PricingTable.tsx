import React, { useState, useEffect } from 'react';
import { 
  Check, 
  X,
  ShieldCheck, 
  Lock, 
  Clock, 
  Star,
  Sparkles,
  Zap
} from 'lucide-react';
import { ASSETS, CHECKOUT_URLS, trackAndRedirectToCheckout } from '../data/landingData';
import { DownsellModal } from './DownsellModal';

interface PricingTableProps {
  onCheckout: (planId: 'basic' | 'combo' | 'combo-downsell', price: string) => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({ onCheckout }) => {
  const [isDownsellOpen, setIsDownsellOpen] = useState(false);

  // Dynamic countdown timer for urgency (14:59 ticking down)
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackAndRedirectToCheckout('basic');
  };

  const handleComboClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackAndRedirectToCheckout('combo');
  };

  const handleAcceptUpgrade = () => {
    setIsDownsellOpen(false);
    trackAndRedirectToCheckout('combo');
  };

  const handleContinueBasic = () => {
    setIsDownsellOpen(false);
    trackAndRedirectToCheckout('basic');
  };

  // Exact 8 bullet points requested in user reference
  const comboChecklist = [
    'Tudo do Kit Completo',
    '🎁 Bônus 1 — Método Silábico Alfabético',
    '🎁 Bônus 2 — Sílabas sem valor sonoro',
    '🎁 Bônus 3 — pré-silábico',
    '🎁 Bônus 4 — Sílabas com valor sonoro',
    '🎁 Bônus 5 — Material Alfabético',
    '🎁 Bônus 6 — Sílabas Complexas',
    'Acesso vitalício + 7 dias de garantia',
  ];

  return (
    <section id="precos" className="py-8 sm:py-12 bg-gradient-to-b from-rose-50/40 via-white to-amber-50/30 scroll-mt-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/90 text-[#FF3B69] text-xs font-black uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 fill-[#FF3B69]" />
            <span>Condição Exclusiva de Lançamento</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
            Escolha o Kit Completo Para o Seu Filho
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Pagamento único, sem mensalidades. Acesso vitalício liberado no seu e-mail em minutos.
          </p>

          {/* Urgency Timer */}
          <div className="mt-3.5 inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 rounded-full py-1.5 px-4 text-xs text-amber-950 font-bold">
            <Clock className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span>
              Preço promocional válido por:{' '}
              <span className="font-mono text-[#FF3B69] font-black text-sm">
                {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 1. MAIN HIGHLIGHTED OFFER CARD (PACOTE PREMIUM - R$ 37,90)     */}
        {/* EXACT REFERENCE DESIGN FROM image_cdef88c2.png & image_2de26706 */}
        {/* ============================================================== */}
        <div className="relative bg-white rounded-[36px] border-2 border-[#FF3B69] p-5 sm:p-8 shadow-2xl shadow-rose-200/50 max-w-lg mx-auto flex flex-col justify-between transition-all">
          
          {/* Floating Badge - EXACT MATCH to reference */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF3B69] text-white text-[11px] sm:text-xs font-black uppercase px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 tracking-wider whitespace-nowrap z-10">
            <span className="text-yellow-300 text-sm leading-none">★</span>
            <span>MAIS ESCOLHIDO</span>
          </div>

          <div>
            {/* Header */}
            <div className="text-center mt-2 mb-3">
              <p className="text-[#FF3B69] text-xs sm:text-sm font-black uppercase tracking-widest">
                PACOTE PREMIUM
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Kit + 6 Bônus Exclusivos
              </h3>
            </div>

            {/* Product Composite Mockup */}
            <div className="my-3 flex justify-center">
              <div className="rounded-2xl overflow-hidden max-w-[340px] w-full bg-rose-50/30 p-2 border border-rose-100/60 shadow-xs">
                <img
                  src={ASSETS.comboMockup}
                  alt="Kit Completo Meus Cadernos da Leitura + 6 Bônus Exclusivos"
                  className="w-full h-auto object-contain select-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Stars and Social Proof */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-0.5 text-[#FF3B69]">
                <Star className="w-4 h-4 fill-[#FF3B69] text-[#FF3B69]" />
                <Star className="w-4 h-4 fill-[#FF3B69] text-[#FF3B69]" />
                <Star className="w-4 h-4 fill-[#FF3B69] text-[#FF3B69]" />
                <Star className="w-4 h-4 fill-[#FF3B69] text-[#FF3B69]" />
                <Star className="w-4 h-4 fill-[#FF3B69] text-[#FF3B69]" />
              </div>
              <span className="text-slate-700 text-xs sm:text-sm font-bold">
                4,9/5 — 500 mães aprovaram
              </span>
            </div>

            {/* Bullet Points with Pink Check Circles */}
            <div className="space-y-3.5 mb-7 px-1 sm:px-2">
              {comboChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#FF3B69] text-[#FF3B69] flex items-center justify-center shrink-0 mt-0.5 bg-rose-50/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm sm:text-[15px] font-bold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Price Display */}
            <div className="text-center pt-2 pb-1">
              <span className="text-sm sm:text-base text-slate-400 line-through font-semibold block">
                de R$ 67,00
              </span>
              <div className="text-5xl sm:text-6xl font-black text-[#FF3B69] tracking-tight leading-none my-1">
                R$ 37,90
              </div>
              <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs sm:text-sm font-medium mt-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Oferta por tempo limitado</span>
              </div>
              <div className="text-slate-600 text-xs sm:text-sm text-center mt-2 font-medium flex items-center justify-center gap-1.5">
                <span>💳</span>
                <span>Parcele em até 12x no cartão de crédito ou PIX.</span>
              </div>
            </div>
          </div>

          {/* 3D Action Button */}
          <div className="mt-5">
            <a
              href={CHECKOUT_URLS.combo}
              onClick={handleComboClick}
              className="w-full py-4 sm:py-5 px-6 rounded-2xl sm:rounded-full bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-xl shadow-rose-200 border-b-4 border-[#C81C44] active:border-b-0 active:translate-y-1 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <span>QUERO O PACOTE PREMIUM</span>
            </a>
            <p className="text-center text-slate-400 text-xs font-medium mt-2">
              Acesso liberado em minutos
            </p>
          </div>

          {/* Security Seals */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-around text-[10.5px] sm:text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>PIX Instantâneo</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>7 Dias de Garantia</span>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* 2. SUBDUED SECONDARY OFFER (OFERTA BÁSICA - R$ 22,90)          */}
        {/* Appears in sequence below the main card, not competing with it  */}
        {/* ============================================================== */}
        <div className="mt-10 sm:mt-12 max-w-lg mx-auto bg-slate-50/90 rounded-3xl border border-slate-200/90 p-5 sm:p-6 text-center shadow-xs">
          <div className="inline-block mb-2">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 bg-slate-200/70 px-3 py-1 rounded-full">
              Opção Alternativa Mais Simples
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-slate-800">
            Prefere apenas os 8 materiais básicos?
          </h4>
          <p className="text-xs text-slate-500 mt-0.5 mb-4 max-w-sm mx-auto">
            Versão com os 8 cadernos em PDF (sem os 6 bônus exclusivos de apoio).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 mb-4 text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={ASSETS.heroMockup}
                alt="8 Cadernos de Leitura"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
                <span>8 cadernos progressivos (+1.500 atividades)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>+2.000 páginas ilustradas + Vitalício + 7 dias garantia</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <X className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="line-through">Não inclui os 6 bônus exclusivos</span>
              </div>
            </div>
          </div>

          {/* Basic Price & CTA */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs text-slate-400 line-through">de R$ 29,90</span>
            <span className="text-xs font-semibold text-slate-600">por apenas</span>
            <span className="text-2xl sm:text-3xl font-black text-slate-900">R$ 22,90</span>
          </div>

          <a
            href={CHECKOUT_URLS.basic}
            onClick={handleBasicClick}
            className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition-all text-center cursor-pointer active:scale-95 shadow-xs block"
          >
            QUERO A OPÇÃO BÁSICA POR R$ 22,90
          </a>
        </div>

        {/* Payment Methods Footer Strip */}
        <div className="bg-white rounded-2xl border border-slate-200 py-3 px-4 text-center text-xs text-slate-600 flex flex-wrap items-center justify-center gap-4 sm:gap-6 shadow-xs max-w-2xl mx-auto mt-8 sm:mt-10">
          <span className="font-bold text-slate-800">Formas de Pagamento:</span>
          <span>⚡ PIX (Download Imediato)</span>
          <span>💳 Cartão de Crédito em até 12x</span>
          <span>🔒 Ambiente Criptografado SSL</span>
        </div>

      </div>

      {/* Downsell Modal for Basic Selection */}
      <DownsellModal
        isOpen={isDownsellOpen}
        onClose={() => setIsDownsellOpen(false)}
        onAcceptUpgrade={handleAcceptUpgrade}
        onContinueBasic={handleContinueBasic}
      />
    </section>
  );
};
