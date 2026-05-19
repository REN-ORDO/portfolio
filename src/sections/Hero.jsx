import { motion } from 'framer-motion';
import { ArrowDownRight, Mail } from 'lucide-react';
import { SECTION_IDS } from '../lib/constants.js';

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: 'spring', stiffness: 240, damping: 26 };

export function Hero() {
    return (
        <section
            id={SECTION_IDS.hero}
            className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-16"
        >
            {/* Eyebrow */}
            <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-mute)]"
            >
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-tangerine)] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-tangerine)]" />
                </span>
                Hello there — currently open to work
            </motion.div>

            {/* Headline */}
            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
                <div>
                    <h1 className="font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.92] tracking-[-0.025em] text-[var(--color-ink)]">
                        <motion.span
                            initial={{ opacity: 0, y: 40, rotate: -2 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                            className="block"
                            style={{ fontVariationSettings: "'opsz' 144, 'wght' 500" }}
                        >
                            Sebastian
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 40, rotate: 2 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                            className="block italic"
                            style={{ fontVariationSettings: "'opsz' 144, 'wght' 500" }}
                        >
                            Ordoñez<motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1, rotate: [0, 12, -12, 0] }}
                                transition={{
                                    opacity: { delay: 1.2 },
                                    scale: { delay: 1.2, type: 'spring', stiffness: 300 },
                                    rotate: { delay: 1.4, duration: 1.4, repeat: Infinity, repeatDelay: 3 },
                                }}
                                className="inline-block ml-2 text-[var(--color-tangerine)] not-italic"
                            >.</motion.span>
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
                        className="mt-7 max-w-xl text-xl text-[var(--color-ink-2)] leading-relaxed"
                    >
                        <span className="mk mk-butter">Full Stack Dev</span> +{' '}
                        <span className="mk mk-sage">QA Engineer</span> en{' '}
                        <span className="font-display italic font-medium">COOWEB</span>. Construyo{' '}
                        <span className="mk mk-lavender">productos con IA</span> end-to-end — del wireframe al test de regresión.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1, ease: EASE }}
                        className="mt-4 max-w-xl text-base text-[var(--color-ink-mute)]"
                    >
                        Ship rápido, rompo mi propio código primero, sigo la curiosidad sin freno.
                    </motion.p>

                    {/* Stack micro-list */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.15 }}
                        className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-2"
                    >
                        {['Next.js', 'TypeScript', 'Supabase', 'AI / LLMs', 'QA'].map((t, i) => (
                            <motion.span
                                key={t}
                                whileHover={{ y: -2, rotate: -1 }}
                                transition={SPRING}
                                className="chip"
                            >
                                {t}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
                        className="mt-9 flex flex-wrap items-center gap-3"
                    >
                        <motion.a whileTap={{ scale: 0.97 }} href={`#${SECTION_IDS.projects}`} className="btn-primary">
                            Ver mi trabajo <ArrowDownRight size={16} />
                        </motion.a>
                        <motion.a whileTap={{ scale: 0.97 }} href={`#${SECTION_IDS.contact}`} className="btn-ghost">
                            <Mail size={16} /> Contáctame
                        </motion.a>
                    </motion.div>
                </div>

                {/* Avatar — blob */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.9, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    className="relative mx-auto lg:mx-0 lg:ml-auto"
                >
                    {/* Decoration behind */}
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                        className="absolute -inset-6 -z-10"
                    >
                        <svg viewBox="0 0 240 240" className="h-full w-full">
                            <circle cx="120" cy="120" r="108" stroke="var(--color-ink)" strokeWidth="2" strokeDasharray="6 9" fill="none" />
                        </svg>
                    </motion.div>

                    <div
                        className="blob-frame relative h-56 w-56 md:h-64 md:w-64 bg-[var(--color-coral)]"
                    >
                        <img
                            src="/profile.png"
                            alt="Sebastian Ordoñez"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Badge */}
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -right-3 -bottom-3 rounded-2xl border-2 border-[var(--color-ink)] bg-[var(--color-paper)] px-3 py-2 text-xs shadow-[0_4px_0_-1px_var(--color-ink)]"
                    >
                        <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-ink-mute)]">
                            Made in
                        </div>
                        <div className="font-display italic text-base font-medium">
                            Colombia
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
