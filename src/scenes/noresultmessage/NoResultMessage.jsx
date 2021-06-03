import { motion } from 'framer-motion';

function NoResultMessage() {
	return (
		<motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="noresult-message">
			<h1>No se han encontrado resultados, prueba con otra palabra 😕</h1>
		</motion.div>
	);
}

export default NoResultMessage;
