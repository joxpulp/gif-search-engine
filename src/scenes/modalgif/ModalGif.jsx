import {useContext} from 'react';
import {SearchContext} from '../../context/searchcontext/SearchContext';
import { DarkModeContext } from "../../context/darkmodecontext/DarkModeContext";
import {motion} from 'framer-motion';

function ModalGif() {
    const { isDarkMode } = useContext(DarkModeContext);
    const {selectedGif, setSelectedGif} = useContext(SearchContext);

    const handleCloseModal = () => {
        setSelectedGif(null)
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity: 0, y: "-100%" }} className="modal-container" onClick={handleCloseModal}>
            <motion.div style={{backgroundColor: isDarkMode ? "#242424f6" : "#4f25e7f6"}} className="modal-gif">
                <motion.img initial={{y: "-100%", opacity: 0}} animate={{y: 0, opacity: 1}} src={selectedGif} alt="single-gif"/>
                <motion.h5 transition={{delay: 0.3}} initial={{y: "-100%", opacity: 0}} animate={{y: 0, opacity: 1}} className="desktop-message">Para guardar el GIF, click derecho sobre la imagen y "Guardar imagen como..."</motion.h5>
                <motion.h5 transition={{delay: 0.3}} initial={{y: "-100%", opacity: 0}} animate={{y: 0, opacity: 1}} className="mobile-message">Para guardar el GIF, manten presionada la imagen y guardala</motion.h5>
            </motion.div>
        </motion.div>
    )
}

export default ModalGif