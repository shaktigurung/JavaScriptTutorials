import React from "react";
import ReactDom from "react-dom";
import MyInfo from "./MyInfo";
import ToDoList from "./ToDoList";

function MainContent(){
    return(
        <div>
            <h2>I am from Main content</h2>
            <MyInfo />
            <ToDoList />
        </div>
    );

}

export default MainContent;