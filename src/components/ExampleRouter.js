import React, { Component } from 'react';
import {BrowserRouter as Router,
Link,
Route
} from 'react-router-dom';


const topics = [
    {
      name: 'React Router',
      id: 'react-router',
      description: 'Declarative, component based routing for React',
      resources: [
        {
          name: 'URL Parameters',
          id: 'url-parameters',
          description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
          url: 'https://tylermcginnis.com/react-router-url-parameters'
        },
        {
          name: 'Programatically navigate',
          id: 'programmatically-navigate',
          description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
          url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
        }
      ]
    },
    {
      name: 'React.js',
      id: 'reactjs',
      description: 'A JavaScript library for building user interfaces',
      resources: [
        {
          name: 'React Lifecycle Events',
          id: 'react-lifecycle',
          description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
          url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
        },
        {
          name: 'React AHA Moments',
          id: 'react-aha',
          description: "A collection of 'Aha' moments while learning React.",
          url: 'https://tylermcginnis.com/react-aha-moments/'
        }
      ]
    },
    {
      name: 'Functional Programming',
      id: 'functional-programming',
      description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
      resources: [
        {
          name: 'Imperative vs Declarative programming',
          id: 'imperative-declarative',
          description: 'A guide to understanding the difference between Imperative and Declarative programming.',
          url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
        },
        {
          name: 'Building User Interfaces with Pure Functions and Function Composition',
          id: 'fn-composition',
          description: 'A guide to building UI with pure functions and function composition in React',
          url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
        }
      ]
    }
  ]

// Home
class Home extends Component {

    render() {
        
    return (
            <div>
                Home
            </div>
        );
    }
}

// Topics
class Topics extends Component {

    render() {
        
        return (
            <div>
                <h1>Topics</h1>
                <ul>
                    {
                        topics.map(
                            ({id, name}) => (
                                
                                <li key={id}>
                                    <Link to={`/topics/${id}`}>{name}</Link>
                                </li>
                            )
                        )
                    }
                </ul>
                <hr />
                <Route path={`/topics/:topicId`} component={Topic}/>
            </div>
        );
    }
}

// a topic
class Topic extends Component {
    render() {
        const {match} = this.props;
        const topic = topics.find(({id}) => id == this.props.match.params.topicId );
        return (
            <div>
                <h3>{topic.name}</h3>
                <p>{topic.description}</p>
                <ul>
                    {
                        topic.resources.map(
                            (sub) => (
                                <li key={sub.id}>
                                    <Link to={`/topics/${topic.id}/${sub.id}`} >{sub.name}</Link>
                                </li>
                            )
                        )
                    }
                </ul>
                <hr />
                {/* <Route path={`/topics/${topic.id}/:subId`} component={Resource} /> */}
                <Route path={`${match.path}/:subId`} component={Resource} />
            </div>
        );
    }
}

// Resource

class Resource extends Component {
    render() {
        let {match} = this.props;
        // console.log(match)
        const topic = topics.find(({ id }) => id === match.params.topicId).resources.find(({ id }) => id === match.params.subId)
        // console.log(topic);
        return (
            <div>
                    <h3>{topic.name}</h3>
                    <p>{topic.description}</p>
                    <a href={topic.url}>Read more</a>
            </div>
        );
    }
}

// App
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/topics" >Topics</Link></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        );
    }
}

export default App;