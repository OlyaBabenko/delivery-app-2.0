'use client';

import UIButton from '@/components/UI/UIButton';
import UIInput, { UIInputPassword } from '@/components/UI/UIInput';
import useSignIn from '@/hooks/useSignIn';

const SignInForm = () => {
const {formData, errors, isPending, handleChange, submitForm} = useSignIn();

   return (
      <form onSubmit={submitForm} className='mt-6 flex w-full flex-col gap-10'>
         <UIInput labelText='Email' name='email' error={errors.email} value={formData.email} onInput={handleChange}/>
         <UIInputPassword labelText='Password' name='password' error={errors.password} value={formData.password} onInput={handleChange} />
         <UIButton type='submit'>Sign in</UIButton>
      </form>
   );
};

export default SignInForm;
