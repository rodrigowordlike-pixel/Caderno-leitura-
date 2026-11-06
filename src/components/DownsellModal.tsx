import React from 'react';
import { X, Sparkles, Gift, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface DownsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade: () => void;
  onContinueBasic: () => void;
}

export const DownsellModal: React.FC<DownsellModalProps> = ({
  isOpen,
  onClose,
  onAcceptUpgrade,
  onContinueBasic,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-400 overflow-hidden text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar pop-up"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Warning pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>Espere! Uma Oferta Única de Resgate</span>
        </div>

        {/* Modal Headline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
          Não deixe seu filho sem os <span className="text-amber-600">6 Bônus Exclusivos</span>!
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
          Notamos que você escolheu a Oferta Básica (R$ 22,90). Por uma pequena diferença (com nosso cupom de 10% OFF liberado agora por <strong>R$ 34,10</strong>), você leva o <strong>Combo Completo Vitalício</strong> com todos os 8 cadernos e R$ 233 em bônus gratuitos!
        </p>

        {/* Upgrade Box */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 mb-6 text-left">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
              Desconto Especial de 10% Aplicado
            </span>
            <div className="text-right">
              <span className="text-xs text-slate-400 line-through block">De R$ 37,90</span>
              <span className="text-2xl font-black text-emerald-600">R$ 34,10</span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span>Todos os 8 Cadernos do Kit Meus Cadernos da Leitura</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Todos os 6 Super Bônus (R$ 233,40 em materiais gratuitos)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span>Acesso Vitalício + Atualizações Futuras</span>
            </div>
          </div>
        </div>

        {/* Primary Action Button: Accept Upgrade */}
        <button
          onClick={onAcceptUpgrade}
          className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group active:scale-95 mb-3 cursor-pointer"
        >
          <span>SIM! QUERO O COMBO COM 10% DE DESCONTO</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Secondary Low-Contrast Link: Continue with Basic */}
        <button
          onClick={onContinueBasic}
          className="text-xs text-slate-500 hover:text-slate-800 underline transition-colors py-1 cursor-pointer"
        >
          Não, prefiro abrir mão dos bônus e levar apenas a Oferta Básica por R$ 22,90
        </button>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Garantia de 7 dias mantida para qualquer opção escolhida</span>
        </div>

      </div>
    </div>
  );
};
