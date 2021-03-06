import "./itemOnCart.css";
import { useContext } from 'react';
import StoreContext from "../context/storeContext";

const ItemOnCart = (props) => {
    const removeFromCart = useContext(StoreContext).removeProductFromCart;
    
    const getTotal = () => {
        let total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }
    
    const handleRemove = () => {
        removeFromCart(props.data._id);
    };


    return (
        <div className="item-on-cart d-flex">
            <img src={"images/" + props.data.image } alt="" />
            <div className="item-info col-2">
                <h4>{props.data.title}</h4>
                <h5>Category:</h5>
                <h6>{props.data.category}</h6>
            </div>
            <div className="col-2">
                <h5>Price:</h5>
                <label> ${props.data.price}</label>
            </div>
            <div className="col-2">
                <h5>Quantity:</h5>
                <label> {props.data.quantity}</label>
            </div>
            <div className="col-2">
                <h5>Total:</h5>
                <label>${getTotal()}</label>
            </div>
            <div className="col-2">
                <button onClick={handleRemove} className="btn btn-danger">Remove</button>
            </div>
        </div>
    )
}

export default ItemOnCart;