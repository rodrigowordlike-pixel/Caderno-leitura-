import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Play, Pause, CheckCheck, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/landingData';

export const SocialProofCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
    setPlayingAudioId(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
    setPlayingAudioId(null);
  };

  const toggleAudio = (id: string) => {
    setPlayingAudioId((prev) => (prev === id ? null : id));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="depoimentos" className="py-8 sm:py-12 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Relatos Reais de Quem Teve Dúvidas no Começo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
            O que acontece quando você troca o choro pelo método certo?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Veja as mensagens reais recebidas em nosso suporte e comunidade de famílias e educadores.
          </p>
        </div>

        {/* WhatsApp-Style Carousel Container */}
        <div className="relative bg-[#ECE5DD] rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-300 max-w-2xl mx-auto overflow-hidden">
          
          {/* Simulated WhatsApp Chat Top Header */}
          <div className="bg-[#075E54] text-white p-3 sm:p-4 -mx-4 -mt-4 sm:-mx-8 sm:-mt-8 mb-6 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <img
                src={current.avatarUrl}
                alt={current.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/60"
              />
              <div>
                <div className="font-bold text-sm sm:text-base leading-tight flex items-center gap-1.5">
                  <span>{current.name}</span>
                  <span className="text-[10px] bg-emerald-700/80 px-1.5 py-0.2 rounded text-emerald-200 font-normal">
                    Compra Verificada
                  </span>
                </div>
                <div className="text-[11px] text-emerald-100/90 flex items-center gap-1">
                  <span>{current.role}</span>
                  <span>•</span>
                  <span>{current.city}</span>
                </div>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-0.5 text-amber-300">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
              ))}
            </div>
          </div>

          {/* WhatsApp Message Speech Bubble */}
          <div className="relative bg-white rounded-2xl rounded-tl-sm p-4 sm:p-5 shadow-sm text-slate-800 text-sm sm:text-base leading-relaxed mb-4 border border-slate-200/60">
            {/* Optional Voice Note Simulation */}
            {current.hasAudio && (
              <div className="mb-3.5 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100">
                  <button
                    onClick={() => toggleAudio(current.id)}
                    className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shrink-0 transition-transform active:scale-95"
                    aria-label="Ouvir áudio do relato"
                  >
                    {playingAudioId === current.id ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium mb-1">
                      <span>{playingAudioId === current.id ? 'Reproduzindo mensagem de voz...' : 'Mensagem de áudio recebida'}</span>
                      <span className="font-mono">{current.audioDuration}</span>
                    </div>
                    {/* Simulated waveform sound bar */}
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-emerald-500 rounded-full transition-all duration-300 ${
                          playingAudioId === current.id ? 'w-2/3 animate-pulse' : 'w-1/4'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p className="italic text-slate-700">
              &ldquo;{current.message}&rdquo;
            </p>

            <div className="flex items-center justify-end gap-1 text-[11px] text-slate-400 mt-3 pt-1">
              <span>{current.timeAgo}</span>
              <CheckCheck className="w-4 h-4 text-sky-500 inline-block" />
            </div>
          </div>

          {/* Navigation Controls: Arrows and Dots */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 shadow-sm transition-all active:scale-90"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setPlayingAudioId(null);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === i
                      ? 'w-6 bg-[#075E54]'
                      : 'w-2.5 bg-slate-400 hover:bg-slate-500'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 shadow-sm transition-all active:scale-90"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Trust reinforcement statement */}
        <div className="text-center mt-6 text-xs text-slate-500">
          Mais de 14.800 famílias em todos os 26 estados do Brasil já destravaram a leitura com o método.
        </div>

      </div>
    </section>
  );
};
