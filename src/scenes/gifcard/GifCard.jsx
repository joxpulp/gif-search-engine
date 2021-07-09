import {motion} from 'framer-motion';
import PropTypes from 'prop-types'

function GifCard({ gifurl, slug, onLoad, opacityAnimation, onClickImage }) {
	return (
		<motion.div onClick={onClickImage} initial={{opacity: 0}} animate={{opacity: opacityAnimation}} className="gif-card">
			<img className="gif-image" onLoad={onLoad} src={gifurl} alt={slug} />
		</motion.div>
	);
}

export default GifCard;

GifCard.propTypes = {
	gifurl: PropTypes.string.isRequired,
}