import Image from "next/image";
export default function Home() {
    return (
      <div className="container">
        {/* Title Section */}
        <h1 className="title">Journey of mine! 😎</h1>
        <p className="description">
          Embarking on the journey of coding and learning programming languages is like setting sail on an uncharted sea. The landscape is vast, the waters sometimes tumultuous, but the destination is endlessly rewarding. 🎉🎊
        </p>
  
        {/* First Paragraph */}
        <p className="paragraph">
          As a beginner, my journey begins with a spark of curiosity. Maybe it(&quot)s the allure of creating something from scratch, or the desire to understand the technology that powers our world. You start with basics, perhaps choosing a language like TypeScript for its simplicity and readability. ☺
        </p>
  
        {/* Hello World Section */}
        <p className="highlight">
          The first steps are filled with discovery and small triumphs. You write your first lines of code, and the screen echoes back 🎗&quot;Hello, World!&quot;🎗
        </p>
        <div className="image-container">
          <Image 
          src="/OIP.jpeg" 
          alt="Hello World" 
          width={300} 
          height={150}  
          className="image" />
        </div>
  
        {/* Challenges Section */}
        <p className="highlight">
          Along the way, you encounter challenges. Syntax errors and bugs test your patience, but they also sharpen your problem-solving skills. Every obstacle becomes a learning opportunity. 💗
        </p>
        <div className="image-container">
          <Image 
          src="/tttt.jpeg" 
          alt="Challenges" 
          width={300}
          height={150} 
          className="image" />
        </div>
  
      </div>
    );
  }
  