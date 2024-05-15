import SignInForm from '@/components/Authorization/SignInForm';
import Link from 'next/link';

const SignIn = () => {
   return (
      <>
         <div className='flex w-full max-w-96 flex-col items-center rounded-lg bg-white p-4 shadow-md'>
            <h2 className='text-2xl font-semibold text-primary'>Sign in</h2>
            <SignInForm />
         </div>
         <p className='mt-5 text-center text-sm text-grey-500'>
            If you don&apos;t have account you can create it.
         </p>
         <Link href='/sign-up' className='text-primary-400'>
            Sign up
         </Link>
      </>
   );
};

export default SignIn;
