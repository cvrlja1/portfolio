import { useState } from "react"
import DropDown from "./DropDown"
import DropNav from "./DropNav"
import ChangeTheme from "./ChangeTheme"

function Header({ isForm, setIsForm}) {
    const [isOpen, setIsOpen] = useState(false);


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const openContact = () => {
        if (!isForm) {
            setIsForm(true);
        }
    }

    return (
        <nav className="fixed top-0 left-0 w-full shadow-lg flex justify-between items-center backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 z-50 bg-stone-100/30 dark:bg-slate-950">
            <div className="self-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-14 h-14 dark:text-white"
                    fill="currentColor"
                >
                    <path d="M138.667,256l46.933-49.067c8.533-8.533,8.533-21.333,0-29.867s-21.333-8.533-29.867,0l-59.733,64
    c-8.533,8.533-6.4,21.333,0,29.867l59.733,64c8.533,8.533,21.333,8.533,29.867,0s8.533-21.333,0-29.867L138.667,256z"/>
                    <path d="M420.267,241.067l-64-64c-8.533-8.533-21.333-8.533-29.867,0s-8.533,21.333,0,29.867L375.467,256L326.4,305.067
    c-8.533,8.533-8.533,21.333,0,29.867s21.333,8.533,29.867,0l64-64C428.8,262.4,428.8,249.6,420.267,241.067z"/>
                    <path d="M283.733,170.667c-10.667-4.267-23.467,2.133-27.733,12.8l-42.667,128c-4.267,10.667,2.133,23.467,12.8,27.733
    c12.8,4.267,25.6-2.133,27.733-12.8l42.667-128C300.8,187.733,294.4,174.933,283.733,170.667z"/>
                    <path d="M426.667,0H85.333C38.4,0,0,38.4,0,85.333v341.333C0,473.6,38.4,512,85.333,512h341.333C473.6,512,512,473.6,512,426.667
    V85.333C512,38.4,473.6,0,426.667,0z M469.333,426.667c0,23.467-19.2,42.667-42.667,42.667H85.333
    c-23.467,0-42.667-19.2-42.667-42.667V85.333c0-23.467,19.2-42.667,42.667-42.667h341.333c23.467,0,42.667,19.2,42.667,42.667
    V426.667z"/>
                </svg>
            </div>
            <DropDown isOpen={isOpen} setIsOpen={setIsOpen} />
                {/* Mobile dropdown menu */}
                {isOpen && ( <DropNav scrollToSection={scrollToSection} />)}
            <ChangeTheme />
            <div className="hidden md:flex flex-wrap flex-row gap-7 justify-between">
                <button className="bttn rounded-md zoom" type="button" onClick={() => scrollToSection('projects')}>Projects</button>
                <button className="bttn rounded-md zoom" type="button" onClick={() => scrollToSection('about')}>About me</button>
                <button className="bttn rounded-md zoom" type="button" onClick={() => scrollToSection('skills')}>Skills</button>
                <button className="bttn rounded-md zoom" type="button" onClick={() => openContact()}>Contact</button>
            </div>
        </nav>
    )
}

export default Header

