import {Fragment} from 'react'
import { Outlet } from "react-router-dom/dist";
import { useSelector,useDispatch } from 'react-redux';
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.jsx'
import { signOutStart } from "../../store/user/user.action";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
function Navigation() {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const currentUser = useSelector(selectCurrentUser)

  const signOutHandler = () => dispatch(signOutStart());
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