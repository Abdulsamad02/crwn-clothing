import React, { useContext } from 'react'; // Corrected import
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context/cart-context.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    
    const addProductToCart = () => {
        console.log('Adding product to cart:', product);
        addItemToCart(product);
    };
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">₦{price.toFixed(2)}</span> {/* Formatting price */}
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button> {/* Corrected 'onclick' to 'onClick' */}
        </div>
    );
};

export default ProductCard;