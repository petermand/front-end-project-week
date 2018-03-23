import React from "react";
import ReactDOM from 'react-dom';

import "./index.css";

//function(gets optional data) {return a peice of UI} << React in a Nutshell, also component

function Root(props) {
    const postBody = 'this would be coming from the DB';
    return (
        <div>
        <h1> HELLO {props.name} and {props.cohort}</h1>
        <p> indent better</p>
        <hr/>
        <ListItem title="post title" body={postBody}> </ListItem>
        <hr/> 
        </div>
    );
}

function ListItem(props) {
    return (
        <div> 
            <h1>{props.title}</h1>
            <div>{props.body}</div>
        </div>

    );
}

ReactDOM.render(<Root name = "BOZO" cohort="cs6" />, document.getElementById('app'))