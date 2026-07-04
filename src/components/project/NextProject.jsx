import { Link } from "react-router-dom";

export default function NextProject({ project }) {
  return (
    <section className="nextProjectV2">
      <Link to={`/projects/${project.slug}`}>
        <div className="alignementV2">
          <span>{project.title}</span>
          <p>Next project</p>
        </div>
        <strong>→</strong>
      </Link>
    </section>
  );
}
