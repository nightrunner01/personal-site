import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Methodology from '@/components/Methodology';
import Projects from '@/components/Projects';
import Prds from '@/components/Prds';
import Credentials from '@/components/Credentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Methodology />
      <Projects />
      <Prds />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
