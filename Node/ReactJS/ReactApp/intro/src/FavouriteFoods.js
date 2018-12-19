import React from "react";

const FavouriteFoods = (props)=>{
    return (
        <div>
            <section id="fav-foods">
                <h2>Favourite Foods</h2>
                <div>
                    <h4>{props.food}</h4>
                    <img src= {props.imageSource} />
                    <p>Best time to eat: <span>{props.timeToEat}</span></p>
                    <p>Best place: <span>{props.place}</span></p>
                </div> 
            </section>
        </div>
    );
};

export default FavouriteFoods;