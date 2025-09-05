import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Featured from "@/components/portfolio/Featured";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";

export default function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Featured />
      <Resume />
      <Contact />
    </main>
  );
}
