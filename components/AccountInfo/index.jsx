import PencilIcon from '@/assets/icon/pencil.svg';
import CheckIcon from '@/assets/icon/check.svg';
import { useCallback, useEffect, useState } from 'react';
import useUser from '@/store/user';
import UserInfoForm from './UserInfoForm';

const AccountInfo = () => {
   const { accountInfo } = useUser();

   // console.log('accountInfo', accountInfo);
   // console.log('personalInfo', personalInfo);

   return (
      <div className='w-full max-w-2xl px-2 text-primary'>
         <h2 className='text-center text-2xl font-medium'>Welcome, {accountInfo?.username}!</h2>
         <UserInfoForm />
         {/* <form className='mt-12'>
            <div className='mb-4 flex justify-between'>
               <h3 className='text-xl'>Personal information</h3>
               {isActive.personalInfo ? (
                  <button
                     type='button'
                     onClick={() =>
                        setIsActive((state) => ({ ...state, personalInfo: !state.personalInfo }))
                     }
                     className='place-self-center rounded-full bg-success-100 p-2 hover:bg-success-200/80 active:bg-success-300'
                  >
                     <CheckIcon className='pointer-events-none h-4 w-4 font-semibold text-success' />
                  </button>
               ) : (
                  <button
                     type='button'
                     onClick={() =>
                        setIsActive((state) => ({ ...state, personalInfo: !state.personalInfo }))
                     }
                     className='place-self-center rounded-full p-2 hover:bg-primary-200/80 active:bg-primary-200'
                  >
                     <PencilIcon className='pointer-events-none h-4 w-4' />
                  </button>
               )}
            </div>
            <div className='grid grid-cols-[120px_auto] gap-1'>
               <label htmlFor='gender' className='self-center text-primary-300'>
                  Gender
               </label>
               <input
                  type='text'
                  name='gender'
                  disabled={!isActive.personalInfo}
                  id='gender'
                  value={personalInfo?.gender ?? ''}
                  className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
               />
            </div>
            <div className='mt-12 grid grid-cols-[120px_auto] gap-1'>
               <label htmlFor='birth' className='self-center text-primary-300'>
                  Date of birth
               </label>
               <input
                  type='text'
                  name='birth'
                  id='birth'
                  disabled={!isActive.personalInfo}
                  value={personalInfo?.birth ?? ''}
                  className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
               />
            </div>
         </form> */}
      </div>
   );
};

export default AccountInfo;

const userInfo = {
   username: 'Olya',
   email: 'test1@gmail.com',
   gender: 'Female',
   birth: '03.01.1998',
};
