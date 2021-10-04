import "./cart.css"
import { useContext, useState } from 'react';
import storeContext from "../context/storeContext";
import ItemOnCart from "./itemOnCart";



const Cart = ()=>{
    const cart = useContext(storeContext).cart;
    const [couponCode, setCouponCode] = useState("");

    const getTotal = () => {
        let total = 0;
        for(let i = 0; i < cart.length; i++){
            let item = cart[i];
            total += item.price * item.quantity;
        }
        return total.toFixed(2)
    }

    const codeChange = (e) => {
        setCouponCode(e.target.value);
    };

    const handleValidate = () => {
        console.log("Validate",couponCode);
    };

    if(!cart.length){
        return <div className="cart-page">
            <h3>No items in the cart</h3>
            <h6>Check the catalog and pick some</h6>
            {console.log(cart)}
        </div>
    }
    return (
        <div className="cart-page">
            <h1>Ready to order?</h1>
            <h5>You have {cart.length} item(s) in your cart</h5>
            <div className="total-container">
                <h4>Order Total:</h4>
                <h3>${getTotal()}</h3>
                <div>
                    <form>
                        <label className="form-label">Enter Coupon</label>
                    </form>
                </div>
            </div>
            <hr />
            <div className="d-flex">
                <div className="cart-container col">
                    {cart.map((prod, key) => (
                        <ItemOnCart key={prod._id} data={prod}></ItemOnCart>
                    ))}
                </div>
                <div>
                    <h3>${getTotal()}</h3>
                    <form>
                        <label className="form-label">Have a coupon?</label>
                        <input type="text" className="form-control " name="coupon" onChange={codeChange}/>
                    </form>
                    <button className="btn btn-dark my-2" onClick={handleValidate}>Validate</button>
                    <hr />
                    <button className="btn btn-primary mb-3"> Submit Order </button>
                </div>
            </div>
            
        </div>
    )
};




export default Cart