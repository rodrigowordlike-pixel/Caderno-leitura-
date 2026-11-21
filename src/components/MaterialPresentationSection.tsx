import React from 'react';
import { BookOpen, Check, Clock, Printer, ShieldCheck, Users } from 'lucide-react';
import { ASSETS } from '../data/checkoutConfig';
import { BONUS_ITEMS, NOTEBOOKS_DATA } from '../data/landingData';
import { ActivitiesCarousel } from './ActivitiesCarousel';

export const MaterialPresentationSection: React.FC = () => {
  const dailyBenefits = [
    {
      icon: Clock,
      title: '15 minutos por dia, sem cansar',
      description:
        'Lições curtas para encaixar na rotina da família sem transformarem o dever de casa em briga ou choro.',
    },
    {
      icon: BookOpen,
      title: 'Do som das letras às histórias',
      description:
        'Em vez de decorar listas de sílabas, a criança entende como os sons se juntam para formar palavras reais.',
    },
    {
      icon: Users,
      title: 'Pensado para pais aplicarem em casa',
      description:
        'Cada página vem com orientações simples do que falar e fazer, sem exigir formação em pedagogia.',
    },
    {
      icon: Printer,
      title: 'PDF para imprimir ou ler na tela',
      description:
        'Use no celular/tablet ou imprima em casa e encaderne como caderno de atividades quantas vezes quiser.',
    },
  ];

  return (
    <>
      {/* 2. APRESENTAÇÃO RÁPIDA DO MATERIAL E BENEFÍCIOS PRÁTICOS NO DIA A DIA */}
      <section
        id="como-funciona"
        className="cv-auto py-10 sm:py-14 bg-slate-50/80 border-b border-slate-200/70 scroll-mt-6"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF3B69] mb-2">
              Como o material funciona na prática
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3 [text-wrap:balance]">
              Um método simples para ajudar seu filho a ler com confiança
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Muitas crianças já reconhecem o alfabeto, mas travam na hora de juntar as letras. Os 8 cadernos guiam cada etapa passo a passo com ilustrações e leitura acompanhada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dailyBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DEMONSTRAÇÃO VISUAL DO QUE O COMPRADOR RECEBE */}
      <section
        id="oque-recebe"
        className="cv-auto py-10 sm:py-14 bg-white border-b border-slate-200/70 scroll-mt-6"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              O que vem no seu acesso
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3 [text-wrap:balance]">
              Veja tudo o que você recebe ao garantir o material
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Material completo organizado em sequência progressiva, pronto para baixar após a confirmação do pagamento.
            </p>
          </div>

          {/* Imagem do Kit + Foto real em uso */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-10">
            <div className="bg-rose-50/40 rounded-3xl p-4 border border-rose-100 text-center">
              <img
                src={ASSETS.heroMockup}
                alt="Kit Completo Meus Cadernos da Leitura - 8 Materiais em PDF"
                width={440}
                height={440}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                referrerPolicy="no-referrer"
                className="w-full max-w-[360px] mx-auto h-auto rounded-2xl object-cover shadow-sm"
              />
              <p className="text-xs font-bold text-slate-700 mt-3">
                8 Cadernos Progressivos ilustrados para imprimir ou ler em tela
              </p>
            </div>

            <div className="bg-amber-50/50 rounded-3xl p-4 sm:p-5 border border-amber-200/80 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-4">
              <div className="w-40 sm:w-44 shrink-0 rounded-2xl overflow-hidden border-2 border-amber-200 bg-white shadow-sm">
                <img
                  src={ASSETS.motherChildReading}
                  alt="Família praticando leitura com os cadernos em casa"
                  width={360}
                  height={630}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover block"
                />
              </div>
              <div className="text-left space-y-2.5">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  Material Principal: 8 Cadernos de Leitura
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {NOTEBOOKS_DATA.map((nb) => (
                    <li key={nb.id} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{nb.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Carrossel de páginas reais do material */}
          <ActivitiesCarousel />

          {/* Lista clara dos 6 Bônus Reais inclusos no Combo Completo */}
          <div id="bonus" className="mt-12 pt-10 border-t border-slate-200 scroll-mt-6">
            <div className="text-center max-w-xl mx-auto mb-7">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
                Inclusos no Combo Completo
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2 [text-wrap:balance]">
                6 Cadernos Bônus para acompanhar todas as fases
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Materiais complementares de apoio fonológico e ortográfico avaliados em R$ 233,40, inclusos sem custo adicional no Combo Completo.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
              {BONUS_ITEMS.map((bonus, idx) => (
                <div
                  key={bonus.id}
                  className="bg-[#FFFDF9] rounded-2xl p-2.5 sm:p-3.5 border border-amber-200 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="rounded-xl overflow-hidden bg-slate-50 aspect-[3/4] mb-2.5 border border-slate-100">
                      <img
                        src={bonus.image}
                        alt={bonus.title}
                        width={360}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover block"
                      />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF3B69] mb-0.5">
                      Bônus {idx + 1}
                    </p>
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug mb-1">
                      {bonus.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-snug mb-2">
                      {bonus.description}
                    </p>
                  </div>

                  <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="line-through text-slate-400 font-semibold">
                      {bonus.originalPrice}
                    </span>
                    <span className="text-emerald-700 font-extrabold uppercase">
                      Incluso no Combo
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Entrega imediata em PDF no e-mail cadastrado após a confirmação.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
