import { Nav } from './components/ui/Nav.jsx';
import { FloatingShapes } from './components/ui/FloatingStickers.jsx';
import { Hero } from './sections/Hero.jsx';
import { About } from './sections/About.jsx';
import { FeaturedProjects } from './sections/FeaturedProjects.jsx';
import { Skills } from './sections/Skills.jsx';
import { Footer } from './sections/Footer.jsx';

export default function App() {
    return (
        <>
            <FloatingShapes />
            <Nav />
            <main className="relative z-10 mx-auto w-full max-w-[var(--max-w)] px-[var(--gutter-x)]">
                <Hero />
                <About />
                <FeaturedProjects />
                <Skills />
                <Footer />
            </main>
        </>
    );
}
