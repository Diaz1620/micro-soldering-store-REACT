import React, { useEffect, useState } from 'react';
import Item from './item';
import './catalog.css'
import ItemService from '../services/itemService';



const Catalog = () => {
    //state variables
    let [products, setProducts] = useState([]);
    let [itemsOnDisplay, setItemsOnDisplay] = useState([]);
    let [categories, setCategories] = useState([]);

    // logic (fns)
    const retrieveCatalog = () => {
        let service = new ItemService();
        let cat = service.getCatalog();
        setProducts(cat);
        setItemsOnDisplay(cat);
        console.log(cat);

        // for loop console log each product category
        let categories = [];
        for(let i = 0; i < cat.length; i++){
            let prod = cat[i]
            console.log(prod.category);

            if(!categories.includes(prod.category)){
                categories.push(prod.category)
            }
        }
        console.log(categories);
        setCategories(categories);
    };

    const handleFilter =(category) => {
        console.log("Filter", category);
        // let filtered = [];
        // for(let i = 0; i<products.length; i++){
        //     let prod = products[i];
        //     if(prod.category === category){
        //         filtered.push(prod);
        //     }
        // }
        // setItemsOnDisplay(filtered);

        setItemsOnDisplay(products.filter((prod) => prod.category === category));
    };

    const handleFilterReset = () => {
        setItemsOnDisplay(products);
    };

    // effets
    useEffect(() => {
        retrieveCatalog();
    }, []); // [] added to ensure logic will be called only ONE TIME

    //return
    return(
        <div className="catalog-page">
            <h3>Check our amazing products</h3>
            <h6>Currently we have {products.length} items for you</h6>
            <div className="filters">

                <button onClick={handleFilterReset} className="btn btn-sm btn-dark mx-1">All</button>

                {categories.map((cat) => (
                    <button onClick={() => {handleFilter(cat) }} key={cat} className="btn btn-sm btn-info mx-1">{cat}</button>
                ))}
            </div>
            <div className="d-flex flex-wrap item-container">
            { itemsOnDisplay.map((prod) => (
            <Item key={prod._id} data={prod}></Item>
            ))}
            </div>
        </div>
    ); 
};

export default Catalog;