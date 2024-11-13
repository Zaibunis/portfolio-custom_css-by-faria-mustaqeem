import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="projects-section">
      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-content">
          <p className="experience-text">
            As a dedicated and results-oriented junior developer, I am passionate about crafting innovative and user-friendly web applications. With a strong foundation in coding and design, I strive to continually improve my skills and stay up-to-date with the latest technologies. In my previous role as a web developer, I have successfully contributed to various projects. My ability to quickly learn new technologies and adapt to changing requirements has enabled me to consistently deliver high-quality solutions.
          </p>
          <p className="experience-text">
            I am eager to continue expanding my skills and contribute to exciting projects in the field of web development.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <div className="projects-container">
        <h1 className="projects-heading">
          🌟 Here is my creation where you can check my projects ⬇ 🌟
        </h1>
        <div className="projects-button-container">
          <button className="projects-button">
            <a href="https://github.com/Zaibunis" target="_blank" rel="noopener noreferrer">
              Check it out on GitHub!✨
            </a>
          </button>
        </div>

        <div className="projects-card-container">
          {/* Amazon Clone Card */}
          <div className="project-card">
            <Image
              src="/amazon.PNG"
              alt="Amazon-Clone"
              height={200}
              width={320}
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-title">Amazon-Clone</h2>
              <button className="project-button">
                <a
                  href="https://vercel.com/api/toolbar/link/amazon-clone-by-faria-mustaqeem.vercel.app?via=project-dashboard-alias-list&p=1&page=/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </button>
            </div>
          </div>

          {/* Simple Calculator Card */}
          <div className="project-card">
            <Image
              src="/calcu.PNG"
              alt="Simple-Calculator"
              height={200}
              width={320}
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-title">Simple-Calculator</h2>
              <button className="project-button">
                <a
                  href="https://vercel.com/api/toolbar/link/simple-calculator-design.vercel.app?via=project-dashboard-alias-list&p=1&page=/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}
