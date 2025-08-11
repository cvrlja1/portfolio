import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectInfo from "./components/ProjectInfo";
import Form from "./components/Form";


function App() {
    const [isForm, setIsForm] = useState(false);

  return (
      <div id="main" className="w-full h-screen">
              <Header isForm={isForm} setIsForm={setIsForm} />
          {isForm && <Form setIsForm={setIsForm} /> }
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
              </div>
        <Footer />
      </div>
  )
}

export default App
