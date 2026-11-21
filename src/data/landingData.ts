import { BonusItem, FaqItem, PricingPlan, SaleNotification, Testimonial } from '../types';
export {
  ASSETS,
  CHECKOUT_URLS,
  decorateCheckoutUrl,
  buildCheckoutUrl,
  warmCheckoutUrl,
  trackAndRedirectToCheckout,
} from './checkoutConfig';

export const NOTEBOOKS_DATA = [
  {
    id: 1,
    character: 'A Borboletinha dos Sons',
    title: 'Caderno 1: Vogais e Consciência Fonológica',
    badge: 'Caderno 01',
    description:
      'Ajuda a criança a identificar o som de cada letra de forma leve, usando cores e associações visuais antes da junção silábica.',
  },
  {
    id: 2,
    character: 'A Abelha Rainha',
    title: 'Caderno 2: Primeiras Sílabas Simples',
    badge: 'Caderno 02',
    description:
      'Exercícios passo a passo para unir consoantes e vogais sem precisar decorar listas mecânicas.',
  },
  {
    id: 3,
    character: 'A Casinha Encantada',
    title: 'Caderno 3: Primeiras Palavras do Dia a Dia',
    badge: 'Caderno 03',
    description:
      'Palavras próximas da rotina infantil (bola, casa, pipoca, sapo) para dar sentido real ao que a criança lê.',
  },
  {
    id: 4,
    character: 'A Água-Viva',
    title: 'Caderno 4: Pequenas Frases com Fluência',
    badge: 'Caderno 04',
    description:
      'Atividades com marcadores de espaço entre palavras para transformar a leitura travada em frases naturais.',
  },
  {
    id: 5,
    character: 'A Abóbora Curiosa',
    title: 'Caderno 5: Caça-Sons e Atenção Visual',
    badge: 'Caderno 05',
    description:
      'Desafios de atenção e reconhecimento de sons que substituem tempo de tela por prática divertida em família.',
  },
  {
    id: 6,
    character: 'O Tigrezinho Valente',
    title: 'Caderno 6: Sílabas Complexas (BR, CR, TR, BL, CL)',
    badge: 'Caderno 06',
    description:
      'Treino guiado para encontros consonantais que costumam travar a leitura no início do ensino fundamental.',
  },
  {
    id: 7,
    character: 'O Porquinho Inteligente',
    title: 'Caderno 7: Diferenciação de Letras (b/d, p/q, f/v)',
    badge: 'Caderno 07',
    description:
      'Atividades visuais e motoras para corrigir trocas frequentes de letras parecidas na leitura e na escrita.',
  },
  {
    id: 8,
    character: 'O Grilo Tagarela',
    title: 'Caderno 8: Pequenas Histórias Completas',
    badge: 'Caderno 08',
    description:
      'Textos curtos com começo, meio e fim para a criança ler sozinha e ganhar confiança na própria evolução.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Juliana Ramos',
    role: 'Mãe do Theo (6 anos)',
    city: 'Campinas, SP',
    avatarUrl: '/assets/optimized/avatar-1.webp',
    timeAgo: 'Ontem às 21:14',
    message:
      'Gente, eu juro que comprei com o pé atrás achando que ia ser só mais um PDF qualquer que ficaria esquecido no celular. Mas no 3º dia aplicando os 15 minutos, meu filho leu a palavra "BOLO" e "PIPOCA" na embalagem do mercado sozinho! Eu comecei a chorar na fila do caixa de tanta emoção. A hora da lição deixou de ser um campo de batalha aqui em casa. Muito obrigada!',
    hasAudio: true,
    audioDuration: '0:38',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Eduardo Mendes',
    role: 'Pai da Sofia (7 anos) e Professor',
    city: 'Curitiba, PR',
    avatarUrl: '/assets/optimized/avatar-2.webp',
    timeAgo: 'Quarta-feira às 14:02',
    message:
      'Como pedagogo, digo com propriedade: o método silábico tradicional que usam nas escolas cansa demais a criança porque foca em memorização forçada. Esse material usa consciência fonológica pura e visual. A Sofia estava com trauma de tentar ler na frente dos coleguinhas. Com 2 semanas ela já está lendo as fábulas do Volume 3 com entonação!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Camila Ferreira Neves',
    role: 'Mãe do Davi (5 anos)',
    city: 'Belo Horizonte, MG',
    avatarUrl: '/assets/optimized/avatar-3.webp',
    timeAgo: 'Segunda-feira às 18:45',
    message:
      'O Davi não parava quieto com nada de escola, tudo era choro e desculpa pra ir pro videogame. As páginas de colorir inteligentes e o baralho dos sons prenderam a atenção dele na hora! É incrível ver ele me chamando pra "brincar de ler". Recomendo de olhos fechados pra qualquer mãe que se sinta culpada.',
    hasAudio: true,
    audioDuration: '0:45',
    rating: 5,
  },
  {
    id: '4',
    name: 'Renata Silveira',
    role: 'Mãe da Alice (8 anos)',
    city: 'Porto Alegre, RS',
    avatarUrl: '/assets/optimized/avatar-4.webp',
    timeAgo: 'Hoje às 10:22',
    message:
      'A Alice estava no 2º ano do fundamental e não conseguia juntar as sílabas, a professora já estava querendo encaminhar pra reforço caro. Peguei o material na promoção e imprimimos em uma gráfica rápida (encadernei com espiral colorido). Foi a melhor compra de 2026. Em menos de 20 dias ela destravou totalmente.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Patricia Albuquerque',
    role: 'Tia e Madrinha do Enzo (6 anos)',
    city: 'Salvador, BA',
    avatarUrl: '/assets/optimized/avatar-5.webp',
    timeAgo: 'Ontem às 16:30',
    message:
      'Comprei pra ajudar minha irmã que trabalha o dia todo e não tinha tempo de ensinar o Enzo. O cronograma de 15 minutos é perfeito! É direto ao ponto, sem enrolação teórica chata. Já comprei o Combo Completo com os bônus e valeu cada centavo.',
    hasAudio: true,
    audioDuration: '0:29',
    rating: 5,
  },
];

export const BONUS_ITEMS = [
  {
    id: 'bonus-1',
    title: 'Apostila Pré-silábica',
    image: '/assets/optimized/IMG_8849_802607ea.webp',
    description: 'Percepção visual, coordenação motora e discriminação auditiva dos sons iniciais.',
    originalPrice: 'R$ 47,90',
  },
  {
    id: 'bonus-2',
    title: 'Caderno Silábico Alfabético',
    image: '/assets/optimized/IMG_8850_0f38af62.webp',
    description: 'Atividades para ligar os sons da fala às letras correspondentes com clareza.',
    originalPrice: 'R$ 47,90',
  },
  {
    id: 'bonus-3',
    title: 'Caderno Alfabético',
    image: '/assets/optimized/IMG_8851_7c1333ed.webp',
    description: 'Prática de leitura contínua e construção segura da escrita convencional.',
    originalPrice: 'R$ 47,90',
  },
  {
    id: 'bonus-4',
    title: 'Caderno Sílabas sem Valor Sonoro',
    image: '/assets/optimized/IMG_8852_5d97c54a.webp',
    description: 'Exercícios de transição para identificar vogais e consoantes dentro das palavras.',
    originalPrice: 'R$ 29,90',
  },
  {
    id: 'bonus-5',
    title: 'Caderno Silábicos com Valor Sonoro',
    image: '/assets/optimized/IMG_8854_7e02eb0d.webp',
    description: 'Fixação prática das junções silábicas sem necessidade de memorização repetitiva.',
    originalPrice: 'R$ 29,90',
  },
  {
    id: 'bonus-6',
    title: 'Caderno de Sílabas Complexas',
    image: '/assets/optimized/IMG_8853_1f7fa2e3.webp',
    description: 'Atividades dedicadas a encontros consonantais e combinações mais desafiadoras.',
    originalPrice: 'R$ 29,90',
  },
];

export const BONUS_DATA: BonusItem[] = BONUS_ITEMS.map((item, idx) => ({
  id: item.id,
  tag: `Bônus ${idx + 1}`,
  title: item.title,
  originalPrice: item.originalPrice,
  description: item.description,
  highlights: [],
  iconName: 'BookOpen',
}));

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    title: 'Plano Básico',
    tagline: 'Para quem quer apenas os 8 cadernos principais em PDF',
    originalPrice: 'R$ 29,90',
    currentPrice: 'R$ 8,90',
    installments: 'pagamento único no PIX ou cartão',
    savings: 'Economize R$ 21,00',
    features: [
      { text: '8 cadernos progressivos de leitura em PDF', included: true },
      { text: 'Mais de 1.500 atividades ilustradas', included: true },
      { text: 'Acesso vitalício por e-mail para imprimir quando quiser', included: true },
      { text: 'Garantia incondicional de 7 dias', included: true },
      { text: 'Os 6 cadernos bônus de apoio', included: false },
    ],
    ctaText: 'QUERO O PLANO BÁSICO',
    ctaSubtext: 'Receba os 8 cadernos principais no e-mail',
  },
  {
    id: 'combo',
    title: 'Combo Completo',
    tagline: 'Os 8 Cadernos da Leitura + todos os 6 Bônus Exclusivos',
    badge: 'MAIS COMPLETO · MELHOR CUSTO-BENEFÍCIO',
    isPopular: true,
    originalPrice: 'R$ 67,00',
    currentPrice: 'R$ 9,90',
    installments: 'ou parcele no cartão de crédito',
    savings: 'Apenas R$ 1,00 a mais que o Plano Básico',
    features: [
      { text: 'Todos os 8 Cadernos da Leitura em PDF (alta resolução)', included: true, highlight: true },
      { text: 'Bônus 1: Apostila Pré-silábica (de R$ 47,90 — incluso)', included: true, highlight: true },
      { text: 'Bônus 2: Caderno Silábico Alfabético (de R$ 47,90 — incluso)', included: true, highlight: true },
      { text: 'Bônus 3: Caderno Alfabético (de R$ 47,90 — incluso)', included: true, highlight: true },
      { text: 'Bônus 4: Caderno Sílabas sem Valor Sonoro (de R$ 29,90 — incluso)', included: true, highlight: true },
      { text: 'Bônus 5: Caderno Silábicos com Valor Sonoro (de R$ 29,90 — incluso)', included: true, highlight: true },
      { text: 'Bônus 6: Caderno de Sílabas Complexas (de R$ 29,90 — incluso)', included: true, highlight: true },
      { text: 'Acesso vitalício + Garantia incondicional de 7 dias', included: true },
    ],
    ctaText: 'QUERO O COMBO COMPLETO',
    ctaSubtext: 'Leve o pacote completo + 6 bônus por apenas R$ 1,00 a mais',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como e quando recebo o material após a compra?',
    answer:
      'O envio é automático e imediato. Assim que o pagamento é confirmado via PIX ou Cartão de Crédito, você recebe um e-mail com o link para baixar todos os arquivos em PDF (em menos de 1 minuto no PIX).',
  },
  {
    question: 'O material é impresso ou digital em PDF?',
    answer:
      'Todo o kit é 100% digital em formato PDF de alta qualidade para impressão. Você pode abrir no celular ou tablet e também imprimir em casa ou na gráfica quantas vezes quiser, no seu ritmo.',
  },
  {
    question: 'Para qual idade e fase da criança o kit funciona melhor?',
    answer:
      'Os cadernos atendem crianças de 5 a 8 anos: desde quem ainda está reconhecendo os sons das letras até quem já conhece o alfabeto, mas trava ao juntar sílabas ou troca letras parecidas (como b/d e p/q).',
  },
  {
    question: 'Não sou professor nem pedagogo. Vou conseguir aplicar em casa?',
    answer:
      'Sim. Cada atividade traz orientações simples e diretas para mães, pais ou responsáveis conduzirem a prática em cerca de 15 minutos por dia, sem exigir formação pedagógica.',
  },
  {
    question: 'Por quanto tempo terei acesso aos arquivos?',
    answer:
      'Seu acesso é vitalício. Você pode salvar os PDFs no seu celular ou computador e reimprimir qualquer página sempre que precisar.',
  },
  {
    question: 'É seguro comprar? E se meu filho não se adaptar?',
    answer:
      'O pagamento é processado em ambiente criptografado e você conta com garantia incondicional de 7 dias. Se testar em casa e achar que não atende ao momento do seu filho, basta solicitar o reembolso pelo suporte dentro do prazo para receber 100% do valor de volta.',
  },
];

export const SALES_NOTIFICATIONS: SaleNotification[] = [
  { name: 'Mariana Santos', location: 'São Paulo - SP', timeAgo: 'há 2 minutos', plan: 'Combo Completo (R$ 9,90)' },
  { name: 'Carlos Henrique', location: 'Curitiba - PR', timeAgo: 'há 4 minutos', plan: 'Combo Completo (R$ 9,90)' },
  { name: 'Fernanda Lima', location: 'Belo Horizonte - MG', timeAgo: 'há 7 minutos', plan: 'Plano Básico (R$ 8,90)' },
  { name: 'Juliana Costa', location: 'Campinas - SP', timeAgo: 'há 11 minutos', plan: 'Combo Completo (R$ 9,90)' },
  { name: 'Patricia Meirelles', location: 'Porto Alegre - RS', timeAgo: 'há 14 minutos', plan: 'Combo Completo (R$ 9,90)' },
  { name: 'Luciana Ferreira', location: 'Rio de Janeiro - RJ', timeAgo: 'há 18 minutos', plan: 'Combo Completo (R$ 9,90)' },
  { name: 'Rodrigo Albuquerque', location: 'Salvador - BA', timeAgo: 'há 23 minutos', plan: 'Combo Completo (R$ 9,90)' },
];
