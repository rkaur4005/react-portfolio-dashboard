import React from "react";
import "./styles.css";

const kpiTiles = [
  {
    label: "Total Experience",
    value: "9+ Years",
    detail: "UI / Frontend Development",
  },
  {
    label: "Primary Stack",
    value: "React • Angular",
    detail: "Redux Saga, TypeScript, Microservices",
  },
  {
    label: "Domains",
    value: "FinTech • Pharma",
    detail: "Trading, Risk, Defect Tracking",
  },
  {
    label: "Leadership",
    value: "UI Lead",
    detail: "Architecture, Mentoring, Code Quality",
  },
];

const experiences = [
  {
    company: "Citibank",
    location: "Irving, TX",
    period: "Feb 2021 – Present",
    role: "Senior UI Lead Developer",
    tech: "React, Angular 9/12/14, AG Grid, Java Spring Boot, Microservices",
    summary:
      "Led front-end development for real-time FX trading platform, Snowflake Onboarding Tool, and Backstage.io components.",
    bullets: [
      "Built and optimized low-latency UIs for FX trading with real-time market data feeds.",
      "Implemented high-performance data grids using AG Grid in React/Angular.",
      "Integrated UI with Java/Spring Boot microservices (OAuth2/JWT, secure APIs).",
      "Developed reusable React components for Citi’s internal Backstage.io portal.",
    ],
  },
  {
    company: "Pfizer",
    location: "Peapack, NJ",
    period: "Jan 2020 – Jan 2021",
    role: "UI Lead Developer",
    tech: "React, Redux Saga, Microservices, Spring Boot",
    summary:
      "Built Defect Tracking Tool and modernized IoT ThingWorx application into a responsive SPA.",
    bullets: [
      "Developed React/Redux Saga SPA for defect and campaign tracking.",
      "Migrated legacy IoT UI to modern React-based architecture.",
      "Ensured WCAG accessibility and cross-browser compatibility.",
      "Integrated front-end with Java microservices using Axios and Redux Saga.",
    ],
  },
  {
    company: "ITN Services (Torrential)",
    location: "Manhattan, NY",
    period: "May 2019 – Dec 2019",
    role: "UI Lead Developer",
    tech: "Vue.js, Vuetify, D3",
    summary:
      "Developed Project 360, a centralized platform for managing multi-channel marketing campaigns.",
    bullets: [
      "Built responsive SPAs using Vue/Vuetify.",
      "Created notification and analytics modules with D3 visualizations.",
    ],
  },
  {
    company: "DOE / Rutgers & NYC Schools",
    location: "NY",
    period: "2016 – 2019",
    role: "UI Developer",
    tech: "AngularJS, Angular 6, HTML5, CSS3, Kendo",
    summary:
      "Delivered internal education and salary workflow applications for teachers and administrators.",
    bullets: [
      "Built Angular-based SPAs for salary, classroom, and summer school tools.",
      "Implemented responsive layouts and MVC patterns with RESTful APIs.",
    ],
  },
];

const skillsTable = [
  {
    category: "UI Web Technologies",
    skills:
      "HTML5, CSS3, JavaScript (ES6+), AngularJS, Angular 2/4/6/12/14, React.js, Redux Saga, Vue.js/Vuetify, jQuery, AJAX, XML, XSLT",
  },
  {
    category: "Backend & Integration",
    skills: "Java Spring Boot, REST APIs, Microservices",
  },
  {
    category: "Tools & IDEs",
    skills:
      "VS Code, IntelliJ IDEA, WebStorm, Eclipse, Sublime, Adobe Dreamweaver, Notepad++",
  },
  {
    category: "Servers & DB",
    skills: "Apache Tomcat, HTTP Server, SQL Server, MySQL",
  },
  {
    category: "Methodologies",
    skills: "Agile, Scrum, Waterfall, RUP, UML, Scrum Master Certified",
  },
];

export default function App() {
  return (
    <div className="portfolio-root">
      {/* Top Header */}
      <header className="portfolio-header">
        <div>
          <h1 className="name">Ramandeep Kaur</h1>
          <div className="title">Senior UI / Frontend Lead Developer</div>
          <div className="subtitle">
            React • Angular • TypeScript • Microservices • Java Spring Boot
          </div>
        </div>
        <div className="contact">
          <div>📞 848-242-0200</div>
          <div>📧 rkaur4005@gmail.com</div>
        </div>
      </header>

      <main className="portfolio-body">
        {/* KPI Section */}
        <section className="kpi-section">
          {kpiTiles.map((tile) => (
            <article key={tile.label} className="kpi-card">
              <div className="kpi-label">{tile.label}</div>
              <div className="kpi-value">{tile.value}</div>
              <div className="kpi-detail">{tile.detail}</div>
            </article>
          ))}
        </section>

        {/* Main layout: Experience + Skills */}
        <section className="grid-layout">
          {/* Left: Experience timeline */}
          <section className="experience-section card">
            <div className="card-header">
              <h2>Experience Dashboard</h2>
            </div>
            <div className="card-body">
              {experiences.map((exp) => (
                <article key={exp.company} className="experience-card">
                  <div className="exp-header">
                    <div className="exp-primary">
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company">
                        {exp.company} • {exp.location}
                      </div>
                    </div>
                    <div className="exp-period">{exp.period}</div>
                  </div>
                  <div className="exp-summary">{exp.summary}</div>
                  <div className="exp-tech">Tech: {exp.tech}</div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Right: Skills + About */}
          <section className="right-column">
            <section className="card">
              <div className="card-header">
                <h2>Profile Snapshot</h2>
              </div>
              <div className="card-body">
                <p className="about-text">
                  Senior UI engineer specializing in modern JavaScript
                  frameworks and real-time, mission-critical front-ends. Strong
                  background in FX trading UIs, pharmaceutical platforms, and
                  enterprise internal tools. Passionate about clean UI
                  architecture, performance, and developer experience.
                </p>
              </div>
            </section>

            <section className="card skills-card">
              <div className="card-header">
                <h2>Technical Skills</h2>
              </div>
              <div className="card-body">
                <table className="skills-table">
                  <tbody>
                    {skillsTable.map((row) => (
                      <tr key={row.category}>
                        <td className="skills-category">{row.category}</td>
                        <td className="skills-values">{row.skills}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}
