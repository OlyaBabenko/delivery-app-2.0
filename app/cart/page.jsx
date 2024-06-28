'use client';
import CartTable from '@/components/Cart/CartTable';
import { useCart } from '@/store/cart';

const Cart = () => {
   const cart = useCart();
   return (
      <div className='py-16 text-primary'>
         <h2 className='text-center text-2xl font-semibold'>Cart</h2>
         {cart && (
            <div className='flex justify-center py-3'>
               <CartTable />
            </div>
         )}
      </div>
   );
};

export default Cart;
