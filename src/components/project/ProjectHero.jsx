import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectHero({ project }) {
  return (
    <section className="projectHeroV2">
      <motion.div
        className="projectHeroInner"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Link className="backLink" to="/">← Back to projects</Link>

        <p className="projectType">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="projectHeroLead">{project.caseStudy.lead}</p>

        <div className="projectInfoLine">
          <span>{project.year}</span>
          <span>{project.type}</span>
          <span>{project.platform}</span>
        </div>

        <div className="tags projectPageTags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
