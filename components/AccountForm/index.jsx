import UserIcon from '@/assets/icon/user.svg';
import PencilIcon from '@/assets/icon/pencil.svg';
import UIInput from '../UI/UIInput';
import { useState } from 'react';
import useUser from '@/store/user';

const AccountForm = () => {
   const { userInfo } = useUser();
   const [isActive, setIsActive] = useState({
      email: false,
      username: false,
      gender: false,
      birth: false,
   });
   return (
      <form className='w-full max-w-2xl text-primary'>
         <div className='flex items-end gap-4'>
            <UserIcon className='h-10 w-10' />
            <span className='text-xl'>Olya</span>
         </div>
         <div className='mt-12 grid grid-cols-[120px_auto_32px] gap-1'>
            <label htmlFor='email' className='self-center text-primary-300'>
               Email
            </label>
            <input
               type='text'
               name='email'
               id='email'
               value={userInfo.email}
               disabled={!isActive.email}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
            />
            <button
               type='button'
               onClick={() => setIsActive((state) => ({ ...state, email: !state.email }))}
               className='place-self-center rounded-full p-2 hover:bg-primary-200/80 active:bg-primary-200'
            >
               <PencilIcon className='pointer-events-none h-4 w-4' />
            </button>
         </div>
         <div className='mt-12 grid grid-cols-[120px_auto_32px] gap-1'>
            <label htmlFor='username' className='self-center text-primary-300'>
               Name
            </label>
            <input
               type='text'
               name='username'
               id='username'
               value={userInfo.username}
               disabled={!isActive.username}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
            />
            <button
               type='button'
               onClick={() => setIsActive((state) => ({ ...state, username: !state.username }))}
               className='place-self-center rounded-full p-2 hover:bg-primary-200/80 active:bg-primary-200'
            >
               <PencilIcon className='pointer-events-none h-4 w-4' />
            </button>
         </div>
         <div className='mt-12 grid grid-cols-[120px_auto_32px] gap-1'>
            <label htmlFor='gender' className='self-center text-primary-300'>
               Gender
            </label>
            <input
               type='text'
               name='gender'
               disabled={!isActive.gender}
               id='gender'
               value={userInfo.gender}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
            />
            <button
               type='button'
               onClick={() => setIsActive((state) => ({ ...state, gender: !state.gender }))}
               className='place-self-center rounded-full p-2 hover:bg-primary-200/80 active:bg-primary-200'
            >
               <PencilIcon className='pointer-events-none h-4 w-4' />
            </button>
         </div>
         <div className='mt-12 grid grid-cols-[120px_auto_32px] gap-1'>
            <label htmlFor='birth' className='self-center text-primary-300'>
               Date of birth
            </label>
            <input
               type='text'
               name='birth'
               id='birth'
               disabled={!isActive.birth}
               value={userInfo.birth}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
            />
            <button
               type='button'
               onClick={() => setIsActive((state) => ({ ...state, birth: !state.birth }))}
               className='place-self-center rounded-full p-2 hover:bg-primary-200/80 active:bg-primary-200'
            >
               <PencilIcon className='pointer-events-none h-4 w-4' />
            </button>
         </div>
      </form>
   );
};

export default AccountForm;
