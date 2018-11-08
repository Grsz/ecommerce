import { SWITCH_ORDER_STATE, SWITCH_ITEM_ORDER_STATE, GET_GAMES, SET_BASKET_SIZE } from "./constants";

export const getGames = games => ({
    type: GET_GAMES,
    games
})
//order or checkout
export const switchOrderState = to => ({
    type: SWITCH_ORDER_STATE,
    orderState: to
})
//in basket or not (bool)
export const switchItemInBasket = (inBasket, id) => ({
    type: SWITCH_ITEM_ORDER_STATE,
    id,
    inBasket
})
export const setBasketSize = basketSize => ({
    type: SET_BASKET_SIZE,
    basketSize
})