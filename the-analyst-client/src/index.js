import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>)
    </Provider>,
     document.getElementById('root'));
    
serviceWorker.unregister();
