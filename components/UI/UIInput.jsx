import OpenEye from '@/assets/icon/eye.svg';
import CloseEye from '@/assets/icon/eye-slash.svg';
import { useState } from 'react';

const UIInput = ({ error, labelText, name, ...rest }) => {
   return (
      <div className='relative w-full'>
         <input
            {...rest}
            type='text'
            name={name}
            className={`w-full rounded-md border py-2 pl-2 pr-8 focus-visible:outline-none ${error ? 'border-error bg-error-50' : 'border-primary-300 bg-primary-100/20'}`}
         />
         <label
            htmlFor={name}
            className='absolute bottom-[calc(100%+2px)] left-0 text-sm text-primary'
         >
            {labelText}
         </label>
         {error && (
            <span className='absolute left-0 top-[calc(100%+2px)] text-xs text-error'>{error}</span>
         )}
      </div>
   );
};

export default UIInput;

export const UIInputPassword = ({ labelText, error, name, ...rest }) => {
   const [isView, setIsView] = useState(false);
   return (
      <div className='relative w-full'>
         <input
            {...rest}
            type={isView ? 'text' : 'password'}
            name={name}
            className={`w-full rounded-md border py-2 pl-2 pr-8 focus-visible:outline-none ${error ? 'border-error bg-error-50' : 'border-primary-300 bg-primary-100/20'}`}
         />
         <label
            htmlFor={name}
            className='absolute bottom-[calc(100%+2px)] left-0 text-sm text-primary'
         >
            {labelText}
         </label>
         <button
            type='button'
            onClick={() => setIsView((state) => !state)}
            className='absolute right-1 top-1/2 -translate-y-1/2 p-1'
         >
            {isView ? (
               <CloseEye className='pointer-events-none w-5 text-grey-500' />
            ) : (
               <OpenEye className='pointer-events-none w-5 text-grey-500' />
            )}
         </button>
         {error && (
            <span className='absolute left-0 top-[calc(100%+2px)] text-xs text-error'>{error}</span>
         )}
      </div>
   );
};
