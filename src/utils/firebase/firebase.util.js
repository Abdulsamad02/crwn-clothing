import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword 
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection } from 'firebase/firestore';

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

// Sign-out function
export const signOutUser = async () => {
    return await signOut(auth);
};

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

    return await createUserWithEmailAndPassword(auth, email, password);
};

// Example of how to use collection() correctly
export const getUsersCollection = async () => {
    const usersCollectionRef = collection(db, 'users'); // Ensure 'users' collection is correct
    // Further code to fetch data from this collection can go here
};

// Export onAuthStateChanged listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);



// import { initializeApp } from 'firebase/app';
// import { 
//     getAuth, 
//     signInWithEmailAndPassword, 
//     signInWithRedirect, 
//     signInWithPopup, 
//     GoogleAuthProvider, 
//     signOut,
//     onAuthStateChanged,
//     createUserWithEmailAndPassword 
// } from 'firebase/auth';
// import { getFirestore, doc, getDoc, setDoc, collection } from 'firebase/firestore';

// // Firebase configuration
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

// // Initialize Auth
// export const auth = getAuth(firebaseApp);
// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({
//     prompt: "select_account"
// });

// // Sign-in functions
// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//     if (!email || !password) return;

//     return await signInWithEmailAndPassword(auth, email, password);
// };

// export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// // Sign-out function
// export const signOutUser = async () => {
//     return await signOut(auth);
// };

// // Initialize Firestore
// export const db = getFirestore(firebaseApp);

// // Create user document from authentication
// export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
//     if (!userAuth) return;

//     const userDocRef = doc(db, 'users', userAuth.uid);
//     const userSnapshot = await getDoc(userDocRef);

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

//     return userDocRef;
// };

// // Create user with email and password
// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//     if (!email || !password) return;

//     return await createUserWithEmailAndPassword(auth, email, password);
// };

// // Example of how to use collection() correctly
// export const getUsersCollection = async () => {
//     const usersCollectionRef = collection(db, 'users'); // Ensure 'users' collection is correct
//     // Further code to fetch data from this collection can go here
// };

// export const onAuthStateChangedListiner = (callback) => onAuthStateChanged(auth, callback); 