export const setCookie = (key, value) => {
   document.cookie = `${key}=${value}; path=/;samesite=Lax;`;
};

export const getCookieByKey = (key) => {
   if (typeof document !== 'undefined') {
      const cookie = document.cookie;
      const value = `; ${cookie}`;
      const parts = value.split(`; ${key}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
   }
   return null;
};

export const deleteCookie = (key) => {
   document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;samesite=Lax;`;
};
