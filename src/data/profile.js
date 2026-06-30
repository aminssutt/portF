export const profile = {
  name: 'Lakhdar Berache',
  role: 'Software & AI Engineer',
  location: 'Based in Paris, France · open to opportunities',
  email: 'lakhdarberache@gmail.com',
  cv: '/cv_lakhdar_berache.pdf',
  bio: [
    'I’m an engineering student and software engineer working at the intersection of artificial intelligence, data science and web development.',
    'I design AI systems, build useful products and turn ambitious ideas into clean, thoughtful experiences.'
  ],
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
    company: 'ArcherMind Technology (Nanjing) Co., Ltd.', position: 'Consultant Software & AI Engineer', location: 'Paris, France', period: 'Mar 2026 — Present',
    logo: '/images/archermind-logo.png',
    note: 'I build and improve AI agents for client projects, turning business needs into reliable software. I also run the technical analysis and write the documentation that guides product and development decisions.'
  },
  {
    company: 'Renault Korea', position: 'Software & AI Engineer Intern', location: 'Yongin, South Korea', period: 'Sep 2025 — Feb 2026',
    logo: '/images/renault logo.webp',
    certificate: '/internship-certificate.pdf',
    certificateLabel: 'View internship certificate',
    note: 'I built a connected health and fitness app with AI recommendations and computer-vision analysis, and co-developed an AI podcast platform combining NLP and text-to-speech. My main project was an in-car conversational assistant on LangGraph, with MCP servers, a RAG pipeline over vehicle manuals and real-time speech streaming. I presented progress to the directors and the CEO every month.'
  },
  {
    company: 'Fabulous Creations Studio', position: 'Web Developer', location: 'Paris, France', period: 'Jan 2025 — Present',
    logo: '/images/fabulous-logo.png',
    note: 'I designed and built an interior-design portfolio with a database-backed appointment booking flow.'
  },
  {
    company: 'Columbus Café', position: 'Intern', location: 'Paris, France', period: 'Jul — Aug 2024',
    logo: '/images/logo columbus.png',
    note: 'I worked across daily operations and digital promotion, and helped set up an online reservation experience.'
  }
]

export const education = [
  {
    school: 'KAIST', degree: 'Specialization in Informatics & Artificial Intelligence', location: 'Daejeon, South Korea', period: 'Feb — Jul 2025',
    logo: '/images/KAIST_logo.svg.png',
    note: 'Exchange semester taught in English, with academic projects in data science, artificial intelligence, machine learning and start-up management.'
  },
  {
    school: 'University of Technology of Troyes', degree: 'Specialization in Informatics & Systems', location: 'Troyes, France', period: '2024 — 2027',
    logo: '/images/Logo_UTT_2018.svg.png',
    note: 'Software engineering and database management, following the integrated preparatory program (Tronc Commun, 2022 to 2024).'
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
