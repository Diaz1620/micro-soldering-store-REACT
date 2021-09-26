import "./admin.css";
import { useState } from 'react';
import ItemService from '../services/itemService';

const Admin = () => {
    const [product, setProduct] = useState({});

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

    return (
        <div className="admin-page">
            <h1>Store Management</h1>

            <div className="item-form d-flex justify-content-center">
                <form action="POST">
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
            </div>
            <button onClick={registerItem} className="btn btn-primary mb-3">Register Item</button>
        </div>
    );
};

export default Admin;
