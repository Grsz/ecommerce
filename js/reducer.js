import { GET_GAMES, SWITCH_ORDER_STATE, SWITCH_ITEM_ORDER_STATE, SET_BASKET_SIZE } from "./constants";

const initialState = {
    games: [],
    orderState: "order",
    basketSize: "none",
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_GAMES: 
            return {
                ...state, 
                games: action.games.map((game, id) => ({...game, id, inBasket: false}))
            }

        case SWITCH_ORDER_STATE:
            const { orderState } = action;
            return {...state, orderState}

        case SWITCH_ITEM_ORDER_STATE:
            const { inBasket, id } = action;
            return {
                ...state,
                games: state.games.map(game => game.id === id ? {...game, inBasket} : game)
            }
        case SET_BASKET_SIZE:
            const { basketSize } = action;
            return {...state, basketSize}
        default:
            return state
    }
}
export default reducer