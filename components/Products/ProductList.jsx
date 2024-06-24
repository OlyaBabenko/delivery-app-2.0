import ProductItem from './PoductItem';

const ProductList = ({ products }) => {
   return (
      <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] place-content-stretch gap-2'>
         {products?.map((product) => {
            return <ProductItem key={product.id} product={product} />;
         })}
      </div>
   );
};

export default ProductList;
