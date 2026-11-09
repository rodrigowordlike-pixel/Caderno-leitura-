import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ParentChecklistSection } from './components/ParentChecklistSection';
import { UniqueMechanism } from './components/UniqueMechanism';
import { SocialProofCarousel } from './components/SocialProofCarousel';
import { BonusSection } from './components/BonusSection';
import { PricingTable } from './components/PricingTable';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { SalesToasts } from './components/SalesToasts';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';
import { trackAndRedirectToCheckout } from './data/landingData';

export default function App() {
  const handleOpenCheckout = (
    planId: 'basic' | 'combo' | 'combo-downsell',
    _price?: string
  ) => {
    trackAndRedirectToCheckout(planId === 'basic' ? 'basic' : 'combo');
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

      {/* Barra Fixa Flutuante no Mobile */}
      <StickyMobileBar />
    </div>
  );
}
