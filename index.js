import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import userReducer from '../src/store/reducer/userReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const rootReducer = combineReducers({
    user: userReducer
});

const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
