export const projectsData = [
  {
    id: 'rebloom', title: 'Rebloom', year: '2026',
    role: {
      en: 'Founder & CEO · Full-stack',
      fr: 'Fondateur & CEO · Full-stack',
      ko: '창업자 & CEO · 풀스택'
    },
    description: {
      en: 'Anti-waste floral marketplace connecting florists with customers around discounted unsold bouquets.',
      fr: 'Place de marché anti-gaspillage qui met en relation les fleuristes et les clients autour des bouquets invendus à prix réduit.',
      ko: '남은 꽃다발을 할인가로 연결해 낭비를 줄이는, 플로리스트와 고객을 잇는 마켓플레이스입니다.'
    },
    highlights: {
      en: [
        'Florists publish unsold bouquets at reduced prices; customers reserve and pick them up in shop.',
        'End-to-end payment processing on a scalable, multi-platform architecture.',
        'Pitched at startup competitions and investor events, with a full deck, business model and go-to-market.'
      ],
      fr: [
        'Les fleuristes publient leurs invendus à prix réduit ; les clients réservent et récupèrent en boutique.',
        'Traitement des paiements de bout en bout sur une architecture multi-plateforme et évolutive.',
        "Présenté lors de concours de startups et d'événements investisseurs, avec un pitch deck complet, un business model et une stratégie de lancement."
      ],
      ko: [
        '플로리스트가 남은 꽃다발을 할인가로 등록하면, 고객이 예약하고 매장에서 수령합니다.',
        '확장 가능한 멀티플랫폼 아키텍처 위에서 결제를 처음부터 끝까지 처리합니다.',
        '스타트업 대회와 투자자 행사에서 피치덱, 비즈니스 모델, 시장 진입 전략과 함께 발표했습니다.'
      ]
    },
    technologies: ['React', 'Supabase', 'Stripe', 'Vercel'],
    link: 'https://re-bloom.fr', screenshot: '/images/rebloom.png'
  },
  {
    id: 'carchat', title: 'CarChat', year: '2026',
    role: {
      en: 'Founder · AI Engineer',
      fr: 'Fondateur · Ingénieur IA',
      ko: '창업자 · AI 엔지니어'
    },
    description: {
      en: 'AI assistant for vehicle owner manuals delivering instant, source-backed answers.',
      fr: "Assistant IA pour les manuels d'utilisation de véhicules, offrant des réponses instantanées et sourcées.",
      ko: '차량 사용 설명서를 위한 AI 어시스턴트로, 출처가 확인된 답변을 즉시 제공합니다.'
    },
    highlights: {
      en: [
        'Indexes 40+ owner manuals across 16 car brands (Renault, Hyundai, Kia, Peugeot, BMW, Tesla, Mercedes…), each isolated in its own per-vehicle session.',
        'Hybrid retrieval — FAISS (semantic) + BM25 (lexical) — with intelligent section-based chunking and parallel PDF extraction.',
        'Answers generated with Google Gemini, grounded in the official manual and backed by verified source passages.',
        'Multilingual conversational interface that cuts documentation search from minutes to seconds.'
      ],
      fr: [
        'Indexe plus de 40 manuels d’utilisation sur 16 marques (Renault, Hyundai, Kia, Peugeot, BMW, Tesla, Mercedes…), chacun isolé dans sa propre session véhicule.',
        'Recherche hybride — FAISS (sémantique) + BM25 (lexicale) — avec chunking intelligent par sections et extraction PDF parallèle.',
        'Réponses générées avec Google Gemini, fondées sur le manuel officiel et appuyées par des passages sources vérifiés.',
        'Interface conversationnelle multilingue qui réduit la recherche documentaire de plusieurs minutes à quelques secondes.'
      ],
      ko: [
        '16개 브랜드(르노, 현대, 기아, 푸조, BMW, 테슬라, 메르세데스…)의 40개 이상 사용 설명서를 색인하며, 각 차량은 독립된 세션으로 분리됩니다.',
        '하이브리드 검색 — FAISS(의미) + BM25(어휘) — 과 섹션 기반 지능형 청킹, 병렬 PDF 추출을 사용합니다.',
        'Google Gemini로 답변을 생성하고, 공식 설명서에 근거해 검증된 출처 구절로 뒷받침합니다.',
        '문서 검색 시간을 몇 분에서 몇 초로 줄이는 다국어 대화형 인터페이스입니다.'
      ]
    },
    technologies: ['RAG', 'FAISS', 'BM25', 'Gemini', 'React', 'Python'],
    link: 'https://carchat.online', screenshot: '/images/carchat.png'
  },
  {
    id: 'megawatt-utt', title: "Megawatt'UTT — SimuPont", year: '2026',
    role: {
      en: 'Innovation · EDF × UTT',
      fr: 'Innovation · EDF × UTT',
      ko: '혁신 · EDF × UTT'
    },
    description: {
      en: "Mobile training simulator for nuclear bridge-crane fuel handling, built for EDF's Megawatt'UTT national challenge.",
      fr: "Simulateur de formation mobile pour la manutention du combustible au pont roulant en centrale nucléaire, réalisé pour le challenge national Megawatt'UTT d'EDF.",
      ko: "EDF의 Megawatt'UTT 전국 챌린지를 위해 만든, 원자력 천장 크레인 연료 취급 훈련용 모바일 시뮬레이터입니다."
    },
    highlights: {
      en: [
        "Won 2nd place and the Public's Prize, judged on risk-taking, feasibility and implementation.",
        'Real-time 4-axis Unity 3D simulation paired with a web learning and progress-tracking platform.',
        'Reproduces the industrial HMI (Magelis / SOMDEL) to teach precise CM, CMA and CSA handling gestures.',
        'Featured in Le Parisien with a dedicated article on the team and prototype.'
      ],
      fr: [
        '2ᵉ prix et Prix du public, sur des critères de prise de risque, de faisabilité et de réalisation.',
        'Simulation 3D Unity 4 axes en temps réel, couplée à une plateforme web de formation et de suivi de progression.',
        "Reproduit l'IHM industrielle (Magelis / SOMDEL) pour enseigner les gestes précis de manutention CM, CMA et CSA.",
        "Sujet d'un article dédié dans Le Parisien sur l'équipe et le prototype."
      ],
      ko: [
        '위험 감수, 실현 가능성, 완성도를 기준으로 심사받아 2위와 관객상을 수상했습니다.',
        '실시간 4축 Unity 3D 시뮬레이션과 웹 학습·진도 추적 플랫폼을 결합했습니다.',
        '산업용 HMI(Magelis / SOMDEL)를 재현해 CM, CMA, CSA의 정밀한 취급 동작을 교육합니다.',
        '팀과 시제품을 다룬 Le Parisien 기사에 소개되었습니다.'
      ]
    },
    technologies: ['Unity', 'React', '3D Simulation', 'EDF'],
    link: 'https://megawatt-simupont-rvmyoc-820e18-212-227-88-180.sslip.io/', screenshot: '/images/megawatt.png'
  },
  {
    id: 'ecu-testing', title: 'ECU Testing — Autonomous Agents', year: '2026', short: 'EC', tone: 'slate', screenshot: '/images/ecu.png',
    role: {
      en: 'Agentic AI · Software Testing',
      fr: 'IA agentique · Test logiciel',
      ko: '에이전틱 AI · 소프트웨어 테스트'
    },
    description: {
      en: 'A team of LLM agents that stress-tests a safety-critical car ECU on its own, injecting faults and checking the safety rules live.',
      fr: "Une équipe d'agents LLM qui stress-teste toute seule un calculateur (ECU) automobile critique, en injectant des fautes et en vérifiant les règles de sûreté en direct.",
      ko: '안전이 중요한 차량용 ECU를 스스로 스트레스 테스트하는 LLM 에이전트 팀으로, 폴트를 주입하고 안전 규칙을 실시간으로 확인합니다.'
    },
    highlights: {
      en: [
        'Six specialist agents under a supervisor (LangGraph) write scenarios, inject faults and chase the missing coverage.',
        'Runs deterministic and keyless, or live with Google Gemini and an automatic fallback.',
        'Every decision streams over SSE to a React interface, so a whole campaign stays auditable.',
        'ECU modelled as a fixed state machine: 5 states, 10 events, 18 transitions, 4 safety rules.'
      ],
      fr: [
        'Six agents spécialisés sous un superviseur (LangGraph) écrivent des scénarios, injectent des fautes et vont chercher la couverture manquante.',
        'Tourne en déterministe et sans clé, ou en live avec Google Gemini et un repli automatique.',
        "Chaque décision est diffusée en SSE vers une interface React, donc toute la campagne reste auditable.",
        'ECU modélisé en machine à états figée : 5 états, 10 événements, 18 transitions, 4 règles de sûreté.'
      ],
      ko: [
        '감독자 아래 여섯 개의 전문 에이전트(LangGraph)가 시나리오를 작성하고 폴트를 주입하며 부족한 커버리지를 채웁니다.',
        '키 없이 결정론으로 돌거나, Google Gemini로 라이브 실행하며 자동으로 대체됩니다.',
        '모든 결정이 SSE로 React 인터페이스에 전달되어 캠페인 전체가 감사 가능하게 유지됩니다.',
        'ECU는 고정 상태 기계로 모델링: 5개 상태, 10개 이벤트, 18개 전이, 4개 안전 규칙.'
      ]
    },
    technologies: ['LangGraph', 'Gemini', 'FastAPI', 'React', 'SSE', 'Docker'],
    link: 'https://lakhdar-ecutesting-fzvvx6-3f9d32-212-227-88-180.sslip.io/'
  },
  {
    id: 'crunch-ugv', title: 'Autonomous UGV — CRUNCH', year: '2026',
    role: {
      en: 'Robotics & Simulation · CRUNCH UTT',
      fr: 'Robotique & Simulation · CRUNCH UTT',
      ko: '로보틱스 & 시뮬레이션 · CRUNCH UTT'
    },
    description: {
      en: 'Off-road autonomous vehicle simulation developed during CRUNCH UTT Innovation Time to plan safe, energy-aware routes across challenging terrain.',
      fr: "Simulation d'un véhicule autonome hors-route développée pendant le CRUNCH UTT Innovation Time pour planifier des trajectoires sûres et sobres en énergie sur des terrains difficiles.",
      ko: 'CRUNCH UTT Innovation Time에서 개발한 오프로드 자율주행 차량 시뮬레이션으로, 험지에서 안전하고 에너지 효율적인 경로를 계획합니다.'
    },
    highlights: {
      en: [
        'Built the complete ROS 2 Jazzy stack with Gazebo Harmonic, Nav2 and RViz for autonomous payload transport.',
        'Generated dynamic traversability maps combining obstacles, slope, mud, water, roughness, payload stability and energy cost.',
        'Created seven fixed worlds, randomized scenarios and a web dashboard to launch, monitor and compare missions.',
        'Benchmarked four routing strategies across 600 deterministic missions, reaching a 100% planning success rate.'
      ],
      fr: [
        "Développement de la pile ROS 2 Jazzy complète avec Gazebo Harmonic, Nav2 et RViz pour le transport autonome d'une charge utile.",
        "Génération de cartes de traversabilité dynamiques combinant obstacles, pente, boue, eau, rugosité, stabilité de la charge et coût énergétique.",
        "Création de sept mondes fixes, de scénarios aléatoires et d'un dashboard web pour lancer, suivre et comparer les missions.",
        "Benchmark de quatre stratégies de routage sur 600 missions déterministes, avec 100 % de succès de planification."
      ],
      ko: [
        'Gazebo Harmonic, Nav2, RViz를 결합한 ROS 2 Jazzy 전체 스택으로 자율 화물 운송을 구현했습니다.',
        '장애물, 경사, 진흙, 물, 노면 거칠기, 적재 안정성, 에너지 비용을 결합한 동적 주행 가능성 지도를 생성했습니다.',
        '7개의 고정 월드와 무작위 시나리오, 미션 실행·모니터링·비교용 웹 대시보드를 제작했습니다.',
        '600개의 결정론적 미션에서 4가지 경로 전략을 벤치마크해 100% 계획 성공률을 달성했습니다.'
      ]
    },
    technologies: ['ROS 2', 'Gazebo', 'Nav2', 'Python', 'RViz'],
    linkLabel: { en: 'View source code', fr: 'Voir le code source', ko: '소스 코드 보기' },
    link: 'https://github.com/aminssutt/crunchUTT', screenshot: '/images/crunch-ugv.png'
  },
  {
    id: 'hera-studio', title: 'Hera Studio', year: '2025',
    role: {
      en: 'Founder · Full-stack & AI',
      fr: 'Fondateur · Full-stack & IA',
      ko: '창업자 · 풀스택 & AI'
    },
    description: {
      en: 'AI platform for creating personalized coloring books for children.',
      fr: 'Plateforme IA pour créer des livres de coloriage personnalisés pour enfants.',
      ko: '아이들을 위한 맞춤형 컬러링북을 만드는 AI 플랫폼입니다.'
    },
    highlights: {
      en: [
        'Users pick a theme and visual style, then generate a unique book.',
        'Download instantly or order a printed edition.',
        'Built end-to-end with image generation, auth and payments.'
      ],
      fr: [
        'Les utilisateurs choisissent un thème et un style visuel, puis génèrent un livre unique.',
        'Téléchargement instantané ou commande en version imprimée.',
        "Développé de bout en bout, avec génération d'images, authentification et paiements."
      ],
      ko: [
        '사용자가 테마와 비주얼 스타일을 고르면 고유한 책이 생성됩니다.',
        '즉시 다운로드하거나 인쇄본으로 주문할 수 있습니다.',
        '이미지 생성, 인증, 결제까지 처음부터 끝까지 구축했습니다.'
      ]
    },
    technologies: ['React', 'Firebase', 'Supabase', 'Stripe', 'OpenAI'],
    link: 'https://www.herastudio.art', screenshot: '/images/hera-mobile.png'
  },
  {
    id: 'ai-adventure', title: 'AI Adventure', year: '2025',
    role: {
      en: 'Product & ML · KAIST',
      fr: 'Produit & ML · KAIST',
      ko: '프로덕트 & ML · KAIST'
    },
    description: {
      en: 'Student-focused learning platform that turns research-paper databases into accessible knowledge.',
      fr: "Plateforme d'apprentissage pour étudiants qui transforme des bases de données d'articles de recherche en savoir accessible.",
      ko: '연구 논문 데이터베이스를 이해하기 쉬운 지식으로 바꿔 주는 학생 중심 학습 플랫폼입니다.'
    },
    highlights: {
      en: [
        'Generates summaries, learning guidance and source-based study support from papers.',
        'Gamified through quiz duels, research quests and professor-guided challenges.',
        'Framed with a Y Combinator startup approach and tested with 30+ KAIST students.'
      ],
      fr: [
        "Génère des résumés, un accompagnement pédagogique et un soutien à l'étude fondé sur les sources, à partir des articles.",
        'Ludifiée par des duels de quiz, des quêtes de recherche et des défis encadrés par des professeurs.',
        'Pensée avec une approche startup à la Y Combinator et testée avec plus de 30 étudiants de KAIST.'
      ],
      ko: [
        '논문에서 요약, 학습 가이드, 출처 기반 학습 지원을 생성합니다.',
        '퀴즈 대결, 연구 퀘스트, 교수 지도 챌린지로 게임화했습니다.',
        'Y Combinator식 스타트업 접근으로 기획하고 30명 이상의 KAIST 학생과 함께 테스트했습니다.'
      ]
    },
    technologies: ['React', 'Machine Learning', 'Python', 'Gamification'],
    screenshot: '/images/ai-adventure.jpg'
  },
  {
    id: 'reply-heart-monitor', title: 'RePLY', year: '2025', short: 'R', tone: 'red',
    screens: ['/images/reply-1.png', '/images/reply-2.png'],
    role: {
      en: 'ML & Hardware · KAIST',
      fr: 'ML & Hardware · KAIST',
      ko: 'ML & 하드웨어 · KAIST'
    },
    description: {
      en: 'Intelligent wearable that helps people optimize their exercise sessions.',
      fr: 'Wearable intelligent qui aide à optimiser ses séances de sport.',
      ko: '운동 세션을 최적화하도록 돕는 지능형 웨어러블입니다.'
    },
    highlights: {
      en: [
        'Machine learning to monitor heart rate and estimate calorie expenditure.',
        'Haptic feedback guides effort during a session in real time.'
      ],
      fr: [
        'Machine learning pour suivre la fréquence cardiaque et estimer les calories dépensées.',
        "Un retour haptique guide l'effort en temps réel pendant la séance."
      ],
      ko: [
        '머신러닝으로 심박수를 모니터링하고 칼로리 소모를 추정합니다.',
        '햅틱 피드백이 세션 중 실시간으로 운동 강도를 안내합니다.'
      ]
    },
    technologies: ['Machine Learning', 'IoT', 'Python', 'Signal Processing']
  },
  {
    id: 'fabulous-creations', title: 'Fabulous Creations', year: '2025',
    role: {
      en: 'Freelance · Web Design & Dev',
      fr: 'Freelance · Design & Développement web',
      ko: '프리랜서 · 웹 디자인 & 개발'
    },
    description: {
      en: 'Polished one-page portfolio for an interior designer.',
      fr: "Portfolio one-page soigné pour une architecte d'intérieur.",
      ko: '인테리어 디자이너를 위한 세련된 원페이지 포트폴리오입니다.'
    },
    highlights: {
      en: [
        'Showcases selected work with smooth, considered motion.',
        'Database-backed appointment booking flow.'
      ],
      fr: [
        'Met en valeur une sélection de projets avec des animations fluides et maîtrisées.',
        'Parcours de prise de rendez-vous adossé à une base de données.'
      ],
      ko: [
        '선별된 작업을 부드럽고 정제된 모션으로 보여 줍니다.',
        '데이터베이스 기반 예약 흐름을 갖췄습니다.'
      ]
    },
    technologies: ['JavaScript', 'CSS', 'Database', 'Booking'],
    link: 'https://www.fabulousdesign.online/', screenshot: '/images/fabulous.png'
  },
  {
    id: 'humanlaw-association', title: 'HumanLaw', year: '2023',
    role: {
      en: 'Volunteer · Logistics',
      fr: 'Bénévole · Logistique',
      ko: '자원봉사 · 물류'
    },
    description: {
      en: 'Community work supporting food distribution for people in need.',
      fr: 'Action associative de soutien à la distribution alimentaire pour les personnes dans le besoin.',
      ko: '도움이 필요한 사람들을 위한 식료품 배급을 지원하는 지역 봉사 활동입니다.'
    },
    highlights: {
      en: [
        'Food distribution for homeless people and students facing financial hardship.',
        'Organized donation drives and handled logistics.'
      ],
      fr: [
        'Distribution alimentaire pour les personnes sans-abri et les étudiants en difficulté financière.',
        'Organisation de collectes de dons et gestion de la logistique.'
      ],
      ko: [
        '노숙인과 경제적으로 어려운 학생들을 위한 식료품 배급.',
        '기부 캠페인을 기획하고 물류를 담당했습니다.'
      ]
    },
    technologies: ['Logistics', 'Community', 'Organization'],
    screenshot: '/images/humanlaw.webp'
  }
]
