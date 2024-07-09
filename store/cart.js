import { toast } from 'sonner';
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
   if (!cart) {
      useCartStore.setState({ cart: [{ ...item, count: 1 }] });
      toast.success('The dish has been created.');
      updateTotalPrice();
      return;
   }
   if (cart && cart[0]?.restaurant !== item.restaurant) {
      toast.error('You can add dishes from only one restaurant.');
      return;
   }
   const index = cart.findIndex((el) => el.id === item.id);
   if (index === -1) {
      useCartStore.setState({ cart: [...cart, { ...item, count: 1 }] });
   } else {
      cart[index].count += 1;
      useCartStore.setState({ cart: [...cart] });
   }
   toast.success('The dish has been added');
   updateTotalPrice();
};

export const deleteFromCart = (item) => {
   const { cart = [] } = useCartStore.getState();
   const index = cart.findIndex((el) => el.id === item.id);
   if (index === -1) return;

   const updatedCart = cart
      .map((el, i) => (i === index ? { ...el, count: el.count - 1 } : el))
      .filter((el) => el.count > 0);

   if (!updatedCart.length) {
      resetCart();
   } else {
      useCartStore.setState({ cart: updatedCart });
      updateTotalPrice();
   }
   toast.success('The dish has been deleted');
};

export const resetCart = () => {
   useCartStore.setState({ cart: null, totalPrice: 0 });
};
