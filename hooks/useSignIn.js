import { signInService } from '@/services';
import useUser from '@/store/user';
import { setCookie } from '@/utils/cookies';
import validation from '@/utils/validation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useSignIn = () => {
   const router = useRouter();
   const { getAccountInfo } = useUser();
   const [isPending, setIsPending] = useState(false);
   const [formData, setFormData] = useState({
      email: '',
      password: '',
   });
   const [errors, setErrors] = useState({
      email: '',
      password: '',
   });

   const { isEmail, isPassword } = validation();

   const handleChange = (e) => {
      const { name, value } = e.target;
      setErrors((state) => ({
         ...state,
         [name]: '',
      }));
      setFormData((state) => ({ ...state, [name]: value.trim() }));
   };

   async function submitForm(e) {
      e.preventDefault();

      // const emailError = isEmail(formData.email.toLowerCase());
      const passwordError = isPassword(formData.password);

      // setErrors({ email: emailError, password: passwordError });
      setErrors({ password: passwordError });

      // if (emailError || passwordError) return;
      if (passwordError) return;

      try {
         setIsPending(true);
         const res = await signInService({
            email: formData.email.toLowerCase(),
            password: formData.password,
         });
         setCookie('access', res.token);
         getAccountInfo();
         router.push('/');
      } catch (error) {
         setErrors({ email: 'Email may be incorrect', password: 'Password may be incorrect' });
      } finally {
         setIsPending(false);
      }
   }

   return { formData, setFormData, errors, isPending, submitForm, setErrors, handleChange };
};

export default useSignIn;
