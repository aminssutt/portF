export const profile = {
  name: 'Lakhdar Berache',
  role: 'Software & AI Engineer',
  location: {
    en: 'Based in Paris, France · open to opportunities',
    fr: 'Basé à Paris, France · ouvert aux opportunités',
    ko: '프랑스 파리 거주 · 새로운 기회에 열려 있습니다'
  },
  email: 'lakhdarberache@gmail.com',
  cv: '/cv_lakhdar_berache.pdf',
  bio: {
    en: [
      'I’m an engineering student and software engineer working at the intersection of artificial intelligence, data science and web development.',
      'I design AI systems, build useful products and turn ambitious ideas into clean, thoughtful experiences.'
    ],
    fr: [
      "Je suis étudiant ingénieur et développeur, à l'intersection de l'intelligence artificielle, de la data science et du développement web.",
      "Je conçois des systèmes d'IA, je construis des produits utiles et je transforme des idées ambitieuses en expériences claires et soignées."
    ],
    ko: [
      '저는 인공지능, 데이터 사이언스, 웹 개발이 만나는 지점에서 일하는 공학도이자 소프트웨어 엔지니어입니다.',
      '저는 AI 시스템을 설계하고 유용한 제품을 만들며, 야심 찬 아이디어를 깔끔하고 사려 깊은 경험으로 구현합니다.'
    ]
  },
  photo: '/images/moi.png',
  socials: [
    { label: 'GitHub', href: 'https://github.com/aminssutt' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lakhdar-berache/' },
    { label: 'Email', href: 'mailto:lakhdarberache@gmail.com' }
  ]
}

const MS_LOGO = '/images/cert-microsoft.png'

export const experience = [
  {
    company: 'ArcherMind Technology (Nanjing) Co., Ltd.',
    position: {
      en: 'Consultant Software & AI Engineer',
      fr: 'Consultant Ingénieur Logiciel & IA',
      ko: '컨설턴트 소프트웨어 & AI 엔지니어'
    },
    location: { en: 'Paris, France', fr: 'Paris, France', ko: '프랑스 파리' },
    period: { en: 'Mar 2026 — Present', fr: 'Mars 2026 — Aujourd’hui', ko: '2026년 3월 — 현재' },
    logo: '/images/archermind-logo.png',
    note: {
      en: 'I build and improve AI agents for client projects, turning business needs into reliable software. I also run the technical analysis and write the documentation that guides product and development decisions.',
      fr: "Je conçois et améliore des agents IA pour des projets clients, en transformant les besoins métier en logiciels fiables. Je mène aussi l'analyse technique et rédige la documentation qui guide les décisions produit et développement.",
      ko: '고객 프로젝트를 위한 AI 에이전트를 구축하고 개선하며, 비즈니스 요구를 신뢰할 수 있는 소프트웨어로 구현합니다. 또한 기술 분석을 수행하고 제품·개발 의사결정을 이끄는 문서를 작성합니다.'
    }
  },
  {
    company: 'Renault Korea',
    position: {
      en: 'Software & AI Engineer Intern',
      fr: 'Stagiaire Ingénieur Logiciel & IA',
      ko: '소프트웨어 & AI 엔지니어 인턴'
    },
    location: { en: 'Yongin, South Korea', fr: 'Yongin, Corée du Sud', ko: '대한민국 용인' },
    period: { en: 'Sep 2025 — Feb 2026', fr: 'Sept. 2025 — Févr. 2026', ko: '2025년 9월 — 2026년 2월' },
    logo: '/images/renault logo.webp',
    certificate: '/internship-certificate.pdf',
    certificateLabel: {
      en: 'View internship certificate',
      fr: 'Voir le certificat de stage',
      ko: '인턴십 증명서 보기'
    },
    note: {
      en: 'I built a connected health and fitness app with AI recommendations and computer-vision analysis, and co-developed an AI podcast platform combining NLP and text-to-speech. My main project was an in-car conversational assistant on LangGraph, with MCP servers, a RAG pipeline over vehicle manuals and real-time speech streaming. I presented progress to the directors and the CEO every month.',
      fr: "J'ai développé une application santé et fitness connectée avec des recommandations IA et une analyse par vision par ordinateur, et co-développé une plateforme de podcasts IA combinant NLP et synthèse vocale. Mon projet principal était un assistant conversationnel embarqué sur LangGraph, avec des serveurs MCP, un pipeline RAG sur les manuels des véhicules et du streaming vocal en temps réel. Je présentais l'avancement aux directeurs et au CEO chaque mois.",
      ko: '저는 AI 추천과 컴퓨터 비전 분석을 갖춘 커넥티드 헬스·피트니스 앱을 개발했고, NLP와 음성 합성을 결합한 AI 팟캐스트 플랫폼을 공동 개발했습니다. 주요 프로젝트는 LangGraph 기반의 차량 내 대화형 어시스턴트로, MCP 서버, 차량 설명서에 대한 RAG 파이프라인, 실시간 음성 스트리밍을 포함했습니다. 매달 임원진과 CEO에게 진행 상황을 발표했습니다.'
    }
  },
  {
    company: 'Fabulous Creations Studio',
    position: { en: 'Web Developer', fr: 'Développeur web', ko: '웹 개발자' },
    location: { en: 'Paris, France', fr: 'Paris, France', ko: '프랑스 파리' },
    period: { en: 'Jan 2025 — Present', fr: 'Janv. 2025 — Aujourd’hui', ko: '2025년 1월 — 현재' },
    logo: '/images/fabulous-logo.png',
    note: {
      en: 'I designed and built an interior-design portfolio with a database-backed appointment booking flow.',
      fr: "J'ai conçu et développé un portfolio d'architecture d'intérieur avec un parcours de prise de rendez-vous adossé à une base de données.",
      ko: '데이터베이스 기반 예약 흐름을 갖춘 인테리어 디자인 포트폴리오를 설계하고 구축했습니다.'
    }
  },
  {
    company: 'Columbus Café',
    position: { en: 'Intern', fr: 'Stagiaire', ko: '인턴' },
    location: { en: 'Paris, France', fr: 'Paris, France', ko: '프랑스 파리' },
    period: { en: 'Jul — Aug 2024', fr: 'Juil. — Août 2024', ko: '2024년 7월 — 8월' },
    logo: '/images/logo columbus.png',
    note: {
      en: 'I worked across daily operations and digital promotion, and helped set up an online reservation experience.',
      fr: "J'ai participé aux opérations quotidiennes et à la promotion digitale, et aidé à mettre en place une expérience de réservation en ligne.",
      ko: '일상 운영과 디지털 홍보 전반에 참여했고, 온라인 예약 경험을 구축하는 데 기여했습니다.'
    }
  }
]

export const education = [
  {
    school: 'KAIST',
    degree: {
      en: 'Specialization in Informatics & Artificial Intelligence',
      fr: 'Spécialisation en Informatique & Intelligence Artificielle',
      ko: '정보학 & 인공지능 전공'
    },
    location: { en: 'Daejeon, South Korea', fr: 'Daejeon, Corée du Sud', ko: '대한민국 대전' },
    period: { en: 'Feb — Jul 2025', fr: 'Févr. — Juil. 2025', ko: '2025년 2월 — 7월' },
    logo: '/images/KAIST_logo.svg.png',
    note: {
      en: 'Exchange semester taught in English, with academic projects in data science, artificial intelligence, machine learning and start-up management.',
      fr: "Semestre d'échange enseigné en anglais, avec des projets académiques en data science, intelligence artificielle, machine learning et management de start-up.",
      ko: '영어로 진행된 교환학기로, 데이터 사이언스, 인공지능, 머신러닝, 스타트업 경영 분야의 학술 프로젝트를 수행했습니다.'
    }
  },
  {
    school: 'University of Technology of Troyes',
    degree: {
      en: 'Specialization in Informatics & Systems',
      fr: 'Spécialisation en Informatique & Systèmes',
      ko: '정보학 & 시스템 전공'
    },
    location: { en: 'Troyes, France', fr: 'Troyes, France', ko: '프랑스 트루아' },
    period: { en: '2024 — 2027', fr: '2024 — 2027', ko: '2024 — 2027' },
    logo: '/images/Logo_UTT_2018.svg.png',
    note: {
      en: 'Software engineering and database management, following the integrated preparatory program (Tronc Commun, 2022 to 2024).',
      fr: 'Génie logiciel et gestion de bases de données, après le cycle préparatoire intégré (Tronc Commun, 2022 à 2024).',
      ko: '소프트웨어 공학과 데이터베이스 관리를 공부했으며, 통합 준비 과정(Tronc Commun, 2022–2024)을 이수했습니다.'
    }
  }
]

export const mentions = [
  {
    title: 'Quand EDF vient chercher des solutions à l’université de Troyes pour ses centrales nucléaires',
    outlet: 'Le Parisien', year: '2026',
    logo: '/images/leparisien.webp',
    link: 'https://www.leparisien.fr/aube-10/quand-edf-vient-chercher-des-solutions-a-luniversite-de-troyes-pour-ses-centrales-nucleaires-29-06-2026-OTXINB5PMNC4ZC7SSQ7G66Q2MU.php'
  }
]

export const certifications = [
  { title: 'Generative AI', provider: 'Microsoft', year: '2024', logo: MS_LOGO, link: 'https://www.linkedin.com/learning/certificates/5b5281b684492aa1a1337b3128d78a276ff7214baafb905a8662ba6aaeec7d88' },
  { title: 'Build a Computer Vision App with Azure', provider: 'Microsoft', year: '2024', logo: MS_LOGO, link: null },
  { title: 'Getting Started with AWS Generative AI', provider: 'AWS', year: '2025', logo: '/images/cert-aws.png', link: 'https://www.coursera.org/account/accomplishments/verify/NML0N2TUUO4V' },
  { title: 'Build RAG Applications', provider: 'IBM', year: '2025', logo: '/images/cert-ibm.png', link: 'https://www.coursera.org/account/accomplishments/verify/JU6HGK3RB32O' },
  { title: 'Build Intelligent Agents Using DeepSeek & n8n', provider: 'Board Infinity', year: '2025', logo: '/images/cert-boardinfinity.png', link: 'https://www.coursera.org/account/accomplishments/verify/JO22VAEMU1AO' }
]
