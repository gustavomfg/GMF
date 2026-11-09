import type { NavItem, Project, TechnicalProfileItem } from "@/types/portfolio";

export const NAV_ITEMS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Perfil", href: "#perfil" },
  { label: "Contato", href: "#contato" },
] as const satisfies readonly NavItem[];

export const TECHNICAL_PROFILE = [
  { label: "Formação", value: "ADS · UniFil (2025–2028)" },
  { label: "Java", value: "Saturn em Java puro · API do ATLS em Spring Boot" },
  { label: "TypeScript", value: "NOCT, FRX, ATLS e este portfólio" },
  { label: "Rust", value: "PULS, BATTY e o motor do FRX" },
  { label: "Python · QML", value: "Gesture Control em Python · UMBRA em QML e GLSL" },
  { label: "Certificação", value: "Fundamentos do GitHub · DataCamp (2026)" },
] as const satisfies readonly TechnicalProfileItem[];

export const PROJECTS = [
  {
    id: "01",
    key: "studio",
    name: "NOCT",
    role: "Workspace local-first de engenharia assistida por IA",
    status: "v1.0.5 · versão estável",
    description:
      "Workspace desktop local-first para entender, revisar e evoluir projetos reais com a IA que você escolher, mantendo projeto, conversas, achados e conhecimento conectados.",
    tags: ["Electron", "React", "TypeScript", "SQLite"],
    problem:
      "Permitir que ferramentas de IA trabalhem com o contexto do projeto em vez de prompts isolados, mantendo conhecimento, decisões e conversas conectados no workspace.",
    highlights: [
      "Review, Build e Docs Mode rodam com o modelo escolhido no workspace, sem depender de um fornecedor de IA, CLI ou assinatura",
      "Review Mode somente leitura, com sugestões baseadas em evidências e revisão humana antes de qualquer alteração",
      "Build Mode com aprovação de comandos, diff visível e rollback protegido",
      "Segundo Cérebro local e Awareness que explica o contexto usado em cada execução",
      "Credential Vault, IPC tipado e renderer isolado na arquitetura Electron",
      "Pacotes para Windows, Linux e macOS validados por CI",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/NOCT",
        type: "source",
      },
    ],
    icon: "brain-circuit",
    accent: "violet",
  },
  {
    id: "09",
    key: "portfolio",
    name: "GMF",
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
      "Testes de componentes, navegação e acessibilidade com Vitest, Playwright e axe",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/GMF",
        type: "source",
      },
    ],
    icon: "panels-top-left",
    accent: "blue",
  },
  {
    id: "03",
    key: "frx",
    name: "FRX",
    role: "Conserto de hardware em laptops Linux",
    status: "v0.5 · versão inicial",
    description:
      "Hardware Fixer: app desktop que identifica o modelo do laptop, busca na Arch Wiki as correções de Wi-Fi, áudio, touchpad, suspensão e firmware e mostra a mudança exata em /etc antes de aplicar, com backup e desfazer.",
    tags: ["Tauri", "Rust", "React", "TypeScript"],
    image: "/frx/hardware-dashboard.webp",
    imageAlt: "Hardware Fixer em um ThinkPad X1 Carbon mostrando os cinco sintomas e uma correção de áudio da Arch Wiki com o botão Aplicar correção (dados de exemplo).",
    problem:
      "Aplicar no próprio laptop uma correção documentada na Arch Wiki sem copiar comandos às cegas: saber o que muda no sistema, por quê, e conseguir voltar atrás.",
    highlights: [
      "Identificação do modelo pelo DMI, sem privilégios e sem ler número de série ou UUID",
      "Busca na Arch Wiki pela API MediaWiki, aceitando a página só quando os números do modelo batem",
      "Parser estrito: reconhece apenas opções de módulo e parâmetros do kernel inequívocos",
      "O app nunca roda sudo: prepara o arquivo, mostra o comando e confere o hash do resultado em /etc",
      "Escrita restrita a uma allowlist fechada, com backup e desfazer para cada correção",
      "Pacotes AppImage, .deb e .rpm publicados por CI, além de um pacote nativo para Arch",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/FRX",
        type: "source",
      },
    ],
    icon: "wrench",
    accent: "cyan",
  },
  {
    id: "04",
    key: "saturn",
    name: "Saturn",
    role: "Simulação gravitacional em Java",
    status: "Java puro · sem dependências",
    description:
      "Simulação de Saturno, das seis maiores luas e dos anéis com dados reais de massa, raio e distância. Feita em Java com Swing e Java2D, sem bibliotecas externas.",
    tags: ["Java", "Swing", "Java2D", "Simulação"],
    image: "/saturn/vista-padrao.webp",
    imageAlt: "Saturno inclinado com a sombra dos anéis, as luas Encélado e Mimas em órbita e o painel com os dados do planeta.",
    problem:
      "Construir do zero, em Java, a física e o renderizador de uma simulação: manter as órbitas estáveis por muito tempo simulado e desenhar planeta e anéis por pixel em tempo real.",
    highlights: [
      "Gravitação N-corpos com integrador leapfrog, que conserva a energia ao longo da simulação",
      "16.384 partículas de anel que mostram onde uma lua perturba a órbita original",
      "Ray tracing por pixel do planeta e dos anéis, com sombras nos dois sentidos",
      "Perfil real dos anéis, com a Divisão de Cassini e as falhas de Encke e Keeler, e rotação kepleriana",
      "Física e renderização em paralelo, com testes automáticos de física e de desempenho",
      "Câmera com zoom, inclinação e foco em um corpo; o botão direito cria uma lua nova",
    ],
    icon: "orbit",
    accent: "blue",
  },
  {
    id: "05",
    key: "greeter",
    name: "UMBRA",
    role: "Tela de login Wayland para Linux",
    status: "v1.0.0 · em uso diário",
    description:
      "Greeter cinematográfico para sessões Wayland, construído com Quickshell, QML e GLSL e integrado ao greetd e ao PAM. Em uso diário no meu Arch Linux.",
    tags: ["QML", "Quickshell", "GLSL", "Linux"],
    image: "/nocturne-greeter/umbra-auth.webp",
    imageAlt: "Tela de autenticação do UMBRA com um planeta e anéis orbitais em violeta sobre fundo preto.",
    problem:
      "Substituir o gerenciador de login por uma interface própria sem abrir mão da autenticação real do sistema, da escolha de sessões e de uma recuperação segura.",
    highlights: [
      "Autenticação real pelo greetd e pelo PAM da distribuição",
      "Seleção de usuários e de sessões Wayland instaladas, com memória da última escolha",
      "Shader orbital, transição animada para a sessão e navegação completa por teclado",
      "Indicadores de rede e de áudio visíveis antes do login, sem simular estado",
      "Recuperação por login em modo texto, testada em máquina virtual",
      "Pacote Arch Linux com hooks do pacman, preview na sessão atual e harness Wayland isolado",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/UMBRA",
        type: "source",
      },
    ],
    icon: "lock-keyhole",
    accent: "violet",
  },
  {
    id: "06",
    key: "atlas",
    name: "ATLS",
    role: "Mapa navegável do contexto de um projeto",
    status: "Em desenvolvimento · full stack",
    description:
      "Project Space que conecta documentos, componentes, decisões, pull requests e releases em um mapa navegável. O frontend em Next.js consome uma API em Java com Spring Boot e PostgreSQL.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Next.js"],
    image: "/atls/project-graph.webp",
    imageAlt: "Project Graph do ATLS em pixel art, com o Checkout Service em foco, suas relações, o Inspector ao lado e a linha do tempo na base.",
    problem:
      "Reconstruir o contexto de um projeto (por que uma decisão foi tomada, que mudança alterou a arquitetura, em qual release ela chegou) quando esse conhecimento está espalhado entre repositórios, documentos e conversas.",
    highlights: [
      "API em Java 21 e Spring Boot com PostgreSQL, organizada em pacotes por domínio",
      "Login com GitHub liberado só para contas aprovadas por um administrador",
      "Sincronização de pull requests e releases do GitHub em modo de leitura",
      "Project Graph com regiões, filtros por tipo e uma linha do tempo que redesenha o mapa",
      "Trilhas guiadas, foco compartilhável pela URL e navegação por teclado",
      "Testes unitários e de ponta a ponta com um servidor OAuth falso do GitHub",
    ],
    icon: "waypoints",
    accent: "blue",
  },
  {
    id: "07",
    key: "batpet",
    name: "BATTY",
    role: "Companheiro de desktop em Rust",
    status: "Experimental",
    description:
      "Mascote em pixel-art que só existe enquanto é chamado no terminal: lê sinais da pasta atual, fala, aparece por alguns segundos e sai. Reage ao cursor e tem um ciclo de voo entre poleiros.",
    image: "/batpet/poses.png",
    imageAlt: "Morcego em pixel-art em estados de repouso, atenção e reação ao cursor.",
    tags: ["Rust", "Bevy", "Desktop"],
    problem:
      "Explorar animação e character acting responsivos em um companheiro de desktop sem perder a identidade visual em pixel-art.",
    highlights: [
      "Ativação pelo terminal, sem autostart, serviço ou processo de fundo",
      "Falas escolhidas por pontuação a partir do repositório git e da hora",
      "Olhar e postura reagem à posição e à proximidade do cursor",
      "Ciclo de voo com decolagem, voo, retorno e pouso, guiado por aceleração limitada",
      "Textura original preservada e movimentos quantizados na grade pixel-art",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/BATTY",
        type: "source",
      },
    ],
    icon: "radar",
    accent: "violet",
  },
  {
    id: "08",
    key: "gesture",
    name: "Gesture Control",
    role: "Controle do computador com as mãos pela webcam",
    status: "Protótipo",
    description:
      "Protótipo em Python que usa a webcam e o MediaPipe para mover o cursor, clicar, rolar, trocar de workspace no Hyprland e digitar em um teclado virtual com gestos das mãos.",
    tags: ["Python", "MediaPipe", "Wayland", "Hyprland"],
    problem:
      "Transformar a posição de 21 pontos da mão em ações confiáveis no Wayland, sem disparar cliques ou teclas por acidente.",
    highlights: [
      "Mouse e teclado virtuais pelo /dev/uinput, funcionando em Wayland",
      "Pinça para clicar e arrastar, dois dedos para rolar e deslize de mão aberta para trocar de workspace",
      "Teclado QWERTY com as duas mãos e dois modos de digitação: juntar os dedos ou esperar sobre a tecla",
      "Começa desarmado: nada é enviado ao sistema antes da confirmação",
      "Filtro de movimento e rastreio que mantém cada mão identificada",
      "Testes unitários para gestos, filtro, rastreio, teclado e integração com o Hyprland",
    ],
    icon: "hand",
    accent: "cyan",
  },
] as const satisfies readonly Project[];

/** Reading order of the projects section; PULS has its own showcase outside PROJECTS. */
export const PROJECT_CHAPTERS: readonly { id: string; name: string; anchor: string }[] = [
  { id: "01", name: "NOCT", anchor: "projeto-studio" },
  { id: "02", name: "PULS", anchor: "sysmon" },
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
  "Tauri",
  "Java",
  "Spring Boot",
  "Rust",
  "Python",
  "PostgreSQL",
  "SQLite",
  "QML · GLSL",
  "Linux",
] as const;

export const NOCTURNE_STUDIO_EVIDENCE = {
  version: "v1.0.5",
  keyEvidence: [
    "Review, Build e Docs Mode com o modelo escolhido no workspace, sem depender de fornecedor",
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
  version: "v0.1.3",
  telemetry: ["CPU", "memória", "GPU", "rede", "armazenamento", "temperaturas", "processos"],
  architecture: [
    "Históricos limitados",
    "Inventário dinâmico de hardware",
    "Separação entre coleta, interpretação e visualização dos dados",
  ],
  healthEngine: "O Health Engine diferencia atividade de pressão do sistema e alimenta o System Pulse, uma representação procedural que reage ao estado agregado da máquina.",
} as const;
