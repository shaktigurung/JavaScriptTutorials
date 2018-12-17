import React from "react";

const Card = (props)=>{
    const {name, email, id} = props;
    return (
        <div className="container">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div className = "overlay">
                <div className ="text">
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>

    );
}

export default Card;