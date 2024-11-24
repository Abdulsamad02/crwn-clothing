import { useNavigate } from 'react-router-dom';


const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="directory-item-container" style={{ backgroundImage: `url(${imageUrl})` }} onClick={onNavigateHandler}>
       
       <div className="category-body-container" onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;

// import { useNavigate } from 'react-router-dom';
// import React from 'react';

// const DirectoryItem = ({ title, imageUrl, route }) => {
//   const navigate = useNavigate();

//   const onNavigateHandler = () => 
//     navigate(route);
  

//   return (
//     <div
//       className="directory-item-container"
//       style={{ backgroundImage: `url(${imageUrl})` }} onClick={onNavigateHandler}>
      
    
      // <div className="category-body-container" onClick={onNavigateHandler}>
      //   <h2>{title}</h2>
      //   <p>Shop Now</p>
      //   <button onClick={onNavigateHandler}>click</button>
      // </div>
//     </div>
//   );
// };

// export default DirectoryItem;









// import { useNavigate } from 'react-router-dom';
// import React from 'react';

// const DirectoryItem = ({ title, imageUrl, route }) => {
//   const navigate = useNavigate();

//   const onNavigateHandler = () => navigate(route);
//   return (
//   <div
//       className="directory-item-container"
//       style={{ backgroundImage: `url(${imageUrl})` }}
//       onClick={onNavigateHandler}
//     >
//       <div className="category-body-container">
//         <h2>{title}</h2>
//         <p>Shop Now</p>
//       </div>
//     </div>
//   );
// };

// export default DirectoryItem;


// import { useNavigate } from 'react-router-dom';
// import React from 'react'

// const DirectoryItem = ({title,  imageUrl, route}) => {
//   const navigate = useNavigate();

//   const onNavigateHandler = () => navigate(route);
//   return ( 

//         <div className="directory-item-container" style={{ backgroundImage: `url(${imageUrl})` onClick={onNavigateHandler}}}>
//             <div className="category-body-container">
//               <h2>{title}</h2>
//               <p>Shop Now</p>
//             </div>
//         </div>
//   )
// }

// export default DirectoryItem;

