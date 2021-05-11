import HashLoader from "react-spinners/HashLoader";
import { motion } from 'framer-motion';
import './loadingspinner.css'

function LoadingSpinner({ children, spinnerColor, textColor }) {
	return (
		<motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="loading-container">
			<HashLoader size="100px" color={spinnerColor} loading={true} />
			<h3 style={{color: textColor}}>{children}</h3>
		</motion.div>
	);
}

export default LoadingSpinner;
