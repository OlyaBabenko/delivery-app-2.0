import { accountInfoService, personalInfoService } from '@/services';
import { create } from 'zustand';

const useUser = create((set) => ({
   accountInfo: null,
   personalInfo: null,
   setPersonalInfo: (info) => set({ personalInfo: info }),
   setAccountInfo: (info) => set({ accountInfo: info }),
   getPersonalInfo: async (id) => {
      try {
         const response = await personalInfoService(id);
         set({ personalInfo: response });
      } catch (error) {
         console.log(error);
      }
   },
   getAccountInfo: async () => {
      try {
         const response = await accountInfoService();
         set({ accountInfo: response.data });
      } catch (error) {
         console.log(error);
      }
   },
}));

export default useUser;
