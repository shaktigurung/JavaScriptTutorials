import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(){
    return(
            <div>
                <h2>To do List </h2>
                <ToDoItem  />
                <ToDoItem  />
                <ToDoItem  />
                <ToDoItem  />
            </div>
    );
}

export default ToDoList;