'use client';
import CartTable from '@/components/Cart/CartTable';
import RecipientForm from '@/components/Cart/RecipientForm';
import { useCart } from '@/store/cart';
import EmptyCart from '@/components/Cart/EmptyCart';

const Cart = () => {
   const cart = useCart();
   return (
      <div className='py-16 text-primary'>
         <h2 className='text-center text-2xl font-semibold'>Cart</h2>
         {cart && (
            <div className='flex justify-center py-3'>
               <div className='flex w-full max-w-96 flex-col px-3 pt-5 md:max-w-screen-lg'>
                  <CartTable />
                  <RecipientForm />
               </div>
            </div>
         )}
         {!cart && <EmptyCart />}
      </div>
   );
};

export default Cart;
