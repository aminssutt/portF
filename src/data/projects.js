export const projectsData = [
  {
    id: 'blaze', title: 'Blaze', captionTitle: 'Blaze - Gemma 4 Hackathon', year: '2026',
    role: {
      en: 'AI & Agents · Build with Gemma 4',
      fr: 'IA & Agents · Build with Gemma 4',
      ko: 'AI & 에이전트 · Build with Gemma 4'
    },
    description: {
      en: 'Offline multi-agent system that turns firefighter radio chatter into a safety-reviewed, human-approved tactical plan — built at the Build with Gemma 4 hackathon (Autonomous Agents track + NVIDIA GPU Challenge).',
      fr: "Système multi-agents hors ligne qui transforme les échanges radio des pompiers en un plan tactique passé au crible d'un critique sécurité puis validé par un humain — réalisé au hackathon Build with Gemma 4 (track Autonomous Agents + NVIDIA GPU Challenge).",
      ko: '소방 무전을 안전 검토와 사람 승인을 거친 전술 계획으로 바꾸는 오프라인 멀티 에이전트 시스템 — Build with Gemma 4 해커톤(Autonomous Agents 트랙 + NVIDIA GPU Challenge)에서 제작했습니다.'
    },
    highlights: {
      en: [
        'Radio audio → local speech-to-text → five specialized Gemma 4 agents (radio intelligence, situation context, tactical planning, safety critic, dispatch), chained by a deterministic 15-state orchestrator.',
        'An adversarial Safety Critic attacks every plan before a human ever sees it — 8 mechanical rule checks the model can escalate but never soften.',
        'Human approval is a hard gate: the state machine has no transition from “plan drafted” to “dispatched” that skips the commander, then each unit gets its own voice order via local TTS.',
        '100% local inference on a single NVIDIA L40S through vLLM — zero cloud LLM calls, enforced by the client and counted live in the UI, with 100% valid structured output measured over 27 labeled radio messages.'
      ],
      fr: [
        'Audio radio → transcription locale → cinq agents Gemma 4 spécialisés (radio, contexte terrain, plan tactique, critique sécurité, dispatch), enchaînés par un orchestrateur déterministe à 15 états.',
        "Un Safety Critic adversarial attaque chaque plan avant même qu'un humain le voie — 8 règles mécaniques que le modèle peut durcir mais jamais assouplir.",
        "La validation humaine est une barrière dure : la machine à états n'a aucune transition de « plan rédigé » à « dispatché » qui contourne le commandant ; ensuite chaque unité reçoit son ordre vocal via un TTS local.",
        "Inférence 100 % locale sur un seul NVIDIA L40S via vLLM — zéro appel LLM cloud, garanti par le client et compté en direct dans l'UI, avec 100 % de sorties structurées valides mesurées sur 27 messages radio annotés."
      ],
      ko: [
        '무전 오디오 → 로컬 음성 인식 → 5개의 전문 Gemma 4 에이전트(무전 분석, 현장 맥락, 전술 계획, 안전 비평, 배정)를 15개 상태의 결정론적 오케스트레이터가 연결합니다.',
        '적대적 Safety Critic이 사람이 보기 전에 모든 계획을 공격합니다 — 모델이 강화할 수는 있어도 결코 완화할 수 없는 8가지 기계적 규칙 검사.',
        '사람의 승인은 하드 게이트입니다: 상태 머신에는 지휘관을 건너뛰고 “계획 작성”에서 “배정”으로 가는 전이가 없으며, 승인 후 각 부대는 로컬 TTS로 개별 음성 지시를 받습니다.',
        'vLLM으로 단일 NVIDIA L40S에서 100% 로컬 추론 — 클라우드 LLM 호출 0회를 클라이언트가 강제하고 UI에 실시간 표시하며, 라벨링된 무전 메시지 27건에서 구조화 출력 유효율 100%를 측정했습니다.'
      ]
    },
    technologies: ['Multi-Agent', 'Gemma 4', 'vLLM', 'FastAPI', 'Next.js', 'NVIDIA L40S'],
    link: 'https://blaze-live.aminssutt.fr', screenshot: '/images/blaze.png'
  },
  {
    id: 'astyr', title: 'Astyr', captionTitle: 'Astyr (ex-Arc) - Raise Hackathon', year: '2026',
    role: {
      en: 'Raise Hackathon Winner → Startup',
      fr: 'Raise Hackathon Winner → Startup',
      ko: 'Raise 해커톤 우승 → 스타트업'
    },
    description: {
      en: 'Born “Arc” at the RAISE Summit hackathon — a multi-agent system for factory maintenance and operations, presented on the main stage in front of 6,000 builders — the project has since migrated to astyr.app and continues as a startup: the AI fault-diagnosis layer for industrial maintenance.',
      fr: "Né « Arc » au hackathon RAISE Summit — système multi-agents pour la maintenance et l'organisation des usines, présenté sur la grande scène devant 6000 builders — le projet a depuis migré vers astyr.app et se poursuit en startup : la couche IA de diagnostic de pannes pour la maintenance industrielle.",
      ko: 'RAISE Summit 해커톤에서 “Arc”라는 이름으로 태어난 공장 유지보수·운영 멀티 에이전트 시스템 — 메인 무대에서 6,000명의 빌더 앞에서 발표했습니다. 이후 프로젝트는 astyr.app으로 이전해 스타트업으로 이어지고 있습니다: 산업 유지보수를 위한 AI 고장 진단 레이어.'
    },
    highlights: {
      en: [
        'Now a startup: Astyr ranks probable causes from the plant’s own schematics, manuals and past incidents — every cause cited, confidence-gated, and confirmed by one operator field measurement before any fix is prescribed.',
        'Multi-agent orchestrator that routes specialist agents through diagnose-then-act phases around a human validation loop.',
        'Field validation loop: the on-site operator confirms or refuses with a counter-measurement, and the agents pivot and re-diagnose live.',
        'Document-grounded reasoning — every cause and every step cites the source technical docs, down to the page, with a clickable trail.',
        'Native iOS app and web control room driven live by a single server-sent event stream, running on Vultr serverless inference.'
      ],
      fr: [
        "Aujourd'hui une startup : Astyr classe les causes probables à partir des schémas, manuels et historiques d'incidents de l'usine — chaque cause citée, filtrée par confiance, puis confirmée par une mesure terrain de l'opérateur avant toute prescription.",
        "Orchestrateur multi-agents qui enchaîne des agents spécialisés en deux phases — diagnostic puis action — autour d'une boucle de validation humaine.",
        "Boucle de validation terrain : l'opérateur sur site confirme ou refuse avec une contre-mesure, et les agents pivotent et re-diagnostiquent en direct.",
        "Raisonnement fondé sur les documents — chaque cause et chaque étape cite la documentation technique source, jusqu'à la page, avec une trace cliquable.",
        "Application iOS native et control room web alimentées en direct par un unique flux d'événements SSE, sur inférence serverless Vultr."
      ],
      ko: [
        '현재는 스타트업: Astyr는 공장의 도면·매뉴얼·과거 인시던트를 근거로 유력한 원인의 순위를 매깁니다 — 모든 원인은 인용되고, 신뢰도 게이트를 거치며, 수리를 제안하기 전에 작업자의 현장 측정 한 번으로 확정됩니다.',
        '전문 에이전트를 진단→조치 두 단계로 라우팅하고, 사람 검증 루프를 중심에 둔 멀티 에이전트 오케스트레이터.',
        '현장 검증 루프: 현장 작업자가 확인하거나 반대 측정값과 함께 거부하면, 에이전트가 즉시 방향을 바꿔 다시 진단합니다.',
        '문서 기반 추론 — 모든 원인과 단계가 원본 기술 문서를 페이지 단위까지 인용하며, 클릭 가능한 출처를 제공합니다.',
        'Vultr 서버리스 추론 위에서 단일 SSE 이벤트 스트림으로 구동되는 네이티브 iOS 앱과 웹 컨트롤 룸.'
      ]
    },
    technologies: ['Multi-Agent', 'FastAPI', 'Next.js', 'Swift · iOS', 'RAG', 'Vultr'],
    link: 'https://astyr.app', screenshot: '/images/astyr.png',
    caseStudy: {
      award: {
        en: 'Podium · RAISE Summit 2026 · Vultr track',
        fr: 'Podium · RAISE Summit 2026 · Track Vultr',
        ko: '포디움 · RAISE Summit 2026 · Vultr 트랙'
      },
      tagline: {
        en: 'Six specialized agents that detect, diagnose, dispatch and remediate telecom site outages — every claim cited to the operator’s own documentation, with a field technician kept in the loop.',
        fr: 'Six agents spécialisés qui détectent, diagnostiquent, dispatchent et corrigent les pannes de sites télécom — chaque affirmation citée dans la documentation de l’opérateur, avec un technicien terrain dans la boucle.',
        ko: '통신 사이트 장애를 감지·진단·배정·복구하는 6개의 전문 에이전트 — 모든 주장은 통신사 자체 문서를 인용하고, 현장 기술자가 검증 루프에 참여합니다.'
      },
      meta: [
        { label: { en: 'Role', fr: 'Rôle', ko: '역할' }, value: { en: 'Team Lead · Agentic AI & Software', fr: 'Team Lead · IA agentique & Software', ko: '팀 리드 · 에이전트 AI & 소프트웨어' } },
        { label: { en: 'Team', fr: 'Équipe', ko: '팀' }, value: { en: '5 people · hackathon', fr: '5 personnes · hackathon', ko: '5인 · 해커톤' } },
        { label: { en: 'Type', fr: 'Type', ko: '유형' }, value: { en: 'Incident response · multi-agent', fr: 'Réponse aux incidents · multi-agents', ko: '인시던트 대응 · 멀티 에이전트' } },
        { label: { en: 'Year', fr: 'Année', ko: '연도' }, value: '2026' }
      ],
      links: [
        { label: { en: 'Live site — astyr.app', fr: 'Voir en ligne — astyr.app', ko: '라이브 사이트 — astyr.app' }, href: 'https://astyr.app' },
        { label: { en: 'Source code', fr: 'Code source', ko: '소스 코드' }, href: 'https://github.com/aminssutt/Arc' },
        { label: { en: '60-second demo', fr: 'Démo 60 s', ko: '60초 데모' }, href: 'https://youtu.be/ohvx1NQniWc' }
      ],
      sections: [
        {
          n: '01',
          kicker: { en: 'Context', fr: 'Contexte', ko: '배경' },
          title: {
            en: 'An alarm never arrives alone',
            fr: 'Une alarme n’arrive jamais seule',
            ko: '경보는 결코 혼자 오지 않는다'
          },
          body: [
            {
              en: 'On a telecom network, a site alarm drowns in an event stream the NOC has to sort, correlate and diagnose — before dispatching someone, often by broadcasting to a whole team for lack of knowing who is right.',
              fr: 'Sur un réseau télécom, une alarme de site se noie dans un flux d’événements que le NOC doit trier, corréler puis diagnostiquer — avant de dépêcher quelqu’un, souvent en diffusant à toute une équipe faute de savoir qui est le bon.',
              ko: '통신 네트워크에서 사이트 경보는 NOC가 분류·상관·진단해야 하는 이벤트 스트림에 묻힙니다. 그리고 누가 적임자인지 몰라 팀 전체에 브로드캐스트하는 경우가 많습니다.'
            },
            {
              en: 'The RAISE Summit hackathon (Vultr track) demanded a true multi-agent system, not a RAG chatbot. Arc answers with a full chain — detection → diagnosis → human validation → action — where the LLM never decides alone and every claim cites the operator’s docs to the page.',
              fr: 'Le hackathon RAISE Summit (track Vultr) exigeait un vrai système multi-agents, pas un chatbot RAG. Arc répond par une chaîne complète — détection → diagnostic → validation humaine → action — où le LLM ne décide jamais seul et chaque affirmation cite la doc de l’opérateur à la page.',
              ko: 'RAISE Summit 해커톤(Vultr 트랙)은 RAG 챗봇이 아닌 진정한 멀티 에이전트 시스템을 요구했습니다. Arc는 감지 → 진단 → 사람 검증 → 조치의 완전한 체인으로 답하며, LLM은 결코 혼자 결정하지 않고 모든 주장은 통신사 문서를 페이지 단위로 인용합니다.'
            }
          ]
        },
        {
          n: '02',
          kicker: { en: 'Approach', fr: 'Approche', ko: '접근' },
          title: {
            en: 'A human in the loop',
            fr: 'Un humain dans la boucle',
            ko: '루프 안의 사람'
          },
          body: [
            {
              en: 'A deterministic watchdog detects, a state-machine orchestrator routes without ever diagnosing, and the field technician stays the source of truth — a single on-site measurement can pivot the entire diagnosis and trigger a live re-run.',
              fr: 'Un watchdog déterministe détecte, un orchestrateur en machine à états route sans jamais diagnostiquer, et le technicien terrain reste la source de vérité — une seule mesure sur site peut faire pivoter tout le diagnostic et relancer une analyse en direct.',
              ko: '결정론적 워치독이 감지하고, 상태 머신 오케스트레이터는 진단 없이 라우팅만 하며, 현장 기술자가 진실의 원천으로 남습니다 — 현장의 측정값 하나가 전체 진단을 뒤집고 실시간 재진단을 촉발할 수 있습니다.'
            }
          ]
        }
      ],
      flow: [
        {
          tag: { en: 'Detection · zero LLM', fr: 'Détection · zéro LLM', ko: '감지 · LLM 없음' },
          nodes: [
            { title: { en: 'Watchdog', fr: 'Watchdog', ko: 'Watchdog' }, desc: { en: 'Debounces the alarm stream and triggers.', fr: 'Débounce le flux d’alarmes et déclenche.', ko: '경보 스트림을 디바운스하고 트리거합니다.' } }
          ]
        },
        {
          tag: { en: 'Orchestration · state machine', fr: 'Orchestration · machine à états', ko: '오케스트레이션 · 상태 머신' },
          nodes: [
            { title: { en: 'Orchestrator', fr: 'Orchestrateur', ko: '오케스트레이터' }, desc: { en: 'Routes only — never diagnoses.', fr: 'Route uniquement — ne diagnostique jamais.', ko: '라우팅만 — 절대 진단하지 않습니다.' } }
          ]
        },
        {
          tag: { en: 'Phase 1 · Diagnose', fr: 'Phase 1 · Diagnostic', ko: '1단계 · 진단' },
          nodes: [
            { title: { en: 'Correlation', fr: 'Corrélation', ko: '상관분석' }, desc: { en: 'Traces the site topology.', fr: 'Retrace la topologie du site.', ko: '사이트 토폴로지를 추적합니다.' } },
            { title: { en: 'Root-Cause', fr: 'Cause racine', ko: '근본 원인' }, desc: { en: 'Cited root cause, confidence-gated.', fr: 'Cause racine citée, filtrée par confiance.', ko: '인용된 근본 원인, 신뢰도 게이트.' } },
            { title: { en: 'Responder-Match', fr: 'Responder-Match', ko: '담당자 매칭' }, desc: { en: 'The right technician by skill and zone.', fr: 'Le bon technicien par compétence et zone.', ko: '역량과 구역으로 적합한 기술자를 선정합니다.' } }
          ]
        },
        {
          tag: { en: 'Human loop · iPhone', fr: 'Boucle humaine · iPhone', ko: '사람 루프 · iPhone' },
          nodes: [
            { title: { en: 'Field technician', fr: 'Technicien terrain', ko: '현장 기술자' }, desc: { en: 'APNs push → confirms or refuses with a measurement.', fr: 'Push APNs → confirme ou refuse avec une mesure.', ko: 'APNs 푸시 → 측정값으로 확인 또는 거부합니다.' } }
          ]
        },
        {
          tag: { en: 'Validation', fr: 'Validation', ko: '검증' },
          nodes: [
            { title: { en: 'Validation', fr: 'Validation', ko: '검증' }, desc: { en: 'Binds the measurement to the fault — confirms or pivots.', fr: 'Lie la mesure à la panne — confirme ou pivote.', ko: '측정값을 장애에 연결 — 확인 또는 전환합니다.' } }
          ]
        },
        {
          tag: { en: 'Phase 2 · Act', fr: 'Phase 2 · Action', ko: '2단계 · 조치' },
          nodes: [
            { title: { en: 'Remediation', fr: 'Remédiation', ko: '복구' }, desc: { en: 'Cited procedure and safety steps.', fr: 'Procédure et étapes de sécurité citées.', ko: '인용된 절차와 안전 단계.' } },
            { title: { en: 'Cost · Inventory · Dispatch', fr: 'Coût · Stock · Dispatch', ko: '비용 · 재고 · 배정' }, desc: { en: 'Three real tools — pricing and parts.', fr: 'Trois vrais outils — prix et pièces.', ko: '세 개의 실제 도구 — 가격과 부품.' } }
          ]
        },
        {
          tag: { en: 'Output', fr: 'Sortie', ko: '출력' },
          nodes: [
            { title: { en: 'Action report', fr: 'Rapport d’action', ko: '조치 리포트' }, desc: { en: 'Prioritized, cited to the page, PDF export.', fr: 'Priorisé, cité à la page, export PDF.', ko: '우선순위화, 페이지 단위 인용, PDF 내보내기.' } }
          ]
        }
      ],
      pivot: {
        en: 'Pivot — a field refusal bubbles up: the technician’s measurement becomes ground truth and triggers a full re-diagnosis.',
        fr: 'Pivot — un refus terrain remonte : la mesure du technicien devient la vérité de terrain et déclenche un re-diagnostic complet.',
        ko: '전환 — 현장 거부가 위로 전파됩니다: 기술자의 측정값이 실측 진실이 되어 전체 재진단을 촉발합니다.'
      },
      keyPoints: [
        {
          n: '01',
          title: { en: 'Dispatch by matchmaking', fr: 'Dispatch par matchmaking', ko: '매칭 기반 배정' },
          body: {
            en: 'The intervention is routed to the one right technician — skill, zone — instead of broadcast to the whole team.',
            fr: 'L’intervention est routée vers le seul bon technicien — compétence, zone — au lieu d’être diffusée à toute l’équipe.',
            ko: '개입은 팀 전체에 브로드캐스트되지 않고, 역량과 구역에 맞는 단 한 명의 기술자에게 라우팅됩니다.'
          }
        },
        {
          n: '02',
          title: { en: 'Physical validation, direct pivot', fr: 'Validation physique, pivot direct', ko: '물리적 검증, 즉시 전환' },
          body: {
            en: 'The technician tests on site and confirms, or refuses with a counter-measurement — then the agents treat the field as ground truth and re-diagnose.',
            fr: 'Le technicien teste sur site et confirme, ou refuse avec une contre-mesure — les agents traitent alors le terrain comme vérité et re-diagnostiquent.',
            ko: '기술자가 현장에서 테스트해 확인하거나 반대 측정값으로 거부하면, 에이전트는 현장을 실측 진실로 삼아 재진단합니다.'
          }
        },
        {
          n: '03',
          title: { en: 'Every assertion is cited', fr: 'Chaque affirmation est citée', ko: '모든 주장은 인용된다' },
          body: {
            en: 'Root cause, procedure, steps — all cite the operator’s technical docs to the page, clickable in the final report.',
            fr: 'Cause racine, procédure, étapes — tout cite la doc technique de l’opérateur à la page, cliquable dans le rapport final.',
            ko: '근본 원인, 절차, 단계 — 모두 통신사 기술 문서를 페이지 단위로 인용하며, 최종 리포트에서 클릭할 수 있습니다.'
          }
        },
        {
          n: '04',
          title: { en: 'Always terminates', fr: 'Se termine toujours', ko: '항상 종료된다' },
          body: {
            en: 'The UI consumes only a frozen-contract SSE stream of 15 event types. A failed agent degrades to a valid, downgraded report rather than blocking the chain.',
            fr: 'L’UI ne consomme qu’un flux SSE à contrat figé de 15 types d’événements. Un agent en échec dégrade vers un rapport valide plutôt que de bloquer la chaîne.',
            ko: 'UI는 15가지 이벤트 타입의 고정 계약 SSE 스트림만 소비합니다. 실패한 에이전트는 체인을 막는 대신 유효한 다운그레이드 리포트로 저하됩니다.'
          }
        }
      ],
      metrics: [
        { value: '6', label: { en: 'Specialized agents · two phases', fr: 'Agents spécialisés · deux phases', ko: '전문 에이전트 · 2단계' } },
        { value: '15', label: { en: 'Event types · frozen SSE contract', fr: 'Types d’événements · contrat SSE figé', ko: '이벤트 타입 · 고정 SSE 계약' } },
        { value: 'E2E', label: { en: 'Tests green · cloud ↔ iPhone', fr: 'Tests au vert · cloud ↔ iPhone', ko: '테스트 통과 · 클라우드 ↔ iPhone' } }
      ],
      result: {
        en: 'Detection, diagnosis, field validation, action — the full chain in one weekend, and a podium finish in the Vultr track. Arc has since become Astyr: the project migrated to astyr.app and continues as a startup building the AI fault-diagnosis layer for industrial maintenance.',
        fr: 'Détection, diagnostic, validation terrain, action — la chaîne complète en un week-end, et une place sur le podium du track Vultr. Arc est depuis devenu Astyr : le projet a migré vers astyr.app et se poursuit en startup, autour de la couche IA de diagnostic de pannes pour la maintenance industrielle.',
        ko: '감지, 진단, 현장 검증, 조치 — 한 주말에 완성한 전체 체인, 그리고 Vultr 트랙 포디움. 이후 Arc는 Astyr가 되었습니다: 프로젝트는 astyr.app으로 이전했고, 산업 유지보수용 AI 고장 진단 레이어를 만드는 스타트업으로 이어지고 있습니다.'
      }
    }
  },
  {
    id: 'athenvia', title: 'Athenvia', year: '2026',
    role: {
      en: 'Founder · Product & Full-stack',
      fr: 'Fondateur · Produit & Full-stack',
      ko: '창업자 · 프로덕트 & 풀스택'
    },
    description: {
      en: 'University application reminders: find a graduate program, follow it, and get one calm push at the right time — before applications open or close.',
      fr: "Rappels de candidatures universitaires : trouvez un programme, suivez-le, et recevez une notification au bon moment — avant l'ouverture ou la clôture des candidatures.",
      ko: '대학 지원 리마인더: 대학원 프로그램을 찾아 팔로우하면, 지원이 열리거나 마감되기 전 적절한 순간에 차분한 푸시 알림 하나를 받습니다.'
    },
    highlights: {
      en: [
        'Catalogue of 20+ universities and 50+ graduate programs (Oxford, MIT, ETH Zürich, EPFL, HEC Paris…), each date checked against the official admissions page.',
        'Verified by design: every date traces back to an official page — and when a university has published nothing yet, Athenvia says so instead of guessing.',
        'One calm reminder — a single push at the right moment, no feeds, no streaks, no noise between you and the deadline.',
        'Installs straight from Safari to the iPhone Home Screen — real app feel, programs one tap away, readable offline — with a free plan and a Max tier.'
      ],
      fr: [
        "Catalogue de plus de 20 universités et 50 programmes de master (Oxford, MIT, ETH Zürich, EPFL, HEC Paris…), chaque date vérifiée sur la page officielle des admissions.",
        "Vérifié par conception : chaque date remonte à une page officielle — et quand l'université n'a encore rien publié, Athenvia le dit au lieu de deviner.",
        "Un seul rappel, au bon moment — une notification unique, sans feed, sans streaks, sans bruit entre vous et la deadline.",
        "S'installe depuis Safari sur l'écran d'accueil de l'iPhone — sensation d'app native, programmes à un tap, lisibles hors ligne — avec une offre gratuite et un palier Max."
      ],
      ko: [
        '20개 이상 대학, 50개 이상 대학원 프로그램 카탈로그(옥스퍼드, MIT, ETH 취리히, EPFL, HEC 파리…) — 모든 날짜를 공식 입학 페이지와 대조해 확인합니다.',
        '설계부터 검증 중심: 모든 날짜는 공식 페이지로 거슬러 올라가며, 대학이 아직 아무것도 공개하지 않았다면 추측하는 대신 그렇다고 말합니다.',
        '차분한 리마인더 하나 — 적절한 순간의 푸시 한 번, 피드도 스트릭도 소음도 없이 마감일에만 집중합니다.',
        'Safari에서 바로 iPhone 홈 화면에 설치 — 네이티브 앱 감각, 한 번의 탭으로 프로그램 확인, 오프라인에서도 읽기 가능 — 무료 플랜과 Max 티어 제공.'
      ]
    },
    technologies: ['PWA', 'Push Notifications', 'Offline-first', 'iOS Home Screen'],
    link: 'https://athenvia.aminssutt.fr', screenshot: '/images/athenvia.png'
  },
  {
    id: 'alpin', title: 'Alpin', year: '2026',
    role: {
      en: 'AI & Agents · ECU Verification',
      fr: 'IA & Agents · Vérification ECU',
      ko: 'AI & 에이전트 · ECU 검증'
    },
    description: {
      en: 'Autonomous multi-agent system that adversarially pushes an automotive ECU state machine to failure — generating scenarios, injecting faults, verifying safety and closing coverage gaps in a live, auditable loop.',
      fr: "Système multi-agents autonome qui pousse la machine à états d'un ECU automobile jusqu'à la panne — génération de scénarios, injection de défauts, vérification de sécurité et couverture des angles morts, dans une boucle vivante et auditable.",
      ko: '자동차 ECU 상태 머신을 고장 직전까지 적대적으로 밀어붙이는 자율 멀티 에이전트 시스템 — 시나리오 생성, 결함 주입, 안전 검증, 커버리지 공백 보완을 살아 있는 감사 가능한 루프로 수행합니다.'
    },
    highlights: {
      en: [
        'A Supervisor hub routes six specialist agents plus a code-execution node through a directed feedback loop: plan → generate → inject → execute → verify → critique → repeat.',
        'Hand-written test suites under-explore the state machine; Alpin explores it adversarially — 5 states, 10 events, 18 transitions.',
        'Injects faults such as sensor failures and false speed readings, then proves the safe path — e.g. OFF → IDLE → RUNNING, sensor fault, fallback to SAFE_MODE.',
        'The whole campaign streams live into a bilingual control room over 13 typed SSE events — every step auditable.'
      ],
      fr: [
        "Un hub Superviseur route six agents spécialistes plus un nœud d'exécution de code dans une boucle de rétroaction dirigée : plan → generate → inject → execute → verify → critique → répéter.",
        "Les suites de tests écrites à la main sous-explorent la machine à états ; Alpin l'explore de façon adversariale — 5 états, 10 événements, 18 transitions.",
        "Injecte des défauts comme les pannes capteur ou les fausses lectures de vitesse, puis prouve le chemin sûr — p. ex. OFF → IDLE → RUNNING, défaut capteur, repli vers SAFE_MODE.",
        "Toute la campagne est diffusée en direct dans une control room bilingue via 13 événements SSE typés — chaque étape auditable."
      ],
      ko: [
        'Supervisor 허브가 6개의 전문 에이전트와 코드 실행 노드를 방향성 피드백 루프로 라우팅합니다: plan → generate → inject → execute → verify → critique → 반복.',
        '수작업 테스트 스위트는 상태 머신을 충분히 탐색하지 못합니다. Alpin은 이를 적대적으로 탐색합니다 — 5개 상태, 10개 이벤트, 18개 전이.',
        '센서 고장이나 잘못된 속도 값 같은 결함을 주입한 뒤 안전 경로를 증명합니다 — 예: OFF → IDLE → RUNNING, 센서 결함, SAFE_MODE로 폴백.',
        '전체 캠페인이 13가지 타입의 SSE 이벤트로 2개 국어 컨트롤 룸에 실시간 스트리밍됩니다 — 모든 단계를 감사할 수 있습니다.'
      ]
    },
    technologies: ['Multi-Agent', 'Fault Injection', 'State Machine', 'SSE', 'Safety'],
    link: 'https://alpin.aminssutt.fr', screenshot: '/images/alpin.png'
  },
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
    id: 'wallside', title: 'Wallside', captionTitle: 'Wallside (ex-CarChat)', year: '2026',
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
        'Indexes official owner manuals covering 130+ vehicles (Renault, Hyundai, Kia, Peugeot, BMW, Tesla, Mercedes…), each isolated in its own per-vehicle session.',
        'Hybrid retrieval — FAISS (semantic) + BM25 (lexical) — with intelligent section-based chunking and parallel PDF extraction.',
        'Answers generated with Google Gemini, grounded in the official manual and backed by verified source passages.',
        'Multilingual conversational interface that cuts documentation search from minutes to seconds.'
      ],
      fr: [
        'Indexe les manuels d’utilisation officiels de plus de 130 véhicules (Renault, Hyundai, Kia, Peugeot, BMW, Tesla, Mercedes…), chacun isolé dans sa propre session véhicule.',
        'Recherche hybride — FAISS (sémantique) + BM25 (lexicale) — avec chunking intelligent par sections et extraction PDF parallèle.',
        'Réponses générées avec Google Gemini, fondées sur le manuel officiel et appuyées par des passages sources vérifiés.',
        'Interface conversationnelle multilingue qui réduit la recherche documentaire de plusieurs minutes à quelques secondes.'
      ],
      ko: [
        '130대 이상 차량(르노, 현대, 기아, 푸조, BMW, 테슬라, 메르세데스…)의 공식 사용 설명서를 색인하며, 각 차량은 독립된 세션으로 분리됩니다.',
        '하이브리드 검색 — FAISS(의미) + BM25(어휘) — 과 섹션 기반 지능형 청킹, 병렬 PDF 추출을 사용합니다.',
        'Google Gemini로 답변을 생성하고, 공식 설명서에 근거해 검증된 출처 구절로 뒷받침합니다.',
        '문서 검색 시간을 몇 분에서 몇 초로 줄이는 다국어 대화형 인터페이스입니다.'
      ]
    },
    technologies: ['RAG', 'FAISS', 'BM25', 'Gemini', 'React', 'Python'],
    link: 'https://wallside.aminssutt.fr', screenshot: '/images/wallside.png'
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
