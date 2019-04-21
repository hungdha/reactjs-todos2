import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import App from './views/App'
import rootReducer from './reducers'

import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom';
// import configureStore from './store/configureStore';


const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(...middleware)
    )
) 

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
