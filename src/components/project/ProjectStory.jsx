export default function ProjectStory({ project }) {
  return (
    <section className="projectStoryV2">
      <article className="projectBigText">
        <p>{project.caseStudy.overview}</p>
      </article>

      <div className="caseGrid">
        <article>
          <span>01</span>
          <h2>The problem</h2>
          <p>{project.caseStudy.problem}</p>
        </article>

        <article>
          <span>02</span>
          <h2>The solution</h2>
          <p>{project.caseStudy.solution}</p>
        </article>

        <article>
          <span>03</span>
          <h2>Technical approach</h2>
          <p>{project.caseStudy.approach}</p>
        </article>

        <article>
          <span>04</span>
          <h2>Next steps</h2>
          <p>{project.caseStudy.nextSteps}</p>
        </article>
      </div>

      <div className="architectureBlock">
        <p className="sectionLabel">Architecture</p>
        <div className="architectureSteps">
          {(project.architecture || []).map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>

      <div className="roadmapBlock">
        <p className="sectionLabel">Roadmap</p>
        <div className="roadmapList">
          {(project.roadmap || []).map((item) => (
            <div key={item.label} className={item.done ? "done" : ""}>
              <span>{item.done ? "✓" : "○"}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
