import PencilIcon from '@/assets/icon/pencil.svg';
import CheckIcon from '@/assets/icon/check.svg';
import CancelIcon from '@/assets/icon/cancel.svg';
import useUserInfo from '@/hooks/useUserInfo';

const UserInfoForm = () => {
   const { handleChange, isActive, setIsActive, submitForm, errors, info, onCancel } =
      useUserInfo();
   return (
      <form className='mt-12' onSubmit={submitForm}>
         <div className='mb-4 flex justify-between'>
            <h3 className='text-xl'>Account information</h3>
            <div className='space-x-2'>
               <button
                  type='submit'
                  className={`rounded-full bg-success-200 p-2 hover:bg-success-300/70 active:bg-success-300/50 ${!isActive ? 'hidden' : ''}`}
               >
                  <CheckIcon className='pointer-events-none h-4 w-4 font-semibold text-success' />
               </button>
               <button
                  type='button'
                  onClick={onCancel}
                  className={`rounded-full bg-error-200 p-2 hover:bg-error-300/70 active:bg-error-300/50 ${!isActive ? 'hidden' : ''}`}
               >
                  <CancelIcon className='pointer-events-none h-4 w-4 font-semibold text-error' />
               </button>
               <button
                  type='button'
                  onClick={() => setIsActive(true)}
                  className={`rounded-full p-2 hover:bg-primary-200/80 active:bg-primary-200 ${isActive ? 'hidden' : ''}`}
               >
                  <PencilIcon className='pointer-events-none h-4 w-4' />
               </button>
            </div>
         </div>
         <div className='relative grid gap-1 md:grid-cols-[120px_auto]'>
            <label htmlFor='email' className='self-center text-primary-300'>
               Email
            </label>
            <input
               type='text'
               name='email'
               id='email'
               onInput={handleChange}
               value={info?.email ?? ''}
               disabled={!isActive}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
            />
            {errors.email && (
               <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                  {errors.email}
               </span>
            )}
         </div>
         <div className='relative mt-12 grid gap-1 md:grid-cols-[120px_auto]'>
            <label htmlFor='username' className='self-center text-primary-300'>
               Name
            </label>
            <input
               type='text'
               name='username'
               id='username'
               onInput={handleChange}
               value={info?.username ?? ''}
               disabled={!isActive}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
            />
            {errors.username && (
               <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                  {errors.username}
               </span>
            )}
         </div>
      </form>
   );
};

export default UserInfoForm;
