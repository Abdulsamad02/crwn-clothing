import React, { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../context/categories.context';
import ProductCard from '../components/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext); 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category] || []); // Use square brackets and provide a fallback
    }, [category, categoriesMap]); // Add dependency array

    return (
        <Fragment>
            <h2 className="title">{category.toUpperCase()}</h2>
        <div className='category-container'>
            {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />  
            ))}
        </div>
        </Fragment>
    );
};

export default Category;

// import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { CategoriesContext } from '../context/categories.context';
// import ProductCard from '../components/product-card/product-card.component';

// const Category = () => {
//     const { category } = useParams();
//     const { categoriesMap } = useContext(CategoriesContext); 
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         setProducts(categoriesMap[category] || []); // Use square brackets and provide a fallback
//     }, [category, categoriesMap]); // Add dependency array

//     return (
//         <div className='category-container'>
//             {products && products.map((product) => (
//                 <ProductCard key={product.id} product={product} />  
//             ))}
//         </div>
//     );
// };

// export default Category;