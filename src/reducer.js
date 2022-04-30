export const reducer = (state, { type, payload }) => {

    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                isLoading: false
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((elem) => elem.id !== payload.id)
            }
        case 'TOOGLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'ADD_TO_BASKET': {

            const itemIndexFound = state.order.findIndex((elem) => elem.id === payload.id);

            let newOrder = null;

            if (itemIndexFound < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndexFound) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem
                    }
                })
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName
            }
        }
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((elem) =>
                    elem.id === payload ? {
                        ...elem,
                        quantity: elem.quantity !== 0 ? elem.quantity - 1 : elem.quantity
                    } :
                        elem
                )
            }
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((elem) =>
                    elem.id === payload ? {
                        ...elem,
                        quantity: elem.quantity + 1
                    } :
                        elem
                )
            }
        default:
            return state;
    }



}