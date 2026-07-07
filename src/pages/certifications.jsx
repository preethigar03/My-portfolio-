import "./Certifications.css";

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">

      <h2>Certifications</h2>

      <div className="certifications-container">

        <div className="certificate-card">
          <h3>AWS Academy Graduate</h3>
          <p>Cloud Foundations</p>
        </div>

        <div className="certificate-card">
          <h3>MongoDB Skill Badge</h3>
          <p>SQL to NoSQL</p>
        </div>

        <div className="certificate-card">
          <h3>Python for Data Science</h3>
          <p>Top Engineers Workshop</p>
        </div>

        <div className="certificate-card">
          <h3>Full Stack Development Internship</h3>
          <p>Marcello Tech</p>
        </div>

      </div>

    </section>
  );
}

export default Certifications;