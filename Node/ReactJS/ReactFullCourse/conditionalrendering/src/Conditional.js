import React from "react";

function Conditional(props){
        
        // if(props.isLoading === true){
        //     return(
        //         <div>
        //             <h1> Loading .... </h1>
        //         </div>
        //     );
        // } 
        // return(
        //         <div>
        //             <h1> Conditional Rendering </h1>
        //         </div>
        // );
        
        return(
            <div>
               
                {/* {props.isLoading ? <h1> Loading .... </h1> :  <h1> Conditional Rendering </h1>} */}
                <h1> Conditional Rendering </h1>
            </div>
        )
}

export default Conditional;