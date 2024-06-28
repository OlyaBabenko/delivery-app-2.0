import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
   persist(
      (set, get) => ({
         cart: null,
      }),
      {
         name: 'cart-storage',
      },
   ),
);

export const useCart = () => useCartStore((state) => state.cart);

export const addToCart = (item) => {
   const state = useCartStore.getState();
   if (state.cart === null) {
      return useCartStore.setState({ cart: [{ ...item, count: 1 }] });
   }
   const index = state.cart.findIndex((el) => el.id === item.id);
   if (index < 0) {
      return useCartStore.setState({ cart: [...state.cart, { ...item, count: 1 }] });
   } else {
      return useCartStore.setState({
         cart: state.cart.map((el, i) => (i === index ? { ...el, count: el.count + 1 } : el)),
      });
   }
};
