
import {Link,Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'


const Navigation = () => {
    return (
        <Fragment>
          <div className='navigation'>
              <Link className='logo-container' to='/'> 
                  <CrwnLogo className='logo'/>
              </Link>
              <div className='nav-links-container'>
                  <Link className='nav-link' to='/shop'>
                    SHOP
                  </Link>
                  <Link className='nav-link' to='/sign-in'>
                    SIGN IN 
                  </Link>
              </div>
          </div>
          <Outlet/>
        </Fragment>
    )
  }

  export default Navigation;



// import { Link, Outlet } from 'react-router-dom';
// const Navigation = () => {
//   return (
//     <div className="navbar">
//       <h1 className="navbar-title">I am the navigation bar</h1>
//       <ul className="nav-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/shop">Shop</Link>
//         </li>
//         <li className="dropdown">
//           <span>Services</span>
//           <div className="dropdown-content">
//             <Link to="/services/service1">Service 1</Link>
//             <Link to="/services/service2">Service 2</Link>
//             <Link to="/services/service3">Service 3</Link>
//           </div>
//         </li>
//         <li className="dropdown">
//           <span>About Us</span>
//           <div className="dropdown-content">
//             <Link to="/about/team">Our Team</Link>
//             <Link to="/about/careers">Careers</Link>
//             <Link to="/about/contact">Contact Us</Link>
//           </div>
//         </li>
//         <li>
//           <Link to="/blog">Blog</Link>
//         </li>
//       </ul>
//       <Outlet />
//     </div>
//   );
// };

// export default Navigation;