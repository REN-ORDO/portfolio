import { BentoCard } from './BentoGrid';
import { Cpu } from 'lucide-react';

export const AIShowcaseTile = ({ delay = 0 }) => {
    return (
        <BentoCard
            span="col-span-1"
            className="flex flex-col items-center justify-center text-center"
            delay={delay}
        >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neural-violet to-cyber-blue flex items-center justify-center mb-4 animate-float">
                <Cpu className="w-8 h-8" />
            </div>

            <div className="text-4xl font-bold gradient-text mb-2">5+</div>
            <p className="text-gray-400 text-sm">Proyectos con IA</p>
        </BentoCard>
    );
};
