import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category.component';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} /> {/* Corrected here */}
        </Routes>
    );
};

export default Shop;


//  import {Routes, Route} from 'react-router-dom'
// import CategoriesPreview from '../categories-preview/categories-preview.component';

// import Category from '../category.component';

// const Shop = () => {
     

//     return (
//         <Routes>
//             <Route index element= {<CategoriesPreview/>}/>
//             <Route path="category" {<Category/>}/>
//         </Routes>
        
//     );
// };

// export default Shop;