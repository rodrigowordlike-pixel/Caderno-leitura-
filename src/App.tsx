import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ParentChecklistSection } from './components/ParentChecklistSection';
import { UniqueMechanism } from './components/UniqueMechanism';
import { SocialProofCarousel } from './components/SocialProofCarousel';
import { BonusSection } from './components/BonusSection';
import { PricingTable } from './components/PricingTable';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { SalesToasts } from './components/SalesToasts';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';

export default function App() {
  const [checkoutModal, setCheckoutModal] = useState<{
    isOpen: boolean;
    planId: 'basic' | 'combo' | 'combo-downsell';
    price: string;
  }>({
    isOpen: false,
    planId: 'combo',
    price: 'R$ 37,90',
  });

  const handleOpenCheckout = (
    planId: 'basic' | 'combo' | 'combo-downsell',
    price: string
  ) => {
    setCheckoutModal({
      isOpen: true,
      planId,
      price,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#1E293B]">
      <main className="flex-1">
        {/* 1. HERO SECTION (Com Mini-Oferta Direta de Alta Conversão) */}
        <HeroSection onCtaClick={() => handleOpenCheckout('combo', 'R$ 37,90')} />

        {/* 2. EMPATIA DAS MÃES (Toda mãe que passa por isso se sente impotente) */}
        <ParentChecklistSection />

        {/* 3. MECANISMO ÚNICO & CARROSSEL DE ATIVIDADES REAIS */}
        <UniqueMechanism />

        {/* 4. PROVA SOCIAL FORTE (Carrossel Estilo Mensagens Reais de WhatsApp) */}
        <SocialProofCarousel />

        {/* 6. BÔNUS DE ALTO VALOR PERCEBIDO (5 Bônus com Valor Riscado) */}
        <BonusSection />

        {/* 7. TABELA DE PREÇOS COM ANCORAGEM AGRESSIVA (Inicial vs 8 Cadernos) */}
        <PricingTable onCheckout={handleOpenCheckout} />

        {/* 8. GARANTIA INCONDICIONAL DE 7 DIAS (Risco Zero em 3 Passos) */}
        <GuaranteeSection onDirectCta={() => handleOpenCheckout('combo', 'R$ 37,90')} />

        {/* 9. FAQ (Dúvidas Frequentes em Accordion Sanfonado) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pop-up de Compras Recentes Ultradiscreto no Canto */}
      <SalesToasts />

      {/* Modal de Checkout (Acionado apenas no clique) */}
      <CheckoutModal
        isOpen={checkoutModal.isOpen}
        onClose={() => setCheckoutModal((prev) => ({ ...prev, isOpen: false }))}
        planId={checkoutModal.planId}
        price={checkoutModal.price}
      />
    </div>
  );
}
