import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener } from '../utils/firebase/firebase.util'; // Corrected the import

// Create a context with default values
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// Create a provider component
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user); // Set the current user when authentication state changes
        });

        return () => unsubscribe(); // Clean up the listener on unmount
    }, []);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};



// import { createContext, useState, useEffect} from 'react';

// import { onAuthStateChangedListiner, } from '../utils/firebase/firebase.util';
// // Create a context with default values
// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => null, // Corrected the typo here
// });

// // Create a provider component
// export const UserProvider = ({ children }) => { // Capitalized 'UserProvider'
//     const [currentUser, setCurrentUser] = useState(null); // Corrected the typo here
//     const value = { currentUser, setCurrentUser }; // Corrected the typo here

    

//     useEffect(() => {
//      const  unsubscribe = onAuthStateChangedListiner ((user) => {

//      });

//      return unsubscribe;   
//     }, [])

//     return (
//         <UserContext.Provider value={value}>
//             {children}
//         </UserContext.Provider>
//     );
// };




