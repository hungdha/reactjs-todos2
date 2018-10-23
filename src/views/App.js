import React, { Component } from 'react';
import Menu from '../components/Menu';
import {Route, Switch } from 'react-router-dom';
import HomePage from './Home';
// import AddTodo from '../containers/AddTodo';
import TodosPage from '../containers/TodosContainer';
import CreateTodoPage from '../containers/TodoFormContainer';
import UsersContainer from '../containers/UsersContainer';

// import Header from '../components/Header';

import Footer from '../components/Footer';
import LoginPage from './Login';
import ResgiterPage from './Register';

import UsersPage from './Users';
import GameMiniPage from './GameMini';

class App extends Component {
    
    render() {
        return (
            <div>
                <Menu />
                <main role="main" className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/home" component={HomePage}/>
                        <Route path="/todos" component={TodosPage} />
                        <Route path="/todo/create" component={CreateTodoPage} />
                        <Route path="/users" component={UsersPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={ResgiterPage} />
                        <Route path="/gamemini" component={GameMiniPage} />
                    </Switch>
                </main>
                <Footer />
           </div>
        );
    }
}

export default App;
 
