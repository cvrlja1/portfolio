import logo from "../assets/logo.svg"
import top from "../assets/arrowup.svg"
import { useState } from "react"
import DropDown from "./DropDown"
import DropNav from "./DropNav"

function Header() {
    const [isOpen, setIsOpen] = useState(false);


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full shadow-md flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 z-50 bg-stone-100/80">
            <div className="self-start">
                <img src={logo} alt="logo" />
            </div>
            <DropDown isOpen={isOpen} setIsOpen={setIsOpen} />
                {/* Mobile dropdown menu */}
                {isOpen && ( <DropNav scrollToSection={scrollToSection} />)}
            <div className="hidden md:flex flex-wrap flex-row gap-7 justify-between">
                <a href="#top">
                    <img src={top} alt="top" style={{ width: '6rem', height: '3rem' }} />
                </a>
                <button className="bttn rounded-md" type="button" onClick={() => scrollToSection('projects')}>Projects</button>
                <button className="bttn rounded-md" type="button" onClick={() => scrollToSection('about')}>About me</button>
                <button className="bttn rounded-md" type="button" onClick={() => scrollToSection('skills')}>Skills</button>
                <button className="bttn rounded-md" type="button" onClick={() => scrollToSection('contact')}>Contact</button>
            </div>
        </nav>
    )
}

export default Header

