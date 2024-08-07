import { useRouter } from 'next/navigation';
import { deleteCookie } from '@/utils/cookies';
import useUser from '@/store/user';

const useSignOut = () => {
   const router = useRouter();
   const { setPersonalInfo, setAccountInfo } = useUser();

   const handleSignOut = async (e) => {
      e.preventDefault();
      deleteCookie('access');
      await setPersonalInfo(null);
      await setAccountInfo(null);
      router.push('/products');
   };

   return { handleSignOut };
};

export default useSignOut;
