import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context/cart-context.component';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart, decrementItemFromCart } = useContext(CartContext);

    // Calculate total price
    const totalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">CHECKOUT</h1>
            <div className="header-block">
                <span className="header-item">Image</span>
                <span className="header-item">Product</span>
                <span className="header-item">Description</span>
                <span className="header-item">Quantity</span>
                <span className="header-item">Price</span>
                <span className="header-item">Remove</span>
            </div>
            <div className="cart-items">
                {cartItems.map((cartItem) => {
                    const { id, name, description, quantity, price, imageUrl } = cartItem;  
                    return (
                        <div key={id} className="cart-item">
                            <img src={imageUrl} alt={name} className="item-image" />
                            <span className="item-name">{name}</span>
                            <span className="item-description">{description}</span>
                            <div className="item-quantity-controls">
                                <button className="quantity-button" onClick={() => addItemToCart(cartItem)}>+</button>
                                <span className="item-quantity">{quantity}</span>
                                <button 
                                    className="quantity-button" 
                                    onClick={() => quantity > 1 ? decrementItemFromCart(cartItem) : removeItemFromCart(cartItem)}
                                >
                                    -
                                </button>
                            </div>
                            <span className="item-price">₦{price.toFixed(2)}</span>
                            <button className="remove-button" onClick={() => removeItemFromCart(cartItem)}>✖</button>
                        </div>
                    );
                })}
            </div>
            <div className="total">
                <span>Total: ₦{totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default Checkout;
