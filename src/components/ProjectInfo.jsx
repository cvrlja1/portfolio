import { useState, useEffect } from 'react'
import GitHubIcon from '../assets/github.svg?react';


function ProjectInfo(props) {
    const [ hasVideo, setHasVideo ] = useState(false);
    const [ link, setLink ] = useState(null);

    const handleLink = () => {
        if (props.link) {
            setLink(props.link);
        }
    }

    useEffect(() => {
        if (props.video) {
            setHasVideo(true);
        }
    }, [props.video]);

    return (
        <div className={`fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100/40 rounded-lg shadow-xl 
            backdrop-blur-sm border border-white/50  transition-opacity duration-300 ease-in-out 
            ${props.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`} >
            <div className="flex flex-col gap-5 p-5">
             <div className="flex flex-col gap-1">
                 <button
                     onClick={props.onClose}
                     className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold hover:cursor-pointer"
                     aria-label="Close"
                 >
                     &times;
                 </button>
                 <h1 className="text-xl font-mono text-gray-900 tracking-wide"><b>Project:</b> {props.name}
                     <a href={`${props.link}`} target="_blank" rel="noopener noreferrer">
                     <GitHubIcon className="w-8 h-8 hover:text-blue-600 transition-colors inline ml-2" />
                 </a></h1>
                 <h1 className="text-xl font-mono text-gray-900 tracking-wide"><b>Tech Stack:</b> {props.tech}</h1>
                 <h1 className="text-md font-mono text-gray-900  tracking-wide"><b>Description:</b> {props.description}</h1>
                </div>
                <div className={`${hasVideo ? "" : "hidden"}`}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rnWRs_BBgXc?si=f2AQgkPAyZg55Mu6"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo;