import React, {useState} from "react";
import "./quantityPicker.css"

function QuantityPicker (props) {
    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () => {
        // console.log("Increase button clicked");
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    const handleDecrease = () => {
        // console.log("Decrease button clicked");
        let val = quantity - 1;
        if(quantity > 1){
            setQuantity(val);
            props.onChange(val);
        }
    }
    return (
        <div className="quantity-picker">
            <button className="btn btn-sm btn-dark" onClick={handleIncrease}>+</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-dark" disabled={quantity === 1} onClick={handleDecrease}>-</button>
        </div>
    )
}

export default QuantityPicker;