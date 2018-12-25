import React from "react";
import MyInfo from "./MyInfo";
import ToDoList from "./ToDoList";
import Timer from "./Timer";
import ContactCard from "./ContactCard";
import JokeList from "./JokeList";
import Products from "./products";
import products from "./../database/productsData";


function MainContent(){
    const productList = products.map(function(product, key){
        return <Products key= {product.id} name={product.name} price ={product.price} description={product.description} />
    });

    return(
        <div>
            <h2>I am from Main content</h2>
            <Timer />
            <MyInfo />
            <ToDoList />
            <JokeList />
            <h2> Product list </h2>
            {productList}
            <ContactCard 
                contact = {{ name:"John Doe",imageUrl : "https://source.unsplash.com/featured/water", phone :"000111222333", email :"johndoe@test.com"}}  
            />
        </div>
    );

}

export default MainContent;