import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
    goods: [],
    isLoading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
}

export const ShopContext = createContext()

export const ContextProvider = ({ children }) => {

    const [value, dispatch] = useReducer(reducer, initialState)

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }
    
    value.handleBasketShow = () => {
        dispatch({ type: 'TOOGLE_BASKET_SHOW' })
    }

    value.removeFromBasket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } })
    }

    value.addToBasket = (item) => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: item
        })
    }

    value.decrementQuantity = (id) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: id })
    }

    value.incrementQuantity = (id) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: id })
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}