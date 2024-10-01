import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASqbCP3FjCrj6DWVf6aJsEk_dsSg80VhQ",
    authDomain: "crown-clothing-db-cafca.firebaseapp.com",
    projectId: "crown-clothing-db-cafca",
    storageBucket: "crown-clothing-db-cafca.appspot.com",
    messagingSenderId: "377487351820",
    appId: "1:377487351820:web:a2f6c6f7af5813a097ce29"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(firebaseApp); // Pass firebaseApp
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialize Firestore
export const db = getFirestore(firebaseApp); // Pass firebaseApp

// Create user document from authentication
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); // Use userAuth.uid directly
    const userSnapshot = await getDoc(userDocRef);

    // Check if the user document does not exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('Error creating the user:', error.message); // Improved error message
        }
    }

    return userDocRef;
};






























//import { initializeApp } from 'firebase/app'

// // importing some methods firebase
// import { getAuth,
//      signInWithRedirect,
//       signInWithPopup,
//        GoogleAuthProvider,
//     } from 'firebase/auth'


// //  install somw methods  doc is what we need and thr getDoc is to get document while the  setDoc is to set document  firebase firestore
// import {
//   getFirestore,
//   doc,
//   getDoc,
//   setDoc
// } from 'firebase/firestore'



// const firebaseConfig = {
//     apiKey: "AIzaSyASqbCP3FjCrj6DWVf6aJsEk_dsSg80VhQ",
//     authDomain: "crown-clothing-db-cafca.firebaseapp.com",
//     projectId: "crown-clothing-db-cafca",
//     storageBucket: "crown-clothing-db-cafca.appspot.com",
//     messagingSenderId: "377487351820",
//     appId: "1:377487351820:web:a2f6c6f7af5813a097ce29"
//   };

//   // Initialize Firebase
//   const firebaseapp = initializeApp(firebaseConfig);

 
//   const provider = new  GoogleAuthProvider();
//   provider.setCustomParameters({
//     prompt: "select_account"
//   });


//   export const auth = getAuth(firebaseApp);
//   export const signInWithGooglePopup = () => signInWithPopup(auth, provider);



//   // lets create the databas for firestore 

//   export const db = getFirestore(firebaseApp);
          
//   const  createUserDocumentFromAuth = async (userAuth) => {
//     const userDocRef = doc(db, 'users', userAuth.uid )
//     const userSnapshot = await getDoc(userDocRef) 

//     if(userSnapshot.exists()){
//       const {displayName, email} =  userAuth;
//       const createdAt = new Date();

//       try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//       }) ;
//       }catch (error) {
//         console.log('error creating the user' , error.message)
//       }
      
//     }

//      return userDocRef;

//   };