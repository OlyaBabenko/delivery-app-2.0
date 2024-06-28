import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
   persist(
      (set, get) => ({
         cart: null,
         totalPrice: 0,
      }),
      {
         name: 'cart-storage',
      },
   ),
);

export const useCart = () => useCartStore((state) => state.cart);
export const useTotalPrice = () => useCartStore((state) => state.totalPrice);

const updateTotalPrice = () => {
   const { cart = [] } = useCartStore.getState();
   const newTotal = cart.reduce((acc, { actualPrice, count }) => acc + actualPrice * count, 0);
   useCartStore.setState({ totalPrice: newTotal.toFixed(2) });
};

export const addToCart = (item) => {
   const { cart = [] } = useCartStore.getState();
   if (cart[0]?.restaurant !== item.restaurant) return;
   const index = cart.findIndex((el) => el.id === item.id);
   if (index === -1) {
      useCartStore.setState({ cart: [...cart, { ...item, count: 1 }] });
   } else {
      cart[index].count += 1;
      useCartStore.setState({ cart: [...cart] });
   }
   updateTotalPrice();
};

export const deleteFromCart = (item) => {
   const { cart = [] } = useCartStore.getState();
   const index = cart.findIndex((el) => el.id === item.id);
   if (index === -1) return;

   const updatedCart = cart
      .map((el, i) => (i === index ? { ...el, count: el.count - 1 } : el))
      .filter((el) => el.count > 0);

   useCartStore.setState({ cart: updatedCart });
   updateTotalPrice();
};
