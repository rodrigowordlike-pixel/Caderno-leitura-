import React, { Suspense, lazy } from 'react';
import { HeroSection } from './components/HeroSection';
import { trackAndRedirectToCheckout } from './data/checkoutConfig';

const ParentChecklistSection = lazy(() => import('./components/ParentChecklistSection').then((m) => ({ default: m.ParentChecklistSection })));
const UniqueMechanism = lazy(() => import('./components/UniqueMechanism').then((m) => ({ default: m.UniqueMechanism })));
const SocialProofCarousel = lazy(() => import('./components/SocialProofCarousel').then((m) => ({ default: m.SocialProofCarousel })));
const BonusSection = lazy(() => import('./components/BonusSection').then((m) => ({ default: m.BonusSection })));
const PricingTable = lazy(() => import('./components/PricingTable').then((m) => ({ default: m.PricingTable })));
const GuaranteeSection = lazy(() => import('./components/GuaranteeSection').then((m) => ({ default: m.GuaranteeSection })));
const FaqSection = lazy(() => import('./components/FaqSection').then((m) => ({ default: m.FaqSection })));
const SalesToasts = lazy(() => import('./components/SalesToasts').then((m) => ({ default: m.SalesToasts })));
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })));

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
        {/* 1. HERO SECTION */}
        <HeroSection onCtaClick={() => handleOpenCheckout('combo', 'R$ 37,90')} />

        <Suspense fallback={null}>
          {/* 2. EMPATIA DAS MÃES */}
          <ParentChecklistSection />

          {/* 3. MECANISMO ÚNICO & CARROSSEL DE ATIVIDADES REAIS */}
          <UniqueMechanism />

          {/* 4. PROVA SOCIAL FORTE */}
          <SocialProofCarousel />

          {/* 6. BÔNUS DE ALTO VALOR PERCEBIDO */}
          <BonusSection />

          {/* 7. TABELA DE PREÇOS */}
          <PricingTable onCheckout={handleOpenCheckout} />

          {/* 8. GARANTIA INCONDICIONAL DE 7 DIAS */}
          <GuaranteeSection onDirectCta={() => handleOpenCheckout('combo', 'R$ 37,90')} />

          {/* 9. FAQ */}
          <FaqSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <SalesToasts />
      </Suspense>
    </div>
  );
}
