import React, {Component} from "react";
import ToDoItem from "./ToDoItem";
import ToDoItemData from "./../database/toDoItemData";

class ToDoList extends Component{

  constructor(){
      super();
      this.state = {
          todos: ToDoItemData 
      }
  }  
  render(){
    const itemList = this.state.todos.map(function(item, key){
        return <ToDoItem key= {item.id} item = {item.todo} />
    })
    return(
            <div>
                <h2>To do List </h2>
                {itemList}
            </div>
    );
  }
}

export default ToDoList;