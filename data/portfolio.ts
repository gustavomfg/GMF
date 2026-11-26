import type { NavItem, Project, TechnicalProfileItem } from "@/types/portfolio";

export const NAV_ITEMS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Perfil", href: "#perfil" },
  { label: "Contato", href: "#contato" },
] as const satisfies readonly NavItem[];

export const TECHNICAL_PROFILE = [
  { label: "Formação", value: "ADS · UniFil (2025–2028)" },
  { label: "Rust", value: "NOCT, PULS e o motor do FRX" },
  { label: "Java", value: "Saturn em Java puro · API do ATLS em Spring Boot" },
  { label: "TypeScript", value: "Frontend do ATLS, interface do FRX e este portfólio" },
  { label: "Linux", value: "UMBRA em QML e GLSL, integrado ao greetd e ao PAM" },
  { label: "Certificação", value: "Fundamentos do GitHub · DataCamp (2026)" },
] as const satisfies readonly TechnicalProfileItem[];

export const PROJECTS = [
  {
    id: "01",
    key: "studio",
    name: "NOCT",
    role: "Workspace local-first de engenharia assistida por IA",
    status: "Reescrita em Rust · em desenvolvimento",
    description:
      "Workspace desktop para entender, revisar e evoluir projetos com o modelo de IA que você escolher. Depois de chegar à v1.0.5 em Electron, foi reescrito em Rust: shell Tauri 2, persistência em SQLite e interface em Leptos compilada para WebAssembly.",
    tags: ["Rust", "Tauri 2", "Leptos", "SQLite"],
    problem:
      "Permitir que a IA trabalhe com o contexto real do projeto em vez de prompts isolados, sem que nada mude nos arquivos sem a aprovação de quem desenvolve.",
    highlights: [
      "Workspace Cargo com seis crates: shell, contratos do produto, SQLite, cofre de credenciais, worker de rollback e interface",
      "SQLite com 32 migrações, backups, snapshots de recuperação e escrita atômica",
      "Chave do provedor em um cofre cifrado, com a chave-mestra no repositório de credenciais do sistema operacional",
      "Transporte só por HTTPS, sem redirecionamentos, com checagem de cada endereço resolvido e limites de tamanho e tempo",
      "Mudanças propostas pela IA esperam em Construir ou Documentar até serem aprovadas uma a uma, com desfazer",
      "CI em Linux, Windows e macOS, com cargo deny, cargo audit e mais de 800 testes em Rust",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/NOCT",
        type: "source",
      },
    ],
    accent: "violet",
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
    accent: "cyan",
  },
  {
    id: "04",
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
    accent: "blue",
  },
  {
    id: "05",
    key: "saturn",
    name: "Saturn",
    role: "Simulação gravitacional em Java",
    status: "Java puro · sem dependências",
    description:
      "Simulação de Saturno, de 15 das suas luas e dos anéis com dados reais de massa, raio, distância e estrutura dos anéis. Feita em Java com Swing e Java2D, sem bibliotecas externas.",
    tags: ["Java", "Swing", "Java2D", "Simulação"],
    image: "/saturn/vista-padrao.webp",
    imageAlt: "Saturno inclinado a 22 graus com a sombra do planeta nos anéis, as luas Mimas e Encélado em órbita e os painéis com o tempo simulado e os dados do planeta.",
    problem:
      "Construir do zero, em Java, a física e o renderizador de uma simulação: manter as órbitas estáveis por muito tempo simulado e desenhar planeta e anéis por pixel em tempo real.",
    highlights: [
      "Gravitação N-corpos com integrador leapfrog: desvio de energia de ~2e-12 em 16 dias simulados",
      "16.384 partículas de anel que mostram onde uma lua perturba a órbita original",
      "Ray tracing por pixel do planeta achatado e dos anéis, com sombras nos dois sentidos e eclipses das luas",
      "Perfil real dos anéis, com a Divisão de Cassini, as falhas de Encke e Keeler, spokes e rotação kepleriana",
      "Física e renderização em paralelo, com testes automáticos de física e de desempenho",
      "Câmera com zoom, inclinação e foco em um corpo; o botão direito cria uma lua nova",
    ],
    accent: "blue",
  },
  {
    id: "06",
    key: "greeter",
    name: "UMBRA",
    role: "Tela de login Wayland para Linux",
    status: "v1.0.0 · em uso diário",
    description:
      "Greeter para sessões Wayland, construído com Quickshell, QML e GLSL e integrado ao greetd e ao PAM. Empacotado para Arch Linux, validado em máquina virtual e em uso diário no meu sistema.",
    tags: ["QML", "Quickshell", "GLSL", "Linux"],
    image: "/umbra/umbra-auth.webp",
    imageAlt: "Tela de autenticação do UMBRA com a saudação, o campo de senha e a sessão Hyprland à esquerda e um planeta com anéis em violeta sobre fundo preto.",
    problem:
      "Substituir o gerenciador de login por uma interface própria sem abrir mão da autenticação real do sistema, da escolha de sessões e de uma recuperação segura.",
    highlights: [
      "Autenticação real pelo greetd e pelo PAM da distribuição, com mensagens de erro e de bloqueio da conta",
      "Seleção de usuários e de sessões Wayland instaladas, com memória da última escolha",
      "Shader orbital a ~30 fps em repouso, transição animada para a sessão e opção de movimento reduzido",
      "Menus por teclado, indicador de Caps Lock e interface em português ou inglês",
      "Recuperação por login em modo texto quando uma atualização do Qt exige recompilar o módulo",
      "Pacote Arch Linux com hooks do pacman, preview na sessão atual e harness Wayland isolado",
    ],
    links: [
      {
        label: "Ver código-fonte",
        href: "https://github.com/gustavomfg/UMBRA",
        type: "source",
      },
    ],
    accent: "violet",
  },
] as const satisfies readonly Project[];

/** Reading order of the projects section; PULS has its own showcase outside PROJECTS. */
export const PROJECT_CHAPTERS: readonly { id: string; name: string; anchor: string }[] = [
  { id: "01", name: "NOCT", anchor: "projeto-studio" },
  { id: "02", name: "PULS", anchor: "sysmon" },
  ...PROJECTS.slice(1).map((project) => ({
    id: project.id,
    name: project.name,
    anchor: `projeto-${project.key}`,
  })),
];

export const STACK = [
  "Rust",
  "Java",
  "Spring Boot",
  "TypeScript",
  "React",
  "Next.js",
  "Tauri",
  "Leptos",
  "PostgreSQL",
  "SQLite",
  "QML · GLSL",
  "Linux",
] as const;
