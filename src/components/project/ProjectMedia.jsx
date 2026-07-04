import { motion } from "framer-motion";

export default function ProjectMedia({ project }) {
  return (
    <motion.section
      className="projectHeroMedia"
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.1 }}
    >
      <img
        src={project.image}
        alt={project.title}
      />
    </motion.section>
  );
}