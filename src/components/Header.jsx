import logo from "../assets/logo.svg"

function Header() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full shadow-md flex justify-between items-center px-6 py-4 z-50 bg-stone-100/80">
            <div className="self-start">
                <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-row w-86 justify-between">
                <button className="bttn rounded-md" type="button" onClick={() => scrollToSection('about')}>About me</button>
                <button className="bttn rounded-md" type="button" onClick={() => scrollToSection('projects')}>Projects</button>
                <button className="bttn rounded-md" type="button" onClick={() => scrollToSection('contact')}>Contact</button>
            </div>
        </nav>
    )
}

export default Header

