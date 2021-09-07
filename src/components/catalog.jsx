import React, { useEffect, useState } from 'react';
import Item from './item';
import './catalog.css'
import ItemService from '../services/itemService';



const Catalog = () => {
    //state variables
    let [products, setProducts] = useState([]);

    // logic (fns)
    const retrieveCatalog = () => {
        let service = new ItemService();
        let cat = service.getCatalog();
        setProducts(cat);
        console.log(cat);
    }

    // effets
    useEffect(() => {
        retrieveCatalog();
    }, []); // [] added to ensure logic will be called only ONE TIME

    //return
    return(
        <div className="catalog-page">
            <h3>Check our amazing products</h3>
            <h6>Currently we have {products.length} fresh items for you</h6>

            <div className="d-flex flex-wrap item-container">
            { products.map((prod) => (
            <Item key={prod._id} data={prod}></Item>
            ))}
            </div>
        </div>
    ); 
};

export default Catalog;