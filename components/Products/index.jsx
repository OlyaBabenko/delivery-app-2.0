'use client';
import { productsListService, restaurantListService } from '@/services';
import { useEffect, useState } from 'react';
import RestaurantList from './RestaurantList';
import ProductList from './ProductList';

const Products = () => {
   const [restaurants, setRestaurants] = useState(null);
   const [products, setProducts] = useState(null);
   const getRestaurant = async () => {
      const data = await restaurantListService();
      setRestaurants(data.data);
      const productsData = await productsListService(data.data[0].name);
      setProducts(productsData.data);
   };
   const changeRestaurant = async (name) => {
      const productsData = await productsListService(name);
      setProducts(productsData.data);
   };
   useEffect(() => {
      getRestaurant();
   }, []);
   return (
      restaurants && (
         <div className='py-16 pl-72 pr-9'>
            <RestaurantList restaurants={restaurants} onChange={changeRestaurant} />
            <ProductList products={products} />
         </div>
      )
   );
};

export default Products;
