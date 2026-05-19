import { cn } from '../../lib/cn.js';

export function TechBadge({ name, className }) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-text-mute)]',
                className
            )}
        >
            {name}
        </span>
    );
}
