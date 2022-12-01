import './AuctionInfo.css';

import clockIcon from '../assets/icon-clock.svg';
import ethIcon from '../assets/icon-ethereum.svg';

const AuctionInfo = props => {
	return (
		<div className='card__auction-info'>
			<div className='price'>
				<img src={ethIcon} alt='eth icon'></img>
				<div>{props.price} ETH</div>
			</div>
			<div className='time'>
				<img src={clockIcon} alt='clock icon'></img>
				<p>{props.daysLeft} days left</p>
			</div>
		</div>
	);
};

export default AuctionInfo;
