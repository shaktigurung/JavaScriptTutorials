import React from "react";
import Comment from "./Comment";
import faker from "faker";
import Card from "./Card";

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
               
                    <Card title = "One Comment Card">
                        <Comment 
                            name = "Mary Smith" 
                            date = "11/12 6"
                            avatar = {faker.image.avatar()}
                            text = "This is banana"
                        />
                    </Card>
                
                <Card title = "Multiple Comment Card">
                   { false && <Comment 
                        name = "John Doe" 
                        date = "11/12 6"
                        avatar = {faker.image.avatar()}
                        text = "This is good"
                    />}
                    {7>6 ? <Comment 
                        name = "Brock Lesnar"
                        date = "11/12 6"
                        avatar = {faker.image.avatar()}
                        text = "This is nice"
                    /> : <div>Not True</div>}
                </Card>
            </div>
        );
    }
export default App;