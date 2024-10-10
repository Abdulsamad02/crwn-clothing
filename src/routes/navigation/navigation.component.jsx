import { Link, Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.util'; // Import your sign-out utility function

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await signOutUser(); // Call the sign-out function
      setCurrentUser(null); // Update context to remove the current user
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'> 
          <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {currentUser ? (
            <Fragment>
              <span className='nav-link'>Welcome, {currentUser.displayName}</span>
              <span className='nav-link' onClick={handleSignOut}>Sign Out</span>
            </Fragment>
          ) : (
            <Link className='nav-link' to='/auth'>SIGN IN</Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;









// import { Link, Outlet } from 'react-router-dom';
// import { Fragment, useContext } from 'react';
// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import { UserContext } from '../../context/user.context';

// const Navigation = () => {
//   const { currentUser } = useContext(UserContext);
//   //console.log(currentUser);

//   return (
//     <Fragment>
//       <div className='navigation'>
//         <Link className='logo-container' to='/'> 
//           <CrwnLogo className='logo'/>
//         </Link>
//         <div className='nav-links-container'>
//           <Link className='nav-link' to='/shop'>SHOP</Link>
//           {currentUser ? (
//             <span className='nav-link'>Welcome, {currentUser.displayName}</span>
//           ) : (
//             <Link className='nav-link' to='/auth'>SIGN IN</Link>
//           )
//           {
//             currentUser ? (
//               <span className='nav-link'>Sign Out</span>

//             )
//           }}
//         </div>
//       </div>
//       <Outlet />
//     </Fragment>
//   );
// }

// export default Navigation;