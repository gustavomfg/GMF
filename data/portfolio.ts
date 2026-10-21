import type { NavItem, Project, TechnicalProfileItem } from "@/types/portfolio";

export const NAV_ITEMS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Perfil", href: "#perfil" },
  { label: "Contato", href: "#contato" },
] as const satisfies readonly NavItem[];

export const TECHNICAL_PROFILE = [
  { label: "Formação", value: "ADS · UniFil (2025–2028)" },
  { label: "Direção principal", value: "Java em aprofundamento contínuo" },
  { label: "Uso diário", value: "TypeScript e JavaScript" },
  { label: "Construção", value: "React, Node.js e Electron" },
  { label: "Em desenvolvimento", value: "Rust no SysMon e no BatPet · QML no Greeter" },
  { label: "Certificação", value: "Fundamentos do GitHub · DataCamp (2026)" },
] as const satisfies readonly TechnicalProfileItem[];

export const PROJECTS = [
  {
    id: "01",
    key: "studio",
    name: "Nocturne Studio",
    role: "Workspace local-first de engenharia assistida por IA",
    status: "v1.0.2 · versão estável",
    description:
      "Workspace local-first para manter projeto, documentação, conhecimento, arquitetura e conversas conectados enquanto a IA apoia o trabalho de engenharia.",
    tags: ["Electron", "React", "TypeScript", "SQLite"],
    problem:
      "Permitir que ferramentas de IA trabalhem com o contexto do projeto em vez de prompts isolados, mantendo conhecimento, decisões e conversas conectados no workspace.",
    highlights: [
      "Local Second Brain e Awareness System contextual",
      "Review Mode com revisão humana antes da aplicação de alterações",
      "Secure Provider System, Credential Vault e Typed IPC",
      "Arquitetura Electron com isolamento e Provider Abstraction Layer",
      "Packaging Pipeline e validação automatizada por CI",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/nocturne-studio",
        type: "source",
      },
    ],
    icon: "brain-circuit",
    accent: "violet",
  },
  {
    id: "07",
    key: "portfolio",
    name: "Portfolio",
    role: "Portfólio profissional",
    status: "Você está aqui",
    description:
      "Meu portfólio pessoal, criado para apresentar minha trajetória, minhas competências e a evolução dos projetos que desenvolvo.",
    tags: ["Next.js", "React", "TypeScript"],
    problem:
      "Comunicar quem sou como desenvolvedor e demonstrar, com clareza, o conhecimento técnico que venho construindo na prática.",
    highlights: [
      "Interface responsiva e acessível",
      "Conteúdo centralizado e fácil de atualizar",
      "Conteúdo orientado à minha identidade profissional",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/Portfolio",
        type: "source",
      },
    ],
    icon: "panels-top-left",
    accent: "blue",
  },
  {
    id: "03",
    key: "ovra",
    name: "OVRA",
    role: "Laboratório visual de creative development",
    status: "Demo ao vivo",
    description:
      "Laboratório interativo de luz, matéria e ruído: doze espécimes renderizados em tempo real com shaders GLSL, organizados em cinco famílias e abertos à experimentação.",
    tags: ["React", "WebGL2", "GLSL", "GSAP"],
    image: "/ovra/ovra-desktop.webp",
    imageAlt: "Página inicial do OVRA com a tipografia sobre uma simulação de fluido em tons de vermelho.",
    problem:
      "Investigar como shaders, movimento e tipografia podem formar uma experiência navegável, em que cada efeito pode ser observado, ajustado e comparado.",
    highlights: [
      "Éter interativo na abertura: simulação de fluido que responde ao cursor",
      "Catálogo com prévias WebGL vivas e filtros por família",
      "Câmara de observação com quatro parâmetros ajustáveis por espécime e cópia dos valores em JSON",
      "Composição responsiva, rolagem suave com Lenis e transições com GSAP e ScrollTrigger",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/ovra",
        type: "source",
      },
      {
        label: "Abrir experiência",
        href: "https://gustavomfg.github.io/ovra/",
        type: "demo",
      },
    ],
    icon: "sparkles",
    accent: "cyan",
  },
  {
    id: "04",
    key: "greeter",
    name: "Nocturne Greeter",
    role: "Tela de login Wayland para Linux",
    status: "Em uso diário no Arch Linux",
    description:
      "Greeter cinematográfico para sessões Wayland, construído com Quickshell, QML e GLSL e integrado ao greetd e ao PAM. Em uso diário no Arch Linux.",
    tags: ["QML", "Quickshell", "GLSL", "Linux"],
    image: "/nocturne-greeter/umbra-auth.webp",
    imageAlt: "Tela de autenticação do Nocturne Greeter com um planeta e anéis orbitais em violeta sobre fundo preto.",
    problem:
      "Substituir o gerenciador de login por uma interface própria sem abrir mão da autenticação real do sistema, da escolha de sessões e de uma recuperação segura.",
    highlights: [
      "Autenticação real pelo greetd e pelo PAM da distribuição",
      "Seleção de usuários e de sessões Wayland instaladas, com memória da última escolha",
      "Shader orbital, transição animada para a sessão e navegação completa por teclado",
      "Pacote Arch Linux com hooks do pacman, preview na sessão atual e harness Wayland isolado",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/nocturne-greeter",
        type: "source",
      },
    ],
    icon: "lock-keyhole",
    accent: "violet",
  },
  {
    id: "05",
    key: "atlas",
    name: "Nocturne Atlas",
    role: "Mapa navegável do contexto de um projeto",
    status: "Fase inicial · protótipo",
    description:
      "Protótipo de um Project Space que conecta documentos, componentes, decisões, pull requests e releases em um mapa navegável, para entender como um projeto chegou ao estado atual.",
    tags: ["Next.js", "React", "TypeScript"],
    image: "/nocturne-atlas/project-graph.webp",
    imageAlt: "Project Graph do Nocturne Atlas com regiões de Identidade e Checkout, artefatos conectados, painel de relações e linha do tempo.",
    problem:
      "Reconstruir o contexto de um projeto (por que uma decisão foi tomada, que mudança alterou a arquitetura, em qual release ela chegou) quando esse conhecimento está espalhado entre repositórios, documentos e conversas.",
    highlights: [
      "Project Graph com regiões, filtros por tipo e recorte de conexões ao redor do foco",
      "Linha do tempo que redesenha o mapa do primeiro dia até hoje",
      "Trilhas guiadas que respondem a uma pergunta, passo a passo",
      "Foco compartilhável pela URL, navegação por teclado e suporte a movimento reduzido",
      "Dados demonstrativos isolados em um único índice, preparado para receber a futura API em Java",
    ],
    icon: "waypoints",
    accent: "blue",
  },
  {
    id: "06",
    key: "batpet",
    name: "BatPet",
    role: "Companheiro de desktop em Rust",
    status: "Experimental",
    description:
      "Mascote de desktop em pixel-art que reage à atenção e à proximidade do cursor, com um ciclo experimental de voo entre poleiros.",
    image: "/batpet/poses.png",
    imageAlt: "Morcego em pixel-art em estados de repouso, atenção e reação ao cursor.",
    tags: ["Rust", "Bevy", "Desktop"],
    problem:
      "Explorar animação e character acting responsivos em um companheiro de desktop sem perder a identidade visual em pixel-art.",
    highlights: [
      "Olhar e postura reagem à posição e à proximidade do cursor",
      "Ciclo de voo com estados de decolagem, voo, retorno e pouso",
      "Habitat experimental com múltiplos poleiros",
      "Textura original preservada e movimentos quantizados na grade pixel-art",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/My-Bat-Pet",
        type: "source",
      },
    ],
    icon: "radar",
    accent: "violet",
  },
] as const satisfies readonly Project[];

/** Reading order of the projects section; SysMon has its own showcase outside PROJECTS. */
export const PROJECT_CHAPTERS: readonly { id: string; name: string; anchor: string }[] = [
  { id: "01", name: "Nocturne Studio", anchor: "projeto-studio" },
  { id: "02", name: "SysMon", anchor: "sysmon" },
  ...PROJECTS.filter((project) => project.key !== "studio" && project.key !== "portfolio").map((project) => ({
    id: project.id,
    name: project.name,
    anchor: `projeto-${project.key}`,
  })),
];

export const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Electron",
  "Java",
  "Rust",
  "Python",
  "SQLite",
  "WebGL2 · GLSL",
  "QML",
  "Linux",
] as const;

export const NOCTURNE_STUDIO_EVIDENCE = {
  version: "v1.0.2",
  keyEvidence: [
    "Workspace Memory, Local Second Brain e Awareness explicável por execução",
    "Review Mode para arquitetura, segurança, testes, performance, documentação e manutenibilidade",
    "Secure Provider System, Credential Vault e Typed IPC",
    "Secure Electron Architecture com isolamento explícito entre renderer e processo principal",
    "Provider Abstraction Layer, Packaging Pipeline e Automated CI Validation",
  ],
  reviewModeSummary: "As recomendações registram evidência, confiança, origem, responsável, severidade, justificativa e histórico de decisão, sempre sob revisão do desenvolvedor antes de alterações.",
  architectureSummary: "Electron, React, TypeScript e SQLite; IPC tipado; contextIsolation habilitado; nodeIntegration desabilitado; preload/contextBridge como fronteira; comunicação controlada entre renderer e processo principal.",
  providers: [
    "Google Gemini",
    "OpenRouter",
    "DeepSeek",
    "Groq",
    "Mistral",
    "xAI",
    "Ollama",
    "LM Studio",
    "Endpoints compatíveis com chat completions",
  ],
  stateSummary: "Build Mode e Docs Mode também já fazem parte da versão estável, com aprovação de comandos, diff visível e rollback protegido.",
} as const;

export const SYSMON_EVIDENCE = {
  stack: ["Rust", "Ratatui", "Crossterm", "Linux"],
  telemetry: ["CPU", "memória", "GPU", "rede", "armazenamento", "temperaturas", "processos"],
  architecture: [
    "Históricos limitados",
    "Inventário dinâmico de hardware",
    "Separação entre coleta, interpretação e visualização dos dados",
  ],
  healthEngine: "O Health Engine diferencia atividade de pressão do sistema e alimenta o System Pulse, uma representação procedural que reage ao estado agregado da máquina.",
} as const;
