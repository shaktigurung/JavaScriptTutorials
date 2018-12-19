import React from "react";

const Navigation = (props)=>{
    return (
        <nav>
            <ul>
                <li><a href={props.linkHref}>{props.linkName}</a></li>
            </ul>
        </nav>
        
    );
};

export default Navigation;