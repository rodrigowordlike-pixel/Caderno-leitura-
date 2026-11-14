export const ASSETS = {
  // Optimized WebP image showing the 8 illustrated notebooks
  heroMockup: '/assets/optimized/IMG_8790_a2929a64.webp',
  // Optimized WebP image for the R$ 37,90 combo showing 8 notebooks + 6 bonuses
  comboMockup: '/assets/optimized/IMG_8859_e57429e4.webp',
  // Streaming-optimized compressed VSL MP4 (+faststart) & instant WebP poster
  vslVideo: '/assets/optimized/vsl.mp4',
  vslPoster: '/assets/optimized/vsl-poster.webp',
  motherChildReading: '/assets/optimized/IMG_8942_875dcae4.webp',
  bonusMockup: '/src/assets/images/bonus_materiais_mockup_1793501682920.jpg',
};

export const CHECKOUT_URLS = {
  combo: 'https://pay.wiapy.com/PHWcAoOLTjcR',
  basic: 'https://pay.wiapy.com/EifdeIu3KQr',
};

export const buildCheckoutUrl = (plan: 'combo' | 'basic'): string => {
  const baseUrl = plan === 'basic' ? CHECKOUT_URLS.basic : CHECKOUT_URLS.combo;
  if (typeof window === 'undefined' || !window.location.search) {
    return baseUrl;
  }
  try {
    const incoming = new URLSearchParams(window.location.search);
    const target = new URL(baseUrl);
    incoming.forEach((value, key) => {
      if (!target.searchParams.has(key)) {
        target.searchParams.set(key, value);
      }
    });
    return target.toString();
  } catch {
    return baseUrl;
  }
};

const warmedUrls = new Set<string>();

export const warmCheckoutUrl = (plan: 'combo' | 'basic') => {
  if (typeof document === 'undefined') return;
  const url = buildCheckoutUrl(plan);
  if (warmedUrls.has(url)) return;
  warmedUrls.add(url);

  try {
    if (!document.querySelector('link[rel="preconnect"][href="https://pay.wiapy.com"]')) {
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://pay.wiapy.com';
      preconnect.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect);
    }

    const prefetch = document.createElement('link');
    prefetch.rel = 'prefetch';
    prefetch.as = 'document';
    prefetch.href = url;
    document.head.appendChild(prefetch);
  } catch {
    // Ignore unsupported hint errors
  }
};

const abortBackgroundVideoStreams = () => {
  if (typeof document === 'undefined') return;
  try {
    const videos = document.querySelectorAll('video');
    videos.forEach((v) => {
      v.pause();
      v.removeAttribute('src');
      v.load();
    });
  } catch {
    // Ignore cleanup errors
  }
};

export const trackAndRedirectToCheckout = (
  plan: 'combo' | 'basic',
  _triggerEl?: HTMLElement | null
) => {
  const url = buildCheckoutUrl(plan);
  const value = plan === 'basic' ? 22.90 : 37.90;
  const contentName = plan === 'basic' ? 'Opção Básica - R$ 22,90' : 'Pacote Premium Kit Completo - R$ 37,90';

  // Free 100% of mobile 4G bandwidth immediately from any ongoing VSL video download
  abortBackgroundVideoStreams();

  if (typeof window !== 'undefined' && (window as any).fbq) {
    try {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: contentName,
        value: value,
        currency: 'BRL',
      });
    } catch (e) {
      console.error('Pixel track error:', e);
    }
  }

  // Navigate directly to Wiapy checkout with preserved UTMs/fbclid
  window.location.href = url;
};
