import './Card.css';
import CardImage from './CardImage';
import CardInfo from './CardInfo';
import AuctionInfo from './AuctionInfo';
import CreatorInfo from './CreatorInfo';

const Card = props => {
	return (
		<div className='card'>
			<CardImage />
			<CardInfo title={props.cardInfo.title} tagline={props.cardInfo.tagline} />
			<AuctionInfo daysLeft={props.cardInfo.daysLeft} price={props.cardInfo.price} />
			<CreatorInfo creator={props.cardInfo.creator} />
		</div>
	);
};

export default Card;
