import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGames, setBasketSize } from '../actions';
import { games } from '../../games';
import { openBasketMobile } from '../buttonProps';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Basket from './Basket';
import Order from './Order';

class App extends Component {

  componentDidMount = () => {
    const { getGames } = this.props;

    getGames(games);
    this.calculateBasketSize();
    window.addEventListener('resize', this.calculateBasketSize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.calculateBasketSize);
  }

  componentDidUpdate = () => {
    this.calculateBasketSize()
  }

  calculateBasketSize = () => {
    const { orderState, setBasketSize, basketSize } = this.props;
    let newBasketSize = "";

    if(orderState === "checkout"){
      newBasketSize = "full"
    } else {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      if(vw > vh && vw > 800){
        newBasketSize = "side"
      } else {
        newBasketSize = "button"
      }
    }
    basketSize !== newBasketSize && setBasketSize(newBasketSize)
  }
  render() {
    const { games, basketSize, orderState } = this.props;
    const gamesInBasket = games.filter(game => game.inBasket);

    return <div className="app">
      <Header>
        {basketSize === "button" && 
          <Button props={openBasketMobile} />
        }
      </Header>
      <main>
        {orderState === "order" && 
          <Order games={games} />
        }
        <Basket games={gamesInBasket} size={basketSize} />
      </main>
    </div>
  }
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = { getGames, setBasketSize };

export default connect(mapStateToProps, mapDispatchToProps)(App);
