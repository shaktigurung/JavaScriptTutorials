import React from "react";

const Card = (props)=>{
    const {name, email, id} = props;
    return (
        
        <div className= "robots">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;