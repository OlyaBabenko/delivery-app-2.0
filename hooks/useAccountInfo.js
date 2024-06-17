import { updateAccountInfoService } from '@/services';
import useUser from '@/store/user';
import validation from '@/utils/validation';
import { useEffect, useState } from 'react';

const useAccountInfo = () => {
   const [info, setInfo] = useState();
   const [isActive, setIsActive] = useState(false);
   const [isPending, setIsPending] = useState(false);
   const [errors, setErrors] = useState({
      email: '',
      username: '',
   });
   const { accountInfo, getAccountInfo } = useUser();
   const { isEmail, isName } = validation();

   const handleChange = (e) => {
      const { name, value } = e.target;
      setErrors((state) => ({ ...state, [name]: '' }));
      setInfo((state) => ({ ...state, [name]: name === 'username' ? value : value.trim() }));
   };

   const onCancel = () => {
      setInfo(accountInfo);
      setIsActive(false);
   };

   const submitForm = async (e) => {
      e.preventDefault();

      const emailError = isEmail(info.email.toLowerCase());
      const usernameError = isName(info.username);
      setErrors({ email: emailError, username: usernameError });

      if (emailError || usernameError) return;
      const formData = {};

      for (const key in info) {
         if (info[key] !== accountInfo[key]) {
            formData[key] = info[key];
         }
      }

      if (Object.keys(formData).length === 0) {
         setIsActive(false);
         return;
      }

      try {
         setIsPending(true);
         await updateAccountInfoService(formData, accountInfo.id);
         await getAccountInfo();
         setIsActive(false);
      } catch (error) {
         for (const key in error.data) {
            setErrors((state) => ({ ...state, [key]: error.data[key] }));
         }
      } finally {
         setIsPending(false);
      }
   };

   useEffect(() => {
      if (!info || Object.keys(info).length === 0) {
         setInfo(accountInfo);
      }
   }, [accountInfo, info]);

   return { handleChange, info, errors, submitForm, isActive, setIsActive, isPending, onCancel };
};

export default useAccountInfo;
