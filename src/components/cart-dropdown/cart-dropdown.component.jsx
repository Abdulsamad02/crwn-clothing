import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context/cart-context.component';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

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
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;



 
