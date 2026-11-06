import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ParentChecklistSection: React.FC = () => {
  const painPoints = [
    {
      emoji: '😔',
      title: 'Ele já conhece as letras, mas não lê',
      description: 'Sabe o alfabeto de cor, mas trava na hora de juntar as sílabas.',
    },
    {
      emoji: '😣',
      title: 'A hora da lição vira choro',
      description: 'Ele resiste, foge, e o estudo vira motivo de briga em casa.',
    },
    {
      emoji: '📉',
      title: 'As notas estão caindo',
      description: 'A professora alertou e você não sabe mais o que fazer.',
    },
    {
      emoji: '🥺',
      title: "Ele acha que é 'burro'",
      description: 'A autoestima cai e ele começa a se comparar com os colegas.',
    },
  ];

  return (
    <section id="diagnostico-pais" className="py-14 sm:py-20 bg-slate-50/80 border-b border-slate-200/80 scroll-mt-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
            Você não está sozinha
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight [text-wrap:balance]">
            Toda mãe que passa por isso se sente impotente
          </h2>
        </div>

        {/* The 4 Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all flex items-start gap-4"
            >
              <div className="text-3xl shrink-0 p-1">
                {item.emoji}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Comfort & Reassurance Close */}
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-amber-50/60 border-2 border-emerald-400/60 rounded-3xl p-6 sm:p-8 text-center shadow-xs">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mb-3">
            <Sparkles className="w-5 h-5 text-emerald-600" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            Calma. Seu filho não tem nada de errado.
          </h3>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-lg mx-auto mb-5">
            Ele é inteligente, curioso e capaz. <strong className="text-slate-900">Ele só nunca teve acesso ao método certo.</strong>
          </p>

          <a
            href="#mecanismo-unico"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Veja como o método fônico lúdico destrava a leitura</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
