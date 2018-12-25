import React from "react";

function Joke({joke}){
    return(
        <div>
            <p style={{display: joke.question ? "block" : "none"}}>Question: {joke.question}</p>
            <p style= {{color:!joke.question && "blue"}}>PunchLine: {joke.punchline}</p>
            <hr/>
        </div>
    );
}

export default Joke;