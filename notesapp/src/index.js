import React from "react";
import ReactDOM from 'react-dom';

import "./index.css";

//function(gets optional data) {return a peice of UI} << React in a Nutshell, also component

function Root(props) {
    const posts = [
        {
            id: 1,
            title: 'Post 1',
            body: 'Body of post 1'
        },
        {
            id: 2,
            title: 'Post 2',
            body: 'Body of post 2'
        },
        {
            id: 3,
            title: 'Post 3',
            body: 'Body of post 3'
        },
        {
            id: 4,
            title: 'Post 4',
            body: 'Body of post 4'
        },
    ]
    return (
        <div>
        <h1> 
          HELLO {props.name} and {props.cohort}
        </h1>
        <p>indent better</p>
        {posts.map((post) => {
    return <ListItem key={post.id} title={post.title} body={post.body} />;
        })}
        </div>
    );
}

function ListItem(props) {
    return (
        <div className="list-item"> 
            <h1>{props.title}</h1>
            <div>{props.body}</div>
        </div>

    );
}

ReactDOM.render(<Root name = "BOZO" cohort="cs6" />, document.getElementById('app'))