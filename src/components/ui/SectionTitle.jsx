import { motion } from 'framer-motion';

export function SectionTitle({ number, label, children, align = 'left' }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-ink-mute)] ${align === 'center' ? 'justify-center' : ''}`}
            >
                <span className="text-[var(--color-tangerine)] font-semibold">{number}</span>
                <span className="h-px w-10 bg-[var(--color-ink-fade)]" />
                <span>{label}</span>
            </motion.div>
            <motion.h2
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="mt-3 font-display text-5xl md:text-6xl tracking-tight leading-[0.95] text-[var(--color-ink)]"
                style={{ fontVariationSettings: "'opsz' 144, 'wght' 500" }}
            >
                {children}
            </motion.h2>
        </motion.div>
    );
}
