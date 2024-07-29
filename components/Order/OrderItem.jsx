import { useState } from 'react';
import ProductItem from './ProductItem';

const OrderItem = ({ order }) => {
   const [total, setTotal] = useState(0)
   return (
      <div>
         <span>№ {order.id}</span>
         <div>
            <div className='grid w-full max-w-3xl grid-cols-3'>
               <span>Image</span>
               <span>Title</span>
               <span>Quantity</span>
            </div>
            {order.items.map((item) => (
               <ProductItem key={item.product} item={item} setTotal={setTotal}/>
            ))}
            <span>Total: {total}</span>
         </div>
      </div>
   );
};

export default OrderItem;
