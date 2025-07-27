function DropNav({ scrollToSection}) {
    return (
        <div className="absolute top-full left-0 w-full bg-stone-100/95 shadow-md flex flex-col items-center md:hidden z-40">
            <button
                className="bttn rounded-md my-2"
                type="button"
                onClick={() => scrollToSection("projects")}
            >
                Projects
            </button>
            <button
                className="bttn rounded-md my-2"
                type="button"
                onClick={() => scrollToSection("about")}
            >
                About me
            </button>
            <button
                className="bttn rounded-md my-2"
                type="button"
                onClick={() => scrollToSection("skills")}
            >
                Skills
            </button>
            <button
                className="bttn rounded-md my-2"
                type="button"
                onClick={() => scrollToSection("contact")}
            >
                Contact
            </button>
        </div>
    )
}

export default DropNav;