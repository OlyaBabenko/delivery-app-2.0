import $api from '@/api';

export const signInService = (data) => {
   const formData = new FormData();
   formData.append('username', data.email);
   formData.append('password', data.password);
   return $api('/users/auth/', {
      method: 'POST',
      body: formData,
   });
};
