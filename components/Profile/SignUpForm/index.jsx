'use client';

import UIButton from '@/components/UI/UIButton';
import UIInput, { UIInputPassword } from '@/components/UI/UIInput';

const SignUpForm = () => {
   return (
      <form action='' className='mt-6 flex w-full flex-col gap-10'>
         <UIInput labelText='Name' name='name' />
         <UIInput labelText='Email' name='email' />
         <UIInputPassword labelText='Password' name='password' />
         <UIInputPassword labelText='Confirm password' name='confirmPassword' />
         <UIButton>Sign in</UIButton>
      </form>
   );
};

export default SignUpForm;
