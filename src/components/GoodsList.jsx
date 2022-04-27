import {GoodsItem} from './GoodsItem';

function GoodsList (props) {

    const {goods = [], addToBasket = Function.prototype} = props;


    if(!goods.length){
        return <h2>Nothing here</h2>
    } else {
        return <div className='goods'>
            {
                goods.map(elem => 
                    <GoodsItem key={elem.mainId} addToBasket={addToBasket} {...elem} />
                    )
            }
        </div>
    }

  
}
export {GoodsList}