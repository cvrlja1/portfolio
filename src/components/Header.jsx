function Header({ setCurrentPage }) {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-start p-6 sm:p-9 space-y-4 sm:space-y-0 sm:space-x-14 items-start">
            <button className="bttn" type="button" onClick={() => setCurrentPage('about')}>About me</button>
            <button className="bttn" type="button" onClick={() => setCurrentPage('projects')}>Projects</button>
            <button className="bttn" type="button" onClick={() => setCurrentPage('contact')}>Contact</button>
        </div>
    )
}

export default Header