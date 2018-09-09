import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
// import App from './components/App'
import App from './components/App'
require('./assets/css/main.css');
import rootReducer from './reducers'
import {fetchTodos, getAllUsers} from './actions'

import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(...middleware)
    )
)

// store.dispatch(fetchTodos());
// store.dispatch(getAllUsers());
/* store.subscribe(function(){
    console.log('Store has been subscribe !!! ');
}) */
render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
