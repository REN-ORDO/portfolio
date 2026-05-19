import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS, SECTION_IDS } from '../../lib/constants.js';
import { cn } from '../../lib/cn.js';

export function Nav() {
    const [active, setActive] = useState(SECTION_IDS.hero);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const ids = [SECTION_IDS.hero, ...NAV_LINKS.map((l) => l.id)];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );
        ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
        function onScroll() { setScrolled(window.scrollY > 30); }
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
    }, []);

    return (
        <motion.header
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
        >
            <div
                className={cn(
                    'flex items-center gap-1 rounded-full border-2 border-[var(--color-ink)] px-2 py-1.5 transition-all duration-300',
                    scrolled
                        ? 'bg-[var(--color-paper)]/95 backdrop-blur-md shadow-[0_4px_0_-1px_var(--color-ink)]'
                        : 'bg-[var(--color-paper)] shadow-[0_4px_0_-1px_var(--color-ink)]'
                )}
            >
                <a
                    href={`#${SECTION_IDS.hero}`}
                    className="font-display-text mr-1 hidden sm:flex h-9 items-center px-3 text-base italic font-medium text-[var(--color-ink)]"
                    style={{ fontVariationSettings: "'opsz' 36" }}
                >
                    so.
                </a>
                <nav className="flex items-center gap-0.5">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="relative rounded-full px-3.5 py-2 text-sm font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
                        >
                            {active === link.id && (
                                <motion.span
                                    layoutId="nav-active"
                                    className="absolute inset-0 rounded-full bg-[var(--color-tangerine)]"
                                    transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                                />
                            )}
                            <span className={cn('relative z-10', active === link.id && 'text-[var(--color-paper)]')}>
                                {link.label}
                            </span>
                        </a>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
}
