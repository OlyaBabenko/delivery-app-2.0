const SignInForm = () => {
   return (
      <form action='' className='mt-6 flex w-full flex-col gap-4'>
         <div className='flex flex-col'>
            <label htmlFor='email' className='text-sm text-primary'>
               Email
            </label>
            <input
               type='text'
               name=''
               id='email'
               className='rounded-md border border-primary-300 bg-primary-100/40 px-3 py-2 focus-visible:outline-none'
            />
         </div>
         <div className='flex flex-col'>
            <label htmlFor='password' className='text-sm text-primary'>
               Password
            </label>
            <input
               type='text'
               name=''
               id='password'
               className='rounded-md border border-primary-300 bg-primary-100/40 px-3 py-2 focus-visible:outline-none'
            />
         </div>
         <button className='mt-3 w-full rounded-md bg-primary px-3 py-2.5 text-center text-white hover:bg-primary-500 active:bg-primary-400'>
            Sign in
         </button>
      </form>
   );
};

export default SignInForm;
