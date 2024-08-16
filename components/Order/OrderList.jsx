import useOrderList from '@/hooks/useOrderList';
import OrderItem from './OrderItem';

const OrderList = () => {
   const { orderList } = useOrderList();
   return (
      orderList && (
         <div className='mx-auto pb-3 pt-8 md:max-w-screen-lg space-y-3'>
            {orderList.map((order) => (
               <OrderItem key={order.id} order={order} />
            ))}
         </div>
      )
   );
};

export default OrderList;
