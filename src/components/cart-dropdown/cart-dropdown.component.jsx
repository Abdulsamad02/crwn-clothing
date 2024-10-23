import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context/cart-context.component';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const  goToCheckOutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <span>Your cart is empty</span>
                )}
            </div>
            <Button onClick ={goToCheckOutHandler}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;



 
