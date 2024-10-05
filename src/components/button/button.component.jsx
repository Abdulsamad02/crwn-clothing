import React from 'react';
 

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    primary: 'primary', // Default button for general use
};

const Button = ({ children, buttonType = 'primary', ...otherProps }) => {
    return (
        <button 
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;