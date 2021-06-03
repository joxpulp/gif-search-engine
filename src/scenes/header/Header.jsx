import { useContext } from "react";
import { DarkModeContext } from "../../context/darkmodecontext/DarkModeContext";
import Button from "../../components/button/Button";
import logoLight from "../../assets/svg/logo-desktop.svg";
import logoDark from "../../assets/svg/logo-modo-noct.svg";
import { motion } from 'framer-motion';

function Header() {
	const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

	const handleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<motion.div initial={{y: "-100%"}} animate={{y: 0}}  className="header">
			<img src={isDarkMode ? logoDark : logoLight} alt="logo" />
			<Button
				bgColor="transparent"
				border={true}
				borderColor={isDarkMode ? "white" : "#6809E1"}
				textColor={isDarkMode ? "white" : "#6809E1"}
				borderRadius="61px"
				onClick={handleDarkMode}
			>
				{isDarkMode ? "MODO LIGHT" : "MODO DARK"}
			</Button>
		</motion.div>
	);
}

export default Header;
