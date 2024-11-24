import React, { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview-component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    // Check if categoriesMap is defined
    if (!categoriesMap) {
        return <div>Loading...</div>; // Fallback UI while loading
    }

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;