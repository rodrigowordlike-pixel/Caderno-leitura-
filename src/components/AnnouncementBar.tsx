import React from 'react';
import { Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 py-2 px-4 text-xs font-medium border-b border-slate-800">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-center">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>
          <strong className="text-white font-semibold">Condição de Lançamento:</strong> Kit Completo com os 8 Cadernos da Leitura liberado com valor promocional por tempo limitado.
        </span>
      </div>
    </div>
  );
};
