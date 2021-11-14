"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductList = void 0;
class ProductList{

    constructor(){
        this.products = [];
        this.quantitys= [];
    }

    addproduct(p){
        this.products.push(p);        
    }
    addquantity(q){
        this.quantitys.push(q)
    }
    removeproduct(i){
        this.products.splice(i,1);
        this.quantitys.splice(i,1);
    }
    getquantitys(){
        return this.quantitys;
    }
    getproducts(){
        return this.products;
    }

}
exports.ProductList = ProductList;