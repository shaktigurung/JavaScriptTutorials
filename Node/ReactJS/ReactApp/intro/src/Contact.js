import React from "react";

const Contact = (props)=>{
    return (
        <div>
        <section id="contact">
        <h2>Contact Details</h2>
        <p>
            <b>Phone:</b> <i>{props.phonenumber}</i>
        </p>
         <p>
            <b>Email:</b> <i>{props.email}</i>
        </p>
        <p>
            <b>Twitter:</b> <i>{props.twitter}</i>
        </p>
        </section>
        </div>
    );
};

export default Contact;