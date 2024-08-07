import { accountInfoService, personalInfoService } from '@/services';
import { getCookieByKey } from '@/utils/cookies';
import { create } from 'zustand';

const useUser = create((set, get) => ({
   accountInfo: null,
   personalInfo: null,
   setPersonalInfo: (info) => set({ personalInfo: info }),
   setAccountInfo: (info) => set({ accountInfo: info }),
   getPersonalInfo: async (id) => {
      try {
         if (!getCookieByKey('access')) return null;
         const response = await personalInfoService(id);
         set({ personalInfo: response });
      } catch (error) {
         return null;
      }
   },
   getAccountInfo: async () => {
      try {
         if (!getCookieByKey('access')) return null;
         const accountData = await accountInfoService();
         set({ accountInfo: accountData.data });
         if (!get().personalInfo) await get().getPersonalInfo(accountData.data.id);
      } catch (error) {
         return null;
      }
   },
}));

export default useUser;
