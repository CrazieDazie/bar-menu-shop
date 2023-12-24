import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (<div>
        
        <img className="cartIcon" src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-shopping-bag-online-shopping-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="external-cart"/>
        <h3>TOTAL: $ {totalPrice}</h3>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
        
    </div>)
}

export default Cart;