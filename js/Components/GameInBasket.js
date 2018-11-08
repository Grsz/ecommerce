import React from 'react';
import { removeFromBasket } from '../buttonProps';
import Button from './Button';
import Price from './Price';
import { images } from '../../images';

const GameInBasket = ({ props }) => {
    const { name, price, id } = props;
    return <div className="gameInBasket">
        <img src={images.games[id]} alt={name} className="cover" />

        <div className="gameDetails inBasket">
            <p className="sm bold">{name}</p>
            <Price price={price} />
        </div>

        <Button props={removeFromBasket(id)} />
    </div>
};
export default GameInBasket