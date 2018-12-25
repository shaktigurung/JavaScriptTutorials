import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoItemData from "./../database/toDoItemData";

function ToDoList(){
    const itemList = ToDoItemData.map(function(item, key){
        return <ToDoItem key= {item.id} item = {item.todo} />
    })
    return(
            <div>
                <h2>To do List </h2>
                {itemList}
            </div>
    );
}

export default ToDoList;