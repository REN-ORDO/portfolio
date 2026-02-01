import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const BentoGrid = ({ children, className }) => {
    return (
        <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4",
            className
        )}>
            {children}
        </div>
    );
};

export const BentoCard = ({
    children,
    className,
    span = "col-span-1",
    rowSpan = "row-span-1",
    delay = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "glass glass-hover rounded-2xl p-6 relative overflow-hidden group",
                span,
                rowSpan,
                className
            )}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-neural-violet/10 to-transparent" />
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
