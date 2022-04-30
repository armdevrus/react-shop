import {useContext} from 'react'
import {ShopContext} from '../context'

function BasketItem(props) {
    const {
        id,
        displayName,
        price,
        quantity,
    } = props;

    const {
        removeFromBasket,
        incrementQuantity,
        decrementQuantity,
    } = useContext(ShopContext);

    return (
        <li className="collection-item">
            {displayName} x
             <i
                className="basket-quantity material-icons"
                onClick={() => decrementQuantity(id)}
            >
                remove
            </i>
             {quantity}
            <i
                className="basket-quantity material-icons"
                onClick={() => incrementQuantity(id)}
            >
                add
            </i>
            = {price.finalPrice * quantity} руб.
            <span className="secondary-content">
                <i
                    onClick={() => removeFromBasket(id)}
                    className="material-icons basket-delete"
                >
                    delete
                </i>
            </span>
        </li>
    );
}

export { BasketItem };
