export const projectsData = [
  {
    id: 'rebloom', title: 'Rebloom', year: '2026',
    role: 'Founder & CEO · Full-stack',
    description: 'Anti-waste floral marketplace connecting florists with customers around discounted unsold bouquets.',
    highlights: [
      'Florists publish unsold bouquets at reduced prices; customers reserve and pick them up in shop.',
      'End-to-end payment processing on a scalable, multi-platform architecture.',
      'Pitched at startup competitions and investor events, with a full deck, business model and go-to-market.'
    ],
    technologies: ['React', 'Supabase', 'Stripe', 'Vercel'],
    link: 'https://re-bloom.fr', screenshot: '/images/rebloom.png'
  },
  {
    id: 'carchat', title: 'CarChat', year: '2026',
    role: 'Founder · AI Engineer',
    description: 'AI assistant for vehicle owner manuals delivering instant, source-backed answers.',
    highlights: [
      'Conversational interface that cuts documentation search time with verified sources.',
      'RAG workflow with LangChain indexes manuals by car model and retrieves the most relevant sections.',
      'Multilingual answers grounded in the official manual.'
    ],
    technologies: ['RAG', 'LangChain', 'LLM', 'React', 'Python'],
    link: 'https://carchat.online', screenshot: '/images/carchat.png'
  },
  {
    id: 'megawatt-utt', title: "Megawatt'UTT — SimuPont", year: '2026',
    role: 'Innovation · EDF × UTT',
    description: "Mobile training simulator for nuclear bridge-crane fuel handling, built for EDF's Megawatt'UTT national challenge.",
    highlights: [
      "Won 2nd place and the Public's Prize, judged on risk-taking, feasibility and implementation.",
      'Real-time 4-axis Unity 3D simulation paired with a web learning and progress-tracking platform.',
      'Reproduces the industrial HMI (Magelis / SOMDEL) to teach precise CM, CMA and CSA handling gestures.',
      'Featured in Le Parisien with a dedicated article on the team and prototype.'
    ],
    technologies: ['Unity', 'React', '3D Simulation', 'EDF'],
    link: 'https://megawatt-simupont-rvmyoc-820e18-212-227-88-180.sslip.io/', screenshot: '/images/megawatt.png'
  },
  {
    id: 'hera-studio', title: 'Hera Studio', year: '2025',
    role: 'Founder · Full-stack & AI',
    description: 'AI platform for creating personalized coloring books for children.',
    highlights: [
      'Users pick a theme and visual style, then generate a unique book.',
      'Download instantly or order a printed edition.',
      'Built end-to-end with image generation, auth and payments.'
    ],
    technologies: ['React', 'Firebase', 'Supabase', 'Stripe', 'OpenAI'],
    link: 'https://www.herastudio.art', screenshot: '/images/hera-mobile.png'
  },
  {
    id: 'ai-adventure', title: 'AI Adventure', year: '2025',
    role: 'Product & ML · KAIST',
    description: 'Student-focused learning platform that turns research-paper databases into accessible knowledge.',
    highlights: [
      'Generates summaries, learning guidance and source-based study support from papers.',
      'Gamified through quiz duels, research quests and professor-guided challenges.',
      'Framed with a Y Combinator startup approach and tested with 30+ KAIST students.'
    ],
    technologies: ['React', 'Machine Learning', 'Python', 'Gamification'],
    screenshot: '/images/ai-adventure.jpg'
  },
  {
    id: 'reply-heart-monitor', title: 'RePLY', year: '2025', short: 'R', tone: 'red',
    screens: ['/images/reply-1.png', '/images/reply-2.png'],
    role: 'ML & Hardware · KAIST',
    description: 'Intelligent wearable that helps people optimize their exercise sessions.',
    highlights: [
      'Machine learning to monitor heart rate and estimate calorie expenditure.',
      'Haptic feedback guides effort during a session in real time.'
    ],
    technologies: ['Machine Learning', 'IoT', 'Python', 'Signal Processing']
  },
  {
    id: 'fabulous-creations', title: 'Fabulous Creations', year: '2025',
    role: 'Freelance · Web Design & Dev',
    description: 'Polished one-page portfolio for an interior designer.',
    highlights: [
      'Showcases selected work with smooth, considered motion.',
      'Database-backed appointment booking flow.'
    ],
    technologies: ['JavaScript', 'CSS', 'Database', 'Booking'],
    link: 'https://www.fabulousdesign.online/', screenshot: '/images/fabulous.png'
  },
  {
    id: 'scout-mini-robot', title: 'Scout Mini Robot', year: '2024', short: 'S', tone: 'slate',
    role: 'Robotics · ROS2',
    description: 'User guide and autonomous navigation experiment for the AgileX Scout Mini robot.',
    highlights: [
      'Co-developed a comprehensive user guide for the robot.',
      'Leveraged ROS2 for robot operation and automation workflows.'
    ],
    technologies: ['ROS2', 'Robotics', 'Python', 'Automation']
  },
  {
    id: 'humanlaw-association', title: 'HumanLaw', year: '2023',
    role: 'Volunteer · Logistics',
    description: 'Community work supporting food distribution for people in need.',
    highlights: [
      'Food distribution for homeless people and students facing financial hardship.',
      'Organized donation drives and handled logistics.'
    ],
    technologies: ['Logistics', 'Community', 'Organization'],
    screenshot: '/images/humanlaw.webp'
  }
]
