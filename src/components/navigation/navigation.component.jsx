import {Fragment} from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom/dist";
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
function Navigation() {
  const { isCartOpen } = useContext(CartContext);
  const {currentUser,setCurrentUser} = useContext(UserContext)
  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }
  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation