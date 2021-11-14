"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickview = void 0;
class quickview{
    constructor(products){
        let pLen = products.length;

        let text = "";
        for (let i = 0; i < pLen; i++) {
            text += i+" "+ products[i].getname() + " ";
        }
        
        this.view= text;
    }
    getview(){
        return this.view;
    }
}
exports.quickview = quickview;

exports.priceview = void 0;
class priceview{
    constructor(quantity,products){
       
        let pLen = products.length;

        let total=0;
        for (let i = 0; i < pLen; i++) {
            total += products[i].getprice()*quantity[i];
        }
        
        this.view= total;
        
    }
    getview(){
        return this.view;
    }

}
exports.priceview= priceview;
exports.fullview= void 0;
class fullview{
    constructor(quantity,products){
        let text= "";
        for (let i = 0; i < products.length; i++){
            text+=""+i;
            text+=" Name: " + products[i].getName();
            text+=" Price: " + products[i].getPrice();
            text+=" Description: " + products[i].getDescription();
            text+=" Quantity: " + quantity[i];
        }
        this.view= text;
    }
    getview(){
        return this.view;
    }
}
exports.fullview = fullview;