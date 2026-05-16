import React from "react";

const skills = ["Java", "Selenium WebDriver", "Playwright", "Appium", "Cucumber", "TestNG", "Maven", "GIT", "Jenkins", "Postman"];
const frameworks = ["POM", "BDD (Cucumber)"];
const tools = ["JIRA", "Splunk", "Redis", "MySQL", "SQL"];

const experience = [
  {
    title: "Hexaware Technologies",
    subtitle: "Software Test Engineer & Application Lead (2021 – Present)",
    description: "Leading automation for GenAI apps, enterprise portals, and CI/CD pipelines while driving defect management and quality monitoring with Splunk.",
  },
  {
    title: "GenAI Applications",
    subtitle: "HR Assist, IQMS, ECC IRIS, Libra, GPT",
    description: "Led QA automation for AI-driven solutions and reduced test cycle time using AI-assisted Playwright and Claude-backed automation generation.",
  },
  {
    title: "Promoto",
    subtitle: "Wafer Data Mining",
    description: "Delivered automation for data validation flows, integration testing, and production readiness in semiconductor analytics.",
  },
  {
    title: "Air Canada M3 Mobility",
    subtitle: "Mobile and Web Automation",
    description: "Supported mobility-driven workflows with end-to-end test automation, performance monitoring, and stakeholder reporting.",
  },
];

const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "Hindusthan College of Arts & Science",
    year: "2021",
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "K.S. Rangasamy College of Arts and Science",
    year: "2019",
  },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:bhuvaneshchinnusamy@gmail.com",
    value: "bhuvaneshchinnusamy@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhuvanesh-c-3bba4a265/",
    value: "linkedin.com/in/bhuvanesh-c-3bba4a265",
  },
];

const contactIcons = [
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=bhuvaneshchinnusamy@gmail.com", icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bhuvanesh-c-3bba4a265/", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
  { label: "WhatsApp", href: "https://wa.me/918300021132", icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png" },
  { label: "Instagram", href: "https://www.instagram.com/bho_v_/", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
];


export default function App() {
  return (
    <div className="app-root responsive-container">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="hero-role">QA Automation Engineer</p>
          <h1>Bhuvanesh</h1>
          <p className="hero-text">
            QA Automation Engineer with 4 years in IT, specializing in functional testing, UI automation, and GenAI applications.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">
              View Experience
            </a>
            <a className="button secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <video
            src="images/QAWorkspace.mp4"
            alt="QA automation workspace"
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <span className="hero-label">QA Automation</span>
        </div>
      </header>

      <main className="main-content">
        <section id="about" className="panel about-panel">
          <h2>About</h2>
          <div className="about-grid">
            <div>
              <p>
                I am a QA Automation Engineer with 4 years of experience in functional testing, UI automation, and GenAI applications.
                I deliver automation frameworks that improve release quality and accelerate end-to-end validation.
              </p>
              <p>
                My focus is on scalable automation, AI-driven test generation, and strong collaboration across Agile teams and stakeholders.
              </p>
            </div>
            <div className="profile-card">
              <img
                src="images/IMG_6563.PNG"
                alt="Personal profile"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="panel skills-panel">
          <h2>Skills & Tools</h2>
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Frameworks</h3>
            <div className="skill-list">
              {frameworks.map((framework) => (
                <span key={framework} className="skill-pill">
                  {framework}
                </span>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Tools</h3>
            <div className="skill-list">
              {tools.map((tool) => (
                <span key={tool} className="skill-pill">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="panel experience-panel">
          <h2>Experience</h2>
          <div className="project-grid">
            {experience.map((item) => (
              <article key={item.title} className="project-card">
                <h3>{item.title}</h3>
                <p className="experience-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="panel achievements-panel">
          <h2>Achievements</h2>
          <ul className="achievement-list">
            <li>Led QA automation for GenAI apps such as HR Assist, IQMS, ECC IRIS, Libra, and GPT.</li>
            <li>Implemented AI-driven Playwright automation to reduce test cycle time and accelerate feedback.</li>
            <li>Delivered high-quality releases as Application Lead with strong Agile collaboration and stakeholder communication.</li>
            <li>Designed automation frameworks using Claude AI and GitHub Copilot to speed up script generation and improve maintainability.</li>
            <li>Created AI-based automation scripts to achieve minimal turnaround time for test execution and reporting.</li>
          </ul>
        </section>

        <section id="education" className="panel education-panel">
          <h2>Education</h2>
          <div className="project-grid">
            {education.map((item) => (
              <article key={item.degree} className="project-card">
                <h3>{item.degree}</h3>
                <p className="experience-subtitle">{item.institution}</p>
                <p>{item.year}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel contact-panel">
          <h2>Contact</h2>
          <p>Reach out for QA automation work, test strategy, or collaboration.</p>
          <div className="contact-icons">
            {contactIcons.map((icon) => (
              <div key={icon.label} className="contact-item">
                <a href={icon.href} target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                  <img src={icon.icon} alt={icon.label} className="contact-icon" />
                </a>
                <span className="contact-label">{icon.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
