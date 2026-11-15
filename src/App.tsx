import React, { Suspense, lazy, useState, useEffect } from 'react';
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
  const [showBelowFold, setShowBelowFold] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const activate = () => {
      if (!cancelled) setShowBelowFold(true);
    };

    // Hydrate below-the-fold sections on first interaction OR once browser is idle
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | undefined;
    let timerId: number | undefined;

    const scheduleIdle = () => {
      if (typeof win.requestIdleCallback === 'function') {
        idleId = win.requestIdleCallback(activate, { timeout: 1200 });
      } else {
        timerId = window.setTimeout(activate, 500);
      }
    };

    if (document.readyState === 'complete') {
      scheduleIdle();
    } else {
      window.addEventListener('load', scheduleIdle, { once: true });
    }

    window.addEventListener('scroll', activate, { once: true, passive: true });
    window.addEventListener('touchstart', activate, { once: true, passive: true });
    window.addEventListener('pointerdown', activate, { once: true, passive: true });

    return () => {
      cancelled = true;
      if (idleId !== undefined && win.cancelIdleCallback) win.cancelIdleCallback(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
      window.removeEventListener('load', scheduleIdle);
      window.removeEventListener('scroll', activate);
      window.removeEventListener('touchstart', activate);
      window.removeEventListener('pointerdown', activate);
    };
  }, []);

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
        <HeroSection onCtaClick={() => handleOpenCheckout('combo', 'R$ 9,90')} />

        {showBelowFold && (
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
            <GuaranteeSection onDirectCta={() => handleOpenCheckout('combo', 'R$ 9,90')} />

            {/* 9. FAQ */}
            <FaqSection />
          </Suspense>
        )}
      </main>

      {showBelowFold && (
        <Suspense fallback={null}>
          <Footer />
          <SalesToasts />
        </Suspense>
      )}
    </div>
  );
}
