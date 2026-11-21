import React, { useState } from 'react';
import { ArrowRight, Check, Gift, ShieldCheck, X } from 'lucide-react';
import {
  CHECKOUT_URLS,
  decorateCheckoutUrl,
  trackAndRedirectToCheckout,
  warmCheckoutUrl,
} from '../data/checkoutConfig';

interface PrizeWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHEEL_SEGMENTS = [
  { label: 'Combo + 6 Bônus R$ 9,90', color: '#FF3B69', textColor: '#FFFFFF' },
  { label: 'Só os 8 Cadernos', color: '#FDE68A', textColor: '#78350F' },
  { label: 'Garantia 7 Dias', color: '#10B981', textColor: '#FFFFFF' },
  { label: 'Combo Completo R$ 9,90', color: '#F59E0B', textColor: '#FFFFFF' },
  { label: 'Acesso Vitalício', color: '#3B82F6', textColor: '#FFFFFF' },
  { label: '6 Bônus Inclusos', color: '#EC4899', textColor: '#FFFFFF' },
];

export const PrizeWheelModal: React.FC<PrizeWheelModalProps> = ({ isOpen, onClose }) => {
  const [wheelState, setWheelState] = useState<'idle' | 'spinning' | 'won'>('idle');
  const [rotation, setRotation] = useState(0);

  if (!isOpen) return null;

  const comboUrl = decorateCheckoutUrl(CHECKOUT_URLS.combo);
  const basicUrl = decorateCheckoutUrl(CHECKOUT_URLS.basic);

  const handleSpin = () => {
    if (wheelState !== 'idle') return;
    warmCheckoutUrl('combo');
    setWheelState('spinning');
    // Spin 5 full turns + align segment 0 cleanly at top pointer (12 o'clock)
    setRotation(1800 - 30);
    window.setTimeout(() => {
      setWheelState('won');
    }, 1900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prize-wheel-title"
    >
      <div className="relative w-full max-w-md bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border-2 border-amber-300 text-center my-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF3B69] mb-1">
          Antes de ir para o Plano Básico
        </p>

        <h3
          id="prize-wheel-title"
          className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-2 [text-wrap:balance]"
        >
          {wheelState === 'won'
            ? 'Você desbloqueou o Combo Completo por R$ 9,90!'
            : 'Gire a roleta para liberar os 6 bônus no seu pedido'}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-snug">
          {wheelState === 'won'
            ? 'Por apenas R$ 1,00 a mais que o Plano Básico (R$ 8,90), você leva os 8 cadernos + os 6 cadernos bônus.'
            : 'Você selecionou o Plano Básico (R$ 8,90). Teste sua sorte antes de finalizar.'}
        </p>

        {/* Roleta Visual Compacta */}
        <div className="relative w-52 h-52 sm:w-56 sm:h-56 mx-auto mb-5 select-none">
          {/* Ponteiro fixo no topo */}
          <div
            className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-slate-900 drop-shadow"
            aria-hidden="true"
          />

          <div
            className="w-full h-full rounded-full border-4 border-slate-900 shadow-lg overflow-hidden transition-transform duration-[1850ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full block">
              {WHEEL_SEGMENTS.map((seg, i) => {
                const startAngle = (i * 60 - 90) * (Math.PI / 180);
                const endAngle = ((i + 1) * 60 - 90) * (Math.PI / 180);
                const x1 = 100 + 100 * Math.cos(startAngle);
                const y1 = 100 + 100 * Math.sin(startAngle);
                const x2 = 100 + 100 * Math.cos(endAngle);
                const y2 = 100 + 100 * Math.sin(endAngle);
                const textAngle = i * 60 + 30;
                return (
                  <g key={seg.label}>
                    <path
                      d={`M100,100 L${x1},${y1} A100,100 0 0,1 ${x2},${y2} Z`}
                      fill={seg.color}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />
                    <text
                      x="100"
                      y="36"
                      fill={seg.textColor}
                      fontSize="7.5"
                      fontWeight="800"
                      textAnchor="middle"
                      transform={`rotate(${textAngle}, 100, 100)`}
                    >
                      {seg.label.split(' ').slice(0, 2).join(' ')}
                    </text>
                  </g>
                );
              })}
              <circle cx="100" cy="100" r="18" fill="#0F172A" stroke="#FFFFFF" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Estado: Antes de girar */}
        {wheelState !== 'won' && (
          <button
            type="button"
            onClick={handleSpin}
            disabled={wheelState === 'spinning'}
            className="w-full py-3.5 px-5 rounded-xl bg-[#FF3B69] hover:bg-[#F22958] disabled:opacity-75 text-white font-black text-sm sm:text-base uppercase tracking-wide shadow-lg border-b-4 border-[#C81C44] active:translate-y-0.5 transition-all cursor-pointer mb-3"
          >
            {wheelState === 'spinning' ? 'GIRANDO A ROLETA...' : 'GIRAR ROLETA AGORA'}
          </button>
        )}

        {/* Estado: Prêmio desbloqueado */}
        {wheelState === 'won' && (
          <div className="space-y-3 mb-3">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 text-left text-xs text-slate-700 space-y-1.5">
              <div className="flex items-center justify-between font-bold text-slate-900 pb-1 border-b border-emerald-200/70">
                <span className="flex items-center gap-1.5 text-emerald-800">
                  <Gift className="w-4 h-4" />
                  <span>Combo Completo + 6 Bônus</span>
                </span>
                <span className="text-base font-black text-[#FF3B69]">R$ 9,90</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Os 8 Cadernos Principais de Leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Todos os 6 Cadernos Bônus por apenas R$ 1,00 a mais</span>
              </div>
            </div>

            <a
              href={comboUrl}
              onPointerDown={() => warmCheckoutUrl('combo')}
              onMouseEnter={() => warmCheckoutUrl('combo')}
              onClick={(e) => {
                e.preventDefault();
                trackAndRedirectToCheckout('combo', e.currentTarget);
              }}
              className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base uppercase tracking-wide shadow-lg border-b-4 border-emerald-800 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>QUERO O COMBO COMPLETO POR R$ 9,90</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        )}

        {/* Opção sempre visível dentro do modal para seguir para o Plano Básico de R$ 8,90 */}
        <div className="pt-2">
          <a
            href={basicUrl}
            onPointerDown={() => warmCheckoutUrl('basic')}
            onMouseEnter={() => warmCheckoutUrl('basic')}
            onClick={(e) => {
              e.preventDefault();
              trackAndRedirectToCheckout('basic', e.currentTarget);
            }}
            className="inline-block text-xs font-semibold text-slate-600 hover:text-slate-900 underline py-1.5 px-2 cursor-pointer"
          >
            Continuar apenas com o Plano Básico por R$ 8,90
          </a>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Garantia incondicional de 7 dias em qualquer escolha</span>
        </div>
      </div>
    </div>
  );
};
