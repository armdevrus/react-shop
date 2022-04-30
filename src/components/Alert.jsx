import {useEffect, useContext} from 'react'
import {ShopContext} from '../context'

function Alert(){

    const { closeAlert = Function.prototype,  alertName: name = ''} = useContext(ShopContext);

    useEffect(() => {
        const timerid = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerid);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    );
}

export {Alert}