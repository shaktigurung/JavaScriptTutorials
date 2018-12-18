import React from "react";
import Comment from "./Comment";
//import faker from "faker";
//import "./App.css";

// function Greeting(){
//     const message = "It is working";
//     return(
//         <div className = "blueFont">
//             <label htmlFor= "Something"> Welcome </label>
//             <h1> {message} - {getCurrentTime()}</h1>
//         </div>
//     ) ;
// }

// function getCurrentTime(){
//     const current = new Date();
//     return current.toLocaleTimeString();
// }

// const App = ()=> {
    
//     return (
//         <Greeting />
//     );
// }

const App = ()=> {
    
        return (
            <div className="comments">
                <Comment />
            </div>
        );
    }
export default App;