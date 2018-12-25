import React from "react";

function ToDoItem({item}){

    return(
        <div>
            <input type="checkbox" />
            <label> {item} </label>
        </div>
    );
}

export default ToDoItem;