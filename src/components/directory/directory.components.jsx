import React from 'react'
import CategoryItem from '../category-item/category-item.component' 

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem 
          key={category.id} // Properly set the key prop
          category={category} 
          imageUrl={category.imageUrl} 
          title={category.title} 
        />
      ))}
    </div>
  );
};

export default Directory




// const Directory = ({categories}) => {
//   return (
//     <div className="categories-container">
//     {categories.map((category) => (
//       <CategoryItem  ={category.id} category={category} imageUrl={category.imageUrl} title={category.title} />
//     ))}
//   </div>
//   )
// }


