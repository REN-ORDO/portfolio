import { BentoCard } from './BentoGrid';
import { Sparkles, Mail, Github, Linkedin } from 'lucide-react';

export const ProfileCard = () => {
    return (
        <BentoCard
            span="col-span-1 md:col-span-2"
            rowSpan="row-span-2"
            className="flex flex-col justify-between"
            delay={0.1}
        >
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-neural-violet animate-pulse" />
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Disponible para proyectos</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    Sebastián González
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold gradient-text mb-6">
                    Product AI Engineer
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Especializado en construir productos impulsados por IA que resuelven problemas reales.
                    Experiencia en LLMs, agentes autónomos y arquitecturas de sistemas inteligentes.
                </p>
            </div>

            <div className="flex gap-3">
                <a
                    href="mailto:tu-email@example.com"
                    className="glass glass-hover px-6 py-3 rounded-xl flex items-center gap-2 glow-border"
                >
                    <Mail className="w-4 h-4" />
                    <span>Contacto</span>
                </a>

                <a
                    href="https://github.com/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-hover p-3 rounded-xl"
                >
                    <Github className="w-5 h-5" />
                </a>

                <a
                    href="https://linkedin.com/in/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-hover p-3 rounded-xl"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>
        </BentoCard>
    );
};
