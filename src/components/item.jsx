import QuantityPicker from './quantityPicker';
import './item.css'
import { useState } from 'react';

const Item = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        console.log("Adding to cart");
    }

    const handleQuantityChange = (val) => {
        console.log("quantity change", val);
        setQuantity(val)
    };

    const getControls = () => {
        return (
            <div className="controls">
                <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
                <button onClick={handleAdd} className="btn btn-sm btn-primary">Add to cart</button>
            </div>
        )
    }

    const getTotal = (price) => {
        let total = price * quantity
        return total.toFixed(2);
    }

    return (
        <div className="item">
            <img src={"images/" + props.data.image} alt="placeholder"></img>

            <h5>{props.data.title}</h5>

            <div className="prices d-flex justify-content-around">
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal(props.data.price.toFixed(2))}</label>
            </div>
            
            {getControls()}
        </div>
    );
};

export default Item;