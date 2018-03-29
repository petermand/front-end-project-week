import React from "react";
import ReactDOM from 'react-dom';

import "./index.css";

//function || class(gets optional data) {return a peice of UI} << React in a Nutshell, also component
// steps to mount a component to Virtual DOM < synced > HTML DOM

class Root extends React.Component { 
    state = {
        posts:  [
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
};
    
    render() {   
      return (
        <div>
        <h1> 
          HELLO {this.props.name} and {this.props.cohort}
        </h1>
        <p>indent better</p>

        {this.state.posts.map( post => {
      return (
        <Post 
            key={post.id} 
            post={post}
            onDelete={this.removePost}
            />
         );
     })}
        </div>
    );
}

 removePost = id => {
    const filteredPosts = this.state.posts.filter((post) => {
        return post.id !==id;
    });
    this.setState({ posts: filteredPosts })
  };

}





/*function ListItem(props) {
    return (
        <div className="list-item"> 
            <h1>{props.title}</h1>
            <div>{props.body}</div>
        </div>

    );
}*/

class Post extends React.Component {
    state = {
        showBody: false
    }
    render() {
        ///runs when componentloads and on state change
        const post = this.props.post;
    
        return (
            <div className="list-item">
            <h1>{post.title} {this.state.status}</h1>
            <button onClick={ () => { this.props.onDelete(post.id) } }>Delete</button>
            <button onClick={this.toggleBody}>Show Body</button>
            { this.state.showBody === true ? (<div>{post.body}</div>) : null }
            </div>

        );
    }

    componentDidMount() {
        ///you do your AJAX calls here
        //console.log('mounted');
        this.setState({ status: 'mounted' });
        window.setTimeout(() => {
            this.setState({ status: 'mounted' });
        }, 2000);

    }
    

    toggleBody = () => {
        this.setState((prevState) => {
            return {showBody: !prevState.showBody}
        });
    };
}

ReactDOM.render(<Root name = "BOZO" cohort="cs6" />, document.getElementById('app'))