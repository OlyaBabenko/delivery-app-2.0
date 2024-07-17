import { createOrderService } from '@/services';
import { resetCart, useCart } from '@/store/cart';
import { toast } from 'sonner';

const useOrder = () => {
   const cart = useCart();

   const onSubmitOrder = async (recipientId) => {
      try {
         const order = cart.map((item) => ({ product: item.id, quantity: item.count }));
         await createOrderService(order, recipientId);
         resetCart();
         toast.success('Order has been created.');
      } catch {
         toast.error('Order has not been created.');
      }
   };

   return { onSubmitOrder };
};

export default useOrder;
