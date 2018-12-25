import React from "react";

function Product({id,name, price, description}){
   
    return (
        <div>
           <h2> Name: {name} </h2>
           <p> Price: ${price}.00 </p>
           <p> Description: {description} </p>
        </div>
    );
}

export default Product;