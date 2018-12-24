import React from "react";
import MyInfo from "./MyInfo";
import ToDoList from "./ToDoList";
import Timer from "./Timer";
import ContactCard from "./ContactCard";
import JokeList from "./JokeList";

function MainContent(){
    return(
        <div>
            <h2>I am from Main content</h2>
            <Timer />
            <MyInfo />
            <ToDoList />
            <JokeList />
            <ContactCard 
                contact = {{ name:"John Doe",imageUrl : "https://source.unsplash.com/featured/water", phone :"000111222333", email :"johndoe@test.com"}}  
            />
        </div>
    );

}

export default MainContent;