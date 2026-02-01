import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

function App() {
    const skills = [
        'React & Next.js',
        'Python & Node.js',
        'LLMs & AI Agents',
        'Firebase & Cloud Functions',
        'TypeScript',
        'Tailwind CSS',
    ];

    const experience = [
        {
            role: 'Product AI Engineer',
            company: 'Tu Empresa Actual',
            period: 'Ene 2024 ~ Actualidad',
            description: 'Desarrollo de productos impulsados por IA, implementación de agentes autónomos y sistemas inteligentes con LLMs.',
        },
        {
            role: 'Frontend Developer',
            company: 'Empresa Anterior',
            period: 'Jun 2023 ~ Dic 2023',
            description: 'Desarrollo de aplicaciones web con React, Next.js y Firebase. Implementación de PWAs y sistemas de gamificación.',
        },
    ];

    const projects = [
        {
            name: 'DerbiPlay',
            description: 'Plataforma PWA para gestión de partidos de fútbol con gamificación y sistema de niveles.',
            tech: ['Next.js', 'Firebase', 'PWA'],
            github: 'https://github.com/tuusuario/derbiplay',
            live: 'https://derbiplay.vercel.app',
        },
        {
            name: 'Genkit Slack Bot',
            description: 'Bot inteligente para Slack con integración de Genkit y capacidades de IA conversacional.',
            tech: ['Genkit', 'Slack API', 'Cloud Functions'],
            github: 'https://github.com/tuusuario/genkit-slack-bot',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-6 py-20 max-w-4xl"
            >
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                    Hola, soy Sebastián González
                </h1>
                <p className="text-2xl text-gray-700 mb-8">
                    Product AI Engineer
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                    <Download className="w-5 h-5" />
                    Descargar CV
                </button>
            </motion.section>

            {/* Skills Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Habilidades</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 px-4 py-3 rounded-lg text-gray-800 font-medium text-center"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Sebastián González</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Especializado en desarrollo de productos impulsados por IA con habilidades en React, Next.js, Python y Node.js.
                        Experiencia en implementación de LLMs, agentes autónomos y arquitecturas de sistemas inteligentes.
                        Recientemente finalicé proyectos como DerbiPlay (PWA de gestión deportiva) y un bot de Slack con Genkit.
                        Actualmente enfocado en crear soluciones innovadoras que combinan desarrollo web moderno con capacidades de IA.
                    </p>
                </div>
            </section>

            {/* Experience Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Experiencia</h2>
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="border-l-4 border-blue-600 pl-6"
                            >
                                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                <p className="text-gray-600 mb-2">{exp.period}</p>
                                <h4 className="font-semibold text-gray-800 mb-2">{exp.company}</h4>
                                <p className="text-gray-700">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Proyectos</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 flex items-center gap-1 text-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                            Código
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Ver Demo
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Contacto</h2>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://github.com/REN-ORDO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/tuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </a>
                        <a
                            href="mailto:tu-email@example.com"
                            className="flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            Email
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-600">
                <p>© 2026 Sebastián González · Product AI Engineer</p>
            </footer>
        </div>
    );
}

export default App;
