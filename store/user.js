import { create } from "zustand";

const useUser = create((set) => ({
    userInfo: null,
    setUser: (info) => set({ userInfo: info })
}))

export default useUser;