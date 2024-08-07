import PencilIcon from '@/assets/icon/pencil.svg';
import CheckIcon from '@/assets/icon/check.svg';
import CancelIcon from '@/assets/icon/cancel.svg';
import usePersonalInfo from '@/hooks/usePersonalInfo';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import UserIcon from '@/assets/icon/user.svg';
import Image from 'next/image';

const PersonalInfoForm = () => {
   const {
      handleChange,
      isActive,
      setIsActive,
      submitForm,
      errors,
      info,
      isLoadingData,
      onCancel,
   } = usePersonalInfo();
   return (
      <form className='mt-12' onSubmit={submitForm}>
         <div className='mb-4 flex justify-between'>
            <h3 className='text-xl'>Personal information</h3>
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
         <div className='grid grid-cols-[120px_auto]'>
            <label htmlFor='profile_picture' className='self-center text-primary-300'>
               Profile photo
            </label>
            <div className='flex items-start gap-3'>
               {info?.profile_picture ? (
                  <div className='relative h-36 w-36'>
                     <Image
                        src={info?.profile_picture_preview ?? info?.profile_picture}
                        alt='profile_picture_preview'
                        fill={true}
                        sizes='100%'
                        priority
                        className='rounded-full object-cover shadow-lg'
                     />
                  </div>
               ) : (
                  <div className='h-36 rounded-full bg-white shadow-lg'>
                     {!isLoadingData && (
                        <UserIcon className='h-36 w-36 stroke-1 text-grey-500/40' />
                     )}
                  </div>
               )}
               <input
                  type='file'
                  accept='image/*'
                  disabled={!isActive}
                  name='profile_picture'
                  id='profile_picture'
                  ref={info?.fileInputRef}
                  onChange={handleChange}
                  placeholder='Choose file'
                  className='block w-full max-w-52 rounded border-0 bg-primary-100/50 px-4 py-2 text-center text-sm text-primary-500 transition-all file:hidden hover:cursor-pointer hover:bg-primary-100 disabled:hidden'
               />
            </div>
         </div>
         <div className='mt-12 grid gap-1 md:grid-cols-[120px_auto]'>
            <label htmlFor='gender' className='self-center text-primary-300'>
               Gender
            </label>
            <select
               name='gender'
               id='gender'
               disabled={!isActive}
               onChange={handleChange}
               value={info?.gender ?? ''}
               className={`space-y-1 border-b border-primary-400 bg-primary-100/0 focus:border-b focus-visible:outline-none disabled:border-primary-200 ${!info?.gender ? 'text-primary-300 disabled:text-primary-200' : 'text-primary disabled:text-primary'}`}
            >
               <option value='' className='hidden border bg-white text-sm text-primary-200'>
                  {!isLoadingData && "You don't select your gender yet"}
               </option>
               <option value='female' className='bg-white'>
                  Female
               </option>
               <option value='male' className='bg-white'>
                  Male
               </option>
            </select>
         </div>
         <div className='mt-12 grid gap-1 md:grid-cols-[120px_auto]'>
            <label htmlFor='date_of_birth' className='self-center text-primary-300'>
               Date of birth
            </label>
            <DatePicker
               selected={info?.date_of_birth ?? ''}
               name='date_of_birth'
               disabled={!isActive}
               onChange={handleChange}
               dateFormat={'dd.MM.yyyy'}
               maxDate={new Date()}
               placeholderText={!isLoadingData ? 'DD.MM.YYYY' : undefined}
               fixedHeight
               className='w-full border-b border-primary-400 bg-primary-100/0 placeholder:text-sm placeholder:text-primary-300 focus:border-b focus-visible:outline-none disabled:border-primary-200 placeholder:disabled:text-primary-200'
               calendarClassName='datePickerCalendar'
            />
         </div>
      </form>
   );
};

export default PersonalInfoForm;
