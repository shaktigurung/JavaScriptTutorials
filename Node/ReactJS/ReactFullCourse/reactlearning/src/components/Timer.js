import React from "react";

function Timer(){
    let date = new Date();
    let hour = date.getHours();
    let timeOfDay;
    const styles = {
        'fontSize': "50px"
    }

    if (hour< 12){
        timeOfDay = "Morning";
        styles.color = "red";
    }else if ((hour >= 12) && (hour < 17)){
        timeOfDay = "Afternoon";
        styles.color = "blue";
    }else if ((hour >= 17) && (hour <= 22)){
        timeOfDay = "Evening";
        styles.color = "green";
    }else{
        timeOfDay = "Night"
        styles.color = "black";
    }

    return(
            <div>
                <p>It is {`${date.toLocaleTimeString()}`}</p>
                <h2 style = {styles} > Good {`${timeOfDay}`} </h2>
            </div>
    )
}
export default Timer;
