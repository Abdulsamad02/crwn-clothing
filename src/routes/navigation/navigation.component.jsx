import { Link, Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context/cart-context.component';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.util'; // Import your sign-out utility function

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

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
          <CartIcon/>
        </div>
        { isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
