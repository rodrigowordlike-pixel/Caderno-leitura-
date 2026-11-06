export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatarUrl: string;
  timeAgo: string;
  message: string;
  hasAudio?: boolean;
  audioDuration?: string;
  rating: number;
}

export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  originalPrice: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface ProductModule {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  benefits: string[];
}

export interface PricingPlan {
  id: 'basic' | 'combo';
  title: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  originalPrice: string;
  currentPrice: string;
  installments: string;
  savings: string;
  features: {
    text: string;
    included: boolean;
    highlight?: boolean;
  }[];
  ctaText: string;
  ctaSubtext: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SaleNotification {
  name: string;
  location: string;
  timeAgo: string;
  plan: string;
}
