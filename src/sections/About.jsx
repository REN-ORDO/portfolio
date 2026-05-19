import { motion } from 'framer-motion';
import { Rocket, Shield, Sparkles, Zap, Github, Coffee } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle.jsx';
import { SECTION_IDS } from '../lib/constants.js';

const TRAITS = [
    { Icon: Rocket, label: 'Ship rápido', bg: 'var(--color-butter)' },
    { Icon: Shield, label: 'QA mindset', bg: 'var(--color-sage)' },
    { Icon: Sparkles, label: 'AI-native', bg: 'var(--color-lavender)' },
    { Icon: Zap, label: 'Curioso', bg: 'var(--color-sky)' },
    { Icon: Github, label: 'Open builder', bg: 'var(--color-rose)' },
    { Icon: Coffee, label: '1am tinkerer', bg: 'var(--color-coral)' },
];

export function About() {
    return (
        <section id={SECTION_IDS.about} className="relative py-[var(--section-y)]">
            <SectionTitle number="01" label="About">
                A bit <span className="italic">about me</span>.
            </SectionTitle>

            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col gap-5 text-lg leading-relaxed text-[var(--color-ink-2)]"
                >
                    <p>
                        Soy <span className="mk mk-butter">Full Stack Dev</span> y{' '}
                        <span className="mk mk-sage">QA Engineer</span> en{' '}
                        <span className="font-display italic font-medium text-[var(--color-ink)]">COOWEB</span>. Construyo productos completos — del primer wireframe al último test de regresión.
                    </p>
                    <p>
                        Como dev llevo <span className="font-display italic font-medium text-[var(--color-ink)]">DerbiPlay</span> (live) y{' '}
                        <span className="font-display italic font-medium text-[var(--color-ink)]">OmniDashboard</span> (en construcción). Como QA cubro{' '}
                        <span className="font-display italic font-medium text-[var(--color-ink)]">Avanzo</span> y{' '}
                        <span className="font-display italic font-medium text-[var(--color-ink)]">CAVA</span>.
                    </p>
                    <p>
                        Esa doble visión me dio una manía: <span className="mk mk-coral">rompo mi propio código</span> antes que el usuario lo encuentre. Trabajo <span className="mk mk-lavender">full con IA</span> para hacer 3x del oficio que ya tengo — no para reemplazarlo.
                    </p>
                </motion.div>

                {/* Traits */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-10% 0px' }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
                    className="grid grid-cols-2 gap-3"
                >
                    {TRAITS.map((t) => (
                        <motion.div
                            key={t.label}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.9 },
                                show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 240, damping: 22 } },
                            }}
                            whileHover={{ y: -3, rotate: -1.5 }}
                            className="card-3d flex flex-col items-start gap-2 p-4"
                            style={{ background: t.bg }}
                        >
                            <t.Icon size={20} className="text-[var(--color-ink)]" />
                            <span className="text-sm font-medium text-[var(--color-ink)]">{t.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
