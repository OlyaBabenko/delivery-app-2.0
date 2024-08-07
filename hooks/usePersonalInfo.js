import { updatePersonalInfoService } from '@/services';
import useUser from '@/store/user';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

const usePersonalInfo = () => {
   const [info, setInfo] = useState(undefined);
   const [isActive, setIsActive] = useState(false);
   const [isPending, setIsPending] = useState(false);
   const [isLoadingData, setIsLoadingData] = useState(true)
   const fileInputRef = useRef(null);
   const [errors, setErrors] = useState({
      gender: '',
      date_of_birth: '',
      profile_picture: '',
   });
   const { personalInfo, getPersonalInfo, accountInfo } = useUser();

   const handleChange = (e) => {
      if (!e?.target) {
         setInfo((state) => ({ ...state, date_of_birth: e }));
         setErrors((state) => ({ ...state, date_of_birth: '' }));
         return;
      }

      if (e.target.name === 'profile_picture') {
         const file = e.target.files[0];
         if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
               setInfo((state) => ({
                  ...state,
                  profile_picture: file,
                  profile_picture_preview: reader.result,
               }));
            };
            reader.readAsDataURL(file);
         }
         return;
      }

      const { name, value } = e.target;
      setErrors((state) => ({ ...state, [name]: '' }));
      setInfo((state) => ({ ...state, [name]: value.trim() }));
   };

   const onCancel = () => {
      if (info.fileInputRef.current) {
         info.fileInputRef.current.value = '';
      }
      setInfo({
         ...personalInfo,
         profile_picture_preview: null,
         fileInputRef: fileInputRef,
      });
      setErrors({
         gender: '',
         date_of_birth: '',
         profile_picture: null,
      });
      setIsActive(false);
   };

   const submitForm = async (e) => {
      e.preventDefault();
      const { profile_picture_preview, fileInputRef, ...infoData } = info;
      const formData = {};
      for (const key in infoData) {
         if (infoData[key] !== personalInfo[key]) {
            key === 'date_of_birth'
               ? (formData[key] = format(new Date(infoData[key]), 'yyyy-MM-dd'))
               : (formData[key] = infoData[key]);
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
         if (info.fileInputRef?.current) {
            info.fileInputRef.current.value = '';
         }
         setIsActive(false);
      } catch (error) {
         toast.error("Personal info hasn't changed.")
      } finally {
         setIsPending(false);
      }
   };

   useEffect(() => {
      if (personalInfo && (!info || Object.keys(info).length === 0)) {
         setInfo({
            ...personalInfo,
            profile_picture_preview: null,
            fileInputRef: fileInputRef,
         });
         setIsLoadingData(false)
      }
   }, [info, personalInfo]);

   return {
      info,
      errors,
      isActive,
      isPending,
      isLoadingData,
      handleChange,
      submitForm,
      setIsActive,
      onCancel,
   };
};

export default usePersonalInfo;
