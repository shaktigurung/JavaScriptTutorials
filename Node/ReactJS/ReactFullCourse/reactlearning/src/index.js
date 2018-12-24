import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function MyInfo(){
    return(
        <div className="myinfo">
            <h1>Shakti Gurung </h1>
            <p>I am an aspiring Full Stack Web Developer </p>
            <h2> My Top Vacation Spot </h2>
            <div>
                <ul>
                    <li>Japan</li>
                    <li>Korea</li>
                    <li>NewZealand</li>
                </ul>
            </div>

        </div>
    );
}

ReactDom.render( <MyInfo />,document.getElementById("root"));