import { Link } from "react-router-dom";

export default function NextProject({ project }) {
  return (
    <section className="nextProjectV2">
      <p>Next project</p>
      <Link to={`/projects/${project.slug}`}>
        <span>{project.title}</span>
        <strong>→</strong>
      </Link>
    </section>
  );
}
