
import Navbar from "@/navbar";
import Base from "../base"
import Home from "./home/page"
import About from "./about/page"
import Skills from "./skills/page"
import Projects from "./projects/page"
import Resumes from "./resumes/page"
import Contact from "./contact/page"


export default function Index() {
  return (
  <div>
    <Navbar />
    <Base />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Resumes />
    <Contact />
  </div>
  );
}
