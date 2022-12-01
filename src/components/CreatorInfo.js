import avatar from '../assets/image-avatar.png';
import './CreatorInfo.css';

const CreatorInfo = props => {
	return (
		<div className='card__creator-info'>
			<img src={avatar} alt='nft creator avatar'></img>
			<p>
				Creation of <a href='google.com'>{props.creator}</a>
			</p>
		</div>
	);
};

export default CreatorInfo;
