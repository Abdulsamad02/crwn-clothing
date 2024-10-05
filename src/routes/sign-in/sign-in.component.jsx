import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'; // Corrected import

const SignIn = () => {
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const response = await getRedirectResult(auth);
        console.log(response);
        const { user } = response || {}; // Destructure user from response
        if (user) {
          await createUserDocumentFromAuth(user);
        }
      } catch (error) {
        console.error('Error handling redirect result:', error);
      }
    };

    handleRedirectResult();
  }, []);

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.error('Error signing in with Google Popup:', error);
    }
  };

  const logGoogleRedirectUser = async () => {
    try {
      await signInWithGoogleRedirect();
      // Note: The actual user data handling is done in useEffect
    } catch (error) {
      console.error('Error signing in with Google Redirect:', error);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button type="button" onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button type="button" onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
      <SignUpForm /> {/* Corrected component name */}
    </div>
  );
};

export default SignIn;




























// import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
// import { getRedirectResult } from 'firebase/auth';
// import { useEffect } from 'react';
// import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
// const SignIn = () => {
//   useEffect(() => {
//     const handleRedirectResult = async () => {
//       const response = await getRedirectResult(auth);
//       console.log(response);
//       if (response) {
//         await createUserDocumentFromAuth(response.user);
//       }
//     };

//     handleRedirectResult();
//   }, []);

//   const logGoogleUser = async () => {
//     const { user } = await signInWithGooglePopup();
//     await createUserDocumentFromAuth(user);
//   };

//   const logGoogleRedirectUser = async () => {
//     await signInWithGoogleRedirect();
//     // Note: The actual user data handling is done in useEffect
//   };

//   return (
//     <div>
//       <h1>Sign In Page</h1>
//       <button onClick={logGoogleUser}>Sign in with Google Popup</button>
//       <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
//       <SignUpForm/>
//     </div>
//   );
// };

// export default SignIn;
























// import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
// import { getRedirectResult, getAuth } from 'firebase/auth';
// import { useEffect } from 'react';

//   const SignIn = () => {
//     const auth = getAuth(); // Initialize auth

//     const logGoogleUser = async () => {
//         const { user } = await signInWithGooglePopup();
//         await createUserDocumentFromAuth(user);
//         console.log('User signed in with popup:', user); // Log user information
    
//     };

//     const logGoogleRedirectUser = async () => {
//         await signInWithGoogleRedirect();
//         // Redirecting, user data will be handled in useEffect
//     };

//     useEffect(() => {
//         const handleRedirectResult = async () => {
//      console.log('Attempting to get redirect result...');
//             const result = await getRedirectResult(auth);
//             console.log('User signed in with redirect:'); // 
//             if (result) {
//                 const user = result.user;
//                 await createUserDocumentFromAuth(user);
//      console.log('Redirect result:');
//             }
//         };
//         handleRedirectResult();
//     }, [auth]);

//     return (
//         <div>
//             <h1>Sign In Page</h1>
//             <button onClick={logGoogleUser}>
//                 Google Popup
//             </button>
//             <button onClick={logGoogleRedirectUser}>
//                 Sign in with Google Redirect
//             </button>
//         </div>
//     );
// };

// export default SignIn;


