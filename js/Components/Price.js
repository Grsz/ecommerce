import React from 'react';
import { images } from '../../images';

const Price = ({price}) => <div className="price">
    <img src={images.coins} alt="coins" />
    <p className="sm bold">{price + " Gil"}</p>
</div>

export default Price