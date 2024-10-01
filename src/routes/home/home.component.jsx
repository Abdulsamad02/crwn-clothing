import React from 'react'
import Directory from '../../components/directory/directory.components';
const Home = () => {
    const categories = [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://www.sacvin.com/core/media/media.nl?id=701874&c=1046790&h=b60K_Cqqdxjcx0ATps7lEAzcbLC02aM_Sv_8XtMV_VgHEgEG"
        }
    
        
       ]
      
       
        return (
          <Directory categories={categories}/> 
        );
      }

export default Home
