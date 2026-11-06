import React, { useState, useRef } from 'react';
import { Star, ArrowRight, ShieldCheck, ChevronDown, Lock, Zap, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/landingData';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsMuted(false);
    }
  };

  return (
    <section className="relative pt-6 pb-8 sm:pt-10 sm:pb-12 bg-gradient-to-b from-rose-50/70 via-white to-amber-50/30 border-b border-slate-100 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-b from-rose-200/30 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 text-center">
        
        {/* Main Headline - Ultra Human, Persuasive, Direct */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-3 [text-wrap:balance]">
          O método simples de 15 minutos que faz crianças de 4 a 8 anos lerem as primeiras palavras{' '}
          <span className="text-[#FF3B69] bg-rose-100/80 px-2 py-0.5 rounded-xl border border-rose-200 inline-block font-black">
            sem choro e sem decoreba
          </span>
        </h1>

        {/* Subheadline Hook */}
        <p className="text-xs sm:text-base font-extrabold text-slate-700 max-w-2xl mx-auto leading-relaxed mb-4 [text-wrap:balance]">
          Assista ao vídeo abaixo e veja na prática como os <strong>8 Cadernos Ilustrados</strong> destravaram a leitura de crianças que antes choravam na hora da lição.
        </p>

        {/* ============================================================== */}
        {/* VSL VIDEO PLAYER                                               */}
        {/* ============================================================== */}
        <div className="max-w-[310px] sm:max-w-md mx-auto mb-6">
          
          {/* Direct Human Callout */}
          <div className="bg-slate-900 text-white rounded-t-2xl py-2 px-3 text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 border-x-4 border-t-4 border-slate-900 shadow-md">
            <span>▼ Veja a demonstração na prática:</span>
          </div>

          {/* Video Container Frame */}
          <div className="relative rounded-b-[28px] overflow-hidden shadow-2xl shadow-rose-500/35 border-4 border-slate-950 bg-slate-950 aspect-[9/16] group mx-auto">
            
            <video
              ref={videoRef}
              src={ASSETS.vslVideo}
              autoPlay
              muted={isMuted}
              playsInline
              loop
              controls={!isMuted}
              preload="auto"
              className="w-full h-full object-cover"
            />

            {/* Muted Autoplay Hook Overlay */}
            {isMuted && (
              <button
                onClick={handleUnmute}
                className="absolute inset-0 w-full h-full bg-slate-950/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 text-white cursor-pointer transition-all hover:bg-slate-950/30 group-hover:scale-[1.01]"
                aria-label="Ligar o som do vídeo de demonstração"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#FF3B69] text-white flex items-center justify-center shadow-2xl shadow-rose-500/90 ring-4 ring-white/90 animate-bounce">
                    <Volume2 className="w-9 h-9 sm:w-11 sm:h-11" />
                  </div>
                  
                  <div className="bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-full shadow-2xl border border-white/30 flex items-center gap-2">
                    <Volume2 className="w-4 h-4 animate-pulse" />
                    <span>TOQUE PARA OUVIR COM SOM</span>
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* Key Emotional Reflection & Action Triggers */}
          <div className="mt-3 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 border-2 border-rose-300/80 rounded-2xl p-3.5 sm:p-4 shadow-sm text-left space-y-2.5 text-xs sm:text-sm text-slate-800">
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-rose-100 text-[#FF3B69] flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                ❤️
              </div>
              <p className="leading-snug">
                <strong className="text-slate-900 font-black">Faça isso pelo seu filho:</strong> Dá a ele a alegria de aprender sem trauma e o orgulho de dizer <em>&ldquo;Mamãe, papai, eu consegui ler sozinho!&rdquo;</em>.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                🎁
              </div>
              <p className="leading-snug">
                <strong className="text-slate-900 font-black">O melhor presente para o futuro dele:</strong> Não é sobre um PDF, é sobre proteger a autoestima da criança para que ela nunca se sinta inferior na escola.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                🚀
              </div>
              <p className="leading-snug">
                <strong className="text-slate-900 font-black">Anos à frente dos colegas:</strong> Seu filho sai na frente da maioria das crianças da turma que continuam travadas, gaguejando e atrasadas na leitura.
              </p>
            </div>
          </div>
        </div>

        {/* Product Image Mockup Preview */}
        <div className="max-w-[280px] sm:max-w-md mx-auto mb-5">
          <div className="rounded-2xl overflow-hidden shadow-md border-2 border-rose-200/80 bg-white p-1.5">
            <img
              src={ASSETS.heroMockup}
              alt="Kit Completo Meus Cadernos da Leitura - 8 Materiais"
              className="w-full h-auto object-cover block select-none rounded-xl"
              loading="eager"
            />
          </div>
        </div>

        {/* ============================================================== */}
        {/* OFFER CARD                                                     */}
        {/* ============================================================== */}
        <div className="relative max-w-md mx-auto bg-white border-2 border-[#FF3B69] rounded-[28px] p-4.5 sm:p-6 shadow-2xl shadow-rose-300/40 text-center">
          
          {/* Floating Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF3B69] text-white text-[10px] sm:text-xs font-black uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 tracking-wider whitespace-nowrap z-10 border border-white/40">
            <Sparkles className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
            <span>OFERTA DE LANÇAMENTO</span>
          </div>

          {/* Micro Value Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1 mt-1.5 mb-2.5 text-[10.5px] font-extrabold">
            <span className="bg-rose-50 text-[#FF3B69] border border-rose-200 px-2 py-0.5 rounded-full">
              📚 8 Cadernos da Leitura
            </span>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
              🎁 6 Bônus Inclusos
            </span>
            <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full">
              ⚡ Liberado no E-mail
            </span>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-1 mb-2.5">
            <div className="flex items-center gap-0.5 text-[#FF3B69]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FF3B69] text-[#FF3B69]" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-extrabold text-slate-800">
              4,9/5 — Mais de 500 mães aprovaram
            </span>
          </div>

          {/* Price Anchor */}
          <div className="mb-3">
            <span className="text-[11px] sm:text-xs text-slate-400 line-through font-bold block">
              De R$ 197,00 por apenas:
            </span>
            <div className="text-4xl sm:text-5xl font-black text-[#FF3B69] tracking-tight leading-none my-0.5">
              R$ 37,90
            </div>
            <span className="text-[11px] font-bold text-slate-600 block mt-1">
              💳 Parcele em até 12x no cartão de crédito ou pague via PIX
            </span>
          </div>

          {/* Aggressive 3D CTA Button */}
          <button
            onClick={onCtaClick}
            className="w-full py-3.5 sm:py-4 px-5 rounded-2xl sm:rounded-full bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-rose-300 border-b-4 border-[#C81C44] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 group cursor-pointer mb-2"
          >
            <span>QUERO O KIT COMPLETO + 6 BÔNUS (R$ 37,90)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Security & Guarantee Seals */}
          <div className="flex items-center justify-around text-[10px] sm:text-xs text-slate-500 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1 font-semibold">
              <Lock className="w-3 h-3 text-emerald-600" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-1 font-semibold">
              <Zap className="w-3 h-3 text-amber-500" />
              <span>PIX Instantâneo</span>
            </div>
            <div className="flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3 h-3 text-sky-600" />
              <span>7 Dias de Garantia</span>
            </div>
          </div>

        </div>

        {/* Scroll link */}
        <div className="mt-3.5">
          <a
            href="#diagnostico-pais"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <span>Ou veja os 5 sinais e o conteúdo detalhado abaixo</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
