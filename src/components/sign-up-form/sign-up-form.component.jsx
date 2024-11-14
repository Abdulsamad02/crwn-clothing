import { useState, useContext, useEffect } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, onAuthStateChangedListener } from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';

// Default form fields
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

// Functional component
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(user => {
            setCurrentUser(user ? user : null);
        });

        return () => unsubscribe();
    }, [setCurrentUser]);

    const validateForm = () => {
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return false;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!validateForm()) return;

        setIsLoading(true);
        setError(null);

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setCurrentUser(user);
            setFormFields(defaultFormFields); // Reset form fields
            alert('User created successfully!');
        } catch (error) {
            console.error('Error during sign up:', error); // Log error for debugging
            setError(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        if (error) setError(null); // Clear error when input changes
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            
            {error && <div className='error-message'>{error}</div>}

            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name"
                    name="displayName"
                    id="displayName"
                    type="text"
                    required
                    value={displayName}
                    onChange={handleChange}
                />
                <FormInput 
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={handleChange}
                />
                <FormInput 
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={handleChange}
                />
                <FormInput 
                    label="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Signing Up..." : "Sign Up"}
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;


















// import { useState, useContext } from 'react';
// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
// import FormInput from '../form-input/form-input.component';
// import Button from '../button/button.component';
// import { UserContext } from '../../context/user.context';

// // Default form fields
// const defaultFormFields = {
//     displayName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
// };

// // Functional component
// const SignUpForm = () => {
//     const [formFields, setFormFields] = useState(defaultFormFields);
//     const { displayName, email, password, confirmPassword } = formFields;
//     const { setCurrentUser } = useContext(UserContext); 

//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     const validateForm = () => {
//         if (password.length < 6) {
//             setError("Password must be at least 6 characters long.");
//             return false;
//         }
//         if (password !== confirmPassword) {
//             setError("Passwords do not match.");
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
        
//         if (!validateForm()) return;

//         setIsLoading(true);
//         setError(null);

//         try {
//             const { user } = await createAuthUserWithEmailAndPassword(email, password);
//             await createUserDocumentFromAuth(user, { displayName });
//             setCurrentUser(user);
//             setFormFields(defaultFormFields);
//             alert('User created successfully!');
//         } catch (error) {
//             setError(`Error: ${error.message}`);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormFields({ ...formFields, [name]: value });
//         if (error) setError(null); // Clear error when changing input
//     };

//     return (
//         <div className='sign-up-container'>
//             <h2>Don't have an account?</h2>
//             <span>Sign up with your email and password</span>
            
//             {error && <div className='error-message'>{error}</div>}

//             <form onSubmit={handleSubmit}>
//                 <FormInput 
//                     label="Display Name"
//                     name="displayName"
//                     id="displayName"
//                     type="text"
//                     required
//                     value={displayName}
//                     onChange={handleChange}
//                 />
//                 <FormInput 
//                     label="Email"
//                     name="email"
//                     id="email"
//                     type="email"
//                     required
//                     value={email}
//                     onChange={handleChange}
//                 />
//                 <FormInput 
//                     label="Password"
//                     name="password"
//                     id="password"
//                     type="password"
//                     required
//                     value={password}
//                     onChange={handleChange}
//                 />
//                 <FormInput 
//                     label="Confirm Password"
//                     name="confirmPassword"
//                     id="confirmPassword"
//                     type="password"
//                     required
//                     value={confirmPassword}
//                     onChange={handleChange}
//                 />
//                 <Button type="submit" disabled={isLoading}>
//                     {isLoading ? "Signing Up..." : "Sign Up"}
//                 </Button>
//             </form>
//         </div>
//     );
// };

// export default SignUpForm;










 