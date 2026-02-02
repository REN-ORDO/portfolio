import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const skills = [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Python', icon: '🐍' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'AI/LLMs', icon: '🤖' },
        { name: 'Git', icon: '📦' },
    ];

    const projects = [
        {
            name: 'DerbiPlay',
            description: 'Plataforma PWA para gestión de partidos de fútbol con gamificación y sistema de niveles.',
            tech: ['Next.js', 'Firebase', 'PWA'],
            image: '/project1.jpg',
            github: 'https://github.com/tuusuario/derbiplay',
            live: 'https://derbiplay.vercel.app',
            date: '15/Enero/2024',
        },
        {
            name: 'Genkit Slack Bot',
            description: 'Bot inteligente para Slack con integración de Genkit y capacidades de IA conversacional.',
            tech: ['Genkit', 'Slack API', 'Cloud Functions'],
            image: '/project2.jpg',
            github: 'https://github.com/tuusuario/genkit-slack-bot',
            date: '10/Diciembre/2023',
        },
        {
            name: 'AI Dashboard',
            description: 'Dashboard interactivo para visualización de métricas de modelos de IA y análisis de datos.',
            tech: ['React', 'Python', 'TensorFlow'],
            image: '/project3.jpg',
            github: 'https://github.com/tuusuario/ai-dashboard',
            date: '20/Noviembre/2023',
        },
    ];

    const experience = [
        {
            role: 'Product AI Engineer',
            company: 'Tu Empresa Actual',
            period: '18 Ene 2024 ~ Actualidad',
            description: 'Desarrollo de productos impulsados por IA, implementación de agentes autónomos y sistemas inteligentes con LLMs. Supervisión del desarrollo completo de sistemas educativos y aplicaciones empresariales.',
        },
        {
            role: 'Frontend Developer',
            company: 'Freelancer',
            period: '20 Ago 2023 ~ 30 Nov 2023',
            description: 'Desarrollo de aplicaciones web con React, Next.js y Firebase. Implementación de PWAs, sistemas de gamificación y arquitecturas serverless.',
        },
    ];

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-gray-50'}`}>
            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-dark-bg/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-green to-accent-blue flex items-center justify-center text-white font-bold">
                                SG
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <button onClick={() => scrollToSection('about')} className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                                Sobre Mí
                            </button>
                            <button onClick={() => scrollToSection('projects')} className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                                Proyectos
                            </button>
                            <button onClick={() => scrollToSection('experience')} className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                                Experiencia
                            </button>
                            <button onClick={() => scrollToSection('contact')} className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                                Contactar
                            </button>

                            {/* Theme Toggle */}
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden"
                        >
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-3">
                            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2">Sobre Mí</button>
                            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2">Proyectos</button>
                            <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2">Experiencia</button>
                            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2">Contactar</button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-bg min-h-screen flex items-center justify-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-6 text-center"
                >
                    <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Hola, soy <span className="gradient-text">Sebastián González</span>
                    </h1>
                    <p className={`text-2xl md:text-3xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Product AI Engineer
                    </p>
                    <button className="bg-gradient-to-r from-accent-green to-accent-blue text-white px-8 py-4 rounded-lg flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-accent-blue/50 transition-all">
                        <Download className="w-5 h-5" />
                        Descargar CV
                    </button>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section className={`py-20 ${darkMode ? 'bg-dark-card' : 'bg-white'}`}>
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12">Habilidades</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className={`${darkMode ? 'bg-dark-bg border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-xl p-6 text-center hover:border-accent-blue transition-all`}
                            >
                                <div className="text-4xl mb-3">{skill.icon}</div>
                                <p className="font-medium">{skill.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
                            <h3 className="text-2xl font-semibold text-accent-green mb-4">Sebastián González</h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
                                Especializado en desarrollo de productos impulsados por IA con habilidades en React, Next.js, Python y Node.js.
                            </p>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
                                Experiencia en implementación de LLMs, agentes autónomos y arquitecturas de sistemas inteligentes.
                                Recientemente finalicé proyectos como DerbiPlay (PWA de gestión deportiva) y un bot de Slack con Genkit.
                            </p>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                                Actualmente enfocado en crear soluciones innovadoras que combinan desarrollo web moderno con capacidades de IA.
                            </p>
                        </div>
                        <div className={`${darkMode ? 'bg-dark-card' : 'bg-gray-100'} rounded-2xl p-8 h-80 flex items-center justify-center`}>
                            <div className="text-center">
                                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent-green to-accent-blue flex items-center justify-center text-white text-4xl font-bold mb-4">
                                    SG
                                </div>
                                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tu foto aquí</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-20 ${darkMode ? 'bg-dark-card' : 'bg-white'}`}>
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-4xl font-bold mb-4">Proyectos</h2>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12`}>
                        Entre los más de <span className="text-accent-green font-bold">10</span> proyectos que he realizado, he elegido los más relevantes.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`${darkMode ? 'bg-dark-bg border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-xl overflow-hidden hover:border-accent-blue transition-all group`}
                            >
                                <div className="h-48 bg-gradient-to-br from-accent-green/20 to-accent-blue/20 flex items-center justify-center">
                                    <div className="text-6xl opacity-30">🚀</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="text-xs bg-accent-blue/20 text-accent-blue px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mb-4`}>{project.date}</div>

                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} flex items-center gap-1 text-sm`}
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
                                                className="text-accent-green hover:text-accent-blue flex items-center gap-1 text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-4xl font-bold mb-12">Experiencia</h2>
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`${darkMode ? 'bg-dark-card border-gray-800' : 'bg-white border-gray-200'} border rounded-xl p-8 hover:border-accent-green transition-all`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</p>
                                    </div>
                                    <div className={`mt-2 md:mt-0 px-4 py-2 rounded-lg ${darkMode ? 'bg-accent-blue/20' : 'bg-blue-100'} text-accent-blue font-medium inline-block`}>
                                        {exp.company}
                                    </div>
                                </div>
                                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-20 ${darkMode ? 'bg-dark-card' : 'bg-white'}`}>
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h2 className="text-4xl font-bold mb-8">Contactar</h2>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
                        ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
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
                            className="flex items-center gap-2 bg-gradient-to-r from-accent-green to-accent-blue text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-accent-blue/50 transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            Email
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-8 text-center ${darkMode ? 'text-gray-500 border-t border-gray-800' : 'text-gray-600 border-t border-gray-200'}`}>
                <p>© 2026 Sebastián González · Product AI Engineer</p>
            </footer>
        </div>
    );
}

export default App;
