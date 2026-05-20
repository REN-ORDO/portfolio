import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle.jsx';
import { EMAIL, socials } from '../data/socials.js';
import { SECTION_IDS } from '../lib/constants.js';

export function Footer() {
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch { /* clipboard blocked */ }
    }

    const year = new Date().getFullYear();

    return (
        <footer id={SECTION_IDS.contact} className="relative py-[var(--section-y)]">
            <SectionTitle number="04" label="Get in touch">
                Let's <span className="italic">talk</span>.
            </SectionTitle>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.7 }}
                className="card-3d overflow-hidden bg-[var(--color-paper)] p-5 sm:p-8 md:p-12"
            >
                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={copyEmail}
                    className="group flex w-full flex-col items-start gap-4 text-left sm:flex-row sm:items-center sm:justify-between"
                >
                    <span
                        className="block w-full min-w-0 max-w-full overflow-hidden whitespace-nowrap font-display text-[clamp(0.85rem,4.4vw,1.1rem)] sm:text-3xl md:text-5xl tracking-tight italic text-[var(--color-ink)] underline decoration-[var(--color-tangerine)] decoration-2 underline-offset-[4px] sm:underline-offset-[6px]"
                        style={{ fontVariationSettings: "'opsz' 144, 'wght' 500" }}
                    >
                        {EMAIL}
                    </span>
                    <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center self-end sm:self-auto rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-tangerine)] text-[var(--color-paper)] shadow-[0_4px_0_-1px_var(--color-ink)] group-hover:rotate-12 transition-transform">
                        <AnimatePresence mode="wait">
                            {copied ? (
                                <motion.span key="c" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                    <Check size={18} />
                                </motion.span>
                            ) : (
                                <motion.span key="cp" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                    <Copy size={16} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </span>
                </motion.button>

                <AnimatePresence>
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="mt-3 font-mono text-xs uppercase tracking-widest text-[var(--color-tangerine)]"
                        >
                            Copied ✓
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    {socials.map((s) => (
                        <motion.a
                            key={s.name}
                            whileHover={{ y: -2 }}
                            href={s.href}
                            target={s.href.startsWith('http') ? '_blank' : undefined}
                            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-paper)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] shadow-[0_3px_0_-1px_var(--color-ink)]"
                        >
                            <s.Icon size={14} /> {s.name} <ArrowUpRight size={12} />
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-ink-fade)]/40 pt-6 sm:flex-row sm:items-center sm:justify-between font-mono text-xs text-[var(--color-ink-mute)]">
                <span>© {year} Sebastian Ordoñez</span>
                <span className="italic font-display text-base text-[var(--color-ink)]">
                    No frameworks were harmed in the making of this site.
                </span>
            </div>
        </footer>
    );
}
