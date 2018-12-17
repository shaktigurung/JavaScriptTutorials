import React from "react";

const FavouriteFoods = ()=>{
    return (
        <div>
            <section id="fav-foods">
        <h2>Favourite Foods</h2>
        <div>
            <h4>Pizza</h4>
            <img src="./images/FavouriteFood/pizza.jpeg" />
            <p>Best time to eat: <span>All the time</span></p>
            <p>Best place: <span>Queen Margharitas</span></p>
        </div>
        <div>
            <h4>Quesadillas</h4>
            <img src="./images/FavouriteFood/quesadillas.jpeg" />
            <p>Best time to eat: <span>Afternoon Siesta</span></p>
            <p>Best place: <span>Mejico</span></p>
        </div>
        <div>
            <h4>Icecream Pancakes</h4>
            <img src="./images/FavouriteFood/icecream.jpeg" />
            <p>Best time to eat: <span>Breaky</span></p>
            <p>Best place: <span>Pancakes on the Rocks</span></p>
        </div>
        <div>
            <h4>Loaded Fries</h4>
            <img src="./images/FavouriteFood/loadedfries.jpeg" />
            <p>Best time to eat: <span>During the game</span></p>
            <p>Best place: <span>My House</span></p>
        </div>
    </section>
        </div>
    );
};

export default FavouriteFoods;