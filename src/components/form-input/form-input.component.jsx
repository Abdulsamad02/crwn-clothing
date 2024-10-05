import React, { useState } from 'react';
 

const FormInput = ({ label, ...otherProps }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (!otherProps.value) {
            setIsFocused(false);
        }
    };

    return (
        <div className="group">
            <input
                className="form-input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...otherProps}
            />
            {label && (
                <label
                    htmlFor={otherProps.id}
                    className={`${isFocused || otherProps.value.length ? 'shrink' : ''} form-input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;














// import React from 'react';

// const FormInput = ({ label, ...otherProps }) => {
//     return (
//         <div className="group">
//              <input className="form-input" {...otherProps} />
//             {label && (
//                 <label htmlFor={otherProps.id} className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
//                     {label}
//                 </label>
//             )}
//             <input className="form-input" {...otherProps} />
//         </div>
//     );
// };

// export default FormInput;