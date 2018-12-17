import React from "react";
import Card from "./Card";
//import {Robots} from "./Robots";

const Cardlist = ({Robots}) =>{
    const cardArray = Robots.map((user, i) =>{
        return  <Card id = {Robots[i].id} name ={Robots[i].name} email ={Robots[i].email} /> 
    });
    return(
        <div>
            {cardArray}
        </div>
    );
}

export default Cardlist;