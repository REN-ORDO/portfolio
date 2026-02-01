import { BentoGrid } from './components/BentoGrid';
import { ProfileCard } from './components/ProfileCard';
import { ProjectCard } from './components/ProjectCard';
import { SkillsCard } from './components/SkillsCard';
import { AIShowcaseTile } from './components/AIShowcaseTile';
import './index.css';

function App() {
    // Aquí puedes agregar tus proyectos reales
    const projects = [
        {
            title: "DerbiPlay",
            description: "Plataforma PWA para gestión de partidos de fútbol con gamificación y sistema de niveles.",
            tags: ["Next.js", "Firebase", "PWA", "Gamification"],
            githubUrl: "https://github.com/tuusuario/derbiplay",
            liveUrl: "https://derbiplay.vercel.app",
        },
        {
            title: "Genkit Slack Bot",
            description: "Bot inteligente para Slack con integración de Genkit y capacidades de IA conversacional.",
            tags: ["Genkit", "Slack API", "Cloud Functions", "AI"],
            githubUrl: "https://github.com/tuusuario/genkit-slack-bot",
        },
    ];

    return (
        <div className="min-h-screen py-12">
            <BentoGrid>
                {/* Profile Card - Takes 2 columns and 2 rows */}
                <ProfileCard />

                {/* AI Showcase Tile */}
                <AIShowcaseTile delay={0.2} />

                {/* Skills Card */}
                <SkillsCard delay={0.3} />

                {/* Project Cards */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        delay={0.4 + (index * 0.1)}
                    />
                ))}
            </BentoGrid>

            {/* Footer */}
            <footer className="text-center mt-16 text-gray-500 text-sm">
                <p>© 2026 Sebastián González · Product AI Engineer</p>
            </footer>
        </div>
    );
}

export default App;
