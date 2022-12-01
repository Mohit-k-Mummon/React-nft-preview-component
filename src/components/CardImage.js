import nft from '../assets/image-equilibrium.jpg';
import './CardImage.css';
import eye from '../assets/icon-view.svg';

const CardImage = () => {
	return (
		<div className='card__img-container'>
			<div className='card__img-overlay'>
				<img src={eye} alt='hidden eye'></img>
			</div>
			<img className='card__img' src={nft} alt='' />
		</div>
	);
};

export default CardImage;
