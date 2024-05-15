'use client';
import AccountForm from '@/components/AccountForm';
import useUser from '@/store/user';

const Account = () => {
   return (
      <div className='flex justify-center pt-16 pb-3'>
         <AccountForm />
      </div>
   );
};

export default Account;
