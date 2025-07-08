import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import project1Img from "../assets/cub3D.jpg";
import project2Img from "../assets/minishell.png";


function Projects() {
    return (
        <motion.div
            className="flex justify-start space-x-2 w-full h-[450px] items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            <section className="py-12 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                        title="cub3D"
                        description="Recreating Doom 3D with raycasting in C."
                        image={project1Img}
                        codeLink="https://github.com/cvrlja1/cub3d"
                    />
                    <ProjectCard
                        title="minishell"
                        description="Recreating the famous bash shell."
                        image={project2Img}
                        codeLink="https://github.com/cvrlja1/minishell"
                        />
                </div>
            </section>
        </motion.div>
    )
}

export default Projects