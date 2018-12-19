import React from "react";

const Footer = (props)=>{
    return (
        <div>
              <h5>Thanks for visiting my profile. Hope to here from you soon!</h5>
              <p>{props.company}copyright@2018</p>
        </div>
    );
};

export default Footer;