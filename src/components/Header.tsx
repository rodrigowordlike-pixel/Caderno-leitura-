import React from 'react';
import { BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-4">
        {/* Zone 1: Single text element wordmark with icon */}
        <a href="#" className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-amber-400 to-sky-400 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <span>Meus Cadernos da Leitura</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#como-funciona" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Como Funciona
          </a>
          <a href="#o-que-inclui" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            O Que Inclui
          </a>
          <a href="#depoimentos" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Depoimentos
          </a>
          <a href="#bonus" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Bônus
          </a>
          <a href="#garantia" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Garantia
          </a>
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#precos"
            className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 active:scale-95"
          >
            Ver Oferta Especial
          </a>
        </div>
      </div>
    </header>
  );
};
