import { motion } from 'framer-motion';
import './noresultmessage.css'

function NoResultMessage() {
	return (
		<motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="noresult-message">
			<h1>No se han encontrado resultados, prueba con otra palabra <span role="img" aria-label="confused-face">😕</span></h1>
		</motion.div>
	);
}

export default NoResultMessage;
