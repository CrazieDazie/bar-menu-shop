import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (<div>
        <img className="imgDish" src={`${dish.img}.jpg`} alt="imgDish"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>
        <div className="qtyAndButton">
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>add to cart</button>
        </div>
    </div>)
}

export default Dish;