// src/App.js
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav__logo">P C Prakash</div>
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#bugbounty">Bug Bounty</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO / CINEMATIC INTRO */}
      <section className="hero" id="top">
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__eyebrow">Cybersecurity Professional</p>
          <h1 className="hero__title">
            Palnati <span>Chandu Prakash</span>
          </h1>
          <p className="hero__subtitle">
            Application Security Analyst specializing in Web App VAPT, API
            Security, SOC operations and DevSecOps integration. I help
            organizations discover, prioritize and fix vulnerabilities before
            attackers do.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="/Prakash_Cyber_Security.pdf" className="btn btn--ghost" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>

          <div className="hero__meta">
            <span>📍 Vizag, India</span>
            <span>✉ chanduprakashpalnati903@gmail.com</span>
            <span>📞 +91-9392753177</span>
          </div>
        </div>
        <div className="hero__gradient" />
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section__header">
          <h2>About Me</h2>
          <p>Cinematic overview</p>
        </div>
        <div className="section__grid section__grid--two">
          <p className="section__text">
            I&apos;m a Cybersecurity Engineer passionate about securing web
            applications and APIs end-to-end — from code to cloud. I have hands-on
            experience with VAPT, SOC monitoring, EDR operations and integrating
            SAST/DAST tooling into CI/CD pipelines to enable DevSecOps.
          </p>
          <p className="section__text section__text--muted">
            I enjoy collaborating with developers, QA engineers and security
            teams to transform vulnerabilities into actionable fixes and build
            secure-by-design systems. Outside of work, I sharpen my skills
            through bug bounty programs and personal security projects.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section__header">
          <h2>Skills & Tooling</h2>
          <p>What I bring to the table</p>
        </div>
        <div className="skills">
          <div className="card card--floating">
            <h3>Security Domains</h3>
            <ul>
              <li>Web Application VAPT (OWASP Top 10)</li>
              <li>API Security Testing (REST &amp; SOAP)</li>
              <li>SOC Operations &amp; SIEM Monitoring</li>
              <li>Endpoint Detection &amp; Response (EDR)</li>
              <li>DevSecOps &amp; CI/CD Security</li>
              <li>QA Security &amp; Functionality Testing</li>
            </ul>
          </div>

          <div className="card card--floating">
            <h3>Tools &amp; Technologies</h3>
            <ul>
              <li>Burp Suite, Postman, SoapUI</li>
              <li>Nmap, Nessus, Metasploit, Wireshark</li>
              <li>Bitdefender EDR, Fortinet, Snort</li>
              <li>Caldera, BEeF</li>
              <li>HTML5, Computer Networks</li>
            </ul>
          </div>

          <div className="card card--floating">
            <h3>Programming &amp; Soft Skills</h3>
            <ul>
              <li>Java, Python</li>
              <li>Strong analytical &amp; problem-solving</li>
              <li>Assertive decision-making</li>
              <li>Articulate communication</li>
              <li>Cross-functional collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section__header">
          <h2>Experience</h2>
          <p>Where I&apos;ve applied my skills</p>
        </div>

        <div className="timeline">
          <article className="timeline__item card card--timeline">
            <header className="timeline__header">
              <h3>Application Security Analyst</h3>
              <span className="timeline__company">
                Yalamanchili Solution for Payments — Vizag, India
              </span>
              <span className="timeline__date">Jul 2024 – Present</span>
            </header>
            <ul className="timeline__list">
              <li>
                Led web application security assessments for 10+ client-facing
                apps, identifying SQLi, XSS, CSRF and other critical issues and
                reducing critical vulnerabilities by 33% through developer
                collaboration.
              </li>
              <li>
                Performed manual and automated API security testing using Burp
                Suite and related tooling, resolving 15+ critical API flaws and
                mentoring junior analysts.
              </li>
              <li>
                Integrated SAST/DAST scans into CI/CD to automate security
                checks, accelerate remediation and strengthen DevSecOps
                practices.
              </li>
              <li>
                Supported SOC as L1 analyst – monitoring, triaging and
                escalating incidents using SIEM; worked with EDR team leveraging
                Bitdefender to contain malware and endpoint threats.
              </li>
            </ul>
          </article>

          <article className="timeline__item card card--timeline">
            <header className="timeline__header">
              <h3>Cybersecurity Intern</h3>
              <span className="timeline__company">
                Cyber Sapiens — Mangalore, India
              </span>
              <span className="timeline__date">Jul 2022 – Dec 2022</span>
            </header>
            <ul className="timeline__list">
              <li>
                Conducted vulnerability assessments and penetration tests across
                web and network assets aligned with OWASP Top 10 and security
                best practices.
              </li>
              <li>
                Used Burp Suite, Nessus and Nmap to uncover and prioritize
                security risks, supporting remediation of critical
                vulnerabilities.
              </li>
              <li>
                Collaborated with threat-intel and security teams to detect,
                analyze and respond to emerging threats via SIEM monitoring.
              </li>
            </ul>
          </article>
        </div>

        {/* EDUCATION */}
        <div className="education">
          <h3>Education</h3>
          <div className="education__items">
            <div className="education__item">
              <h4>B.Tech in Cyber Security – 7.16 CGPA</h4>
              <p>
                Kakinada Institute of Engineering &amp; Technology, Kakinada, India
                (Graduated May 2024)
              </p>
            </div>
            <div className="education__item">
              <h4>Intermediate – 7.1</h4>
              <p>Sri Sarada Junior College, Nuziveedu</p>
            </div>
            <div className="education__item">
              <h4>SSC – 9.8</h4>
              <p>Creative E.M High School, Tukkuluru</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section__header">
          <h2>Highlighted Projects</h2>
          <p>Turning ideas into secure solutions</p>
        </div>
        <div className="projects">
          <article className="card card--project">
            <h3>Password Manager with Encryption</h3>
            <p className="card__tagline">
              Secure web application for generating and storing strong passwords.
            </p>
            <ul>
              <li>
                Designed a web app to safely store and generate passwords with a
                built-in strength tester.
              </li>
              <li>
                Implemented SHA-512 based encryption for secure password
                storage.
              </li>
              <li>
                Used MySQL for data storage and Python for application logic.
              </li>
            </ul>
            <div className="card__tech">
              <span>Python</span>
              <span>MySQL</span>
              <span>SHA-512</span>
            </div>
          </article>

          <article className="card card--project">
            <h3>Web &amp; API Security Assessments</h3>
            <p className="card__tagline">
              Real-world engagements for banking and payment solutions.
            </p>
            <ul>
              <li>
                Conducted end-to-end VAPT for multiple payment platforms,
                including login flows, transaction APIs and admin portals.
              </li>
              <li>
                Documented findings with clear PoCs, risk ratings and
                remediation guidance for development teams.
              </li>
              <li>
                Integrated repeatable test cases into QA cycles to prevent
                regressions.
              </li>
            </ul>
            <div className="card__tech">
              <span>Burp Suite</span>
              <span>Postman</span>
              <span>SoapUI</span>
              <span>OWASP Top 10</span>
            </div>
          </article>
        </div>
      </section>

      {/* BUG BOUNTY */}
      <section className="section" id="bugbounty">
        <div className="section__header">
          <h2>Bug Bounty Highlights</h2>
          <p>Continuous learning through responsible disclosure</p>
        </div>
        <div className="card card--bounty">
          <ul>
            <li>
              Improved platform security by ~40% across multiple products
              through ethical hacking initiatives and responsible disclosure.
            </li>
            <li>
              Reported vulnerabilities in platforms such as Exirio, MyDukaan,
              Chain Analysis, Tinder and Sectona.
            </li>
            <li>
              Participated in several Vulnerability Disclosure Programs (VDPs),
              focusing on authentication, authorization and access-control flaws.
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section--contact" id="contact">
        <div className="section__header">
          <h2>Let&apos;s Collaborate</h2>
          <p>Open to security engineering, AppSec and SOC roles</p>
        </div>

        <div className="contact">
          <p>
            If you&apos;re looking for someone who can break applications like an
            attacker but fix them like an engineer, I&apos;d love to talk.
          </p>

          <div className="contact__grid">
            <div>
              <h3>Contact</h3>
              <p>
                ✉{" "}
                <a href="mailto:chanduprakashpalnati903@gmail.com">
                  chanduprakashpalnati903@gmail.com
                </a>
              </p>
              <p>📞 +91-9392753177</p>
            </div>
            <div>
              <h3>Profiles</h3>
              <p>
                <a
                  href="https://github.com/Chandu4641"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/palnati-chandu"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn (palnati-chandu)
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Palnati Chandu Prakash · Cybersecurity Portfolio</p>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
