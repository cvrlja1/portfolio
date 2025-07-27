import LinkedInIcon from '../assets/linkedin.svg?react';
import GitHubIcon from '../assets/github.svg?react';

function  Footer() {
    return (
        <div className="grid grid-cols-3 grid-rows-1 items-center bg-stone-50 w-full h-16 ">
            <div className="flex flex-row pl-10 gap-5">
                <a href="https://github.com/cvrlja1"><GitHubIcon className="w-8 h-8" /></a>
                <LinkedInIcon className="w-8 h-8" />
            </div>
            <div className="pl-10 pr-10">
                <p className="text-primary">Designed & built by Nikola Cvrlja — 2025 </p>
            </div>
        </div>
    )
}

export default Footer