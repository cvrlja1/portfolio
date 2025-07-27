import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Skills from "./components/Skills";


function App() {

  return (
      <div className="w-full h-screen">
              <Header />
              <div className="main_cont">
                  <div className="shadow-sm">
                    <Hero />
                  </div>
                  <div className="shadow-sm p-5">
                    <Project />
                  </div>
                  <div className="shadow-sm p-5">
                      <AboutMe />
                  </div>
                  <div className="shadow-sm p-5">
                      <Skills />
                  </div>
                  <div className="shadow-sm p-5">
                    <Contact />
                  </div>
              </div>
        <Footer />
      </div>
  )
}

export default App
