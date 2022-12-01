import './CardInfo.css';

const CardInfo = props => {
	return (
		<div className='card__info'>
			<h2>{props.title}</h2>
			<p className='card__info-tagline'>{props.tagline}</p>
		</div>
	);
};

export default CardInfo;
