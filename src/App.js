import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Education from "./Components/Education";

export default function App() {
  return (
    <main className="text-violet-400 bg-red-300 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
