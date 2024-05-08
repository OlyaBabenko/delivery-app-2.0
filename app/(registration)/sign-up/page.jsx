import SignUpForm from '@/components/Profile/SignUpForm';
import Link from 'next/link';

const SignUp = () => {
   return (
      <>
         <div className='flex w-full max-w-96 flex-col items-center rounded-lg bg-white p-4 shadow-md'>
            <h2 className='text-2xl font-semibold text-primary'>Sign up</h2>
            <SignUpForm />
         </div>
         <p className='mt-5 text-center text-sm text-grey-500'>
            If you already have account you can log in.
         </p>
         <Link href='/sign-in' className='text-primary-400'>
            Sign in
         </Link>
      </>
   );
};

export default SignUp;
