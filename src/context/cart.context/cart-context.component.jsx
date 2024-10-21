import { createContext, useState, useEffect } from 'react';

// Function to add or update items in the cart
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If the item is new, add it to the cart with an initial quantity of 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Create the CartContext
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

// CartProvider component
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);


useEffect (() => {
  const newCartCount =cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
  setCartCount(newCartCount)
}, [cartItems])

  // Update the item count whenever cartItems change
  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(count);
  }, [cartItems]);

  // Function to add item to the cart
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  // Context value to be provided to components
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};