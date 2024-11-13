// src/app/skills/page.tsx

export default function Skills() {
    return (
      <div className="skills-section">
        {/* Skills Header */}
        <div className="skills-header">
          <h1 className="skills-title">Skills:</h1>
        </div>
  
        {/* HTML Skill */}
        <div className="skill-section">
          <h2 className="skill-title">HTML 🙂</h2>
          <div className="rating-container">
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating-gray"></i>
          </div>
        </div>
  
        {/* CSS Skill */}
        <div className="skill-section">
          <h2 className="skill-title">CSS 😁</h2>
          <div className="rating-container">
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating-gray"></i>
          </div>
        </div>
  
        {/* TypeScript Skill */}
        <div className="skill-section">
          <h2 className="skill-title">TypeScript 😊</h2>
          <div className="rating-container">
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating"></i>
            <i className="fa fa-star skill-rating-gray"></i>
          </div>
        </div>
  
        {/* Hire Me Section */}
        <div className="hire-me-section">
          <h1 className="hire-me-title">Why should you hire me?</h1>
          <p className="hire-me-text">
            Because I write clean, maintainable code that not only makes my fellow developers smile but also ensures that future updates are a breeze.
            Because I complete projects faster than a coffee-fueled coder on a deadline, ensuring that your timelines are met without sacrificing quality.
            Because I have a knack for crafting visually stunning websites using CSS that not only catch the eye but also provide an engaging user experience—think of it as giving your site a stylish makeover! 💖
          </p>
        </div>
      </div>
    );
  }