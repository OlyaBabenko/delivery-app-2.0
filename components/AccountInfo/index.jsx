import { useEffect } from 'react';
import useUser from '@/store/user';
import AccountInfoForm from './AccountInfoForm';
import PersonalInfoForm from './PersonalInfoForm';

const AccountInfo = () => {
   const { accountInfo, getPersonalInfo } = useUser();
   useEffect(() => {
      if (accountInfo?.id) {
         getPersonalInfo(accountInfo?.id);
      }
   }, [accountInfo?.id, getPersonalInfo]);

   return (
      <div className='w-full max-w-2xl px-2 text-primary'>
         <h2 className='text-center text-2xl font-medium'>Welcome, {accountInfo?.username}!</h2>
         <AccountInfoForm />
         <PersonalInfoForm />
      </div>
   );
};

export default AccountInfo;
