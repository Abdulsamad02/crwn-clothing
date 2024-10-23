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

// Function to remove items from the cart
export const removeCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};

// Create the CartContext
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  decrementItemFromCart: () => {},
  cartCount: 0,
});

// CartProvider component
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  // Function to add item to the cart
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  // Function to remove an item completely from the cart
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(prevCartItems => removeCartItem(prevCartItems, cartItemToRemove));
  };

  // Function to decrement the quantity of an item
  const decrementItemFromCart = (cartItemToDecrement) => {
    setCartItems((prevCartItems) => {
      const updatedItems = prevCartItems.map(cartItem =>
        cartItem.id === cartItemToDecrement.id
          ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
          : cartItem
      );

      return updatedItems.filter(cartItem => cartItem.quantity > 0); // Remove items with zero quantity
    });
  };

  // Context value to be provided to components
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeItemFromCart,
    addItemToCart,
    decrementItemFromCart,
    cartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};// import { createContext, useState, useEffect } from 'react';
