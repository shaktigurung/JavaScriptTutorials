import React from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./SearchBox";
import {Robots} from "./Robots";

const App = ()=>{
    return(
        <div>
            <h1> RoboFriends </h1>
            <Searchbox />
            <Cardlist Robots = {Robots}/>
        </div>
    );
}

export default App;