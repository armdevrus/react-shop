import { useContext } from 'react';
import { ShopContext } from '../context';
import {GoodsItem} from './GoodsItem';

function GoodsList () {

    const { goods } = useContext(ShopContext);

    if(!goods.length){
        return <h2>Nothing here</h2>
    } else {
        return <div className='goods'>
            {
                goods.map(elem => 
                    <GoodsItem key={elem.mainId} {...elem} />
                    )
            }
        </div>
    }

  
}
export {GoodsList}