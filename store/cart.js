import { create } from "zustand";

const useCart = create((set) => ({
    cart: null,
    addToCart: (item) => set({ cart: { ...cart, item } }),
    removeFromCart: (item) => set({ cart: cart.filter((el) => el.id !== item.id) }),
    resetCart: () => set({cart: null})
}))

export default useCart;