import React from "react";
import ReactDom from "react-dom";

function NavBar(){
    return(
        <nav>
            <ul>
                <a href=""><li>Home</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Contact</li></a>
            </ul>
        </nav>
    );
}

export default NavBar;