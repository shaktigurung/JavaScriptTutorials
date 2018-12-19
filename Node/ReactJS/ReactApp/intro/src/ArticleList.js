import React from "react";
import Article from "./Article";

const ArticleList = ({ArticleArray}) =>{
    const articleArray = ArticleArray.map((user,i)=>{
        return (
            <Article key = {i}
            id = {ArticleArray[i].id}
            title = {ArticleArray[i].title}
            brief = {ArticleArray[i].brief}
            />
        );
    });
    return (
        <div>
            {articleArray}
        </div>
    );
}

export default ArticleList;