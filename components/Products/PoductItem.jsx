import Image from 'next/image';
import StarIcon from '@/assets/icon/star.svg';

const ProductItem = ({ product }) => {
   const rating = product.id / 100000;
   const imageLoader = ({ src }) => {
      return `${src}?w=600`;
   };
   return (
      <div className='rounded-md bg-white p-2 shadow-md'>
         <div className='flex h-full flex-col items-center'>
            <div className='relative h-36 w-full'>
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
            <h3 className='my-2 text-center text-lg font-medium leading-tight text-primary-800'>
               {product.name}
            </h3>
            <div className='mt-auto flex justify-end gap-0.5'>
               <StarIcon
                  className={`h-4 w-4 ${rating > 1 ? 'fill-warning-300 text-warning-300' : 'text-grey-300'}`}
               />
               <StarIcon
                  className={`h-4 w-4 ${rating > 2 ? 'fill-warning-300 text-warning-300' : 'text-grey-300'}`}
               />
               <StarIcon
                  className={`h-4 w-4 ${rating > 3 ? 'fill-warning-300 text-warning-300' : 'text-grey-300'}`}
               />
               <StarIcon
                  className={`h-4 w-4 ${rating > 4 ? 'fill-warning-300 text-warning-300' : 'text-grey-300'}`}
               />
               <StarIcon
                  className={`h-4 w-4 ${rating > 5 ? 'fill-warning-300 text-warning-300' : 'text-grey-300'}`}
               />
            </div>
            {product?.oldPrice && (
               <span className='mt-2 text-sm text-grey-500 line-through'>
                  {product?.oldPrice} ₴
               </span>
            )}
            <span
               className={`${product?.oldPrice ? 'font-semibold text-error' : 'mt-2 text-primary'}`}
            >
               {product.actualPrice} ₴
            </span>
            <button className='mt-1 w-full rounded-sm bg-primary-400 px-2 py-1 font-semibold text-white transition-all hover:scale-105 hover:bg-primary active:bg-primary/90'>
               Buy
            </button>
         </div>
      </div>
   );
};

export default ProductItem;
