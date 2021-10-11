import axios from "axios";

var data = [
    {
        _id:"a456w7e8iuj",
        title: "Solder Station",
        price: 469.00,
        category: "stations",
        image: "solder_station.png",
        discount: 3,
        minimum: 1,
    },
    {
        _id:"a456w7e8jhg",
        title: "Hot Air Re-work Station",
        price: 693.50,
        category: "stations",
        image: "hot-air-gun.jpg",
        discount: 3,
        minimum: 1,
    },
    {
        _id:"gafyaert67461",
        title: "Solder Iron",
        price: 279.30,
        category: "station accessories",
        image: "solder-iron.jpeg",
        discount: 10,
        minimum: 1,
    },
    {
        _id:"gafyaert67462",
        title: "Desoldering Tweezers",
        price: 290.70,
        category: "station accessories",
        image: "tweezers.jpeg",
        discount: 10,
        minimum: 1,
    },
    {
        _id:"gafyaert67463",
        title: "Solder Tips",
        price: 32.97,
        category: "station accessories",
        image: "weller-tips.png",
        discount: 0,
        minimum: 1,
    },
    {
        _id:"gafyaert67464",
        title: "Microscope",
        price: 499.00,
        category: "microscopes",
        image: "microscope.png",
        discount: 0,
        minimum: 1,
    },
    {
        _id:"gafyaert67465",
        title: "Multimeter",
        price: 57.90,
        category: "tools",
        image: "multimeter.png",
        discount: 0,
        minimum: 1,
    },
    {
        _id:"gafyaert67466",
        title: "Soldering Mat",
        price: 18.94,
        category: "tools",
        image: "soldering-mat.jpeg",
        discount: 0,
        minimum: 1,
    },
    {
        _id:"gafyaert67467",
        title: "Tool Kit",
        price: 45.80,
        category: "tools",
        image: "tool-kit.jpeg",
        discount: 0,
        minimum: 1,
    },
    {
        _id:"gafyaert67468",
        title: "Solder Wire Lead-alloy 63/37",
        price: 8.97,
        category: "tools",
        image: "solder-wire.png",
        discount: 0,
        minimum: 3,
    },
    {
        _id:"gafyaert67469",
        title: "Desolder Braid",
        price: 5.98,
        category: "tools",
        image: "desolder-braid.png",
        discount: 0,
        minimum: 6,
    },
    {
        _id:"gafyaert67460",
        title: "Rosin Flux Paste",
        price: 13.80,
        category: "tools",
        image: "flux.png",
        discount: 0,
        minimum: 2,
    },
];


class ItemService {
    serverUrl = "http://127.0.0.1:5000"
    
    async getCatalog(){
        let response = await axios.get(this.serverUrl + "/api/catalog");
        return response.data;

        // return mock data
        return data;
    }

    async saveItem(item){
        try{
            let response = await axios.post(this.serverUrl + "/api/catalog", item);
            console.log("result of saving", response.data);
        } catch {
            console.log("Error, product not saved");
        }
    }

    async getCouponCodes(){
        let response = await axios.get(this.serverUrl + "/api/couponCode");
        return response.data;
    }

    async saveCoupon(code){
        try{
            let response = await axios.post(this.serverUrl + "/api/couponCode", code);
            return response.data;
        } catch(error) {
            console.log("Error saving coupon",error);
            return null;
        }
    }

    async validateCoupon(code){
        try{
            let response = await axios.get(this.serverUrl + "/api/couponCode/" + code)
            return response.data;
        }
        catch{
            console.log("Error validating coupon");
            return null;
        }
    }

    async saveOrder(order) {
        try{
            let response = await axios.post(this.serverUrl + "/api/orders", order)
            return response.data;
        }
        catch{
            console.log("Error saving order");
            return null
        }
    }
    
}

export default ItemService;