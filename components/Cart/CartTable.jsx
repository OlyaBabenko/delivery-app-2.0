import Image from 'next/image';
import { addToCart, deleteFromCart, useCart, useTotalPrice } from '@/store/cart';
import PlusIcon from '@/assets/icon/plus.svg';
import MinusIcon from '@/assets/icon/minus.svg';
import UIButton from '../UI/UIButton';

const CartTable = () => {
   const cart = useCart();
   const total = useTotalPrice();
   const imageLoader = ({ src }) => {
      return `${src}?w=600`;
   };
   return (
      <div className='flex max-w-screen-lg flex-col px-3 pt-5'>
         <div className='grid grid-cols-[minmax(150px,1fr)_minmax(200px,2fr)_minmax(150px,1fr)_minmax(150px,1fr)_minmax(150px,1fr)] place-items-center gap-x-2 border-b border-b-primary-300 text-primary-400'>
            <span className='col-span-2 place-self-start'>Item</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
         </div>
         {cart.map((el) => {
            return (
               <div
                  key={el.id}
                  className='bprder-b-primary-300 grid grid-cols-[minmax(150px,1fr)_minmax(200px,2fr)_minmax(150px,1fr)_minmax(150px,1fr)_minmax(150px,1fr)] place-items-center gap-x-2 border-b py-3'
               >
                  <div className='relative h-24 w-full'>
                     <Image
                        loader={imageLoader}
                        src={el.imgUrl}
                        alt={el.name}
                        fill={true}
                        sizes='100%'
                        className='object-contain'
                        priority
                     />
                  </div>
                  <h3 className='text-center'>{el.name}</h3>
                  <span>{el.actualPrice}</span>
                  <div className='flex items-center justify-center gap-1'>
                     <button
                        onClick={() => deleteFromCart(el)}
                        className='rounded-full p-1 text-primary-300 transition-all hover:scale-105 hover:bg-primary-200 hover:text-primary active:bg-primary-200 active:text-primary-400'
                     >
                        <MinusIcon className='pointer-events-none h-4 w-4' />
                     </button>
                     <span>{el.count}</span>
                     <button
                        onClick={() => addToCart(el)}
                        className='rounded-full p-1 text-primary-300 transition-all hover:scale-105 hover:bg-primary-200 hover:text-primary active:bg-primary-200 active:text-primary-400'
                     >
                        <PlusIcon className='pointer-events-none h-4 w-4' />
                     </button>
                  </div>
                  <span>{(el.count * el.actualPrice).toFixed(2)}</span>
               </div>
            );
         })}
         <div className='mt-7 w-80 self-end'>
            <div className='flex justify-between'>
               <span className='text-lg font-medium'>Subtotal price:</span>
               <span className='text-lg font-medium'>{total}</span>
            </div>
            <div className='flex justify-between'>
               <span className='text-lg font-medium'>Delivery:</span>
               <span className='text-lg font-medium'>50</span>
            </div>
            <div className='flex justify-between'>
               <span className='text-lg font-semibold'>Total price:</span>
               <span className='text-lg font-semibold'>{(Number(total) + 50).toFixed(2)}</span>
            </div>
            <UIButton>
               <span className='font-semibold'>Buy</span>
            </UIButton>
         </div>
      </div>
   );
};

export default CartTable;
