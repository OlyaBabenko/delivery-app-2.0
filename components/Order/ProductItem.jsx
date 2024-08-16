import useProduct from '@/hooks/useProduct';
import Image from 'next/image';
import { useCallback, useEffect } from 'react';

const ProductItem = ({ item, setTotal }) => {
   const { product } = useProduct(item.product);
   const calculateTotal = useCallback(() => {
      if (product) {
         console.log(product.name, product.actualPrice, '*', item.quantity);
         const productTotal = product.actualPrice * item.quantity;
         setTotal((state) => (state += productTotal));
      }
   }, [item.quantity, product, setTotal]);
   useEffect(() => {
      calculateTotal();
   }, [calculateTotal]);
   return (
      product && (
         <div className='mt-2 grid max-w-lg grid-cols-3 gap-2'>
            <div className='relative min-h-16'>
               <Image
                  src={product.imgUrl}
                  alt={product.id}
                  sizes='100%'
                  fill
                  className='object-contain'
               />
            </div>
            <span>{product.name}</span>
            <span> x {item.quantity}</span>
         </div>
      )
   );
};

export default ProductItem;
