import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle.jsx';
import { skills } from '../data/skills.js';
import { SECTION_IDS } from '../lib/constants.js';

const CAT = {
    Frontend: { bg: 'var(--color-sky)', tag: '/01' },
    'Backend & Data': { bg: 'var(--color-sage)', tag: '/02' },
    'AI / ML': { bg: 'var(--color-lavender)', tag: '/03' },
};

export function Skills() {
    return (
        <section id={SECTION_IDS.skills} className="relative py-[var(--section-y)]">
            <SectionTitle number="03" label="Stack">
                Tools of the <span className="italic">trade</span>.
            </SectionTitle>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-10% 0px' }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                className="grid gap-6 md:grid-cols-3"
            >
                {skills.map((group) => (
                    <motion.div
                        key={group.category}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 24 } },
                        }}
                        whileHover={{ y: -6 }}
                        className="card-3d p-6"
                        style={{ background: CAT[group.category].bg }}
                    >
                        <div className="mb-5 flex items-baseline justify-between">
                            <h3
                                className="font-display text-2xl font-medium tracking-tight text-[var(--color-ink)]"
                                style={{ fontVariationSettings: "'opsz' 36, 'wght' 600" }}
                            >
                                {group.category}
                            </h3>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-ink-mute)]">
                                {CAT[group.category].tag}
                            </span>
                        </div>
                        <ul className="flex flex-col gap-2.5">
                            {group.items.map((item) => (
                                <motion.li
                                    key={item.name}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="flex items-center gap-2.5 text-[var(--color-ink)]"
                                >
                                    <item.Icon size={16} className="text-[var(--color-ink-2)]" />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
