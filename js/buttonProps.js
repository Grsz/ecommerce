import { switchItemInBasket, switchOrderState } from "./actions";
import { images } from "../images";

export const addToBasket = id => ({
    element: "button",
    title: "Add to Basket",
    className: "sm",
    onClick: () => switchItemInBasket(true, id)
});
export const removeFromBasket = id => ({
    element: "img",
    src: images.bin,
    alt: "removeFromBasket",
    className: "bin",
    onClick: () => switchItemInBasket(false, id)
});

export const openBasketMobile = {
    element: "button",
    title: "To Basket",
    className: "openBasketMobile",
    onClick: () => switchOrderState("checkout")
};

export const openBasketDesktop = hasGames => ({
    element: "button",
    title: "Continue",
    className: `lg ${!hasGames && "disabled"}`,
    onClick: hasGames ? () => switchOrderState("checkout") : undefined
});

export const closeBasket = {
    element: "button",
    title: "Go Back",
    className: "lg",
    onClick: () => switchOrderState("order")
}