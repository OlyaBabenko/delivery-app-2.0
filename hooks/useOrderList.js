import { orderListService } from '@/services';
import { useCallback, useEffect, useState } from 'react';

const useOrderList = () => {
   const [orderList, setOrderList] = useState(null);

   const getOrderList = useCallback(async () => {
      const data = await orderListService();
      data && setOrderList(data);
   }, []);

   useEffect(() => {
      getOrderList();
   }, [getOrderList]);

   return { orderList };
};

export default useOrderList;
