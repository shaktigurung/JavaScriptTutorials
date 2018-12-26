import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./components/App";
import ClassApp from "./components/classApp";

ReactDom.render(
    <div>
     <App />
     <ClassApp />
     </div>
     ,
     document.getElementById("root")
);