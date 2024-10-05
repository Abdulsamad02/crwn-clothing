import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            // Ensure it accepts only email and password
            const { user } = await createAuthUserWithEmailAndPassword(email, password); 
            console.log('User created:', user); // Log the user
            await createUserDocumentFromAuth(user, { displayName });
            setFormFields(defaultFormFields); // Reset form fields after successful sign-up
        } catch (error) {
            console.log('User creation encountered an error:', error); // Log the error for debugging
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('Cannot create user, email already in use');
                    break;
                case 'auth/invalid-email':
                    alert('The email address is not valid.');
                    break;
                case 'auth/weak-password':
                    alert('The password is too weak. Please choose a stronger password.');
                    break;
                default:
                    alert('An error occurred during sign-up. Please try again.'); // General error message
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password</span>
             
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

                <Button   type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;