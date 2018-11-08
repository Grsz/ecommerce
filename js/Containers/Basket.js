import React from 'react';
import { openBasketDesktop, closeBasket } from '../buttonProps';
import Button from '../Components/Button';
import GameInBasket from '../Components/GameInBasket';

class Basket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasGames: false
        }
    }
    componentDidUpdate = () => {
        const hasGames = Boolean(this.props.games.length);
        hasGames !== this.state.hasGames && this.setState({hasGames})
    }
    content = () => {
        const { hasGames } = this.state;
        const { games } = this.props;
        if(hasGames){
            const gamesInBasket = () => <div className="basketGamesContainer">
                {games.map((game, i) => <GameInBasket props={game} key={"b" + i} />)}
            </div>;

            const overallPrice = () => {
                const price = games.map(game => game.price).reduce((a, b) => a + b, 0)
                return <div className="overallPrice">
                    <p className="bold md">Total</p>
                    <p className="bold md">{price + " Gil"}</p>
                </div>
            };

            return <div className="basketContent">
                {gamesInBasket()}
                {overallPrice()}
            </div>
        } else {
            return <div className="basketContent">
                <p className="md center">No items</p>
            </div>
        }
    }
    buttonProps = () => {
        const { hasGames } = this.state;
        const { size } = this.props;

        if(size === "full"){
            return closeBasket
        } else {
            return openBasketDesktop(hasGames)
        }
    }
    render(){
        const { size } = this.props;
        return <div className={`basketContainer ${size}`}>
            <div className="basket">
                <h1>Basket</h1>
                {this.content()}
                <Button props={this.buttonProps()} />
            </div>
        </div>
    }
}
export default Basket;