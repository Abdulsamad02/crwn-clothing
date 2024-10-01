 
import React from 'react'

const CategoryItem = ({title,  imageUrl}) => {
  return ( 

        <div className="category-container" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="category-body-container">
              <h2>{title}</h2>
              {/* <h3>{id}</h3> */}
              <p>Shop Now</p>
            </div>
        </div>
  )
}

export default CategoryItem
