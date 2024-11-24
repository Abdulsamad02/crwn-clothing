import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.util';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoryMap = async () => {
            try {
                const categoryMap = await getCategoriesAndDocuments();
                
                setCategoriesMap(categoryMap); // Set the fetched categories to state
            } catch (error) {
                console.error("Error fetching categories:", error); // Log any errors
            }
        };
        
        getCategoryMap(); // Call the function
    }, []);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};