import React from "react";

function ToDoItem({item}){

    return(
        <div>
            <input type="checkbox" onChange={()=> console.log("I was changed")} />
            <label> {item} </label>
        </div>
    );
}

export default ToDoItem;