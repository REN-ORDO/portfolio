import { Github, Linkedin, Twitter, Dribbble, Mail, Moon, ExternalLink, Code2, Briefcase } from 'lucide-react';
import './index.css';

function App() {
    const projects = [
        {
            name: 'SkinaMC',
            description: 'A platform to search for Minecraft skins, edit, convert and download them.',
            image: '/project1.jpg',
            tech: [
                { name: 'N', icon: 'N', color: 'bg-gray-800' },
                { name: 'React', icon: '⚛', color: 'bg-cyan-500' },
                { name: 'TS', icon: 'TS', color: 'bg-blue-600' },
                { name: 'Tailwind', icon: '🌊', color: 'bg-cyan-400' },
                { name: 'Supabase', icon: '⚡', color: 'bg-green-500' },
            ],
            live: 'https://skinamc.com',
            code: null,
        },
        {
            name: 'Music App',
            description: 'Play, create playlists, like songs and discover music trends.',
            image: '/project2.jpg',
            tech: [
                { name: 'N', icon: 'N', color: 'bg-gray-800' },
                { name: 'React', icon: '⚛', color: 'bg-cyan-500' },
                { name: 'TS', icon: 'TS', color: 'bg-blue-600' },
                { name: 'Tailwind', icon: '🌊', color: 'bg-cyan-400' },
                { name: 'YouTube', icon: '▶', color: 'bg-red-600' },
            ],
            live: 'https://example.com',
            code: 'https://github.com',
        },
        {
            name: 'CraftyMania',
            description: 'Minecraft server management platform for administrators and players.',
            image: '/project3.jpg',
            tech: [
                { name: 'React', icon: '⚛', color: 'bg-cyan-500' },
                { name: 'Node', icon: '🟢', color: 'bg-green-600' },
            ],
            live: 'https://example.com',
            code: null,
        },
        {
            name: 'MC-auto-clicker',
            description: 'Auto clicker developed for Minecraft.',
            tech: [
                { name: 'Python', icon: '🐍', color: 'bg-blue-500' },
                { name: 'PyQt5', icon: '📦', color: 'bg-green-500' },
            ],
            code: 'https://github.com',
        },
        {
            name: 'Kitchen Display System (KDS)',
            description: 'Kitchen management system for restaurants.',
            tech: [
                { name: 'React', icon: '⚛', color: 'bg-cyan-500' },
                { name: 'Node', icon: '🟢', color: 'bg-green-600' },
            ],
            code: 'https://github.com',
        },
        {
            name: 'Ticket.me',
            description: 'Ticket management system.',
            tech: [
                { name: 'React', icon: '⚛', color: 'bg-cyan-500' },
                { name: 'Firebase', icon: '🔥', color: 'bg-yellow-500' },
            ],
            code: 'https://github.com',
        },
        {
            name: 'Movie Searcher',
            description: 'Search and discover movies.',
            tech: [
                { name: 'React', icon: '⚛', color: 'bg-cyan-500' },
                { name: 'API', icon: '🔌', color: 'bg-purple-500' },
            ],
            code: 'https://github.com',
        },
        {
            name: 'Password generator',
            description: 'Generate secure passwords.',
            tech: [
                { name: 'HTML', icon: 'H', color: 'bg-orange-600' },
                { name: 'CSS', icon: 'C', color: 'bg-blue-500' },
                { name: 'JS', icon: 'JS', color: 'bg-yellow-500' },
            ],
            code: 'https://github.com',
        },
        {
            name: 'Pokedex',
            description: 'Pokemon information platform.',
            tech: [
                { name: 'React', icon: '⚛', color: 'bg-cyan-500' },
                { name: 'API', icon: '🔌', color: 'bg-red-500' },
            ],
            code: 'https://github.com',
        },
    ];

    return (
        <div className="min-h-screen bg-[#1a202c] text-white">
            <div className="max-w-2xl mx-auto px-6 py-12">
                {/* Theme Toggle */}
                <div className="flex justify-end mb-8">
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <Moon className="w-5 h-5" />
                    </button>
                </div>

                {/* Profile Section */}
                <div className="mb-12">
                    <div className="flex items-start gap-6 mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-2xl font-bold profile-shadow flex-shrink-0">
                            SG
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold mb-1">Sebastián González</h1>
                            <p className="text-gray-400 mb-4">
                                Product AI Engineer · <span className="text-green-400">@REN-ORDO</span>
                            </p>
                            <a
                                href="mailto:tu-email@example.com"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
                            >
                                Contact me →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        Experience
                    </h2>
                    <div className="space-y-4">
                        <div className="border-l-2 border-green-500 pl-4">
                            <h3 className="font-semibold text-lg">
                                🚀 Product AI Engineer · <span className="text-green-400">Tu Empresa</span> (Remoto)
                            </h3>
                            <ul className="mt-2 space-y-2 text-gray-400 text-sm">
                                <li>• Desarrollo de productos impulsados por IA y agentes autónomos</li>
                                <li>• Implementación de LLMs y sistemas inteligentes</li>
                                <li>• Arquitectura de aplicaciones con React, Next.js y Firebase</li>
                                <li>• Liderazgo técnico en proyectos de innovación con IA</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Code2 className="w-5 h-5" />
                        Projects
                    </h2>

                    {/* Featured Projects - Horizontal Layout */}
                    <div className="space-y-4 mb-6">
                        {projects.slice(0, 3).map((project, index) => (
                            <div key={index} className="project-card flex overflow-hidden">
                                {/* Project Image - Left Side */}
                                <div className="w-2/5 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0">
                                    <div className="text-6xl opacity-30">🚀</div>
                                </div>

                                {/* Project Content - Right Side */}
                                <div className="flex-1 p-6 flex flex-col">
                                    <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

                                    {/* Tech Icons */}
                                    <div className="flex gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <div key={i} className={`w-8 h-8 rounded ${tech.color} flex items-center justify-center text-white text-xs font-bold`}>
                                                {tech.icon}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                                            >
                                                Live <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.code && (
                                            <a
                                                href={project.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
                                            >
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Small Projects Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {projects.slice(3).map((project, index) => (
                            <div key={index} className="project-card p-5">
                                <h3 className="font-bold mb-2 text-base">{project.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                                {/* Tech Icons */}
                                <div className="flex gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <div key={i} className={`w-7 h-7 rounded ${tech.color} flex items-center justify-center text-white text-xs font-bold`}>
                                            {tech.icon}
                                        </div>
                                    ))}
                                </div>

                                {project.code && (
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
                                    >
                                        Code
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Socials Section */}
                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Socials +</h2>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/REN-ORDO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                            <span>Twitter</span>
                        </a>
                        <a
                            href="https://dribbble.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                        >
                            <Dribbble className="w-5 h-5" />
                            <span>Dribbble</span>
                        </a>
                    </div>
                </section>

                {/* Email Section */}
                <section>
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Email
                    </h2>
                    <div className="flex items-center gap-3">
                        <p className="text-gray-400">sebastian.gonzalez@example.com</p>
                        <button className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                                <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                            </svg>
                        </button>
                        <button className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
                            <Mail className="w-4 h-4" />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
