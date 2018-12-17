import React from "react";
import ReactDom from "react-dom";

const Greeting = ()=>{
    return <p>Bonjour!</p>;
};

const App = ()=>{
    return (
    <div>
        <Greeting />
        <Greeting />
        <Greeting />
    </div> 
    );
};

ReactDom.render(
   <App />,
    document.getElementById("root")
)