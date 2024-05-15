'use client';

import UIButton from '@/components/UI/UIButton';
import UIInput, { UIInputPassword } from '@/components/UI/UIInput';
import useSignUp from '@/hooks/useSignUp';

const SignUpForm = () => {
   const { formData, errors, handleChange, submitForm } = useSignUp();
   return (
      <form onSubmit={submitForm} className='mt-6 flex w-full flex-col gap-10'>
         <UIInput
            labelText='Name'
            name='username'
            error={errors.username}
            value={formData.username}
            onInput={handleChange}
         />
         <UIInput
            labelText='Email'
            name='email'
            error={errors.email}
            value={formData.email}
            onInput={handleChange}
         />
         <UIInputPassword
            labelText='Password'
            name='password'
            error={errors.password}
            value={formData.password}
            onInput={handleChange}
         />
         <UIInputPassword
            labelText='Confirm password'
            name='confirmPassword'
            error={errors.confirmPassword}
            value={formData.confirmPassword}
            onInput={handleChange}
         />
         <UIButton type='submit'>Sign in</UIButton>
      </form>
   );
};

export default SignUpForm;
