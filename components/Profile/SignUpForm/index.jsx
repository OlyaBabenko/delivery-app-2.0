const SignUpForm = () => {
   return (
      <form action='' className='mt-6 flex w-full flex-col gap-4'>
         <div className='flex flex-col'>
            <label htmlFor='name' className='text-sm text-primary'>
               Name
            </label>
            <input
               type='text'
               name='name'
               id='name'
               className='rounded-md border border-primary-300 bg-primary-100/20 px-3 py-2 focus-visible:outline-none'
            />
         </div>
         <div className='flex flex-col'>
            <label htmlFor='email' className='text-sm text-primary'>
               Email
            </label>
            <input
               type='text'
               name='email'
               id='email'
               className='rounded-md border border-primary-300 bg-primary-100/20 px-3 py-2 focus-visible:outline-none'
            />
         </div>
         <div className='flex flex-col'>
            <label htmlFor='password' className='text-sm text-primary'>
               Password
            </label>
            <input
               type='text'
               name='passwordConfirm'
               id='password'
               className='rounded-md border border-primary-300 bg-primary-100/20 px-3 py-2 focus-visible:outline-none'
            />
         </div>
         <div className='flex flex-col'>
            <label htmlFor='passwordConfirm' className='text-sm text-primary'>
               Confirm password
            </label>
            <input
               type='text'
               name='passwordConfirm'
               id='passwordConfirm'
               className='rounded-md border border-primary-300 bg-primary-100/20 px-3 py-2 focus-visible:outline-none'
            />
         </div>
         <button className='mt-3 w-full rounded-md bg-primary px-3 py-2.5 text-center text-white hover:bg-primary-500 active:bg-primary-400'>
            Sign up
         </button>
      </form>
   );
};

export default SignUpForm;
