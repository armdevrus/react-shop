import {useContext} from 'react';
import {ShopContext} from '../context';


function GoodsItem(props) {

    const { 
        addToBasket = Function.prototype,
    } = useContext(ShopContext);

    const { displayName, price, mainId } = props;

    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img
                        src={props.displayAssets[0].full_background}
                        alt={displayName}
                    />
                </div>
                <div className="card-content">
                    <span className="card-title">{displayName}</span>
                    <p>{props.granted[0].description}</p>
                </div>
                <div className="card-action">
                    <span className="right finalPrice">
                        {price.finalPrice} руб.
                    </span>
                    <button
                        className="btn #42a5f5 blue lighten-1"
                        onClick={() =>
                            addToBasket({
                                displayName,
                                price,
                                id: mainId,
                            })
                        }
                    >
                        Купить
                    </button>
                </div>
            </div>
        </>
    );
}

export { GoodsItem };
