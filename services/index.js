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

export const signUpService = (data) => {
   const formData = new FormData();
   formData.append('email', data.email);
   formData.append('username', data.username);
   formData.append('password', data.password);
   return $api('/users/', {
      method: 'POST',
      body: formData,
   });
};

export const accountInfoService = () => {
   return $api('/users/');
};

export const personalInfoService = (id) => {
   return $api(`/accounts/userprofile/${id}/`);
};

export const updateAccountInfoService = (data, id) => {
   const formData = new FormData();
   for (const key in data) {
      formData.append(key, data[key]);
   }
   return $api(`/users/${id}/`, {
      method: 'PATCH',
      body: formData,
   });
};

export const updatePersonalInfoService = (data, id) => {
   const formData = new FormData();
   for (const key in data) {
      formData.append(key, data[key]);
   }
   return $api(`/accounts/userprofile/${id}/`, {
      method: 'PATCH',
      body: formData,
   });
};
