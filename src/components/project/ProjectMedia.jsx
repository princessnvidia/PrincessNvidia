import { motion } from "framer-motion";

export default function ProjectMedia({ project }) {
  return (
    <motion.section
      className="projectMediaV2"
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.1 }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{ objectPosition: project.objectPosition || "center center" }}
      />
    </motion.section>
  );
}
