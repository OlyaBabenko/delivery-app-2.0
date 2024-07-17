import { useState } from 'react';
import PencilIcon from '@/assets/icon/pencil.svg';
import CheckIcon from '@/assets/icon/check.svg';
import CancelIcon from '@/assets/icon/cancel.svg';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import useRecipient from '@/hooks/useRecipient';

const RecipientInfoForm = () => {
   const [isActive, setIsActive] = useState(false);
   const { info } = useRecipient();
   return (
      <form className='mt-12'>
         <div className='mb-4 flex justify-between'>
            <h3 className='text-xl'>Recipient information</h3>
            <div className='space-x-2'>
               <button
                  type='submit'
                  className={`rounded-full bg-success-200 p-2 hover:bg-success-300/70 active:bg-success-300/50 ${!isActive ? 'hidden' : ''}`}
               >
                  <CheckIcon className='pointer-events-none h-4 w-4 font-semibold text-success' />
               </button>
               <button
                  type='button'
                  //   onClick={onCancel}
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
            <label htmlFor='first_name' className='self-center text-primary-300'>
               First name
            </label>
            <input
               type='text'
               name='first_name'
               id='first_name'
               disabled={!isActive}
               //   onInput={handleChange}
               value={info?.first_name ?? ''}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
            />
            {/* {errors.first_name && (
                  <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                     {errors.first_name}
                  </span>
               )} */}
         </div>
         <div className='relative mt-12 grid gap-1 md:grid-cols-[120px_auto]'>
            <label htmlFor='last_name' className='self-center text-primary-300'>
               Last name
            </label>
            <input
               type='text'
               name='last_name'
               id='last_name'
               disabled={!isActive}
               //   onInput={handleChange}
               value={info?.last_name ?? ''}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
            />
            {/* {errors.last_name && (
                  <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                     {errors.last_name}
                  </span>
               )} */}
         </div>
         <div className='relative mt-12 grid gap-1 md:grid-cols-[120px_auto]'>
            <label htmlFor='address' className='self-center text-primary-300'>
               Address
            </label>
            <input
               type='text'
               name='address'
               id='address'
               disabled={!isActive}
               //   onInput={handleChange}
               value={info?.address ?? ''}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
            />
            {/* {errors.address && (
                  <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                     {errors.address}
                  </span>
               )} */}
         </div>
         <div className='relative mt-12 grid gap-1 md:grid-cols-[120px_auto]'>
            <label htmlFor='phone' className='self-center text-primary-300'>
               Phone
            </label>
            <PhoneInputWithCountrySelect
               type='text'
               name='phone'
               id='phone'
               disabled={!isActive}
               //   onChange={handleChangePhone}
               international
               countryCallingCodeEditable={false}
               defaultCountry='UA'
                 value={info.phone}
               // value={info?.phone ?? ''}
               className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none has-[:disabled]:border-primary-200'
            />
            {/* {errors.phone && (
                  <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                     {errors.phone}
                  </span>
               )} */}
         </div>
      </form>
   );
};

export default RecipientInfoForm;
