import React from "react";
import ReactDom from "react-dom";

function ToDoList(){
    return(
            <div>
                <h2>To do List </h2>
                <div>
                    <input type="checkbox" value="1" />
                    <label> Study </label>
                </div>
                <div>
                    <input type="checkbox" value="2" />
                    <label> Work </label>
                </div>
                <div>
                    <input type="checkbox" value="3" />
                    <label> Travel </label>
                </div>
                <div>
                    <input type="checkbox" value="4" />
                    <label> Repeat </label>
                </div>

            </div>
    );
}

export default ToDoList;