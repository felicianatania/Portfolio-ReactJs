import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projectt from "./components/Projectt";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Project /> */}
      <Projectt/>
      <About />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
