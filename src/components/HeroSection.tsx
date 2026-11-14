import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Star, ArrowRight, ShieldCheck, ChevronDown, Lock, Zap, Volume2, Sparkles, CheckCircle2, RotateCcw, Play } from 'lucide-react';
import { ASSETS, CHECKOUT_URLS, trackAndRedirectToCheckout } from '../data/checkoutConfig';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wantsSoundRef = useRef(false);

  const playVideoElement = useCallback((withSound: boolean) => {
    const v = videoRef.current;
    if (!v) return;
    v.defaultMuted = !withSound;
    v.muted = !withSound;
    if (withSound) {
      v.removeAttribute('muted');
    } else {
      v.setAttribute('muted', '');
    }
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    v.play()
      .then(() => {
        setIsMuted(!withSound);
        setIsPlaying(true);
      })
      .catch(() => {
        if (withSound) {
          // Fallback to muted autoplay if browser blocks unmuted play
          v.defaultMuted = true;
          v.muted = true;
          v.setAttribute('muted', '');
          v.play()
            .then(() => {
              setIsMuted(true);
              setIsPlaying(true);
            })
            .catch(() => setIsPlaying(false));
        } else {
          setIsPlaying(false);
        }
      });
  }, []);

  useEffect(() => {
    // True Facade: never download 2.2 MB MP4 during initial critical load (LCP/FCP < 1.0s).
    // Only mount/load <video> after user interaction OR safely after window.onload + idle.
    let idleTimer: number | undefined;
    let loadHandler: (() => void) | undefined;

    const triggerDeferredVideo = () => {
      setShouldLoadVideo(true);
    };

    const scheduleAfterLoad = () => {
      idleTimer = window.setTimeout(triggerDeferredVideo, 4000);
    };

    if (document.readyState === 'complete') {
      scheduleAfterLoad();
    } else {
      loadHandler = () => scheduleAfterLoad();
      window.addEventListener('load', loadHandler, { once: true });
    }

    const onUserEngage = () => {
      setShouldLoadVideo(true);
      if (idleTimer !== undefined) {
        window.clearTimeout(idleTimer);
      }
    };

    window.addEventListener('scroll', onUserEngage, { once: true, passive: true });
    window.addEventListener('touchstart', onUserEngage, { once: true, passive: true });
    window.addEventListener('pointerdown', onUserEngage, { once: true, passive: true });

    return () => {
      if (idleTimer !== undefined) window.clearTimeout(idleTimer);
      if (loadHandler) window.removeEventListener('load', loadHandler);
      window.removeEventListener('scroll', onUserEngage);
      window.removeEventListener('touchstart', onUserEngage);
      window.removeEventListener('pointerdown', onUserEngage);
    };
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current && !hasEnded) {
      playVideoElement(wantsSoundRef.current);
    }
  }, [shouldLoadVideo, hasEnded, playVideoElement]);

  const handleFacadeOrUnmute = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    wantsSoundRef.current = true;
    if (!shouldLoadVideo) {
      setShouldLoadVideo(true);
      return;
    }
    if (videoRef.current) {
      // Unmute seamlessly WITHOUT resetting currentTime
      playVideoElement(true);
    }
  };

  const handleReplay = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    wantsSoundRef.current = true;
    if (videoRef.current) {
      const v = videoRef.current;
      v.currentTime = 0;
      setHasEnded(false);
      playVideoElement(true);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-rose-50/70 via-white to-amber-50/30 border-b border-slate-100 overflow-hidden">
      {/* Top Ad-Congruence Urgency Strip (does not overlap content) */}
      <div className="bg-slate-950 text-white py-2 px-3 text-center text-[11px] sm:text-xs font-extrabold tracking-wide border-b border-rose-500/40">
        <span>CONDIÇÃO DO ANÚNCIO:</span>{' '}
        <span className="text-[#FF5C83]">8 Cadernos + 6 Bônus com 80% OFF liberados hoje</span>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-b from-rose-200/30 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-3.5 pt-3.5 pb-8 sm:px-6 sm:pt-7 sm:pb-12 text-center">
        
        {/* Direct Ad Pain Kicker */}
        <p className="text-xs sm:text-sm font-extrabold text-[#E11D48] mb-1.5 tracking-tight">
          A hora do dever de casa virou motivo de briga e choro aí na sua casa?
        </p>

        {/* Main Headline - Aggressive, Ad-Congruent, Immediate Transformation */}
        <h1 className="text-[22px] sm:text-4xl md:text-[44px] font-black text-slate-900 leading-[1.13] tracking-tight mb-2 [text-wrap:balance]">
          Faça seu filho{' '}
          <span className="text-[#FF3B69] bg-rose-100/80 px-1.5 py-0.5 rounded-lg border border-rose-200 inline-block">
            ler as primeiras frases sozinho
          </span>{' '}
          em poucos dias, sem gritos e sem sofrimento
        </h1>

        {/* Subheadline Hook - Emotional Urgency */}
        <p className="text-xs sm:text-base font-bold text-slate-700 max-w-2xl mx-auto leading-snug mb-3.5 [text-wrap:balance]">
          Cada semana travado na leitura aumenta o bloqueio e a vergonha na escola. Assista ao vídeo e libere o{' '}
          <strong className="text-slate-900 font-black">Kit com 8 Cadernos</strong> que já destravou +500 crianças:
        </p>

        {/* ============================================================== */}
        {/* COMPACT ABOVE-THE-FOLD VSL FACADE & LAZY VIDEO PLAYER          */}
        {/* ============================================================== */}
        <div className="max-w-[230px] sm:max-w-[300px] mx-auto mb-3.5">
          
          {/* Direct Callout Header */}
          <div className="bg-slate-900 text-white rounded-t-2xl py-1.5 px-3 text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 border-x-4 border-t-4 border-slate-900 shadow-sm">
            <span>▼ Veja o caderno por dentro:</span>
          </div>

          {/* Video Container Frame (Instant 22KB WebP Facade -> Lazy Streaming MP4) */}
          <div
            onClick={hasEnded ? handleReplay : isMuted ? handleFacadeOrUnmute : undefined}
            className={`relative rounded-b-[24px] overflow-hidden shadow-xl shadow-rose-500/30 border-4 border-slate-950 bg-slate-950 aspect-[9/14] sm:aspect-[9/16] max-h-[310px] sm:max-h-[430px] w-full group mx-auto ${
              hasEnded || isMuted ? 'cursor-pointer' : ''
            }`}
          >
            {/* Instant WebP Poster Image (Zero black box on load, fast LCP) */}
            <img
              src={ASSETS.vslPoster}
              alt="Demonstração do Kit Meus Cadernos da Leitura"
              width={384}
              height={597}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 pointer-events-none ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {shouldLoadVideo && (
              <video
                ref={videoRef}
                src={ASSETS.vslVideo}
                poster={ASSETS.vslPoster}
                autoPlay
                muted={!wantsSoundRef.current && isMuted}
                playsInline
                controls={false}
                preload="auto"
                onPlaying={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setHasEnded(true);
                  setIsPlaying(false);
                }}
                onLoadedData={() => {
                  if (videoRef.current && !hasEnded && !isPlaying) {
                    playVideoElement(wantsSoundRef.current);
                  }
                }}
                className="w-full h-full object-cover pointer-events-none"
              />
            )}

            {/* Muted / Facade Pulsing Play & Audio Hook Overlay */}
            {!hasEnded && isMuted && (
              <div
                className="absolute inset-0 w-full h-full bg-slate-950/30 flex flex-col items-center justify-center p-3 text-white cursor-pointer transition-colors hover:bg-slate-950/20"
              >
                <div className="flex flex-col items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[#FF3B69] opacity-55 animate-ping" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF3B69] text-white flex items-center justify-center shadow-2xl shadow-rose-500/90 ring-4 ring-white/90 animate-soft-pulse">
                      {shouldLoadVideo ? (
                        <Volume2 className="w-8 h-8 sm:w-10 sm:h-10 ml-0.5" />
                      ) : (
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-[11px] sm:text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-2xl border border-white/30 flex items-center gap-1.5 whitespace-nowrap">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>TOQUE PARA OUVIR COM SOM</span>
                  </div>
                </div>
              </div>
            )}

            {/* Replay Overlay on End */}
            {hasEnded && (
              <div
                onClick={handleReplay}
                className="absolute inset-0 w-full h-full bg-slate-950/75 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-white cursor-pointer transition-all z-20"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF3B69] hover:bg-[#F22958] text-white flex items-center justify-center shadow-2xl shadow-rose-500/90 ring-4 ring-white/90 animate-soft-pulse">
                    <RotateCcw className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleReplay}
                    className="bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-[11px] sm:text-xs uppercase tracking-wider px-4 py-2.5 rounded-full shadow-2xl border border-white/30 flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>VER A EXPLICAÇÃO NOVAMENTE</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* IMMEDIATE FIRST-SCREEN CTA & PRICE ANCHOR (ABOVE THE FOLD!)    */}
        {/* ============================================================== */}
        <div className="max-w-md mx-auto mb-5">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-700 mb-2">
            <span className="line-through text-slate-400">De R$ 197</span>
            <span>por apenas</span>
            <span className="text-xl sm:text-2xl font-black text-[#FF3B69] tabular-nums">R$ 37,90</span>
            <span className="text-slate-400">·</span>
            <span className="text-emerald-700 font-extrabold">Acesso Imediato</span>
          </div>

          <a
            href={CHECKOUT_URLS.combo}
            onClick={(e) => {
              e.preventDefault();
              trackAndRedirectToCheckout('combo');
            }}
            className="w-full py-3.5 sm:py-4 px-5 rounded-2xl sm:rounded-full bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-sm sm:text-base uppercase tracking-wide shadow-xl shadow-rose-500/30 border-b-4 border-[#C81C44] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 group cursor-pointer text-center"
          >
            <span>QUERO DESTRAVAR A LEITURA DO MEU FILHO</span>
            <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-2">
            8 Cadernos em PDF + 6 Bônus Grátis · Receba no e-mail em 1 minuto · Garantia de 7 dias
          </p>
        </div>

        {/* Key Emotional Reflection & Action Triggers */}
        <div className="max-w-md mx-auto mb-5 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 border border-rose-200 rounded-2xl p-3.5 sm:p-4 shadow-xs text-left space-y-2.5 text-xs sm:text-sm text-slate-800">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#FF3B69] shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong className="text-slate-900 font-black">Faça isso pelo seu filho:</strong> Dá a ele a alegria de aprender sem trauma e o orgulho de dizer <em>&ldquo;Mamãe, papai, eu consegui ler sozinho!&rdquo;</em>.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong className="text-slate-900 font-black">O melhor presente para o futuro dele:</strong> Proteja a autoestima da criança para que ela nunca se sinta inferior ou atrasada na sala de aula.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong className="text-slate-900 font-black">Anos à frente dos colegas:</strong> Seu filho sai na frente da maioria das crianças da turma que continuam travadas e gaguejando na leitura.
            </p>
          </div>
        </div>

        {/* Product Image Mockup Preview */}
        <div className="max-w-[280px] sm:max-w-md mx-auto mb-5">
          <div className="rounded-2xl overflow-hidden shadow-md border border-rose-200/80 bg-white p-1.5">
            <img
              src={ASSETS.heroMockup}
              alt="Kit Completo Meus Cadernos da Leitura - 8 Materiais"
              className="w-full h-auto object-cover block select-none rounded-xl"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
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
              4,9/5 · Mais de 500 mães aprovaram
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
          <a
            href={CHECKOUT_URLS.combo}
            onClick={(e) => {
              e.preventDefault();
              trackAndRedirectToCheckout('combo');
            }}
            className="w-full py-3.5 sm:py-4 px-5 rounded-2xl sm:rounded-full bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-rose-300 border-b-4 border-[#C81C44] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 group cursor-pointer mb-2 text-center"
          >
            <span>QUERO O KIT COMPLETO + 6 BÔNUS (R$ 37,90)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

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
