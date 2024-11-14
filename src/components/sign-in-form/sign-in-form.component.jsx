import { useState, useContext, useEffect } from 'react';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, onAuthStateChangedListener } from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';

// Default form fields
const defaultFormFields = {
    email: '',
    password: '',
};

// Functional component
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(user => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, [setCurrentUser]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
        } catch (error) {
            handleSignInError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        if (error) setError(null);
    };

    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGooglePopup();
            setCurrentUser(user);
        } catch (error) {
            console.error('Error signing in with Google:', error);
            alert('An error occurred while signing in with Google. Please try again.');
        }
    };

    const handleSignInError = (error) => {
        switch (error.code) {
            case 'auth/user-not-found':
                setError('No user found with this email. Please sign up.');
                break;
            case 'auth/wrong-password':
                setError('Incorrect password. Please try again.');
                break;
            case 'auth/invalid-email':
                setError('The email address is not valid.');
                break;
            case 'auth/invalid-credential':
                setError('Invalid credentials provided. Please check your email and password.');
                break;
            case 'auth/too-many-requests':
                setError('Too many unsuccessful login attempts. Please try again later.');
                break;
            default:
                setError('An error occurred during sign-in. Please try again.');
        }
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            {error && <div className='error-message'>{error}</div>}

            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    name="email"
                    id="email-1"
                    type="email"
                    required
                    value={email}
                    onChange={handleChange}
                />
                <FormInput 
                    label="Password"
                    name="password"
                    id="password-1"
                    type="password"
                    required
                    value={password}
                    onChange={handleChange}
                />
                <div className='buttons-container'>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "SIGNING IN..." : "Sign In"}
                    </Button>
                    <Button type="button" className="google" onClick={handleGoogleSignIn}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;





// import { useState, useContext } from 'react';
// import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.util';
// import FormInput from '../form-input/form-input.component';
// import Button from '../button/button.component';
// import { UserContext } from '../../context/user.context';

// // Default form fields
// const defaultFormFields = {
//     email: '',
//     password: '',
// };

// // Functional component
// const SignInForm = () => {
//     const [formFields, setFormFields] = useState(defaultFormFields);
//     const { email, password } = formFields;
//     const { setCurrentUser } = useContext(UserContext);

//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setError(null); // Clear previous errors

//         try {
//             const user = await signInAuthUserWithEmailAndPassword(
//                 email, 
//                 password
//             );
//             setCurrentUser(user);
//             console.log('User signed in:', user);
//             setFormFields(defaultFormFields); // Reset form fields
//         } catch (error) {
//             console.error('Sign-in encountered an error:', error);
//             handleSignInError(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormFields({ ...formFields, [name]: value });
//         if (error) setError(null); // Clear error when changing input
//     };

//     const handleGoogleSignIn = async () => {
//         try {
//             const user = await signInWithGooglePopup();
//             setCurrentUser(user);
//             console.log('User signed in with Google:', user);
//         } catch (error) {
//             console.error('Error signing in with Google:', error);
//             alert('An error occurred while signing in with Google. Please try again.');
//         }
//     };

//     const handleSignInError = (error) => {
//         switch (error.code) {
//             case 'auth/user-not-found':
//                 setError('No user found with this email. Please sign up.');
//                 break;
//             case 'auth/wrong-password':
//                 setError('Incorrect password. Please try again.');
//                 break;
//             case 'auth/invalid-email':
//                 setError('The email address is not valid.');
//                 break;
//             case 'auth/invalid-credential':
//                 setError('Invalid credentials provided. Please check your email and password.');
//                 break;
//             case 'auth/too-many-requests':
//                 setError('Too many unsuccessful login attempts. Please try again later.');
//                 break;
//             default:
//                 setError('An error occurred during sign-in. Please try again.');
//         }
//     };

//     return (
//         <div className='sign-in-container'>
//             <h2>Already have an account?</h2>
//             <span>Sign in with your email and password</span>

//             {error && <div className='error-message'>{error}</div>} {/* Display error message */}

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
//                 <div className='buttons-container'>
//                     <Button type="submit" disabled={isLoading}>
//                         {isLoading ? "SIGNING IN..." : "Sign In"}
//                     </Button>
//                     <Button type="button" className="google" onClick={handleGoogleSignIn}>Google Sign In</Button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SignInForm;


