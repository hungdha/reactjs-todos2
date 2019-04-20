import React from 'react';// React
import {render} from 'react-dom';// react dom
import {createStore, applyMiddleware, compose } from 'redux'; // redux
import {Provider} from 'react-redux'; // redux
import {createLogger} from 'redux-logger'; // redux logger
import App from './views/App'; // view index
import rootReducer from './reducers' ;// redux

import thunk from 'redux-thunk';// redux
import {BrowserRouter} from 'react-router-dom'; // react router
// import configureStore from './store/configureStore';


const middleware = [thunk];
// env dev, create logger
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
// soan enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(...middleware)
    )
) 

// khoi tao middleware
const initialState = composeEnhancers(
    applyMiddleware(...middleware)
)


// const store = configureStore()

// store.dispatch(fetchTodos());
// store.dispatch(fetchUsers());
/* store.subscribe(function(){
    console.log('Store has been subscribe !!! ');
}) */


import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

require('./assets/css/album.css');
require('./assets/css/main.css');
require('./assets/css/menu.css');

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
