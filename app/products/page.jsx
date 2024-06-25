'use client';
import RestaurantList from '@/components/Products/RestaurantList';
import ProductList from '@/components/Products/ProductList';
import useProductList from '@/hooks/useProductList';

const Products = () => {
   const { productList, restaurantList, changeRestaurant } = useProductList();

   return (
      restaurantList && (
         <div className='py-16 pl-72 pr-9'>
            <RestaurantList restaurants={restaurantList} onChange={changeRestaurant} />
            <ProductList products={productList} />
         </div>
      )
   );
};

export default Products;
