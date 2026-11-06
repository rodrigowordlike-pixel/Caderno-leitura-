import React from 'react';
import { BookOpen, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10 pb-8 border-b border-slate-900">
          
          {/* Brand info */}
          <div className="space-y-3 max-w-lg">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg">
              <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-white">
                <BookOpen className="w-4 h-4" />
              </div>
              <span>O Livro da Leitura Completo</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Metodologia lúdica baseada em neurociência e consciência fonológica para alfabetização acelerada sem lágrimas. Criado com amor para pais, mães e professores.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Compra 100% Segura • Garantia Incondicional de 7 Dias</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="text-white font-bold text-sm mb-3">Links Rápidos</div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#bonus" className="hover:text-white transition-colors">Bônus Exclusivos</a></li>
              <li><a href="#precos" className="hover:text-white transition-colors">Tabela de Preços</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="space-y-4 text-[11px] text-slate-500 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} O Livro da Leitura Completo. Todos os direitos reservados. CNPJ: 42.189.921/0001-04.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Termos de Uso</span>
            <span>·</span>
            <span className="hover:text-slate-300 cursor-pointer">Políticas de Privacidade</span>
            <span>·</span>
            <span className="hover:text-slate-300 cursor-pointer">Aviso Legal</span>
          </div>
        </div>

        <div className="mt-6 text-[10px] text-slate-600 text-center leading-relaxed max-w-3xl mx-auto">
          Aviso legal: Este produto não substitui a frequência escolar obrigatória. Os resultados podem variar de acordo com o ritmo individual de cada criança e a constância na aplicação diária dos exercícios propostos.
        </div>

      </div>
    </footer>
  );
};
