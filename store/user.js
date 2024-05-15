import { create } from 'zustand';

const useUser = create((set) => ({
   // userInfo: null,
   userInfo: {
      username: 'Olya',
      email: 'test1@gmail.com',
      gender: 'Female',
      birth: '03.01.1998',
   },
   setUser: (info) => set({ userInfo: info }),
}));

export default useUser;
