import {Fragment} from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom/dist";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
function Navigation() {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logo'/>
        </Link>
        <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/signin'>
                SIGN IN
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation