// Home.tsx
"use client";


import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Base() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'And I am a passionate',
        'Web Developer with a solid foundation in HTML &amp; CSS',
        'a strong grasp of TypeScript',
        'and basics of Next.js',
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <main className="main-content">
        <section className="intro-section">
          <div className="text-content">
            <h1 className="intro-heading">
              Salam! My name is <span className="name">Faria</span>
            </h1>
            <span ref={typedElement} className="typed-text"></span>
            <div className="social-links">
              < Link
                href="https://www.linkedin.com/in/zainab-mustaqeem-3367b5301/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
              >
                Visit LinkedIn
              </Link>
              <Link
                href="https://github.com/Zaibunis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
              >
                Visit GitHub
              </Link>
            </div>
          </div>
          <div className="image-container">
            <Image
              src="/bg.png"
              height={48}
              width={100}
              alt="Background"
              className="background-image"
            />
          </div>
        </section>
      </main>
    </div>
  );
}