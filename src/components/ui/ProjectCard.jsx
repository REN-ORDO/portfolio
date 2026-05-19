import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Wrench, Code2 } from 'lucide-react';
import { cn } from '../../lib/cn.js';

const STATUS = {
    Live: { bg: 'var(--color-sage)', label: 'LIVE' },
    Building: { bg: 'var(--color-butter)', label: 'BUILDING' },
    Active: { bg: 'var(--color-sky)', label: 'ACTIVE' },
};

const BG_BY_INDEX = [
    'var(--color-paper)',
    'var(--color-paper-2)',
];

export function ProjectCard({ project, index = 0 }) {
    const { name, description, tech, live, code, kind = 'dev', status } = project;
    const s = status ? STATUS[status] : null;

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5% 0px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="card-3d p-7 flex flex-col h-full"
            style={{ background: BG_BY_INDEX[index % BG_BY_INDEX.length] }}
        >
            <div className="flex items-center gap-2">
                <span className="chip">
                    {kind === 'qa' ? <Wrench size={11} /> : <Code2 size={11} />}
                    {kind === 'qa' ? 'QA' : 'DEV'}
                </span>
                {s && (
                    <span
                        className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-[var(--color-ink)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                        style={{ background: s.bg }}
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-ink)] opacity-60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]" />
                        </span>
                        {s.label}
                    </span>
                )}
            </div>

            <h3
                className="mt-5 font-display text-4xl leading-tight tracking-tight text-[var(--color-ink)]"
                style={{ fontVariationSettings: "'opsz' 144, 'wght' 500" }}
            >
                {name}
            </h3>

            <p className="mt-3 text-[var(--color-ink-2)] leading-relaxed flex-1">
                {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
                {tech.map((t) => (
                    <span
                        key={t}
                        className="inline-flex items-center rounded-md bg-[var(--color-paper)] border border-[var(--color-ink-fade)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-ink-mute)]"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {(live || code) && (
                <div className="mt-6 flex flex-wrap gap-2">
                    {live && (
                        <motion.a
                            whileHover={{ y: -2 }}
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-paper)]"
                        >
                            Live <ArrowUpRight size={14} />
                        </motion.a>
                    )}
                    {code && (
                        <motion.a
                            whileHover={{ y: -2 }}
                            href={code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-paper)] border-[1.5px] border-[var(--color-ink)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-ink)]"
                        >
                            Code <Github size={14} />
                        </motion.a>
                    )}
                </div>
            )}
        </motion.article>
    );
}
