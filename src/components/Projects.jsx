import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>AI Chatbot</h3>
          <p className="tech">Dialogflow | NLP</p>

          <ul>
            <li>Designed and deployed a conversational AI chatbot.</li>
            <li>Implemented 15+ intents and custom entities.</li>
            <li>Improved response accuracy using context management.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Interactive Sales Analytics Dashboard</h3>
          <p className="tech">MS Excel | Power Query</p>

          <ul>
            <li>Automated data cleaning using Power Query.</li>
            <li>Generated business insights using Pivot Tables.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Excel Process Automation</h3>
          <p className="tech">VBA Macros</p>

          <ul>
            <li>Automated repetitive reporting tasks.</li>
            <li>Developed reusable macro scripts.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Student Portal Mobile App</h3>
          <p className="tech">Figma UI/UX</p>

          <ul>
            <li>Designed an end-to-end mobile application.</li>
            <li>Built an interactive prototype for developers.</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Projects;