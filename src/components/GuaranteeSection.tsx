import React from 'react';
import { ShieldCheck, Award, ArrowRight, Download, HeartHandshake, RotateCcw, Lock } from 'lucide-react';

interface GuaranteeSectionProps {
  onDirectCta: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onDirectCta }) => {
  return (
    <section id="garantia" className="py-16 sm:py-24 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Box Container */}
        <div className="bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 rounded-3xl p-6 sm:p-12 border-2 border-amber-300 shadow-xl relative overflow-hidden">
          
          {/* Subtle gold badge in corner */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-10 text-center sm:text-left">
            
            {/* Golden Seal */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-1.5 shadow-lg shrink-0 flex items-center justify-center animate-soft-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 border-2 border-amber-300 flex flex-col items-center justify-center text-amber-300 p-2 text-center">
                <Award className="w-6 h-6 text-amber-300 mb-0.5" />
                <span className="text-xl font-black leading-none text-white">7 DIAS</span>
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-amber-400 mt-0.5">Garantia Total</span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Risco 100% Zero Para Você</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Seu filho lendo com alegria ou cada centavo de volta.
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Nós confiamos tanto na eficácia do Método Leitura Fluente 3D que tiramos todo o risco das suas costas e colocamos nas nossas.
              </p>
            </div>
          </div>

          {/* 3 Clear and Welcoming Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-black text-sm mb-3">
                <Download className="w-4 h-4 text-slate-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                1. Baixe o Material Hoje
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receba o kit no seu e-mail imediatamente. Imprima as primeiras páginas ou abra no tablet para seu filho ver os desenhos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-sm mb-3">
                <HeartHandshake className="w-4 h-4 text-amber-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                2. Aplique 15 Minutos
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sente junto com seu pequeno, siga o passo a passo guiado e veja ele conectar os primeiros sons de forma leve e divertida.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-sm mb-3">
                <RotateCcw className="w-4 h-4 text-emerald-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                3. Ame ou Peça Reembolso
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se por qualquer motivo você não amar, envie uma mensagem e devolvemos 100% do seu valor. Sem burocracia e sem ressentimentos.
              </p>
            </div>
          </div>

          {/* Action Button & Trust Seal */}
          <div className="text-center pt-2">
            <button
              onClick={onDirectCta}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              <span>QUERO TESTAR POR 7 DIAS COM RISCO ZERO</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 mt-4">
              <span className="flex items-center gap-1 font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Certificado SSL 256 Bits
              </span>
              <span>•</span>
              <span className="font-medium">Ambiente Seguro</span>
              <span>•</span>
              <span className="font-medium">Reembolso em 1 Clique</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
