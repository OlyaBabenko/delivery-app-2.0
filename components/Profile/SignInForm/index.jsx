'use client';

import UIButton from '@/components/UI/UIButton';
import UIInput, { UIInputPassword } from '@/components/UI/UIInput';

const SignInForm = () => {
   return (
      <form action='' className='mt-6 flex w-full flex-col gap-10'>
         <UIInput labelText='Email' name='email' />
         <UIInputPassword labelText='Password' name='password' />
         <UIButton>Sign in</UIButton>
      </form>
   );
};

export default SignInForm;
