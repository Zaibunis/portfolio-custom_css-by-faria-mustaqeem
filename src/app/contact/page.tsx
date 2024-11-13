import React from 'react';
import Link from 'next/link';

interface InputProps {
  label: string;
  id: string;
  name: string;
}

const inputs: InputProps[] = [
  { label: 'Name:', id: 'name', name: 'name' },
  { label: 'Email:', id: 'email', name: 'email' },
  { label: 'Subject:', id: 'subject', name: 'subject' },
];

export default function Contact() {
  return (
    <div className="contact-container">
        
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div className="contact-form-wrapper">
        <h1 className="contact-title">Contact Me</h1>
        <h2 className="contact-description">
          Feel free to reach out for any inquiries, collaboration opportunities, or just to say hi!
        </h2>

        <form id="resumeForm" className="contact-form">
          <fieldset className="personal-info">
            <legend className="personal-info-legend">Personal Information</legend>

            {inputs.map((input) => (
              <div key={input.id} className="input-group">
                <label htmlFor={input.id} className="input-label">
                  {input.label}
                </label>
                <input
                  type="text"
                  id={input.id}
                  name={input.name}
                  className="input-field"
                  required
                />
              </div>
            ))}

            <label htmlFor="message" className="input-label">
              Message:
            </label>
            <textarea id="message" name="message" className="message-field" required></textarea>
          </fieldset>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

<footer className="footer">
  <p className="copyright">© 2024 Simple Web Design. All rights reserved.</p>

  <div className="social-links">
    <Link
      href="https://www.linkedin.com/in/zainab-mustaqeem-3367b5301/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <i className="fab fa-linkedin fa-2x"></i>
    </Link>
    <Link href="https://github.com/Zaibunis" target="_blank" rel="noopener noreferrer" className="social-link">
      <i className="fab fa-github fa-2x"></i>
    </Link>
  </div>

  <Link href="#" className="back-to-top">  Back to Top </Link>
  
   <i className="fas fa-arrow-up"></i>
   </footer>
    </div>

   

  );
}