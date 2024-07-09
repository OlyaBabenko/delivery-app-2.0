import $api from '@/api';

//auth
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

//user info
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

//products
export const restaurantListService = () => {
   return $api('/products/restaurant/');
};

export const productsListService = (name) => {
   return $api(`/products/product/${encodeURIComponent(name)}/`);
};

export const productItemService = (id) => {
   return $api(`/products/${id}/`);
};

//recipient
export const createRecipientService = (data) => {
   const formData = new FormData();
   formData.append('first_name', data.first_name);
   formData.append('last_name', data.last_name);
   formData.append('address', data.address);
   formData.append('phone', data.phone);
   formData.append('user', data.user);

   return $api('/products/recipient/', {
      method: 'POST',
      body: formData,
   });
};

//cart
export const createOrderService = (data, id) => {
   return $api('/products/order/', {
      method: 'POST',
      body: { items: data, recipient: id },
   });
};
