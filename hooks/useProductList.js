import { productsListService, restaurantListService } from '@/services';
import { useEffect, useState } from 'react';

const useProductList = () => {
   const [restaurantList, setRestaurantList] = useState(null);
   const [productList, setProductList] = useState(null);

   const getRestaurant = async () => {
      const data = await restaurantListService();
      setRestaurantList(data.data);
      const productsData = await productsListService(data.data[0].name);
      setProductList(productsData.data);
   };

   const changeRestaurant = async (name) => {
      const productsData = await productsListService(name);
      setProductList(productsData.data);
   };

   useEffect(() => {
      getRestaurant();
   }, []);

   return { restaurantList, productList, changeRestaurant };
};

export default useProductList;
