import { BonusItem, FaqItem, PricingPlan, ProductModule, SaleNotification, Testimonial } from '../types';

export const ASSETS = {
  // Exact user-provided image showing the 8 illustrated notebooks
  heroMockup: '/assets/aistudio/IMG_8790_a2929a64.jpeg',
  // Exact user-provided image for the R$ 37,90 combo showing 8 notebooks + 6 bonuses
  comboMockup: '/assets/aistudio/IMG_8859_e57429e4.jpeg',
  // Real demonstration VSL video provided by user
  vslVideo: '/assets/aistudio/4841773d-a373-43b6-997a-ff4046d58cd3_36949721.mov',
  motherChildReading: '/src/assets/images/mae_filho_lendo_1793501682561.jpg',
  bonusMockup: '/src/assets/images/bonus_materiais_mockup_1793501682920.jpg',
};

export const REFLECTION_SIGNALS = [
  {
    id: 'fuga',
    text: 'Fuga e resistência: inventa desculpas, pede água, chora ou tem crises de birra sempre que você abre o livro da escola.',
    consequence: 'Sinal clássico de sobrecarga cognitiva e frustração acumulada.'
  },
  {
    id: 'chute',
    text: 'Adivinhação de palavras: olha para a primeira letra e "chuta" o restante da palavra sem conseguir decodificar os sons.',
    consequence: 'Evidência de que a escola não ensinou a rota fonológica básica.'
  },
  {
    id: 'inseguranca',
    text: 'Frases de autoderrota: diz com frequência "eu não consigo", "eu sou burro" ou se compara com os coleguinhas da sala.',
    consequence: 'A autoestima da criança já começou a ser danificada pela pressão.'
  },
  {
    id: 'trocas',
    text: 'Confusão e trocas de letras semelhantes: confunde b com d, p com q, ou inverte a ordem das sílabas ao tentar ler.',
    consequence: 'Falta de estimulação visual direcionada e ancoragem motora.'
  },
  {
    id: 'esgotamento',
    text: 'Exaustão familiar: a lição de casa dura horas e termina com mãe e filho chorando de cansaço e sentimento de culpa.',
    consequence: 'O método tradicional está desgastando o vínculo de amor entre vocês.'
  }
];

export const NOTEBOOKS_DATA = [
  {
    id: 1,
    character: 'A Borboletinha dos Sons',
    title: 'Caderno 1: Vogais Vivas & Consciência Fonológica',
    badge: 'Caderno 01',
    description: 'Ensina a criança a despertar os ouvidos para o som individual de cada letra. As vogais ganham vida através da borboletinha e suas cores, eliminando o bloqueio da decoreba cega.',
    benefits: [
      'Identificação auditiva imediata dos fonemas',
      'Treino do sopro e articulação correta dos sons',
      'Associação visual lúdica sem pressão escolar'
    ]
  },
  {
    id: 2,
    character: 'A Abelha Rainha do Mel',
    title: 'Caderno 2: Primeiras Sílabas Simples & Junções Sonoras',
    badge: 'Caderno 02',
    description: 'A abelhinha ensina como juntar o som da consoante com a vogal em um doce deslizar (ex: Mmmmm-aaaa = Má). Acaba de vez com a adivinhação da palavra pela primeira letra.',
    benefits: [
      'Técnica do som deslizante contínuo',
      'Mais de 60 atividades ilustradas de fixação rápida',
      'A criança percebe a mágica da sílaba surgir'
    ]
  },
  {
    id: 3,
    character: 'A Casinha Encantada',
    title: 'Caderno 3: Construção das Primeiras Palavrinhas Reais',
    badge: 'Caderno 03',
    description: 'Cada cômodo da casinha guarda palavras do dia a dia da criança (bola, casa, pipoca, sapo). A leitura ganha significado prático e palpável para o universo infantil.',
    benefits: [
      'Leitura de palavras com significado afetivo',
      'Transição suave das sílabas isoladas para o vocábulo',
      'Estímulo ao orgulho de ler placas e embalagens'
    ]
  },
  {
    id: 4,
    character: 'A Água-Viva do Fundo do Mar',
    title: 'Caderno 4: Pequenas Frases & Fluência Natural',
    badge: 'Caderno 04',
    description: 'Movimentos fluidos como os tentáculos da água-viva para a criança ler frases curtas sem gaguejar ou pausar de forma mecânica em cada sílaba.',
    benefits: [
      'Ritmo e entonação de voz na fala',
      'Marcadores visuais de espaçamento entre palavras',
      'Fim da leitura robotizada e travada'
    ]
  },
  {
    id: 5,
    character: 'A Abóbora Curiosa',
    title: 'Caderno 5: Desafios Visuais, Caça-Sons & Atenção Plena',
    badge: 'Caderno 05',
    description: 'Jogos de detetive de palavras e labirintos ortográficos. Desenvolve o foco sustentado de crianças ativas, inquietas ou com sintomas de TDAH.',
    benefits: [
      'Fortalecimento da memória de trabalho',
      'Caça-palavras sonoro de alta atratividade',
      'Substitui o vício das telas por um desafio estimulante'
    ]
  },
  {
    id: 6,
    character: 'O Tigrezinho Valente',
    title: 'Caderno 6: Sílabas Complexas (BR, CR, TR, BL, CL)',
    badge: 'Caderno 06',
    description: 'Supera o maior terror da 1ª e 2ª série do fundamental: os encontros consonantais. O tigrezinho ensina a rugir o R e o L entre as letras sem medo de errar.',
    benefits: [
      'Destrava trava-línguas e sons difíceis',
      'Desmistifica encontros consonantais complexos',
      'Prepara para a leitura com desenvoltura em público'
    ]
  },
  {
    id: 7,
    character: 'O Porquinho Inteligente',
    title: 'Caderno 7: Fim das Trocas de Letras (b/d, p/q, f/v, s/z)',
    badge: 'Caderno 07',
    description: 'Exercícios específicos de discriminação visual e propriocepção motora para eliminar de uma vez por todas as confusões de espelhamento que tiram o sono dos professores.',
    benefits: [
      'Mnemônicos visuais infalíveis para b vs d',
      'Correção da orientação espacial da escrita',
      'Alívio imediato nas notas e na avaliação escolar'
    ]
  },
  {
    id: 8,
    character: 'O Grilo Tagarela',
    title: 'Caderno 8: Mini-Contos & Autonomia de Leitura Completa',
    badge: 'Caderno 08',
    description: 'Historinhas completas com começo, meio e fim para a criança ler todinha sozinha para os pais ou avós antes de dormir, consolidando o amor vitalício pela leitura.',
    benefits: [
      'Interpretação de texto intuitiva e gostosa',
      'A sensação inesquecível de "eu li meu primeiro livro!"',
      'Consolidação da fluência leitora para a vida toda'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Juliana Ramos',
    role: 'Mãe do Theo (6 anos)',
    city: 'Campinas, SP',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    timeAgo: 'Ontem às 21:14',
    message: 'Gente, eu juro que comprei com o pé atrás achando que ia ser só mais um PDF qualquer que ficaria esquecido no celular. Mas no 3º dia aplicando os 15 minutos, meu filho leu a palavra "BOLO" e "PIPOCA" na embalagem do mercado sozinho! Eu comecei a chorar na fila do caixa de tanta emoção. A hora da lição deixou de ser um campo de batalha aqui em casa. Muito obrigada!',
    hasAudio: true,
    audioDuration: '0:38',
    rating: 5
  },
  {
    id: '2',
    name: 'Carlos Eduardo Mendes',
    role: 'Pai da Sofia (7 anos) e Professor',
    city: 'Curitiba, PR',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    timeAgo: 'Quarta-feira às 14:02',
    message: 'Como pedagogo, digo com propriedade: o método silábico tradicional que usam nas escolas cansa demais a criança porque foca em memorização forçada. Esse material usa consciência fonológica pura e visual. A Sofia estava com trauma de tentar ler na frente dos coleguinhas. Com 2 semanas ela já está lendo as fábulas do Volume 3 com entonação!',
    rating: 5
  },
  {
    id: '3',
    name: 'Camila Ferreira Neves',
    role: 'Mãe do Davi (5 anos)',
    city: 'Belo Horizonte, MG',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    timeAgo: 'Segunda-feira às 18:45',
    message: 'O Davi não parava quieto com nada de escola, tudo era choro e desculpa pra ir pro videogame. As páginas de colorir inteligentes e o baralho dos sons prenderam a atenção dele na hora! É incrível ver ele me chamando pra "brincar de ler". Recomendo de olhos fechados pra qualquer mãe que se sinta culpada.',
    hasAudio: true,
    audioDuration: '0:45',
    rating: 5
  },
  {
    id: '4',
    name: 'Renata Silveira',
    role: 'Mãe da Alice (8 anos)',
    city: 'Porto Alegre, RS',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    timeAgo: 'Hoje às 10:22',
    message: 'A Alice estava no 2º ano do fundamental e não conseguia juntar as sílabas, a professora já estava querendo encaminhar pra reforço caro. Peguei o material na promoção e imprimimos em uma gráfica rápida (encadernei com espiral colorido). Foi a melhor compra de 2026. Em menos de 20 dias ela destravou totalmente.',
    rating: 5
  },
  {
    id: '5',
    name: 'Patricia Albuquerque',
    role: 'Tia e Madrinha do Enzo (6 anos)',
    city: 'Salvador, BA',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    timeAgo: 'Ontem às 16:30',
    message: 'Comprei pra ajudar minha irmã que trabalha o dia todo e não tinha tempo de ensinar o Enzo. O cronograma de 15 minutos é perfeito! É direto ao ponto, sem enrolação teórica chata. Já comprei o Combo Completo com os bônus e valeu cada centavo.',
    hasAudio: true,
    audioDuration: '0:29',
    rating: 5
  }
];

export const BONUS_DATA: BonusItem[] = [
  {
    id: 'bonus-1',
    tag: 'BÔNUS EXCLUSIVO 01',
    title: 'Baralho dos Fonemas para Imprimir e Recortar',
    originalPrice: 'R$ 47,00',
    description: 'Cartas coloridas com animais, objetos e fonemas correspondentes para brincadeiras de memória sonora em família.',
    highlights: ['52 cartas em altíssima definição', 'Regras de 4 jogos rápidos de mesa', 'Ideal para levar em viagens'],
    iconName: 'Layers'
  },
  {
    id: 'bonus-2',
    tag: 'BÔNUS EXCLUSIVO 02',
    title: 'Guia Anti-Telas: 25 Brincadeiras Sonoras em Casa',
    originalPrice: 'R$ 39,00',
    description: 'Como tirar seu filho do celular ou tablet de forma leve, usando cantigas, rimas e caça aos sons pela casa.',
    highlights: ['Brincadeiras sem custo com materiais caseiros', 'Auxilia no foco e concentração', 'Aprovado por neuropsicopedagogos'],
    iconName: 'TvOff'
  },
  {
    id: 'bonus-3',
    tag: 'BÔNUS EXCLUSIVO 03',
    title: 'Planner Semanal da Criança Leitora + Certificado',
    originalPrice: 'R$ 29,00',
    description: 'Quadro visual de estrelas diárias para a criança colar adesivos e o Diploma Oficial de Pequeno Leitor para emoldurar.',
    highlights: ['Gera orgulho e reforço positivo imediato', 'Design infantil estimulante', 'Pronto para impressão em A4'],
    iconName: 'Award'
  },
  {
    id: 'bonus-4',
    tag: 'BÔNUS EXCLUSIVO 04',
    title: 'Caderno de Caligrafia Mágica & Traçado Motor',
    originalPrice: 'R$ 37,00',
    description: 'Exercícios guiados com setas indicativas para ensinar a pega correta no lápis e traçado firme sem cansaço muscular.',
    highlights: ['Postura correta da mão e do pulso', 'Letra bastão e cursiva facilitada', 'Previne dores e cansaço nos dedos'],
    iconName: 'PenTool'
  },
  {
    id: 'bonus-5',
    tag: 'BÔNUS EXCLUSIVO 05',
    title: 'Acesso VIP Vitalício & Suporte Pedagógico por E-mail',
    originalPrice: 'R$ 97,00',
    description: 'Todas as futuras edições, novos volumes e atualizações enviadas automaticamente no seu e-mail sem cobrar nada a mais.',
    highlights: ['Garantia de acesso vitalício', 'Download ilimitado dos arquivos', 'Tire dúvidas direto com nossa equipe'],
    iconName: 'Sparkles'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    title: 'Oferta Básica',
    tagline: 'Os 8 materiais completos sem os bônus adicionais',
    originalPrice: 'R$ 29,90',
    currentPrice: 'R$ 22,90',
    installments: 'ou 2x de R$ 11,88',
    savings: 'Economize R$ 7,00',
    features: [
      { text: '8 materiais progressivos completos', included: true },
      { text: '+1.500 atividades exclusivas', included: true },
      { text: '+2.000 páginas ilustradas', included: true },
      { text: 'Acesso vitalício', included: true },
      { text: '7 dias de garantia', included: true },
      { text: 'Todos os 6 Super Bônus (R$ 233,40 em presentes)', included: false },
    ],
    ctaText: 'Quero a Oferta Básica por R$ 22,90',
    ctaSubtext: 'Acesso vitalício imediato no e-mail'
  },
  {
    id: 'combo',
    title: 'Kit Completo: Meus 8 Cadernos da Leitura',
    tagline: 'O kit definitivo com todos os 8 cadernos ilustrados + 5 bônus',
    badge: 'O MAIS ESCOLHIDO • 94% DOS PAIS PREFEREM',
    isPopular: true,
    originalPrice: 'R$ 197,00',
    currentPrice: 'R$ 37,90',
    installments: 'ou 4x de R$ 10,15',
    savings: 'Diferença de apenas R$ 8,00 pelo kit completo!',
    features: [
      { text: 'TODOS os 8 Cadernos Ilustrados Completos (PDF em Alta Resolução)', included: true, highlight: true },
      { text: 'Guia de Aplicação de 15 Minutos por Dia para Pais', included: true },
      { text: 'Bônus 1: Caderno para Pré-Silábicos (R$ 47,90)', included: true, highlight: true },
      { text: 'Bônus 2: Caderno Silábicos Sem Valor Sonoro (R$ 47,90)', included: true, highlight: true },
      { text: 'Bônus 3: Caderno Silábicos Com Valor Sonoro (R$ 47,90)', included: true, highlight: true },
      { text: 'Bônus 4: Caderno Silábico Alfabético (R$ 29,90)', included: true, highlight: true },
      { text: 'Bônus 5: Caderno de Atividades para Alfabéticos (R$ 29,90)', included: true, highlight: true },
      { text: 'Bônus 6: Caderno de Sílabas Complexas Vol. 7 (R$ 29,90)', included: true, highlight: true },
      { text: 'Garantia Incondicional Blindada de 7 Dias', included: true, highlight: true },
    ],
    ctaText: 'SIM! QUERO OS 8 CADERNOS + 6 BÔNUS COM DESCONTO',
    ctaSubtext: 'Apenas R$ 8 a mais para levar os 8 cadernos + R$ 233,40 em bônus'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como e quando eu recebo o material?',
    answer: 'O acesso é imediato! Assim que a sua compra for confirmada pela plataforma de pagamento seguro, você receberá instantaneamente um e-mail com os dados de acesso e também uma mensagem no seu WhatsApp (se desejar). Pagamentos via PIX ou Cartão de Crédito liberam o download em menos de 1 minuto.'
  },
  {
    question: 'O material é físico (livro impresso) ou digital?',
    answer: 'O material é 100% digital em formato PDF de altíssima resolução gráfica (vetorial). Você pode visualizá-lo em qualquer dispositivo (celular, tablet ou computador) e tem a liberdade total de imprimir em casa ou na gráfica quantas vezes quiser, encadernando no formato que seu filho mais gostar!'
  },
  {
    question: 'Por quanto tempo terei acesso ao material?',
    answer: 'No Combo Completo, o seu acesso é VITALÍCIO! Você poderá baixar os arquivos sempre que precisar, e todas as futuras edições, novos jogos e materiais atualizados serão seus sem nenhuma taxa adicional.'
  },
  {
    question: 'E se meu filho não se adaptar ou eu não gostar do conteúdo?',
    answer: 'Você não corre risco algum! Nós oferecemos uma Garantia Incondicional de 7 dias com Risco Zero. Se você folhear o material, aplicar por uma semana e achar que não valeu a pena, basta nos enviar um simples e-mail ou mensagem no suporte e devolveremos 100% do seu dinheiro, sem perguntas e sem enrolação.'
  },
  {
    question: 'Serve para crianças com suspeita ou diagnóstico de TDAH, Dislexia ou Autismo?',
    answer: 'Sim, com certeza! O método fônico multissensorial é amplamente recomendado por neuropsicopedagogos justamente por não sobrecarregar a memória de trabalho com decoreba. O estímulo conjunto de som, imagem clara e atividades curtas de 15 minutos é perfeito para manter o foco e reduzir a frustração cognitiva.'
  },
  {
    question: 'Eu não sou professora nem pedagoga. Vou conseguir aplicar com meu filho?',
    answer: 'Essa é a maior beleza do Livro da Leitura Completo: ele foi desenhado especificamente para pais e mães sem formação pedagógica. Cada lição possui uma instrução clara e simples de 2 linhas dizendo exatamente o que falar e como guiar a criança. Você só precisa sentar com carinho por 15 minutos ao dia.'
  }
];

export const SALES_NOTIFICATIONS: SaleNotification[] = [
  { name: 'Mariana Santos', location: 'São Paulo - SP', timeAgo: 'há 2 minutos', plan: 'Combo Completo' },
  { name: 'Carlos Henrique', location: 'Curitiba - PR', timeAgo: 'há 4 minutos', plan: 'Combo Completo' },
  { name: 'Fernanda Lima', location: 'Belo Horizonte - MG', timeAgo: 'há 7 minutos', plan: 'Combo Completo' },
  { name: 'Juliana Costa', location: 'Campinas - SP', timeAgo: 'há 11 minutos', plan: 'Combo Completo' },
  { name: 'Patricia Meirelles', location: 'Porto Alegre - RS', timeAgo: 'há 14 minutos', plan: 'Combo Completo' },
  { name: 'Luciana Ferreira', location: 'Rio de Janeiro - RJ', timeAgo: 'há 18 minutos', plan: 'Combo Completo' },
  { name: 'Rodrigo Albuquerque', location: 'Salvador - BA', timeAgo: 'há 23 minutos', plan: 'Combo Completo' },
];
