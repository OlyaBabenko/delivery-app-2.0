import Image from 'next/image';
import PlusIcon from '@/assets/icon/plus.svg';
import MinusIcon from '@/assets/icon/minus.svg';
import { addToCart, deleteFromCart } from '@/store/cart';

const CartItem = ({ product }) => {
   const imageLoader = ({ src }) => {
      return `${src}?w=600`;
   };
   return (
      <div className='mb-2 place-items-center gap-x-2 rounded-md border border-primary-100 bg-white/60 px-2 py-3 shadow-md md:mb-0 md:grid md:grid-cols-[minmax(150px,1fr)_minmax(150px,2fr)_minmax(100px,1fr)_minmax(100px,1fr)_minmax(100px,1fr)] md:rounded-none md:border-x-0 md:border-b md:border-b-primary-300 md:bg-white/0 md:px-0 md:shadow-none'>
         <div className='relative h-36 w-full md:h-24'>
            <Image
               loader={imageLoader}
               src={product.imgUrl}
               alt={product.name}
               fill={true}
               sizes='100%'
               className='object-contain'
               priority
            />
         </div>
         <h3 className='mt-2 text-center font-medium md:mt-0'>{product.name}</h3>
         <span className='mt-2 flex w-full justify-between md:mt-0 md:justify-center'>
            <span className='md:hidden'>Price:</span>
            {product.actualPrice} ₴
         </span>
         <div className=' mt-2 flex items-center justify-between md:mt-0'>
            <span className='md:hidden'>Quantity:</span>
            <div className='flex items-center justify-center gap-1'>
               <button
                  onClick={() => deleteFromCart(product)}
                  className='rounded-full p-1 text-primary-300 transition-all hover:scale-105 hover:bg-primary-200 hover:text-primary active:bg-primary-200 active:text-primary-400'
               >
                  <MinusIcon className='pointer-events-none h-4 w-4' />
               </button>
               <span>{product.count}</span>
               <button
                  onClick={() => addToCart(product)}
                  className='rounded-full p-1 text-primary-300 transition-all hover:scale-105 hover:bg-primary-200 hover:text-primary active:bg-primary-200 active:text-primary-400'
               >
                  <PlusIcon className='pointer-events-none h-4 w-4' />
               </button>
            </div>
         </div>

         <span className='mt-2 flex w-full justify-between font-semibold md:mt-0 md:justify-center md:font-normal'>
            <span className='md:hidden'>Total:</span>
            {(product.count * product.actualPrice).toFixed(2)} ₴
         </span>
      </div>
   );
};

export default CartItem;
