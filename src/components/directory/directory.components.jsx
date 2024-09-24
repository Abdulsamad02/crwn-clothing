import React from 'react'
import CategoryItem from '../category-item/category-item.component' 


const Directory = ({categories}) => {
  return (
    <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem  key={category.id} category={category} imageUrl={category.imageUrl} title={category.title} />
    ))}
  </div>
  )
}

export default Directory
