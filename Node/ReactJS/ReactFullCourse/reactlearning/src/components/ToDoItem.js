import React from "react";

function ToDoItem(props){

    return(
        <div>
            <input 
            type="checkbox" 
            onChange={props.handleChange(props.item.id)} />
            <label> {props.item.todo} </label>
        </div>
    );
}

export default ToDoItem;