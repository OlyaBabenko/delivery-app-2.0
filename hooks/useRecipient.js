import {
   createRecipientService,
   recipientService,
   updateRecipientService,
} from '@/services';
import useUser from '@/store/user';
import validation from '@/utils/validation';
import { useCallback, useEffect, useState } from 'react';
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

      if (!currentInfo) {
         try {
            setIsPending(true);
            const recipient = await createRecipientService({ ...info, user: accountInfo?.id });
            setCurrentInfo(recipient);
            toast.success('Recipient has been created.');
         } catch {
            toast.error('Recipient has not been created.');
         } finally {
            setIsPending(false);
         }
      } else {
         const newRecipient = {};
         for (const key in info) {
            info[key] !== currentInfo[key] && (newRecipient[key] = info[key]);
         }
         if (Object.keys(newRecipient).length === 0) return;

         try {
            setIsPending(true);
            const recipient = await updateRecipientService(newRecipient, currentInfo.id);
            setCurrentInfo(recipient);
            toast.success('Recipient has been updated.');
         } catch (error) {
            toast.error('Recipient has not been updated.');
         } finally {
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
      } catch {
         return;
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
      handleChange,
      onSubmit,
      showForm,
      handleChangePhone,
   };
};

export default useRecipient;
