import React from 'react';
import { addToBasket } from '../buttonProps';
import Button from './Button';
import Price from './Price';
import { images } from '../../images';

const GameInOrder = ({props}) => {
    const { name, desc, price, id, inBasket } = props;
    return <div className="gameInOrder">
        <img src={images.games[id]} alt={name} className="cover"/>

        <div className="gameDetails inOrder">
            <p className="md bold">{name}</p>
            <p className="sm">{desc}</p>
            <Price price={price} />
            
            <Button props={addToBasket(id)} />
        </div>
        <img src={images.controller} alt="controller" className="controller" />
        <span className={`disabled ${inBasket}`} />
    </div>
}

export default GameInOrder