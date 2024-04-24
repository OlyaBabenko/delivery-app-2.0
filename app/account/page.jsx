'use client';
import SignIn from '@/components/Profile/SignInForm';
import useUser from '@/store/user';

const Account = () => {
   const { userInfo } = useUser();
    if (!userInfo) return (<SignIn/>)
   return <></>;
};

export default Account;
