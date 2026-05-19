export const EASE = {
    out: [0.22, 1, 0.36, 1],
    inOut: [0.65, 0, 0.35, 1],
    back: [0.34, 1.56, 0.64, 1],
};

export const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: EASE.out } },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: EASE.out } },
};

export const stagger = (delay = 0.06, childDelay = 0) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren: delay,
            delayChildren: childDelay,
        },
    },
});

export const viewportOnce = { once: true, margin: "-15% 0px" };
