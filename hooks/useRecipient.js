import { createRecipientService, recipientService, updateRecipientService } from '@/services';
import useUser from '@/store/user';
import validation from '@/utils/validation';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import useOrder from './useOrder';
import { usePathname } from 'next/navigation';

const useRecipient = () => {
   const pathname = usePathname();
   const [isPending, setIsPending] = useState(false);
   const [isFormShow, setIsFormShow] = useState(false);
   const [isActive, setIsActive] = useState(false);
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
   const { accountInfo } = useUser();
   const { onSubmitOrder } = useOrder();

   const showForm = (event) => {
      event.preventDefault();
      if (!isFormShow) {
         setIsFormShow(true);
         return;
      }
   };

   const onCancel = () => {
      setInfo(
         currentInfo ?? {
            first_name: '',
            last_name: '',
            address: '',
            phone: '',
         },
      );
      setErrors({
         first_name: '',
         last_name: '',
         address: '',
         phone: '',
      });
      setIsActive(false);
   };

   const handleChange = (event) => {
      const { name, value } = event.target;
      setErrors((state) => ({ ...state, [name]: '' }));
      setInfo((state) => ({ ...state, [name]: name === 'address' ? value : value.trim() }));
   };

   const handleChangePhone = (value) => {
      setInfo((state) => ({ ...state, phone: value }));
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

      if (!currentInfo) {
         try {
            setIsPending(true);
            const recipient = await createRecipientService({ ...info, user: accountInfo?.id });
            setCurrentInfo(recipient);
            toast.success('Recipient has been created.');
            pathname === '/cart' && (await onSubmitOrder(recipient.id));
         } catch {
            toast.error('Recipient has not been created.');
         } finally {
            setIsActive(false);
            setIsPending(false);
         }
      } else {
         const newRecipient = {};
         for (const key in info) {
            info[key] !== currentInfo[key] && (newRecipient[key] = info[key]);
         }
         if (Object.keys(newRecipient).length === 0 && pathname !== '/cart') return;
         if (Object.keys(newRecipient).length === 0 && pathname === '/cart') {
            await onSubmitOrder(currentInfo.id);
            return;
         }

         try {
            setIsPending(true);
            const recipient = await updateRecipientService(newRecipient, currentInfo.id);
            setCurrentInfo(recipient);
            toast.success('Recipient has been updated.');
            pathname === '/cart' && (await onSubmitOrder(recipient.id));
         } catch (error) {
            toast.error('Recipient has not been updated.');
         } finally {
            setIsActive(false);
            setIsPending(false);
         }
      }
   };

   const getData = useCallback(async () => {
      try {
         const data = await recipientService(accountInfo.id);
         setCurrentInfo(data);
         setInfo(data);
         return data?.id && data;
      } catch (error) {
         return null;
      }
   }, [accountInfo?.id]);

   useEffect(() => {
      accountInfo?.id && getData();
   }, [accountInfo?.id, getData]);

   return {
      info,
      errors,
      isPending,
      isFormShow,
      isActive,
      setIsActive,
      handleChange,
      onSubmit,
      showForm,
      handleChangePhone,
      onCancel,
   };
};

export default useRecipient;
