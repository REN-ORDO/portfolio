import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiThreedotjs,
    SiNodedotjs, SiPython, SiPostgresql, SiSupabase, SiFirebase, SiVercel,
    SiOpenai, SiLangchain,
} from 'react-icons/si';
import { Brain, Sparkles, Database, Server } from 'lucide-react';

export const skills = [
    {
        category: 'Frontend',
        accent: 'lime',
        items: [
            { name: 'React', Icon: SiReact },
            { name: 'Next.js', Icon: SiNextdotjs },
            { name: 'TypeScript', Icon: SiTypescript },
            { name: 'Tailwind CSS', Icon: SiTailwindcss },
            { name: 'Framer Motion', Icon: SiFramer },
            { name: 'Three.js', Icon: SiThreedotjs },
        ],
    },
    {
        category: 'Backend & Data',
        accent: 'cyan',
        items: [
            { name: 'Node.js', Icon: SiNodedotjs },
            { name: 'Python', Icon: SiPython },
            { name: 'PostgreSQL', Icon: SiPostgresql },
            { name: 'Supabase', Icon: SiSupabase },
            { name: 'Firebase', Icon: SiFirebase },
            { name: 'Vercel', Icon: SiVercel },
        ],
    },
    {
        category: 'AI / ML',
        accent: 'violet',
        items: [
            { name: 'Anthropic Claude', Icon: Brain },
            { name: 'OpenAI', Icon: SiOpenai },
            { name: 'Vercel AI SDK', Icon: Sparkles },
            { name: 'LangChain', Icon: SiLangchain },
            { name: 'pgvector', Icon: Database },
            { name: 'RAG Systems', Icon: Server },
        ],
    },
];
