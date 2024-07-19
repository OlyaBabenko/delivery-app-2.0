import Image from 'next/image';
import Link from 'next/link';
import emptyCartImg from '@/assets/image/empty-cart.png';

const EmptyCart = () => {
   return (
      <div className='flex flex-col items-center gap-4 pt-10'>
         <div className='relative h-96 w-full'>
            <Image src={emptyCartImg} alt='empty-cart' fill sizes='100%' className='object-contain' />
         </div>
         <div className='flex flex-col gap-2'>
            <Link
               href={'/products'}
               className='w-full rounded-md bg-primary px-6 py-1.5 text-white transition-all hover:bg-primary-500 active:bg-primary/90'
            >
               Back to dishes
            </Link>
            <Link
               href={'/order'}
               className='w-full rounded-md py-1.5 text-center transition-all hover:bg-primary-200/70 active:bg-primary-100'
            >
               My order history
            </Link>
         </div>
      </div>
   );
};

export default EmptyCart;
