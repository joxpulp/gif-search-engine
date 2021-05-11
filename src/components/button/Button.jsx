import './button.css'

function Button({children, bgColor, borderColor, border, textColor, borderRadius, onClick}) {
	return (
		<button 
            onClick={onClick}
			style={{
				backgroundColor: bgColor,
				border: border && `1px solid ${borderColor}`,
				color: textColor,
				borderRadius: borderRadius,
			}}
			className="btn"
		>
			{children}
		</button>
	);
}

export default Button;
