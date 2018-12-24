import React from "react";

function NavBar(){
    return(
        <nav className="navbar">
            <ul>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
    );
}

export default NavBar;