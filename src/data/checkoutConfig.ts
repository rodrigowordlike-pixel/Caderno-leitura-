export const ASSETS = {
  // Optimized WebP image showing the 8 illustrated notebooks
  heroMockup: '/assets/optimized/IMG_8790_a2929a64.webp',
  // Optimized WebP image for the R$ 9,90 combo showing 8 notebooks + 6 bonuses
  comboMockup: '/assets/optimized/IMG_8859_e57429e4.webp',
  // Streaming-optimized compressed VSL MP4 (+faststart) & instant 9:16 WebP poster
  vslVideo: '/assets/optimized/vsl.mp4',
  vslPoster: '/assets/optimized/vsl-poster.webp',
  motherChildReading: '/assets/optimized/IMG_8942_875dcae4.webp',
  bonusMockup: '/assets/optimized/IMG_8859_e57429e4.webp',
};

export const CHECKOUT_URLS = {
  combo: 'https://pay.wiapy.com/PHWcAoOLTjcR',
  basic: 'https://pay.wiapy.com/EifdeIu3KQr',
};

const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
  'ttclid',
  'src',
  'sck',
] as const;

const TRACKING_STORAGE_KEY = '__leitura_tracking_params';

const getPersistedTrackingParams = (): URLSearchParams => {
  const params = new URLSearchParams();
  if (typeof window === 'undefined') return params;

  try {
    const saved = window.sessionStorage.getItem(TRACKING_STORAGE_KEY);
    if (saved) {
      const parsed = new URLSearchParams(saved);
      parsed.forEach((value, key) => {
        if (value) params.set(key, value);
      });
    }

    if (window.location.search) {
      const current = new URLSearchParams(window.location.search);
      current.forEach((value, key) => {
        if (value) params.set(key, value);
      });
      const toStore = params.toString();
      if (toStore) {
        window.sessionStorage.setItem(TRACKING_STORAGE_KEY, toStore);
      }
    }
  } catch {
    if (window.location.search) {
      return new URLSearchParams(window.location.search);
    }
  }

  return params;
};

/**
 * Decora qualquer URL de checkout repassando todos os parâmetros de campanha e atribuição
 * (utm_source, utm_medium, utm_campaign, utm_term, utm_content, fbclid, gclid, ttclid, src, etc.).
 */
export const decorateCheckoutUrl = (baseUrl: string): string => {
  if (typeof window === 'undefined') {
    return baseUrl;
  }

  const incoming = getPersistedTrackingParams();
  if (!incoming.toString()) {
    return baseUrl;
  }

  try {
    const target = new URL(baseUrl);

    for (const key of TRACKING_PARAMS) {
      const val = incoming.get(key);
      if (val && !target.searchParams.has(key)) {
        target.searchParams.set(key, val);
      }
    }

    incoming.forEach((value, key) => {
      if (value && !target.searchParams.has(key)) {
        target.searchParams.set(key, value);
      }
    });

    return target.toString();
  } catch {
    return baseUrl;
  }
};

export const buildCheckoutUrl = (plan: 'combo' | 'basic'): string => {
  const baseUrl = plan === 'basic' ? CHECKOUT_URLS.basic : CHECKOUT_URLS.combo;
  return decorateCheckoutUrl(baseUrl);
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
  const value = plan === 'basic' ? 8.90 : 9.90;
  const contentName = plan === 'basic' ? 'Plano Básico - R$ 8,90' : 'Combo Completo - R$ 9,90';

  // Free mobile bandwidth from active video stream before navigation
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

  window.location.href = url;
};
