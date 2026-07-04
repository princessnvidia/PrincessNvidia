import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="projectCard"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <Link to={`/projects/${project.slug}`}>
        <div className="projectMedia">
          <img
            src={project.image}
            alt={project.title}
            style={{
              objectPosition: project.objectPosition || "center center",
            }}
          />
        </div>

        <div className="projectBody">
          <p className="projectType">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="textButton">
            Open case study <span>↗</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
