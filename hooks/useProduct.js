import { productItemService } from '@/services';
import { useCallback, useEffect, useState } from 'react';

const useProduct = (id) => {
   const [product, setProduct] = useState(null);

   const getProduct = useCallback(async () => {
      const data = await productItemService(id);
      const rating = data.id / 100000;
      setProduct({ ...data, rating: rating });
   }, [id]);

   useEffect(() => {
      getProduct();
   }, [getProduct]);

   return { product };
};

export default useProduct;
