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

export const trackAndRedirectToCheckout = (plan: 'combo' | 'basic') => {
  const url = plan === 'basic' ? CHECKOUT_URLS.basic : CHECKOUT_URLS.combo;
  const value = plan === 'basic' ? 22.90 : 37.90;
  const contentName = plan === 'basic' ? 'Opção Básica - R$ 22,90' : 'Pacote Premium Kit Completo - R$ 37,90';

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

  // Navigate directly to Wiapy checkout
  window.location.href = url;
};
