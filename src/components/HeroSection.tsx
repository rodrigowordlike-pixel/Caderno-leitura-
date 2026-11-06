import React from 'react';
import { Star, ArrowRight, ShieldCheck, ChevronDown, Heart, Sparkles, Lock, Zap } from 'lucide-react';
import { ASSETS } from '../data/landingData';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-14 pb-12 sm:pt-16 sm:pb-16 bg-white border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Subtle, unboxed empathy lead */}
        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-rose-600 mb-3">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 shrink-0" />
          <span>Para pais cansados de ver a lição de casa terminar em choro</span>
        </div>

        {/* Clean, magnetic, deeply relatable headline */}
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 [text-wrap:balance]">
          E se o seu filho parasse de chorar na hora da lição e começasse a{' '}
          <span className="text-rose-600 underline decoration-rose-300 decoration-2">
            pedir para ler historinhas para você?
          </span>
        </h1>

        {/* Simple, warm, guilt-relieving subheadline */}
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-6 [text-wrap:balance]">
          O problema nunca foi o seu filho. Descubra o método lúdico com os <strong>8 Cadernos Ilustrados</strong> que destrava a leitura e a autoconfiança da criança em apenas 15 minutos por dia.
        </p>

        {/* Product Image - Clean, centered, pristine */}
        <div className="max-w-md sm:max-w-lg mx-auto mb-6">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
            <img
              src={ASSETS.heroMockup}
              alt="Kit Completo Meus Cadernos da Leitura - 8 Materiais para Aprender e se Divertir"
              className="w-full h-auto object-cover block select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* MINI OFERTA DE ALTA CONVERSÃO - DESIGN VIBRANTE E APETITOSO */}
        <div className="relative max-w-md mx-auto bg-white border-2 border-[#FF3B69] rounded-[28px] p-5 sm:p-6 shadow-2xl shadow-rose-200/60 text-center mt-2">
          
          {/* Floating Pill Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF3B69] text-white text-[10.5px] sm:text-xs font-black uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 tracking-wider whitespace-nowrap z-10">
            <span className="text-yellow-300 text-sm leading-none">★</span>
            <span>OFERTA ESPECIAL DE LANÇAMENTO</span>
          </div>

          {/* Value Micro-Pills / Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-1.5 mb-3 text-[11px] font-extrabold">
            <span className="bg-rose-50 text-[#FF3B69] border border-rose-200/80 px-2.5 py-0.5 rounded-full">
              📚 8 Cadernos da Leitura
            </span>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
              🎁 6 Bônus Inclusos
            </span>
            <span className="bg-amber-50 text-amber-800 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
              ⚡ Download em PDF
            </span>
          </div>

          {/* Social Proof Rating */}
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <div className="flex items-center gap-0.5 text-[#FF3B69]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF3B69] text-[#FF3B69]" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">
              4,9/5 — Mais de 500 famílias aprovaram
            </span>
          </div>

          {/* Ancoragem de Preço de Alto Impacto */}
          <div className="mb-3.5">
            <span className="text-xs sm:text-sm text-slate-400 line-through font-semibold block">
              de R$ 97,00
            </span>
            <div className="flex items-baseline justify-center gap-1.5 my-0.5">
              <span className="text-xs font-bold text-slate-600">Por apenas</span>
              <span className="text-4xl sm:text-5xl font-black text-[#FF3B69] tracking-tight leading-none">
                R$ 37,90
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium block mt-1">
              💳 Parcele em até 12x no cartão de crédito ou pague via PIX
            </span>
          </div>

          {/* Botão Tátil 3D de Alta Conversão */}
          <button
            onClick={onCtaClick}
            className="w-full py-4 px-5 rounded-2xl sm:rounded-full bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-rose-200 border-b-4 border-[#C81C44] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 group cursor-pointer mb-2"
          >
            <span>QUERO MEU KIT COMPLETO + 6 BÔNUS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Selos de Confiança */}
          <div className="flex items-center justify-around text-[10.5px] sm:text-xs text-slate-500 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>7 Dias de Garantia</span>
            </div>
          </div>

        </div>

        {/* Link Sutil para continuar lendo a página */}
        <div className="mt-5">
          <a
            href="#diagnostico-pais"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <span>Ou veja os 5 sinais e o conteúdo detalhado abaixo</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
