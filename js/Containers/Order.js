import React from 'react';
import GameInOrder from '../Components/GameInOrder'

const Order = ({ games }) => <div className="order">
    {games.map((game, i) => <GameInOrder props={game} key={"o" + i} />)}
</div>

export default Order