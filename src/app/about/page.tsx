"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';


interface AboutProps {
  // Add any custom props here if needed
}

const About: React.FC<AboutProps> = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Web Developer and Tech enthusiast from Karachi, Pakistan',
          'My journey in web development began with a deep love',
          'for writing clean &amp; maintainable code',
          'I am always eager to learn new features',
          '&amp; stay updated with the latest technologies.',
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="about-section">
      {/* About Section */}
      <section className="about-content">
        <h2 className="about-title">About Me</h2>

        <div className="who-am-i">
          <h2 className="who-am-i-title">Who am I ?</h2>
        </div>

        {/* Animated Text */}
        <div className="animated-text">
      <p className="intro-text">
        Salam! My name is <span className="name">Faria Mustaqeem</span>
      </p>
      <p className="intro-text">And I am a passionate</p>
      <span ref={typedRef} className="typed-text"></span>
    </div>

        {/* Personal Traits Section */}
        <h1 className="personal-traits-title">Personal Traits:</h1>

        <ul className="traits-list">
          <li>
            <b className="trait-title">Problem Solver:</b>
            <p>Enjoy tackling complex problems and finding efficient solutions.</p>
          </li>
          <li>
            <b className="trait-title">Team Player:</b>
            <p>Thrive in collaborative environments and enjoy working with diverse teams.</p>
          </li>
          <li>
            <b className="trait-title">Continuous Learner:</b>
            <p>Always on the lookout for new challenges and opportunities to grow.</p>
          </li>
        </ul>

        {/* Additional Information */}
        <section className="additional-info">
          <p className="info-text">
            I have a deep love for coding and designing clean, responsive websites that provide great user
            experiences. Currently, I am focused on honing my skills in HTML, CSS, JavaScript, and TypeScript,
            with a long-term goal of becoming a full-stack developer.
            <br />
            What excites me the most about web development is the endless opportunities to solve problems and
            create something impactful. I am constantly learning and staying up-to-date with the latest
            technologies to enhance my skill set. When I am not coding, I enjoy traveling, exploring new places,
            and diving deeper into coding.
          </p>
        </section>

        {/* Call to Action Button */}
        <button className="cta-button">Let&apos;s Talk</button>
      </section>
    </div>
  );
};

export default About;