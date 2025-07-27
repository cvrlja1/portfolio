import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";


function App() {

  return (
      <div className="w-full h-screen">
              <Header />
              <div className="main_cont">
                  <div className="shadow-sm">
                    <AboutMe />
                  </div>
                  <div className="shadow-sm p-5">
                    <Project />
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
