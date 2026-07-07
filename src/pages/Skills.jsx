import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Languages</h3>
          <p>Java (Core Concepts)</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <h3>Data & Analytics</h3>
          <p>MS Excel</p>
          <p>Power Query</p>
          <p>VBA Macros</p>
          <p>Power BI</p>
          <p>Jupyter Notebook</p>
        </div>

        <div className="skill-card">
          <h3>Databases</h3>
          <p>MySQL</p>
        </div>

        <div className="skill-card">
          <h3>Cloud & AI</h3>
          <p>AWS Cloud Foundations</p>
          <p>Dialogflow</p>
        </div>

        <div className="skill-card">
          <h3>Design & Tools</h3>
          <p>Figma</p>
          <p>Canva</p>
          <p>GitHub</p>
          <p>Visual Studio Code</p>
        </div>

        <div className="skill-card">
          <h3>Productivity</h3>
          <p>Google Docs</p>
          <p>Google Sheets</p>
          <p>Google Slides</p>
          <p>Google Drive</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;