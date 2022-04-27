function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;

    return (
        <div
            className="cart #42a5f5 blue darken-4 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
