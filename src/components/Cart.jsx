import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {

    const { handleBasketShow = Function.prototype, order = [] } = useContext(ShopContext);

    return (
        <div
            className="cart #42a5f5 blue darken-4 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_cart</i>
            {order.length ? (
                <span className="cart-quantity">{order.length}</span>
            ) : null}
        </div>
    );
}

export { Cart };
