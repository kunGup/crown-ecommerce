import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import {ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon.styles.jsx'

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartItemCount} = useContext(CartContext)
    return (
      <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount className="item-count">{cartItemCount}</ItemCount>
      </CartIconContainer>
    );
}

export default CartIcon