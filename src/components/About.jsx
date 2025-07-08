import { AnimatePresence, motion } from "framer-motion";
import AboutMe from "./AboutMe";


function About() {
    return (
        <div className="flex justify-start space-x-2 w-full h-[450px] items-start">
            <motion.div
                className="flex justify-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
             <AboutMe />
            </motion.div>
        </div>
    )
}

export default About;