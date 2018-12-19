import React from "react";
import {ArticleArray} from "./ArticleArray";
import ArticleList from "./ArticleList";

const About = (props)=>{
    return (
        <div>
            <section id="about-me">
                <div className= "row">
                    <div className = "col-md-6">
                        <h2>{props.title}</h2>
                        <img src={props.imageSource} />
                    </div>
                </div>
                <div className= "row">
                      <ArticleList ArticleArray = {ArticleArray} />
                </div>
            </section>
        </div>
    );
};

export default About;