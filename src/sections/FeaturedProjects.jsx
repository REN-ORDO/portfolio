import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ui/ProjectCard.jsx';
import { SectionTitle } from '../components/ui/SectionTitle.jsx';
import { devProjects, qaProjects } from '../data/projects.js';
import { SECTION_IDS } from '../lib/constants.js';

function Subhead({ children, color }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
        >
            <span className="h-3 w-3 rounded-full border-2 border-[var(--color-ink)]" style={{ background: color }} />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-ink-mute)]">
                {children}
            </span>
        </motion.div>
    );
}

export function FeaturedProjects() {
    return (
        <section id={SECTION_IDS.projects} className="relative py-[var(--section-y)]">
            <SectionTitle number="02" label="Selected Work">
                Things I <span className="italic">build</span> & <span className="italic">break</span>.
            </SectionTitle>

            <Subhead color="var(--color-butter)">Development</Subhead>
            <div className="grid gap-6 md:grid-cols-2">
                {devProjects.map((p, i) => (
                    <ProjectCard key={p.index} project={p} index={i} />
                ))}
            </div>

            <div className="mt-16">
                <Subhead color="var(--color-coral)">QA Engineering</Subhead>
                <div className="grid gap-6 md:grid-cols-2">
                    {qaProjects.map((p, i) => (
                        <ProjectCard key={p.index} project={p} index={i + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}
