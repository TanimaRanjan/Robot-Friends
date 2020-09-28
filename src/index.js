import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from "react-redux";
import './index.css';
import App from './containers/App';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from 'redux-thunk';
import {searchRobots, requestRobots} from "./reducers";
import { createLogger } from 'redux-logger'


const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={store}>
        <App />
        </Provider>
    , document.getElementById('root'));

