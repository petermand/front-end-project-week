import React from "react";
import ReactDOM from 'react-dom';

import "./index.css";

//function || class(gets optional data) {return a peice of UI} << React in a Nutshell, also component

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
    return <Post key={post.id} title={post.title} body={post.body} />;
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

class Post extends React.Component {
    state = {
        showBody: false
    }
    render() {
        ///runs when componentloads and on state change
        return (
            <div className="list-item">
            <h1>{this.props.title}</h1>
            <button onClick={this.toggleBody}>Show Body</button>
            { this.state.showBody === true ? (<div>{this.props.body}</div>) : null }
            </div>

        );
    }

    toggleBody = () => {
        this.setState((prevState) => {
            return {showBody: !prevState.showBody}
        });
    };
}

ReactDOM.render(<Root name = "BOZO" cohort="cs6" />, document.getElementById('app'))