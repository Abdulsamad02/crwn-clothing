import React from 'react'
// import CategoryItem from '../category-item/category-item.component' 
import DirectoryItem from '../directory-item/directory-item.component';

const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "route": "shop/hats"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "route": "shop/jackets"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "route": "shop/sneakers"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "route": "shop/womens"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "route": "shop/mens"
  },
  {
    "id": 6,
    "title": "mens",
    "imageUrl": "https://www.sacvin.com/Item%20Images/Smart%20Life%20200%20ml%20Pack%20Of%2024%20-%20colour%20transparent_1.jpg?resizeid=2&resizeh=1000&resizew=1000",
    "route": "shop/mens"
  },
  {
    "id": 7,
    "title": "children",
    "imageUrl": "https://www.sacvin.com/Item%20Images/For%20My%20Family_1.jpg?resizeid=2&resizeh=1000&resizew=1000",
    "route": "shop/children"
  }
];
const Directory = () => {


  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem  
          key={category.id} 
          category={category} 
          imageUrl={category.imageUrl} 
          title={category.title} 
        />
      ))}
    </div>
  );
};

export default Directory




 

