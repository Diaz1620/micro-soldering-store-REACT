import "./admin.css";
import { useState, useEffect } from 'react';
import ItemService from '../services/itemService';
import "./admin.css";

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    const couponTextChange = (e) => {
        // console.log(e.target.name, e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        
        let copy = { ...coupon};
        copy[name] = value

        setCoupon(copy);
    }

    const registerCoupon = async () => {
        // console.log(coupon);
        var copy = {...coupon};
        copy.discount = parseFloat(copy.discount)
        console.log(copy);

        let service = new ItemService();
        let res = await service.saveCoupon(copy);
        console.log(res);
    };

    const textChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        // create a copy of the object
        let copy = { ...product }; // create a hard copy of an  object
        // modify the copy
        copy[name] = value
        // set the copy to the state
        setProduct(copy);
    };

    const registerItem = () => {
        // console.log(product);
        var copy = {...product};
        copy.price = parseFloat(copy.price);
        copy.discount = parseFloat(copy.discount)
        // copy.stock = +copy.stock;
        copy.minimum = copy.minimum * 1;
        
        console.log(copy);

        let service = new ItemService();
        service.saveItem(copy);

    }

    const loadCouponCodes = async () => {
        let service = new ItemService();
        let list = await service.getCouponCodes();
        setAllCoupons(list)
    }

    useEffect(() => {
        loadCouponCodes();
    },[])

    return (
        <div className="admin-page">
            <h1>Store Management</h1>
            <div className="d-flex justify-content-around">
                <div className="item-form d-flex justify-content-center flex-column">
                    <form action="POST">
                        <h4>Register New Product</h4>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" name="title" onChange={textChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" name="price" onChange={textChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <input type="text" className="form-control" name="category" onChange={textChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image Name</label>
                            <input type="text" className="form-control" name="image" onChange={textChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Discount</label>
                            <input type="number" className="form-control" name="discount" onChange={textChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Minimum</label>
                            <input type="number" className="form-control" name="minimum" onChange={textChange} />
                        </div>
                    </form>
                        <button onClick={registerItem} className="btn btn-primary mb-3">Register Item</button>
                </div>

                <div className="">
                    <h4>Register Coupon Codes</h4>

                    <div className="item-form d-flex flex-column justify-content-center">
                        <form className="">
                            <div className="mb-3">
                                <label className="form-label">Code</label>
                                <input type="text" className="form-control" name="code" onChange={couponTextChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Discount </label>
                                <input type="text" className="form-control" name="discount" onChange={couponTextChange} />
                            </div>
                        </form>
                            <button onClick={registerCoupon} className="btn btn-primary">Register Coupon</button>
                            <div className="couponList m-5">
                                <h5>Current Coupons</h5>
                                <ul>
                                    { allCoupons.map(c => (
                                        <li key={c.code}>{c.code} - {c.discount}</li>
                                    ))}
                                </ul>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Admin;
