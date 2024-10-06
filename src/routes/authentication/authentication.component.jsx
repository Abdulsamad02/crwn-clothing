import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component'; // Ensure the path is correct

const Authentication = () => {
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
    <div className="auth-page">
    <h1>Authentication Page</h1>
    <div className="forms-container">
        <SignInForm className="sign-in-form" />
        <SignUpForm className="sign-up-form" />
    </div>
</div>
    // <div className="auth-page">
    //   <h1>Authentication Page</h1>
    //   <button type="button" onClick={logGoogleUser}>Sign in with Google Popup</button>
    //    <button type="button" onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
    //   <SignInForm />
    //   <SignUpForm />
    // </div>
  );
};

export default Authentication;
























// import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
// import { getRedirectResult } from 'firebase/auth';
// import { useEffect } from 'react';
// import SignUpForm from '../../components/sign-up-form/sign-up-form.component'; // Corrected import
//  import SignInForm from '../../components/sign-in-form/sign-in-form.component';

// const Authentication = () => {
//   useEffect(() => {
//     const handleRedirectResult = async () => {
//       try {
//         const response = await getRedirectResult(auth);
//         console.log(response);
//         const { user } = response || {}; // Destructure user from response
//         if (user) {
//           await createUserDocumentFromAuth(user);
//         }
//       } catch (error) {
//         console.error('Error handling redirect result:', error);
//       }
//     };

//     handleRedirectResult();
//   }, []);

//   const logGoogleUser = async () => {
//     try {
//       const { user } = await signInWithGooglePopup();
//       await createUserDocumentFromAuth(user);
//     } catch (error) {
//       console.error('Error signing in with Google Popup:', error);
//     }
//   };

//   const logGoogleRedirectUser = async () => {
//     try {
//       await signInWithGoogleRedirect();
//       // Note: The actual user data handling is done in useEffect
//     } catch (error) {
//       console.error('Error signing in with Google Redirect:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Sign In Page</h1>
//       {/* <button type="button" onClick={logGoogleUser}>Sign in with Google Popup</button> */}
//       {/* <button type="button" onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button> */}
//       <SignInForm/>
//       <SignUpForm /> {/* Corrected component name */}
//     </div>
//   );
// };

// export default Authentication;





 
