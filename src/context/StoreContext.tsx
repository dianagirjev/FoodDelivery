import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { food_list } from "../assets/assets";
import type { FoodItemType } from "../assets/assets";

type CartItems = Record<string, number>;

type StoreContextType = {
  food_list: FoodItemType[];
  cartItems: CartItems;
  setCartItems: Dispatch<SetStateAction<CartItems>>;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  getTotalAmount: () => number;
};

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);

type StoreContextProviderType = {
  children: ReactNode;
};

const StoreContextProvider = ({ children }: StoreContextProviderType) => {
  const [cartItems, setCartItems] = useState<CartItems>({});

  const addToCart = (itemId: string) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: (prev[itemId] ?? 0) + 1 };
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = food_list.find((el) => el._id === item);
        if (product) {
          totalAmount += product.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const contextValue: StoreContextType = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

// Hook helper (super util)
export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error("useStore must be used inside StoreContextProvider");
  }
  return ctx;
};
