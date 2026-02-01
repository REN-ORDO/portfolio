import { BentoCard } from './BentoGrid';
import { Brain, Zap, Code2 } from 'lucide-react';

export const SkillsCard = ({ delay = 0 }) => {
    const skills = [
        { icon: Brain, name: 'LLMs & Agents', color: 'text-neural-violet' },
        { icon: Zap, name: 'React & Next.js', color: 'text-cyber-blue' },
        { icon: Code2, name: 'Python & Node.js', color: 'text-accent-cyan' },
    ];

    return (
        <BentoCard
            span="col-span-1 md:col-span-2"
            delay={delay}
        >
            <h3 className="text-xl font-bold mb-6">Stack Principal</h3>

            <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                        >
                            <div className={`p-2 rounded-lg bg-gradient-to-br from-${skill.color}/20 to-transparent`}>
                                <Icon className={`w-6 h-6 ${skill.color}`} />
                            </div>
                            <span className="font-medium">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </BentoCard>
    );
};
