import ProjectCard from "./ProjectCard";
import project1Img from "../assets/cub3D.jpg";
import project2Img from "../assets/minishell.png";
import ProjectInfo from "./ProjectInfo.jsx";
import { useState } from "react";
import { projectDescriptions } from "./projectDescriptions.js";



function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleCardClick = (project) => {
        setIsVisible(true);
        setSelectedProject(project);
    };

    const closeProjectInfo = () => {
        setSelectedProject(null);
    };

    return (
            <section id="projects" className="py-12 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                        handleClick = { () =>
                        handleCardClick({
                            title: "cub3D",
                            description: projectDescriptions.cub3D,
                            tech: "C",
                            video: true,
                            link: "https://github.com/cvrlja1/cub3d",
                        })
                    }
                        title="cub3D"
                        description="Recreating Doom 3D with raycasting in C."
                        image={project1Img}
                        codeLink="https://github.com/cvrlja1/cub3d"
                    />
                    <ProjectCard
                        handleClick = { () =>
                        handleCardClick({
                            title: "Minishell",
                            description: projectDescriptions.minishell,
                            tech: "C",
                            video: false,
                            link: "https://github.com/cvrlja1/minishell",
                        })
                        }
                        title="minishell"
                        description="Recreating the famous bash shell."
                        image={project2Img}
                        codeLink="https://github.com/cvrlja1/minishell"
                        />
                </div>
                {selectedProject && (
                    <ProjectInfo
                        name={selectedProject.title}
                        description={selectedProject.description}
                        tech={selectedProject.tech}
                        isVisible={isVisible}
                        onClose={closeProjectInfo}
                        video={selectedProject.video}
                        link={selectedProject.link}
                    />
                )}
            </section>
    )
}

export default Projects