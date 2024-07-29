import useOrderList from '@/hooks/useOrderList';
import OrderItem from './OrderItem';

const OrderList = () => {
   const { orderList } = useOrderList();
   return (
      orderList && (
         <div>
            {orderList && orderList.map((order) => <OrderItem key={order.id} order={order} />)}
         </div>
      )
   );
};

export default OrderList;
