import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartItemCount} = useContext(CartContext)
    return (
      <div
        className="cart-icon-container"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemCount}</span>
      </div>
    );
}

export default CartIcon