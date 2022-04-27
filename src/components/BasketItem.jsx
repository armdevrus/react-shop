function BasketItem(props) {
    const {
        id,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incrementCountItem = Function.prototype,
        decrementCountItem = Function.prototype,
    } = props;

    return (
        <li className="collection-item">
            {displayName} x
             <i
                className="basket-quantity material-icons"
                onClick={() => decrementCountItem(id)}
            >
                remove
            </i>
             {quantity}
            <i
                className="basket-quantity material-icons"
                onClick={() => incrementCountItem(id)}
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
