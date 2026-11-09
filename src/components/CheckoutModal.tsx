import React, { useState } from 'react';
import { X, Lock, CheckCircle2, QrCode, CreditCard, ShieldCheck, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: 'basic' | 'combo' | 'combo-downsell';
  price: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  planId,
  price,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [customCheckoutUrl, setCustomCheckoutUrl] = useState('');

  if (!isOpen) return null;

  const planTitles = {
    basic: 'Oferta Básica: 8 Materiais da Leitura',
    combo: 'Kit Completo Meus 8 Cadernos da Leitura + 6 Bônus GRÁTIS',
    'combo-downsell': 'Kit Completo com 10% OFF Exclusivo',
  };

  const handleSimulatePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail) return;

    // Meta Pixel event: Purchase
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const numericValue = planId === 'basic' ? 22.90 : planId === 'combo-downsell' ? 34.10 : 37.90;
      (window as any).fbq('track', 'Purchase', {
        value: numericValue,
        currency: 'BRL',
        content_name: planTitles[planId],
      });
    }

    setIsRedirecting(true);
    setTimeout(() => {
      setIsRedirecting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleExternalCheckout = () => {
    if (customCheckoutUrl) {
      window.open(customCheckoutUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden text-slate-800 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ambiente Seguro 256-bit</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 leading-tight">
                Finalizar Seu Pedido
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Você está adquirindo: <strong className="text-slate-800">{planTitles[planId]}</strong>
              </p>
            </div>

            {/* Order Summary Pill */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 block">Total a pagar:</span>
                <span className="text-2xl font-black text-emerald-600">{price}</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                Acesso Imediato
              </span>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'border-emerald-500 bg-emerald-50/60 text-emerald-900 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <QrCode className="w-4 h-4 text-emerald-600" />
                <span>PIX (Aprovação em 1 min)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-emerald-500 bg-emerald-50/60 text-emerald-900 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <CreditCard className="w-4 h-4 text-emerald-600" />
                <span>Cartão de Crédito</span>
              </button>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSimulatePurchase} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Aparecida Silva"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu Melhor E-mail (Onde você receberá o material)
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: maria@gmail.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp com DDD (Para suporte e envio do acesso)
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isRedirecting}
                className="w-full mt-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-75"
              >
                {isRedirecting ? (
                  <span>Processando com segurança...</span>
                ) : (
                  <>
                    <span>PAGAR AGORA {price} & RECEBER ACESSO</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Custom Gateway URL Link for Paid Traffic configuration */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <details className="text-xs text-slate-500">
                <summary className="cursor-pointer font-medium hover:text-slate-800">
                  ⚙️ Configurar Link Direto de Checkout (Kiwify, Hotmart, Eduzz, Braip)
                </summary>
                <div className="mt-2 space-y-2 pt-2">
                  <p className="text-[11px] text-slate-600">
                    Insira aqui seu link de checkout externo para redirecionamento direto de tráfego pago:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://pay.kiwify.com.br/..."
                      value={customCheckoutUrl}
                      onChange={(e) => setCustomCheckoutUrl(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                    />
                    <button
                      type="button"
                      onClick={handleExternalCheckout}
                      disabled={!customCheckoutUrl}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-semibold text-xs disabled:opacity-50 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Abrir</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </details>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 text-[11px] text-slate-500 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia de 7 dias com reembolso total garantido</span>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase mb-2">
              Pedido Aprovado com Sucesso!
            </span>

            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Parabéns pela decisão!
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
              Enviamos os dados de acesso do <strong>{planTitles[planId]}</strong> para o e-mail: <strong className="text-slate-900">{customerEmail}</strong>.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 mb-6 text-left space-y-2">
              <div className="flex items-center gap-2 font-bold">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Próximos Passos Imediatos:</span>
              </div>
              <p>1. Verifique sua caixa de entrada e também a pasta de spam/lixeira.</p>
              <p>2. Clique no link recebido para baixar todos os PDFs e Bônus.</p>
              <p>3. Reserve 15 minutos hoje com seu pequeno e comece pelo Volume 1!</p>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="w-full py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all"
            >
              Concluir e Voltar para a Página
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
