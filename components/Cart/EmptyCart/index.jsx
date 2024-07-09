import Image from "next/image";
import Link from "next/link";
import emptyCart from '@/assets/image/empty-cart.png';

const EmptyCart = () => {
    return (
        <div className='flex flex-col items-center gap-4 pt-10'>
               <div className='relative h-96 w-full'>
                  <Image
                     src={emptyCart}
                     alt='empty-cart'
                     fill
                     sizes='100%'
                     className='object-contain'
                  />
               </div>
               <div className='flex flex-col gap-2'>
                  <Link
                     href={'/products'}
                     className='w-full rounded-md bg-primary px-6 py-1.5 text-white transition-all hover:bg-primary-500 active:bg-primary/90'
                  >
                     Back to dishes
                  </Link>
                  <button>My order history</button>
               </div>
            </div>
    )
}

export default EmptyCart;