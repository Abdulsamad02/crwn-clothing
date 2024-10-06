import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

// Default form fields
const defaultFormFields = {
    email: '',
    password: '',
};

// Functional component
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            console.log('User signed in:', user);
            setFormFields(defaultFormFields);
        } catch (error) {
            console.error('Sign-in encountered an error:', error); // Log the full error object
            console.error('Error code:', error.code); // Log the error code
            handleSignInError(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGooglePopup();
            console.log('User signed in with Google:', user);
        } catch (error) {
            console.error('Error signing in with Google:', error);
            alert('An error occurred while signing in with Google. Please try again.');
        }
    };

    
    // const handleSignInError = (error) => {
    //     switch (error.code) {
    //         case 'auth/user-not-found':
    //             alert('No user found with this email. Please sign up.');
    //             break;
    //         case 'auth/wrong-password':
    //             alert('Incorrect password. Please try again.');
    //             break;
    //         case 'auth/invalid-email':
    //             alert('The email address is not valid.');
    //             break;
    //         case 'auth/too-many-requests':
    //             alert('Too many unsuccessful login attempts. Please try again later.');
    //             break;
    //         default:
    //             alert('An error occurred during sign-in. Please try again.');
    //     }
    // };

    const handleSignInError = (error) => {
        switch (error.code) {
            case 'auth/user-not-found':
                alert('No user found with this email. Please sign up.');
                break;
            case 'auth/wrong-password':
                alert('Incorrect password. Please try again.');
                break;
            case 'auth/invalid-email':
                alert('The email address is not valid.');
                break;
            case 'auth/invalid-credential':
                alert('Invalid credentials provided. Please check your email and password.');
                break;
            case 'auth/too-many-requests':
                alert('Too many unsuccessful login attempts. Please try again later.');
                break;
            default:
                alert('An error occurred during sign-in. Please try again.');
        }
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
             
            <form onSubmit={handleSubmit}>
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
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" className="google" onClick={handleGoogleSignIn}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;







// import { useState } from 'react';
// import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.util';
// import FormInput from '../form-input/form-input.component';
// import Button from '../button/button.component';

// // Default form fields
// const defaultFormFields = {
//     email: '',
//     password: '',
// };

// // Functional component
// const SignInForm = () => {
//     const [formFields, setFormFields] = useState(defaultFormFields);
//     const { email, password } = formFields;
//     const [errorMessage, setErrorMessage] = useState(""); // State for error messages

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const user = await signInAuthUserWithEmailAndPassword(email, password);
//             console.log('User signed in:', user);
//             setFormFields(defaultFormFields);
//             setErrorMessage(""); // Clear any previous error messages
//         } catch (error) {
//             console.error('Sign-in encountered an error:', error);
//             handleSignInError(error);
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormFields({ ...formFields, [name]: value });
//         setErrorMessage(""); // Clear error message on input change
//     };

//     const handleGoogleSignIn = async () => {
//         try {
//             const user = await signInWithGooglePopup();
//             console.log('User signed in with Google:', user);
//         } catch (error) {
//             console.error('Error signing in with Google:', error);
//             alert('An error occurred while signing in with Google. Please try again.');
//         }
//     };

//     const handleSignInError = (error) => {
//         switch (error.code) {
//             case 'auth/user-not-found':
//                 setErrorMessage('No user found with this email. Please sign up.');
//                 break;
//             case 'auth/wrong-password':
//                 setErrorMessage('Incorrect password. Please try again.');
//                 break;
//             case 'auth/invalid-email':
//                 setErrorMessage('The email address is not valid.');
//                 break;
//             default:
//                 setErrorMessage('An error occurred during sign-in. Please try again.');
//         }
//     };

//     return (
//         <div className='sign-in-container'>
//             <h2>Already have an account?</h2>
//             <span>Sign in with your email and password</span>
             
//             <form onSubmit={handleSubmit}>
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
//                 {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
//                 <div className='buttons-container'>
//                     <Button type="submit">Sign In</Button>
//                     <Button type="button" className="google" onClick={handleGoogleSignIn}>Google Sign In</Button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SignInForm;


  
