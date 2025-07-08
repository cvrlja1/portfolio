import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import './App.css'
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import background from './assets/background.jpg';
import Projects from "./components/Projects";


const pageVariants = {
    initial: { opacity: 0, scale: 0.95, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -30 },
};

function App() {
    const [currentPage, setCurrentPage] = useState('about');

  return (
      <div className="relative w-full h-screen overflow-auto">
        <div className="absolute inset-0 bg-center bg-cover filter blur-md" style={{ backgroundImage: `url(${background})` }} />
          <div className="relative z-10">
              <Header setCurrentPage={setCurrentPage} />
              <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
                  <AnimatePresence mode="wait">
                      {currentPage === 'about' && <About />}
                      {currentPage === 'projects' && <Projects />}
                      {currentPage === 'contact' && <Contact />}
                  </AnimatePresence>
              </div>
          </div>
      </div>
  )
}

export default App
