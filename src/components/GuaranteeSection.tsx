import React from 'react';
import { ArrowRight, Award, Download, HeartHandshake, Lock, RotateCcw, ShieldCheck } from 'lucide-react';
import {
  CHECKOUT_URLS,
  decorateCheckoutUrl,
  trackAndRedirectToCheckout,
  warmCheckoutUrl,
} from '../data/checkoutConfig';

interface GuaranteeSectionProps {
  onDirectCta?: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = () => {
  const comboUrl = decorateCheckoutUrl(CHECKOUT_URLS.combo);

  return (
    <section id="garantia" className="cv-auto py-10 sm:py-14 bg-white border-b border-slate-100 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 text-center sm:text-left">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-1.5 shadow-md shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-900 border-2 border-amber-300 flex flex-col items-center justify-center text-amber-300 p-2 text-center">
                <Award className="w-5 h-5 text-amber-300 mb-0.5" />
                <span className="text-lg font-black leading-none text-white">7 DIAS</span>
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-amber-400 mt-0.5">
                  Garantia
                </span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Garantia Incondicional</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight [text-wrap:balance]">
                Teste em casa por 7 dias sem risco
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Você recebe os cadernos por e-mail, testa com seu filho na rotina da casa e só continua se gostar do material.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                <Download className="w-4 h-4 text-slate-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">1. Receba no e-mail</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assim que o pagamento confirma, o link dos PDFs chega no seu e-mail para baixar ou imprimir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                <HeartHandshake className="w-4 h-4 text-amber-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">2. Teste em casa</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pratique 15 minutos por dia com seu filho ao longo de uma semana no ritmo da família.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
                <RotateCcw className="w-4 h-4 text-emerald-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">3. Reembolso simples</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se não ficar satisfeito dentro de 7 dias, basta avisar o suporte para receber 100% de volta.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={comboUrl}
              onPointerDown={() => warmCheckoutUrl('combo')}
              onMouseEnter={() => warmCheckoutUrl('combo')}
              onClick={(e) => {
                e.preventDefault();
                trackAndRedirectToCheckout('combo', e.currentTarget);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base shadow-lg transition-all active:scale-95 cursor-pointer text-center"
            >
              <span>QUERO O COMBO COMPLETO COM GARANTIA</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 mt-4">
              <span className="flex items-center gap-1 font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Checkout Criptografado
              </span>
              <span>·</span>
              <span className="font-medium">Entrega Imediata em PDF</span>
              <span>·</span>
              <span className="font-medium">7 Dias de Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
