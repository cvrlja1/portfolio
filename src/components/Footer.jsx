import LinkedInIcon from '../assets/linkedin.svg?react';
import GitHubIcon from '../assets/github.svg?react';

function Footer() {
    return (
        <footer className="grid grid-cols-3 items-center bg-stone-50 w-full h-16 px-10">
            <div className="flex flex-row gap-5">
                <a href="https://github.com/cvrlja1" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="w-8 h-8 hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://linkedin.com/in/cvrlja1" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="w-8 h-8 hover:text-blue-700 transition-colors" />
                </a>
            </div>

            <div className="text-center">
                <p className="text-primary">Designed & built by Nikola Cvrlja — 2025</p>
            </div>

            <div></div>
        </footer>
    );
}

export default Footer;
