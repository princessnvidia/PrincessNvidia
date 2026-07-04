import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="page">
      <Navbar />
      <Hero />

      <section id="projects" className="section">
        <div className="sectionHeader">
          <p>Featured work</p>
          <h2>Projects</h2>
        </div>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <Skills />
      <Footer />
    </main>
  );
}
