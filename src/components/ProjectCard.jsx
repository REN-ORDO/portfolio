import { BentoCard } from './BentoGrid';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({
    title,
    description,
    tags,
    image,
    githubUrl,
    liveUrl,
    delay = 0
}) => {
    return (
        <BentoCard
            span="col-span-1 md:col-span-2"
            className="flex flex-col"
            delay={delay}
        >
            {/* Project Image */}
            <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-cyber-blue/20 to-neural-violet/20 flex items-center justify-center">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="text-6xl opacity-20">🚀</div>
                )}
            </div>

            {/* Project Info */}
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto">
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass glass-hover px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                    >
                        <Github className="w-4 h-4" />
                        <span>Código</span>
                    </a>
                )}

                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass glass-hover px-4 py-2 rounded-lg flex items-center gap-2 text-sm glow-border"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span>Ver Demo</span>
                    </a>
                )}
            </div>
        </BentoCard>
    );
};
