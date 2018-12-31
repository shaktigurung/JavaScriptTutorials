import React, {Component} from "react";
import ToDoItem from "./ToDoItem";
import ToDoItemData from "./../database/toDoItemData";

class ToDoList extends Component{

  constructor(){
      super();
      this.state = {
          todos: ToDoItemData 
      }
      this.handleChange = this.handleChange.bind(this)
  } 
  
  handleChange(id){
    //   this.setState(prevState => {
    //       const updatedTodos = prevState.todos.map(todo => {
    //           if(todo.id ===id){
    //               todo.completed = !todo.completed
    //           }
    //           return todo
    //          })
    //       return{
    //           todos: updatedTodos
    //       }
    //   }) 
    console.log("state clicked");
  }
  render(){
    const itemList = this.state.todos.map(item => 
    <ToDoItem key= {item.id} item = {item} handleChange = {this.handleChange}/>
    )
    return(
            <div>
                <h2>To do List </h2>
                {itemList}
            </div>
    );
  }
}

export default ToDoList;