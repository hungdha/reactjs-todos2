import React, { Component } from 'react';
import Menu from './Menu';
import {Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
// import AddTodo from '../containers/AddTodo';
import MatchTodos from '../containers/MatchTodos';
import UserList from '../containers/UserList';


class App extends Component {
    componentDidMount(){
        console.log('componentDidMountx xxxx')
    }
    render() {
        return (
          
            <div style={{ margin:'0 auto', padding:'0 20px' }}>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/todos" component={MatchTodos} />
                    <Route path="/users" component={UserList} />
                </Switch>
            </div>
           
        );
    }
}

export default App;
 
