import NikolaPic from '../assets/nikola_picture.jpg'
import { AnimatePresence, motion } from "framer-motion";


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
                <img src={NikolaPic} alt="Nikola" width={200} height={200} className="border-2  rounded-full"/>
                <p className="text-primary">Welcome to my portfolio page <br/>My name is Nikola, im 28 and self-taught developer or whatever lol.</p>
            </motion.div>
        </div>
    )
}

export default About;