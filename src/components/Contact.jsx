import { AnimatePresence, motion } from "framer-motion";
import Form from "../components/Form";

function Contact() {
    return (
        <div className="flex justify-center">
            <motion.div
                className="flex justify-start w-[350px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}

            >
            <Form />
            </motion.div>
        </div>
    )
}

export default Contact