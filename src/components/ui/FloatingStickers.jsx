import { motion } from 'framer-motion';

const SHAPES = [
    // Bean blob
    {
        top: '7%', left: '4%', r: -12, delay: 0,
        svg: <path d="M 30 5 C 55 5 70 25 65 50 C 60 75 30 85 12 70 C -6 55 5 25 30 5 Z" fill="var(--color-sage)" />,
        size: 80,
    },
    // Plus sign
    {
        top: '12%', left: '92%', r: 14, delay: 0.3,
        svg: <path d="M 28 4 L 36 4 L 36 28 L 60 28 L 60 36 L 36 36 L 36 60 L 28 60 L 28 36 L 4 36 L 4 28 L 28 28 Z" fill="var(--color-coral)" />,
        size: 56,
    },
    // Squiggle
    {
        top: '28%', left: '3%', r: -4, delay: 0.7,
        svg: <path d="M 4 30 Q 18 8, 32 30 T 60 30 T 88 30" stroke="var(--color-lavender)" strokeWidth="8" strokeLinecap="round" fill="none" />,
        size: 92,
    },
    // Circle outline
    {
        top: '42%', left: '94%', r: 0, delay: 1.1,
        svg: <circle cx="32" cy="32" r="26" stroke="var(--color-tangerine)" strokeWidth="5" fill="none" />,
        size: 64,
    },
    // Star
    {
        top: '60%', left: '2%', r: 18, delay: 0.5,
        svg: <path d="M 32 4 L 38 24 L 60 26 L 42 40 L 48 60 L 32 48 L 16 60 L 22 40 L 4 26 L 26 24 Z" fill="var(--color-butter)" stroke="var(--color-ink)" strokeWidth="2" strokeLinejoin="round" />,
        size: 56,
    },
    // Dots cluster
    {
        top: '72%', left: '95%', r: -8, delay: 0.9,
        svg: (
            <g fill="var(--color-sky)">
                <circle cx="10" cy="10" r="6" />
                <circle cx="30" cy="20" r="6" />
                <circle cx="50" cy="12" r="6" />
                <circle cx="20" cy="38" r="6" />
                <circle cx="44" cy="42" r="6" />
                <circle cx="60" cy="34" r="6" />
            </g>
        ),
        size: 72,
    },
    // Zigzag
    {
        top: '85%', left: '6%', r: 0, delay: 1.4,
        svg: <path d="M 4 30 L 18 12 L 32 30 L 46 12 L 60 30 L 74 12 L 88 30" stroke="var(--color-rose)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
        size: 92,
    },
    // Filled circle
    {
        top: '22%', left: '88%', r: 0, delay: 1.6,
        svg: <circle cx="20" cy="20" r="18" fill="var(--color-butter)" />,
        size: 40,
    },
];

export function FloatingShapes() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
            {SHAPES.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 0.8,
                        scale: 1,
                        y: [0, -14, 0],
                        rotate: [s.r, s.r + 4, s.r],
                    }}
                    transition={{
                        opacity: { duration: 0.6, delay: s.delay },
                        scale: { duration: 0.7, delay: s.delay, ease: [0.34, 1.56, 0.64, 1] },
                        y: { duration: 5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: s.delay },
                        rotate: { duration: 6 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: s.delay },
                    }}
                    style={{ top: s.top, left: s.left, '--r': `${s.r}deg` }}
                    className="absolute"
                >
                    <svg width={s.size} height={s.size} viewBox={`0 0 ${s.size > 64 ? 92 : 64} ${s.size > 64 ? 92 : 64}`}>
                        {s.svg}
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
