import { updatePersonalInfoService } from '@/services';
import useUser from '@/store/user';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const usePersonalInfo = () => {
   const [info, setInfo] = useState();
   const [isActive, setIsActive] = useState(false);
   const [isPending, setIsPending] = useState(false);
   const [errors, setErrors] = useState({
      gender: '',
      date_of_birth: '',
   });
   const { personalInfo, getPersonalInfo, accountInfo } = useUser();

   const handleChangeDate = (value) => {
      setInfo((state) => ({ ...state, date_of_birth: value }));
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setErrors((state) => ({ ...state, [name]: '' }));
      setInfo((state) => ({ ...state, [name]: value.trim() }));
   };

   const onCancel = () => {
      setInfo(personalInfo);
      setIsActive(false);
   };

   const submitForm = async (e) => {
      e.preventDefault();

      const formData = {};
      for (const key in info) {
         if (info[key] !== personalInfo[key]) {
            key === 'date_of_birth'
               ? (formData[key] = format(new Date(info[key]), 'yyyy-MM-dd'))
               : (formData[key] = info[key]);
         }
      }

      if (Object.keys(formData).length === 0) {
         setIsActive(false);
         return;
      }

      try {
         setIsPending(true);
         await updatePersonalInfoService(formData, accountInfo.id);
         await getPersonalInfo(accountInfo.id);
         setIsActive(false);
      } catch (error) {
         console.log(error);
      } finally {
         setIsPending(false);
      }
   };

   useEffect(() => {
      if (!info || Object.keys(info).length === 0) {
         setInfo(personalInfo);
      }
   }, [info, personalInfo]);

   return {
      handleChange,
      handleChangeDate,
      info,
      errors,
      submitForm,
      isActive,
      setIsActive,
      isPending,
      onCancel,
   };
};

export default usePersonalInfo;
