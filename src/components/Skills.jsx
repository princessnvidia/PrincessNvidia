import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="sectionHeader">
        <p>Toolbox</p>
        <h2>Skills</h2>
      </div>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="experimentList">
        <div>Dream interfaces and lucid dreaming hardware</div>
        <div>Toribash locomotion through imitation learning</div>
        <div>Breakbeat slicing and intelligent drum variation</div>
        <div>Mandarin learning through active recall</div>
      </div>
    </section>
  );
}
