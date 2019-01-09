import React from "react";

//Custom component for Field component
const Input = ({input, meta, type}) =>{
    return (
        <span>
             <input {...input} type={type}   autoComplete ="off"/>
             <span>{meta.touched && meta.error} </span>
        </span>
    );
}

export default Input;