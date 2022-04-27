import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import {Alert} from './Alert'

function Shop() {
    const [goods, setGoods] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('')

    function incrementCountItem(id) {
        const newOrder = order.map(elem => {
          if(elem.id === id){
            return {
                ...elem,
                quantity: elem.quantity + 1
            }
          } else {
              return elem
          }
        });
        setOrder(newOrder);
    }
    function decrementCountItem(id) {
        const newOrder = order.map(elem => {
          if(elem.id === id){
            return {
                ...elem,
                quantity: elem.quantity !== 0 ? elem.quantity - 1 : elem.quantity
            }
          } else {
              return elem
          }
        });
        setOrder(newOrder);
    }

    function addToBasket(item) {
        const itemOrderFound = order.some((elem) => elem.id === item.id);

        const itemOrder = {
            ...item,
            quantity: order.length + 1,
        };

        if (itemOrderFound) {
            return null;
        } else {
            setOrder([...order, itemOrder]);
        }
        setAlertName(item.displayName)
    }

    function removeFromBasket(itemId) {
        const newOrder = order.filter((elem) => elem.id !== itemId);
        setOrder(newOrder);
    }

    function handleBasketShow() {
        setBasketShow(!isBasketShow);
    }

    function closeAlert(){
        setAlertName('')
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => data.shop && setGoods(data.shop));
        setLoading(!isLoading);
        // eslint-disable-next-line
    }, []);

    return (
        <main className="container_main content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {isLoading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incrementCountItem={incrementCountItem}
                    decrementCountItem={decrementCountItem}
                />
            )}
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    );
}

export { Shop };
