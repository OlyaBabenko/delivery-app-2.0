import { useCart } from '@/store/cart';
import CartItem from './CartItem';

const CartTable = () => {
   const cart = useCart();

   return (
      <>
         <div className='hidden md:grid md:grid-cols-[minmax(150px,1fr)_minmax(150px,2fr)_minmax(100px,1fr)_minmax(100px,1fr)_minmax(100px,1fr)] place-items-center gap-x-2 border-b border-b-primary-300 text-primary-400'>
            <span className='col-span-2 place-self-start'>Item</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
         </div>
         {cart.map((el) => {
            return (
                <CartItem key={el.id} product={el}/>
            );
         })}
      </>
   );
};

export default CartTable;
