import React from "react";
import Joke from "./Joke";

function JokeList(){
    return(
        <div>
            <Joke 
                joke = {{ question:"Why is it always hot in the corner of a room? ", punchline:"Because a corner is 90 degrees."}}
            />
            <Joke 
                joke = {{ question:"What's brown and sticky? ", punchline:"A stick."}}
            />
            <Joke 
                joke = {{ question:"What did the grape say when it was stepped on? ", punchline:"Nothing, it just let out a little wine."}}
            />
        </div>

    );
}

export default JokeList;