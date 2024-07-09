'use client';
import useProduct from '@/hooks/useProduct';
import Image from 'next/image';
import StarIcon from '@/assets/icon/star.svg';
import { addToCart } from '@/store/cart';

const ProductItem = ({ params }) => {
   const { product } = useProduct(params.id);
   const imageLoader = ({ src }) => {
      return `${src}?w=600`;
   };
   return (
      <div className='flex gap-3 px-3 py-9'>
         <div className='relative h-96 w-2/3 max-w-screen-sm'>
            {product?.imgUrl && (
               <Image
                  loader={imageLoader}
                  src={product.imgUrl}
                  alt={product.name}
                  fill={true}
                  sizes='100%'
                  className='object-contain'
                  priority
               />
            )}
         </div>
         <div className='flex w-[calc(33.333%-12px)] flex-col justify-center px-5'>
            {product?.name && (
               <h2 className='text-3xl font-semibold text-primary'>{product.name}</h2>
            )}
            {product?.description && (
               <p className='mt-4 text-primary'>
                  <span className='text-primary-300'>Description: </span>
                  {product.description}
               </p>
            )}
            {product?.weight && (
               <p className='text-primary'>
                  <span className='text-primary-300'>Weight: </span>
                  {product.weight}
               </p>
            )}
            <div className='mt-5 flex flex-row-reverse items-center justify-between'>
               <div className='flex gap-0.5'>
                  <StarIcon
                     className={`h-5 w-5 ${product?.rating > 1 ? 'fill-warning-400 text-warning-400' : 'text-grey-300'}`}
                  />
                  <StarIcon
                     className={`h-5 w-5 ${product?.rating > 2 ? 'fill-warning-400 text-warning-400' : 'text-grey-300'}`}
                  />
                  <StarIcon
                     className={`h-5 w-5 ${product?.rating > 3 ? 'fill-warning-400 text-warning-400' : 'text-grey-300'}`}
                  />
                  <StarIcon
                     className={`h-5 w-5 ${product?.rating > 4 ? 'fill-warning-400 text-warning-400' : 'text-grey-300'}`}
                  />
                  <StarIcon
                     className={`h-5 w-5 ${product?.rating > 5 ? 'fill-warning-400 text-warning-400' : 'text-grey-300'}`}
                  />
               </div>
               <div className='flex flex-col gap-1'>
                  {product?.oldPrice && (
                     <span className='text-sm text-grey-500 line-through'>{product.oldPrice} ₴</span>
                  )}
                  {product?.actualPrice && (
                     <span
                        className={` text-2xl font-semibold ${product.oldPrice ? 'text-error' : 'text-primary-800'}`}
                     >
                        {product.actualPrice} ₴
                     </span>
                  )}
               </div>
            </div>

            <button
               onClick={() => addToCart(product)}
               className='mt-5 w-full min-w-32 rounded-md bg-primary px-3 py-1 text-lg text-white hover:bg-primary-500 active:bg-primary/90'
            >
               Buy
            </button>
         </div>
      </div>
   );
};

export default ProductItem;
