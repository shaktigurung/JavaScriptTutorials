import React from "react";

const Article = (props)=>{
    const {title, brief, id} = props;
    return (
            <article>
                    <ul>
                        <li>
                            <p>
                                <b>{props.title} </b> {props.brief}
                            </p>
                        </li>
                    </ul>
            </article>
    );

}

export default Article;