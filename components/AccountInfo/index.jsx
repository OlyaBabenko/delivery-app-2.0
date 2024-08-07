import useUser from '@/store/user';
import AccountInfoForm from './AccountInfoForm';
import PersonalInfoForm from './PersonalInfoForm';
import RecipientInfoForm from './RecipientInfoForm';
import useSignOut from '@/hooks/useSignOut';

const AccountInfo = () => {
   const { accountInfo } = useUser();
   const { handleSignOut } = useSignOut();

   return (
      <div className='relative w-full max-w-2xl px-2 text-primary'>
         <h2 className='text-center text-2xl font-medium'>Welcome, {accountInfo?.username}!</h2>
         <AccountInfoForm />
         <PersonalInfoForm />
         <RecipientInfoForm />
         <button
            onClick={handleSignOut}
            className='absolute right-0 top-0 rounded-md border border-error-300 px-3 py-1 text-error-400 transition-all hover:bg-error-400/80 hover:text-white active:bg-error-400/60 active:text-white'
         >
            Log out
         </button>
      </div>
   );
};

export default AccountInfo;
