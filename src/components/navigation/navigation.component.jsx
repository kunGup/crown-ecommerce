import {Fragment,useContext} from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom/dist";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../store/user/user.selector";
import { CartContext } from '../../context/cart.context';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.jsx'
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
function Navigation() {
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser)

  const signOutHandler = async () => {
    await signOutUser()
  }
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation