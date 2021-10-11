import "./cart.css"
import { useContext, useState } from 'react';
import storeContext from "../context/storeContext";
import ItemOnCart from "./itemOnCart";
import ItemService from '../services/itemService';



const Cart = ()=>{
    const cart = useContext(storeContext).cart;
    const [couponCode, setCouponCode] = useState("");
    const [couponError, setCouponError] = useState(false);
    const [couponObj, setCouponObj] = useState(null);

    const getTotal = () => {
        let total = 0;
        for(let i = 0; i < cart.length; i++){
            let item = cart[i];
            total += item.price * item.quantity;
        }
        if(couponObj){
            let discount = couponObj.discount;
            total = total - (total * discount) / 100
        }
        return total.toFixed(2)
    }

    const codeChange = (e) => {
        setCouponCode(e.target.value);
    };

    const handleValidate = async () => {
        console.log("Validate",couponCode);

        let service = new ItemService();
        let res = await service.validateCoupon(couponCode);
        console.log(res);
        if(!res) {
            setCouponError(true);
            return;
        }

        setCouponError(false);

        setCouponObj(res);
    };

    const handleSave = async () => {
        let service = new ItemService();

        let order = {
            userId: 42,
            coupon: couponObj,
            products: cart,
        };

        let res = await service.saveOrder(order);
        console.log(res);
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
                        
                        { couponError ? (<div className="alert alert-danger">Invalid Code</div>) : null }
                        
                        <input type="text" className="form-control " name="coupon" onChange={codeChange}/>
                    </form>
                    <button className="btn btn-dark my-2" onClick={handleValidate}>Validate</button>
                    <hr />
                    <button className="btn btn-primary mb-3" onClick={handleSave} > Submit Order </button>
                </div>
            </div>
            
        </div>
    )
};




export default Cart