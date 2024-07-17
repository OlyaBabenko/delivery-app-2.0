import { createOrderService, createRecipientService, recipientService } from '@/services';
import { resetCart, useCart } from '@/store/cart';
import useUser from '@/store/user';
import validation from '@/utils/validation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const useRecipient = () => {
   const [isPending, setIsPending] = useState(false);
   const [isFormShow, setIsFormShow] = useState(false);
   const [currentInfo, setCurrentInfo] = useState(null);
   const [info, setInfo] = useState({
      first_name: '',
      last_name: '',
      address: '',
      phone: '',
   });
   const [errors, setErrors] = useState({
      first_name: '',
      last_name: '',
      address: '',
      phone: '',
   });
   const { isName, isPhone } = validation();
   const cart = useCart();
   const { accountInfo } = useUser();

   const showForm = (event) => {
      event.preventDefault();
      if (!isFormShow) {
         setIsFormShow(true);
         return;
      }
   };

   const handleChange = (event) => {
      const { name, value } = event.target;
      setErrors((state) => ({ ...state, [name]: '' }));
      setInfo((state) => ({ ...state, [name]: name === 'address' ? value : value.trim() }));
   };

   const handleChangePhone = (value) => {
      setInfo((state) => ({ ...state, phone: value }));
      console.log(value);
   };

   const onSubmit = async (event) => {
      event.preventDefault();

      const firstNameError = isName(info.first_name);
      const lastNameError = isName(info.last_name);
      const addressError = isName(info.address);
      const phoneError = isPhone(info.phone);
      setErrors({
         first_name: firstNameError,
         last_name: lastNameError,
         address: addressError,
         phone: phoneError,
      });

      if (firstNameError || lastNameError || addressError || phoneError) return;

      try {
         setIsPending(true);
         const { id } = await createRecipientService({ ...info, user: accountInfo?.id });
         const order = cart.map((item) => ({ product: item.id, quantity: item.count }));
         await createOrderService(order, id);
         resetCart();
         toast.success('Order has been created.');
      } catch (error) {
         if (error?.data?.user) {
            toast.error(error.data.user);
         } else {
            toast.error('Order has not been created.');
         }
      } finally {
         setIsPending(false);
      }
   };

   useEffect(() => {
      try {
         recipientService(accountInfo?.id).then((data) => {
            setCurrentInfo(data);
            setInfo(data);
         });
      } catch (error) {
         console.log(error);
      }
   }, [accountInfo?.id]);

   return {
      info,
      errors,
      isPending,
      isFormShow,
      handleChange,
      onSubmit,
      showForm,
      handleChangePhone,
   };
};

export default useRecipient;
