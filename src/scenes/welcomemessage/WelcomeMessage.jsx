import { motion } from 'framer-motion';

function WelcomeMessage() {
	return (
		<motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="welcome-message">
			<h1>Bienvenido! Busca GIFs en la barra de busqueda 👆</h1>
		</motion.div>
	);
}

export default WelcomeMessage;
