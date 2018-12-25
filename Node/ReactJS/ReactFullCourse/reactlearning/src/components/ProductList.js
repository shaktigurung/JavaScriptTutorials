import React from "react";
import Product from "./products";
import products from "./../database/productsData";

function ProductList(){
    const productList = products.map(function(product, key){
        return <Product key= {product.id} name={product.name} price ={product.price} description={product.description} />
    });

    return(
        <div>
             <h2> Product list from ProductList</h2>
                {productList}
        </div>
    )
}

export default ProductList;