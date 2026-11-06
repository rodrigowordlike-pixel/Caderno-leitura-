import React, { useState, useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import { SALES_NOTIFICATIONS } from '../data/landingData';

export const SalesToasts: React.FC = () => {
  const [currentToastIndex, setCurrentToastIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isDismissed) return;

    const scheduleNext = (delayMs: number, count: number) => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);

        // Visible for 4 seconds
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);

          setCurrentToastIndex((prev) => (prev + 1) % SALES_NOTIFICATIONS.length);
          const nextCount = count + 1;
          const nextDelay = nextCount < 2 ? 5000 : 10000;
          scheduleNext(nextDelay, nextCount);
        }, 4000);
      }, delayMs);
    };

    // First appearance at 5 seconds
    scheduleNext(5000, 0);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const currentNotification = SALES_NOTIFICATIONS[currentToastIndex];

  return (
    <aside
      aria-live="polite"
      aria-atomic="true"
      className={`fixed top-2.5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[94vw] transition-all duration-300 ease-out pointer-events-auto ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : '-translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      {/* Ultra-slim, 1-line minimalist micro-pill (iOS Dynamic Island style) */}
      <div className="bg-slate-900/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium pl-2.5 pr-2 py-1 rounded-full shadow-md border border-slate-700/80 flex items-center gap-2 whitespace-nowrap">
        {/* Subtle green pulse dot */}
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>

        {/* 1-Line Clean Text */}
        <div className="flex items-center gap-1.5 truncate">
          <span className="font-bold text-slate-100">{currentNotification.name}</span>
          <span className="text-slate-400 text-[10px]">({currentNotification.location.split(' - ')[1] || 'BR'})</span>
          <span className="text-slate-400">·</span>
          <span className="text-emerald-400 font-semibold truncate">comprou o Kit</span>
        </div>

        {/* Tiny Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-slate-800 transition-colors ml-1 shrink-0"
          aria-label="Fechar"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};
