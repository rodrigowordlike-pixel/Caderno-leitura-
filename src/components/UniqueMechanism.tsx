import React from 'react';
import { AlertOctagon, CheckCircle2, Lightbulb, Sparkles, Volume2, Eye, Trophy, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/landingData';
import { ActivitiesCarousel } from './ActivitiesCarousel';

export const UniqueMechanism: React.FC = () => {
  return (
    <section id="mecanismo-unico" className="py-8 sm:py-12 bg-white border-b border-slate-100 scroll-mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>A Revelação Que Nenhuma Escola Te Contou</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Por que o cérebro do seu filho trava e rejeita os métodos tradicionais?
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            A neurociência cognitiva comprovou: o cérebro humano <strong>não nasceu pronto para ler</strong>. Diferente da fala (que é aprendida por imitação natural), a leitura precisa construir uma ponte neural artificial entre o córtex visual e a área da linguagem.
          </p>
        </div>

        {/* The Problem vs The Solution Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          
          {/* Card: Why Common Methods Fail */}
          <div className="bg-rose-50/60 rounded-3xl p-6 sm:p-8 border-2 border-rose-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-rose-900 font-extrabold text-lg mb-4">
                <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <span>O Erro da Cartilha Escolar Tradicional</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                Na escola comum, enfiam a criança em uma sala cheia e tentam fazê-la memorizar famílias silábicas frias (<em>ba-be-bi-bo-bu, ca-ce-ci-co-cu</em>) ou jogam livros com frases longas esperando que ela adivinhe pelo contexto.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5 text-base">✕</span>
                  <span><strong>Tentativa e Erro às Cegas:</strong> A criança olha a letra inicial e &ldquo;chuta&rdquo; o resto (olha para BOLA e fala BONECA). Quando erra, se sente incapaz e envergonhada.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5 text-base">✕</span>
                  <span><strong>Esgotamento da Memória de Trabalho:</strong> Decorar dezenas de combinações mecânicas sem imagem viva superaquece a mente da criança em 5 minutos, gerando choro e dor de cabeça.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5 text-base">✕</span>
                  <span><strong>O Bloqueio do &ldquo;Eu Sou Burro&rdquo;:</strong> A criança passa a acreditar que o problema é ela, se compara com coleguinhas e desenvolve aversão visceral a qualquer tipo de livro.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200 text-xs text-rose-950 font-bold">
              Consequência: Brigas diárias, horas perdidas em vão e uma criança que cresce com medo de ler em público.
            </div>
          </div>

          {/* Card: The Unique Mechanism */}
          <div className="bg-emerald-50/60 rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              A Chave Que Destrava Tudo
            </div>

            <div>
              <div className="flex items-center gap-3 text-emerald-950 font-extrabold text-lg mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span>O Método dos 8 Cadernos da Leitura</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                Em vez de decoreba fria, usamos a <strong>Rota Fonológica Multissensorial</strong>: a criança aprende o som vivo que cada letrinha faz no mundo real, associada a personagens carismáticos que ela adora.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>1. O Ouvido Desperta:</strong> Antes de ler símbolos, a criança brinca com os sons das palavras através dos bichinhos (a abelha, a borboleta, o tigrezinho).</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>2. O Deslizar Fônico:</strong> Ela une os sons sem esforço, como uma melodia contínua, vendo a palavra se formar na frente dos seus olhos com alegria.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>3. Dopamina & Orgulho:</strong> Em apenas 15 minutos ao dia, cada lição traz uma pequena conquista tangível. A criança corre para mostrar o que leu para a família.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200 text-xs text-emerald-950 font-extrabold">
              Consequência: Autonomia, brilho nos olhos e uma criança que pede espontaneamente para ler antes de dormir!
            </div>
          </div>

        </div>

        {/* Real Activities Carousel Requested by User */}
        <ActivitiesCarousel />

        {/* Compact 3 Pillars - Sleek, mobile-friendly, no wasted fold */}
        <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-4 sm:p-6 my-10">
          <div className="text-center mb-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100/80 border border-amber-200 px-2.5 py-0.5 rounded-full inline-block mb-1">
              Os 3 Pilares do Método
            </span>
            <h3 className="text-sm sm:text-base font-black text-slate-900">
              Como seu filho aprende sem chorar e sem cansaço:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Pillar 1 */}
            <div className="flex items-center sm:flex-col sm:text-center gap-3 p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 mb-0.5">1. Conexão Sonora</div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Primeiro o som vivo das letrinhas, eliminando a decoreba mecânica das famílias silábicas.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center sm:flex-col sm:text-center gap-3 p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 mb-0.5">2. Apoio Visual Lúdico</div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Personagens ilustrados que gravam o som na memória afetiva da criança.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center sm:flex-col sm:text-center gap-3 p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 mb-0.5">3. Vitórias em 15 Minutos</div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Lições curtas cronometradas. A criança termina o dia feliz, capaz e querendo mais.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DEMONSTRATION BREAKDOWN SECTION: COMO SEU FILHO VAI APRENDER   */}
        {/* ============================================================== */}
        <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Top Badge */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#FF3B69] border border-rose-200 text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 fill-[#FF3B69]" />
              <span>A Metodologia em Ação</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              Entenda como seu filho ou sua filha vai aprender a ler
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Cada caderno foi desenhado para destravar a leitura sem esforço, sem choro e com alegria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Documentary Image of Child Reading */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-amber-200 bg-white max-w-[320px] w-full">
                <img
                  src={ASSETS.motherChildReading}
                  alt="Mãe e filho lendo juntos felizes com o Livro da Leitura"
                  className="w-full h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Step-by-Step Explanation ("Como seu filho vai aprender") */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-amber-200/80 shadow-xs flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-black text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                      Apoio Visual da Mãozinha (Sem se perder)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      A criança utiliza o recurso da mãozinha para acompanhar palavra por palavra. Ela aprende a direção correta (da esquerda para a direita e de cima para baixo) sem pular linhas e sem se frustrar.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-amber-200/80 shadow-xs flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-black text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                      Sílabas Simples e Frases Curtas
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Começamos diminuindo o grau de dificuldade com histórias simples (a minhoca, a casinha, o sapato). A criança lê com facilidade logo na primeira tentativa e ganha confiança imediata.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-amber-200/80 shadow-xs flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 font-black text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                      Estrutura Pautada Igual ao Caderno Escolar
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      As páginas simulam as linhas reais do caderno de sala de aula, associando cada leitura a ilustrações coloridas que ativam a memória afetiva da criança.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-amber-200/80 shadow-xs flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 font-black text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                      Evolução Gradual para Textos Maiores
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Assim que seu filho ganha segurança, avança suavemente para textos mais longos e sílabas complexas, até ler livros inteiros sozinho com orgulho!
                    </p>
                  </div>
                </div>

              </div>

              {/* Emotional Quote & CTA */}
              <div className="mt-6 pt-5 border-t border-amber-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-amber-100/60 rounded-xl p-3 border border-amber-200 mb-4">
                  <span className="text-emerald-600 font-bold text-sm">✓</span>
                  <span>
                    Construído para mães e pais aplicarem em casa em apenas <strong>15 minutos ao dia</strong>, sem exigir nenhuma experiência prévia.
                  </span>
                </div>

                <a
                  href="#precos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#FF3B69] hover:bg-[#F22958] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-rose-200 border-b-4 border-[#C81C44] active:border-b-0 active:translate-y-1 transition-all text-center cursor-pointer"
                >
                  <span>QUERO VER MEU FILHO LENDO ASSIM</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
