import React from "react";

function Joke({joke}){
    return(
        <div>
            <p>Question: {joke.question}</p>
            <p>PunchLine: {joke.punchline}</p>
        </div>
    );
}

export default Joke;