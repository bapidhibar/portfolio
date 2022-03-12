import React from 'react';
import './App.css';
import Home from "./Home"
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./Project";
import Skill from "./Skill";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
