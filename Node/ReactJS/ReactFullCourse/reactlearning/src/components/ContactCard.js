import React from "react";

function ContactCard({contact}){
   
    return(
            <div>
                <img src={contact.imageUrl} alt="xyz" />
                <h3>{contact.name} </h3>
                <p>Phone:{contact.phone} </p>
                <p>Email: {contact.email}</p>
            </div>
    );
}

export default ContactCard;