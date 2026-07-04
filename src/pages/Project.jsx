import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectHero from "../components/project/ProjectHero";
import ProjectMedia from "../components/project/ProjectMedia";
import ProjectStory from "../components/project/ProjectStory";
import NextProject from "../components/project/NextProject";
import { projects } from "../data/projects";

export default function Project() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <main className="page">
        <Navbar />
        <section className="section">
          <h1>Project not found</h1>
        </section>
      </main>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="page">
      <Navbar />
      <ProjectHero project={project} />
      <ProjectMedia project={project} />
      <ProjectStory project={project} />
      <NextProject project={nextProject} />
    </main>
  );
}
