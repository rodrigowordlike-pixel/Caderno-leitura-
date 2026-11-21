import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from 'lucide-react';
import {
  ASSETS,
  CHECKOUT_URLS,
  decorateCheckoutUrl,
  warmCheckoutUrl,
  trackAndRedirectToCheckout,
} from '../data/checkoutConfig';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start VSL download + playback ONLY on explicit user Play click, with audio active immediately
  const handleStartWithSound = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    if (!v.getAttribute('src')) {
      v.setAttribute('src', ASSETS.vslVideo);
    }
    v.defaultMuted = false;
    v.muted = false;
    v.volume = 1;
    v.removeAttribute('muted');

    setHasStarted(true);
    setHasEnded(false);
    setIsMuted(false);

    const playPromise = v.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMuted(v.muted);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  const handleTogglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    if (v.paused || v.ended) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    const nextMuted = !v.muted;
    v.defaultMuted = nextMuted;
    v.muted = nextMuted;
    if (nextMuted) {
      v.setAttribute('muted', '');
    } else {
      v.removeAttribute('muted');
      v.volume = 1;
    }
    setIsMuted(nextMuted);
  };

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    v.currentTime = 0;
    v.defaultMuted = false;
    v.muted = false;
    v.volume = 1;
    v.removeAttribute('muted');

    setHasEnded(false);
    setProgressPercent(0);
    setIsMuted(false);

    v.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  useEffect(() => {
    return () => {
      const v = videoRef.current;
      if (v) {
        v.pause();
      }
    };
  }, []);

  const comboUrl = decorateCheckoutUrl(CHECKOUT_URLS.combo);

  return (
    <section className="relative bg-gradient-to-b from-amber-50/70 via-[#FBFBFA] to-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 pt-5 pb-8 sm:px-6 sm:pt-9 sm:pb-12 text-center">
        {/* Headline direta (Promessa do anúncio) */}
        <h1 className="text-[26px] sm:text-4xl md:text-[42px] font-black text-slate-900 leading-[1.15] tracking-tight mb-2.5 [text-wrap:balance]">
          Liberte o potencial{' '}
          <span className="text-[#FF3B69]">da leitura do seu filho</span>
        </h1>

        {/* Subtítulo natural e objetivo */}
        <p className="text-[13px] sm:text-base font-medium text-slate-600 max-w-lg mx-auto leading-snug mb-5 [text-wrap:balance]">
          8 cadernos ilustrados em PDF para seu filho destravar a leitura em casa com 15 minutos por dia, sem brigas na hora da tarefa.
        </p>

        {/* Player de Vídeo VSL Vertical 9:16 (Zero autoplay / Zero download antes do Play / Zero segundos) */}
        <div className="max-w-[235px] sm:max-w-[265px] mx-auto mb-5">
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-900/15 border-2 border-amber-200/90 bg-slate-950 aspect-[9/16] w-full select-none">
            {/* Elemento de vídeo já no DOM com preload="none" e sem src inicial (0 bytes baixados até o Play) */}
            <video
              ref={videoRef}
              poster={ASSETS.vslPoster}
              playsInline
              controls={false}
              preload="none"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={() => {
                const v = videoRef.current;
                if (v && v.duration > 0) {
                  setProgressPercent(Math.min(100, (v.currentTime / v.duration) * 100));
                }
              }}
              onEnded={() => {
                setIsPlaying(false);
                setHasEnded(true);
                setProgressPercent(100);
              }}
              onClick={hasStarted && !hasEnded ? handleTogglePlayPause : undefined}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Capa WebP com fetchPriority="high" exibida antes do clique inicial */}
            {!hasStarted && (
              <div
                onClick={handleStartWithSound}
                role="button"
                tabIndex={0}
                aria-label="Assistir apresentação do material com áudio"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStartWithSound(e as unknown as React.MouseEvent);
                  }
                }}
                className="absolute inset-0 z-10 cursor-pointer group"
              >
                <img
                  src={ASSETS.vslPoster}
                  alt="Apresentação do Kit Meus Cadernos da Leitura"
                  width={320}
                  height={560}
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover block"
                />

                <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/15 transition-colors flex flex-col items-center justify-center gap-3 p-4">
                  {/* Botão Play circular branco central */}
                  <div className="w-16 h-16 rounded-full bg-white text-[#FF3B69] shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Play className="w-7 h-7 fill-[#FF3B69] ml-1" />
                  </div>

                  {/* Chamada curta incentivando clique com áudio */}
                  <span className="bg-slate-950/85 text-white text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>Clique para assistir com som</span>
                  </span>
                </div>
              </div>
            )}

            {/* Barra inferior vermelha minimalista (sem exibição de minutos/segundos) */}
            {hasStarted && !hasEnded && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/50 to-transparent pt-6 pb-2.5 px-3"
              >
                {/* Linha de progresso contínua vermelha sem números */}
                <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-[#FF2D55] transition-[width] duration-150 ease-linear"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-white">
                  <button
                    type="button"
                    onClick={handleTogglePlayPause}
                    aria-label={isPlaying ? 'Pausar vídeo' : 'Continuar vídeo'}
                    className="w-8 h-8 rounded-full bg-[#FF2D55] hover:bg-[#E11D48] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-white text-white" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleMute}
                    aria-label={isMuted ? 'Ativar áudio' : 'Silenciar áudio'}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Tela final ao encerrar o vídeo: CTA Combo Completo + Assistir novamente */}
            {hasEnded && (
              <div className="absolute inset-0 z-30 bg-slate-950/90 flex flex-col items-center justify-center p-4 text-center text-white">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-300 mb-1.5">
                  Apresentação concluída
                </p>
                <p className="text-sm font-extrabold leading-snug mb-4">
                  Garanta os 8 cadernos + 6 bônus por R$ 9,90
                </p>

                <a
                  href={comboUrl}
                  onPointerDown={() => warmCheckoutUrl('combo')}
                  onMouseEnter={() => warmCheckoutUrl('combo')}
                  onClick={(e) => {
                    e.preventDefault();
                    trackAndRedirectToCheckout('combo', e.currentTarget);
                  }}
                  className="w-full py-3 px-3 rounded-xl bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-xs uppercase tracking-wide shadow-lg border-b-2 border-[#C81C44] flex items-center justify-center gap-1.5 cursor-pointer mb-3"
                >
                  <span>QUERO O COMBO COMPLETO</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </a>

                <button
                  type="button"
                  onClick={handleReplay}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Assistir novamente</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 3 benefícios curtos */}
        <ul className="max-w-md mx-auto mb-5 space-y-2 text-left text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 shadow-2xs">
          <li className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <span>Prática simples de 15 minutos por dia em casa</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <span>Indicado para crianças de 5 a 8 anos em alfabetização</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <span>Entrega imediata em PDF para imprimir ou usar no tablet</span>
          </li>
        </ul>

        {/* Botão CTA Principal + Link âncora discreto para ver os planos */}
        <div className="max-w-md mx-auto">
          <a
            href={comboUrl}
            onPointerDown={() => warmCheckoutUrl('combo')}
            onMouseEnter={() => warmCheckoutUrl('combo')}
            onClick={(e) => {
              e.preventDefault();
              trackAndRedirectToCheckout('combo', e.currentTarget);
            }}
            className="w-full py-3.5 sm:py-4 px-5 rounded-2xl sm:rounded-full bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-sm sm:text-base uppercase tracking-wide shadow-xl shadow-rose-500/20 border-b-4 border-[#C81C44] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 group cursor-pointer text-center"
          >
            <span>QUERO O COMBO COMPLETO</span>
            <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-xs font-semibold text-slate-600 mt-2.5">
            Acesso imediato em PDF · Garantia de 7 dias ·{' '}
            <strong className="text-[#FF3B69] font-black">R$ 9,90</strong>
          </p>

          <a
            href="#ofertas"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors mt-3 py-1"
          >
            <span>Ver opções de planos e o que você recebe</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
