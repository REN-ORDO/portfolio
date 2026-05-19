export const devProjects = [
    {
        index: '01',
        name: 'DerbiPlay',
        kind: 'dev',
        description: 'Plataforma para ligas amateur de fútbol — XP gamificado, brackets en vivo y scoring en tiempo real.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
        live: 'https://derbiplay.com',
        code: 'https://github.com/REN-ORDO/derbiplay',
        status: 'Live',
        cover: { from: '#C7F284', to: '#5EEAD4' },
    },
    {
        index: '02',
        name: 'OmniDashboard',
        kind: 'dev',
        description: 'Dashboard unificado en construcción — integra fuentes de datos múltiples con vistas configurables y AI-assisted insights.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
        live: null,
        code: null,
        status: 'Building',
        cover: { from: '#7C5CFF', to: '#5EEAD4' },
    },
];

export const qaProjects = [
    {
        index: '03',
        name: 'Avanzo',
        kind: 'qa',
        description: 'QA Engineer en plataforma de aprendizaje y desarrollo profesional. Test automation, regression suites, release gating.',
        tech: ['Manual QA', 'Test Automation', 'Bug Triage', 'Release QA'],
        live: null,
        code: null,
        status: 'Active',
        cover: { from: '#5EEAD4', to: '#C7F284' },
    },
    {
        index: '04',
        name: 'CAVA',
        kind: 'qa',
        description: 'QA Engineer en producto interno de Avanzo. Validación de flujos críticos, performance testing, documentación de defectos.',
        tech: ['Manual QA', 'Test Cases', 'Smoke Testing', 'UAT'],
        live: null,
        code: null,
        status: 'Active',
        cover: { from: '#7C5CFF', to: '#C7F284' },
    },
];

export const projects = [...devProjects, ...qaProjects];
