import { useContext } from "react";
import { ShopContext } from "../context";
import { BasketItem } from "./BasketItem";

function BasketList() {
    const { 
        order = [], handleBasketShow = Function.prototype
    } = useContext(ShopContext);

    const totalValue = order.reduce((accum, currentValue) => {
        return accum + currentValue.price.finalPrice * currentValue.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <i
                onClick={handleBasketShow}
                className="material-icons basket-close"
            >
                close
            </i>
            <li className="collection-item #42a5f5 blue lighten-1 active">
                Корзина
            </li>
            {order.length ? (
                order.map((elem) => <BasketItem key={elem.id} {...elem} />)
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item #42a5f5 blue lighten-1 active">
                Общая стоимость: {totalValue} руб.
                <span className="btn-buy">Оформить</span>
            </li>
        </ul>
    );
}
export { BasketList };
