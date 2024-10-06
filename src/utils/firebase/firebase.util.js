import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration
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

// Initialize Auth
export const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

// Sign-in functions
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Initialize Firestore
export const db = getFirestore(firebaseApp);

// Create user document from authentication
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
            console.log('User document created:', { displayName, email });
        } catch (error) {
            console.log('Error creating the user:', error.message);
        }
    } else {
        console.log('User document already exists:', userSnapshot.data());
    }

    return userDocRef;
};

// Create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await firebaseCreateUserWithEmailAndPassword(auth, email, password);
};
























// import { initializeApp } from 'firebase/app';
// import { getAuth, 
//   signInWithEmailAndPassword,  
//   signInWithRedirect, 
//   signInWithPopup, 
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyASqbCP3FjCrj6DWVf6aJsEk_dsSg80VhQ",
//     authDomain: "crown-clothing-db-cafca.firebaseapp.com",
//     projectId: "crown-clothing-db-cafca",
//     storageBucket: "crown-clothing-db-cafca.appspot.com",
//     messagingSenderId: "377487351820",
//     appId: "1:377487351820:web:a2f6c6f7af5813a097ce29"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({
//     prompt: "select_account"
// });
// // my personal export
// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//     if (!email || !password) return;

//     return await signInWithEmailAndPassword(auth, email, password);
// };

// // Firebase Auth
// export const auth = getAuth(firebaseApp);
// export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// // Initialize Firestore
// export const db = getFirestore(firebaseApp);

// // Create user document from authentication
// export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
//     if (!userAuth) return;

//     const userDocRef = doc(db, 'users', userAuth.uid);
//     const userSnapshot = await getDoc(userDocRef);

//     // Check if the user document does not exist
//     if (!userSnapshot.exists()) {
//         const { displayName, email } = userAuth;
//         const createdAt = new Date();

//         try {
//             await setDoc(userDocRef, {
//                 displayName,
//                 email,
//                 createdAt,
//                 ...additionalInformation,
//             });
//             console.log('User document created:', { displayName, email });
//         } catch (error) {
//             console.log('Error creating the user:', error.message);
//         }
//     } else {
//         console.log('User document already exists:', userSnapshot.data());
//     }

//     return userDocRef; // Optionally return userDocRef or user data
// };

// // Create user with email and password
// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//     if (!email || !password) return;

//     return await firebaseCreateUserWithEmailAndPassword(auth, email, password);
// };
