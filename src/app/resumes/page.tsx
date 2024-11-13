import React from 'react';
import Image from 'next/image';

export default function Resume() {
  return (
    <div className="resume-section">
      <h1 className="resume-heading">
        <i>🌟Here is my creation where you can check my Resumes ⬇ 🌟</i>
      </h1>

      <div className="resume-button-container">
        <button className="resume-button">
          <a href="https://github.com/Zaibunis" target="_blank" rel="noopener noreferrer">
            Check it out on GitHub!✨
          </a>
        </button>
      </div>

      <div className="resume-cards-container">
        {/* Static Resume Builder Card */}
        <div className="resume-card">
          <Image
            src="/mile 1.PNG"
            alt="Static-Resume-Builder"
            height={250}
            width={500}
            className="resume-image"
          />
          <h2 className="resume-title">Static-Resume-Builder</h2>
          <button className="project-button">
            <a
              href="https://mile-1-2-by-faria-mustaqeem.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </button>
        </div>

        {/* Dynamic Resume Builder Card */}
        <div className="resume-card">
          <Image
            src="/mile 2.PNG"
            alt="Dynamic-Resume-Builder"
            height={250}
            width={500}
            className="resume-image"
          />
          <h2 className="resume-title">Dynamic-Resume-Builder</h2>
          <button className="project-button">
            <a
              href="https://mile-3-by-faria-mustaqeem.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </button>
        </div>

        {/* Editable Resume Builder Card */}
        <div className="resume-card">
          <Image
            src="/mile 3.PNG"
            alt="Editable-Resume-Builder"
            height={250}
            width={500}
            className="resume-image"
          />
          <h2 className="resume-title">Editable-Resume-Builder</h2>
          <button className="project-button">
            <a
              href="https://mile-4-by-faria-mustaqeem.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}


