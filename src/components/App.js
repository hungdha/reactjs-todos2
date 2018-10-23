import React, { Component } from 'react';
import Menu from './Menu';
import {Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
// import AddTodo from '../containers/AddTodo';
import MatchTodos from '../containers/MatchTodos';
import UsersContainer from '../containers/UsersContainer';
// import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
import SignUp from './SignUp';


class App extends Component {
    
    render() {
        return (
            <div>
                <Menu />
                <main role="main" className="container">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/todos" component={MatchTodos} />
                        <Route path="/users" component={UsersContainer} />
                        <Route path="/login" component={SignIn} />
                        <Route path="/register" component={SignUp} />
                    </Switch>
                </main>
                <Footer />
           </div>
        );
    }
}

export default App;
 
