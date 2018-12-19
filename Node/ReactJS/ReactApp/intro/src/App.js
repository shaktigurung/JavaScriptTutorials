import React from "react";
import Greeting from "./Greetings";
import Navigation from "./Navigation";
import About from "./About";
import FavouriteFoods from "./FavouriteFoods";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

const App = ()=>{
    return (
    <div className="container">
        <div className= "row">
            <div className = "col-md-8 center">
                <Greeting name = "Shandra"/>
            </div>
        </div>
        <div className="row">
            <div className= "col-md-4">
                <Navigation
                    linkName = "About Me"
                    linkHref = "#about-me"
                />
            </div>
            <div className= "col-md-4">
                <Navigation
                    linkName = "Favourite Foods"
                    linkHref = "#fav-foods"
                />
            </div>
            <div className= "col-md-4">
                <Navigation
                    linkName = "Contact Details"
                    linkHref = "#contact"
                />
            </div>
        </div>
        <div className="row">
            
            <div className= "col-md-12">
                <About 
                    title = "About Me"
                    imageSource = "./images/sandra.jpeg"
                />
            </div>
            
        </div>
        <FavouriteFoods 
            food = "Pizza"
            imageSource ="./images/FavouriteFood/pizza.jpeg"
            timeToEat = "All the time"
            place ="Queen Margharitas"
        />
        <FavouriteFoods 
            food = "Quesadillas"
            imageSource ="./images/FavouriteFood/quesadillas.jpeg"
            timeToEat = "Afternoon Siesta"
            place ="Mejico"
        />
        <FavouriteFoods 
            food = "Icecream Pancakes"
            imageSource ="./images/FavouriteFood/icecream.jpeg"
            timeToEat = "Breaky"
            place ="Pancakes on the Rocks"
        />
        <FavouriteFoods 
            food = "Loaded Fries"
            imageSource ="./images/FavouriteFood/loadedfries.jpeg"
            timeToEat = "During the game"
            place ="My House"
        />
        <Contact 
            phonenumber = "040040404040"
            email = "test@testmail.com"
            twitter = "test@twitter"
        />
        <Footer 
            company = "xyz"
        />
    </div> 
    );
};

export default App;