import { signInService, signUpService } from '@/services';
import { setCookie } from '@/utils/cookies';
import validation from '@/utils/validation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useSignUp = () => {
   const [isPending, setIsPending] = useState();
   const router = useRouter();
   const [formData, setFormData] = useState({
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
   });
   const [errors, setErrors] = useState({
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
   });

   const { isEmail, isName, isPassword, isConfirmPassword } = validation();

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
      const emailErr = isEmail(formData.email.toLowerCase());
      const usernameErr = isName(formData.username);
      const passwordErr = isPassword(formData.password);
      const confirmPasswordErr = isConfirmPassword(formData.password, formData.confirmPassword);

      setErrors({
         email: emailErr,
         username: usernameErr,
         password: passwordErr,
         confirmPassword: confirmPasswordErr,
      });

      if (emailErr || usernameErr || passwordErr || confirmPasswordErr) return;

      try {
         setIsPending(true);
         const resSignUp = await signUpService({
            email: formData.email.toLowerCase(),
            username: formData.username,
            password: formData.password,
         });
         const resSignIn = await signInService({
            email: await resSignUp.username,
            password: formData.password,
         });
         setCookie('access', resSignIn.token);
         router.push('/');
      } catch (error) {
         setErrors({ email: 'Email already exists' });
      } finally {
         setIsPending(false);
      }
   }

   return { formData, setFormData, errors, setErrors, isPending, handleChange, submitForm };
};

export default useSignUp;
