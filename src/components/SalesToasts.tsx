import React, { useState, useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import { SALES_NOTIFICATIONS } from '../data/landingData';

export const SalesToasts: React.FC = () => {
  const [currentToastIndex, setCurrentToastIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isDismissed) {
      setIsVisible(false);
      return;
    }

    const scheduleNext = (delayMs: number, count: number) => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);

        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
          setCurrentToastIndex((prev) => (prev + 1) % SALES_NOTIFICATIONS.length);
          const nextCount = count + 1;
          const nextDelay = nextCount < 2 ? 7000 : 12000;
          scheduleNext(nextDelay, nextCount);
        }, 4000);
      }, delayMs);
    };

    // Component itself mounts only after 3s delay in App.tsx
    scheduleNext(300, 0);

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
      className={`fixed bottom-3 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 z-40 w-auto max-w-[94vw] transition-all duration-300 ease-out pointer-events-auto ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-slate-900/95 text-white text-[11px] sm:text-xs font-medium pl-2.5 pr-2 py-1.5 rounded-full shadow-lg border border-slate-700/80 flex items-center gap-2 whitespace-nowrap">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
          <Check className="w-2.5 h-2.5 stroke-[3]" />
        </span>

        <div className="flex items-center gap-1.5 truncate">
          <span className="font-bold text-slate-100">{currentNotification.name}</span>
          <span className="text-slate-400 text-[10px]">({currentNotification.location.split(' - ')[1] || 'BR'})</span>
          <span className="text-slate-400">·</span>
          <span className="text-emerald-400 font-semibold truncate">{currentNotification.plan}</span>
        </div>

        <button
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-slate-800 transition-colors ml-1 shrink-0 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};
