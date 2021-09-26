import React, {useState} from "react";
import StoreContext from "./storeContext";



const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        id: 81237,
        name: "Yadiel Diaz",
        email: "test@mail.com"
    });

    const addToCart= (product) => {
        var copy = [...cart];

        let found = false;
        for(let i = 0; i < copy.length; i++){
            let prod = copy[i];
            if(prod._id === product._id){
                found = true;
                prod.quantity += product.quantity;
                console.log("Quantity", prod.quantity);
            }
        }
        if(!found){
            copy.push(product);
        }

        setCart(copy);
        // TODO: Store cart in LocalStorage
    };

    const removeFromCart = (productId) => {
        let copy = [...cart];
        for(let i = 0; i < copy.length; i++){
            let prod = copy[i];
            if(prod._id === productId){
                console.log("Found it!");
                copy.splice(i,1);
                break;
            }
        }
        setCart(copy);
    };

    return <StoreContext.Provider value={{
        cart: cart,
        user: user,
        addProductToCart: addToCart,
        removeProductFromCart: removeFromCart,
    }}>
        {props.children}
    </StoreContext.Provider>;



};

export default GlobalState;