import React from 'react'
import Button from '../button/button.component'
const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
      <h2>Your Cart</h2>
        <p>Item 1: $10</p>
        <p>Item 2: $20</p>
        <p>Item 3: $15</p>
        
        
        
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDropdown
