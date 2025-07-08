function Header({ setCurrentPage }) {
    return (
        <div className="flex justify-start p-9 space-x-14 h-[250px] items-start">
            <button className="bttn" type="button" onClick={() => setCurrentPage('projects')}>Projects</button>
            <button className="bttn" type="button" onClick={() => setCurrentPage('contact')}>Contact</button>
            <button className="bttn" type="button" onClick={() => setCurrentPage('about')}>About me</button>
        </div>
    )
}

export default Header