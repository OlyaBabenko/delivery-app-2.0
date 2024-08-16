'use client';

import OrderList from '@/components/Order/OrderList';

const Order = () => {
   return (
      <div className='py-16 text-primary'>
         <h2 className='text-center text-2xl font-semibold'>My orders</h2>
         <OrderList />
      </div>
   );
};

export default Order;
