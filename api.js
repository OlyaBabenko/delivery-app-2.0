import { ofetch } from 'ofetch';
import { getCookieByKey } from './utils/cookies';

const $api = ofetch.create({
   baseURL: `${process.env.api}`,
   onRequest({ options }) {
      const access = getCookieByKey('access');
      if (!access) return;
      options.headers = {
         ...options.headers,
         Authorization: `Bearer ${access}`,
      };
   },
});

export default $api;
