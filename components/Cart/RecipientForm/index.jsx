import UIButton from '@/components/UI/UIButton';
import { useTotalPrice } from '@/store/cart';
import useRecipient from '@/hooks/useRecipient';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const RecipientForm = () => {
   const { info, errors, isFormShow, showForm, handleChange, onSubmit, handleChangePhone } =
      useRecipient();
   const total = useTotalPrice();

   return (
      <form onSubmit={onSubmit} className='flex w-full flex-col md:flex-row md:gap-6'>
         <div className={`${isFormShow ? '' : 'hidden'} w-full max-w-2xl space-y-4 pt-6`}>
            <h2 className='text-center text-xl font-semibold md:text-left'>Recipient</h2>
            <div className='relative grid gap-1 md:grid-cols-[120px_auto]'>
               <label htmlFor='first_name' className='self-center text-primary-300'>
                  First name
               </label>
               <input
                  type='text'
                  name='first_name'
                  id='first_name'
                  onInput={handleChange}
                     value={info?.first_name ?? ''}
                  className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
               />
               {errors.first_name && (
                  <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                     {errors.first_name}
                  </span>
               )}
            </div>
            <div className='relative grid gap-1 md:grid-cols-[120px_auto]'>
               <label htmlFor='last_name' className='self-center text-primary-300'>
                  Last name
               </label>
               <input
                  type='text'
                  name='last_name'
                  id='last_name'
                  onInput={handleChange}
                     value={info?.last_name ?? ''}
                  className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
               />
               {errors.last_name && (
                  <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                     {errors.last_name}
                  </span>
               )}
            </div>
            <div className='relative grid gap-1 md:grid-cols-[120px_auto]'>
               <label htmlFor='address' className='self-center text-primary-300'>
                  Address
               </label>
               <input
                  type='text'
                  name='address'
                  id='address'
                  onInput={handleChange}
                     value={info?.address ?? ''}
                  className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
               />
               {errors.address && (
                  <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                     {errors.address}
                  </span>
               )}
            </div>
            <div className='relative grid gap-1 md:grid-cols-[120px_auto]'>
               <label htmlFor='phone' className='self-center text-primary-300'>
                  Phone
               </label>
               <PhoneInputWithCountrySelect
                  type='text'
                  name='phone'
                  id='phone'
                  onChange={handleChangePhone}
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry='UA'
                  value={info.phone}
                  className='border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200'
               />
               {errors.phone && (
                  <span className='absolute left-32 top-[calc(100%+2px)] text-xs text-error'>
                     {errors.phone}
                  </span>
               )}
            </div>
         </div>
         <div className='mt-7 w-full self-end justify-self-end md:ml-auto md:w-72 md:shrink-0'>
            <div className='flex justify-between'>
               <span className='text-lg'>Subtotal price:</span>
               <span className='text-lg'>{total} ₴</span>
            </div>
            <div className='flex justify-between'>
               <span className='text-lg '>Delivery:</span>
               <span className='text-lg '>50 ₴</span>
            </div>
            <div className='flex justify-between'>
               <span className='text-lg font-semibold'>Total price:</span>
               <span className='text-lg font-semibold'>{(Number(total) + 50).toFixed(2)} ₴</span>
            </div>
            <UIButton
               type={isFormShow ? 'submit' : 'button'}
               onClick={!isFormShow ? showForm : undefined}
            >
               <span className='font-semibold'>Buy</span>
            </UIButton>
            {/* {!isRecipientShow && (
               <UIButton type='button' onClick={onClick}>
                  <span className='font-semibold'>Buy</span>
               </UIButton>
            )}
            {isRecipientShow && (
               <UIButton type='submit'>
                  <span className='font-semibold'>Buy</span>
               </UIButton>
            )} */}
         </div>
      </form>
   );
};

export default RecipientForm;
