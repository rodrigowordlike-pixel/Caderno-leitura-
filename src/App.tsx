import React, { Suspense, lazy, useEffect, useState } from 'react';
import { HeroSection } from './components/HeroSection';

const MaterialPresentationSection = lazy(() =>
  import('./components/MaterialPresentationSection').then((m) => ({
    default: m.MaterialPresentationSection,
  }))
);
const SocialProofCarousel = lazy(() =>
  import('./components/SocialProofCarousel').then((m) => ({ default: m.SocialProofCarousel }))
);
const PricingTable = lazy(() =>
  import('./components/PricingTable').then((m) => ({ default: m.PricingTable }))
);
const GuaranteeSection = lazy(() =>
  import('./components/GuaranteeSection').then((m) => ({ default: m.GuaranteeSection }))
);
const FaqSection = lazy(() =>
  import('./components/FaqSection').then((m) => ({ default: m.FaqSection }))
);
const FinalCtaSection = lazy(() =>
  import('./components/FinalCtaSection').then((m) => ({ default: m.FinalCtaSection }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);
const SalesToasts = lazy(() =>
  import('./components/SalesToasts').then((m) => ({ default: m.SalesToasts }))
);
const PrizeWheelModal = lazy(() =>
  import('./components/PrizeWheelModal').then((m) => ({ default: m.PrizeWheelModal }))
);

export default function App() {
  const [showBelowFold, setShowBelowFold] = useState(false);
  const [showSalesToast, setShowSalesToast] = useState(false);
  const [isPrizeWheelOpen, setIsPrizeWheelOpen] = useState(false);

  useEffect(() => {
    // Anchor links or already-scrolled visitors hydrate below-the-fold sections immediately
    if (window.scrollY > 10 || window.location.hash) {
      setShowBelowFold(true);
    }

    let cancelled = false;
    const activateBelowFold = () => {
      if (!cancelled) setShowBelowFold(true);
    };

    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | undefined;
    let fallbackTimer: number | undefined;

    const scheduleIdle = () => {
      if (typeof win.requestIdleCallback === 'function') {
        idleId = win.requestIdleCallback(activateBelowFold, { timeout: 2500 });
      } else {
        fallbackTimer = window.setTimeout(activateBelowFold, 1500);
      }
    };

    if (document.readyState === 'complete') {
      scheduleIdle();
    } else {
      window.addEventListener('load', scheduleIdle, { once: true });
    }

    window.addEventListener('scroll', activateBelowFold, { once: true, passive: true });
    window.addEventListener('touchstart', activateBelowFold, { once: true, passive: true });
    window.addEventListener('pointerdown', activateBelowFold, { once: true, passive: true });
    window.addEventListener('keydown', activateBelowFold, { once: true, passive: true });

    // SalesToast strictly deferred 3 seconds after opening page
    const toastTimer = window.setTimeout(() => {
      if (!cancelled) setShowSalesToast(true);
    }, 3000);

    return () => {
      cancelled = true;
      window.clearTimeout(toastTimer);
      if (idleId !== undefined && win.cancelIdleCallback) win.cancelIdleCallback(idleId);
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
      window.removeEventListener('load', scheduleIdle);
      window.removeEventListener('scroll', activateBelowFold);
      window.removeEventListener('touchstart', activateBelowFold);
      window.removeEventListener('pointerdown', activateBelowFold);
      window.removeEventListener('keydown', activateBelowFold);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#1E293B]">
      <main className="flex-1">
        {/* 1. PRIMEIRA DOBRA (Mobile-first) */}
        <HeroSection />

        {showBelowFold && (
          <Suspense fallback={null}>
            {/* 2 & 3. APRESENTAÇÃO DO MATERIAL + BENEFÍCIOS + KIT COMPLETO + PÁGINAS REAIS + 6 BÔNUS REAIS */}
            <MaterialPresentationSection />

            {/* 4. COMENTÁRIOS E DEPOIMENTOS REAIS ANTES DAS OFERTAS */}
            <SocialProofCarousel />

            {/* 5. SEÇÃO DE OFERTAS: PLANO BÁSICO (R$ 8,90 -> ROLETA) PRIMEIRO + COMBO COMPLETO (R$ 9,90) */}
            <PricingTable onOpenPrizeWheel={() => setIsPrizeWheelOpen(true)} />

            {/* 6. GARANTIA DE 7 DIAS E INFORMAÇÕES DE SEGURANÇA */}
            <GuaranteeSection />

            {/* 7. DÚVIDAS FREQUENTES (FAQ) */}
            <FaqSection />

            {/* 8. CHAMADA FINAL COM OS DOIS BOTÕES */}
            <FinalCtaSection onOpenPrizeWheel={() => setIsPrizeWheelOpen(true)} />
          </Suspense>
        )}
      </main>

      {showBelowFold && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}

      {/* SalesToast carregado com atraso de 3 segundos */}
      {showSalesToast && (
        <Suspense fallback={null}>
          <SalesToasts />
        </Suspense>
      )}

      {/* Roleta Premiada carregada exclusivamente sob demanda ao clicar no Plano Básico */}
      {isPrizeWheelOpen && (
        <Suspense fallback={null}>
          <PrizeWheelModal
            isOpen={isPrizeWheelOpen}
            onClose={() => setIsPrizeWheelOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
